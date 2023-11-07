import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import GUI from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Sky } from 'three/addons/objects/Sky.js'
import gsap from 'gsap'

/**
 * Declarations
 */
let sky, renderer, tank, camera

/**
 * Base
 */
// Debug
const gui = new GUI()
gui.hide()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axes Helper
const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture1 = textureLoader.load('/textures/matcaps/1.png')
matcapTexture1.colorSpace = THREE.SRGBColorSpace
matcapTexture1.generateMipmaps = false
matcapTexture1.minFilter = THREE.NearestFilter
matcapTexture1.magFilter = THREE.NearestFilter

const matcapTexture2 = textureLoader.load('/textures/matcaps/2.png')
const matcapTexture3 = textureLoader.load('/textures/matcaps/3.png')
const matcapTexture4 = textureLoader.load('/textures/matcaps/4.png')
const matcapTexture5 = textureLoader.load('/textures/matcaps/5.png')
const matcapTexture6 = textureLoader.load('/textures/matcaps/6.png')
const matcapTexture7 = textureLoader.load('/textures/matcaps/7.png')
const matcapTexture8 = textureLoader.load('/textures/matcaps/8.png')

const EpicClanTexture = textureLoader.load('/ecLogo/textures/ec.jpg')
EpicClanTexture.minFilter = THREE.NearestFilter
EpicClanTexture.magFilter = THREE.NearestFilter
EpicClanTexture.generateMipmaps = false

var gltfLoader = new GLTFLoader()
gltfLoader.load(
	'/gltf/car.glb',
	async function (gltf) {
		tank = gltf.scene
		tank.scale.set(0.5, 0.5, 0.5)
		tank.position.z = -5
		tank.position.y = -10
		tank.rotateY( - Math.PI * 0.5)
		tank.axisHelper
		// tank.rotation.set(0, - Math.PI * 0.25, 0)

		scene.add(tank)
	},
	function (xhr) {
		console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
	},
	// called when loading has errors
	function (error) {
		console.log('An error happened')
	}
)



/**
 * Object
*/

// ground
const groundGeometry = new THREE.PlaneGeometry(400, 400, 512, 512)
const groundMaterial = new THREE.MeshBasicMaterial({
	color: '#ddd8eb',
	side: THREE.DoubleSide,
	wireframe: true
})
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
groundMesh.position.set(0, -10, 0)
groundMesh.rotateX(Math.PI * 0.5)
scene.add(groundMesh)


const EpicClanLogoGeometry = new THREE.PlaneGeometry(20, 20)
const EpicClanLogoMaterial = new THREE.MeshBasicMaterial({
	side: THREE.TwoPassDoubleSide,
})
EpicClanLogoMaterial.colorSpace = THREE.SRGBColorSpace
EpicClanLogoMaterial.map = EpicClanTexture

const EpicClanLogoMesh = new THREE.Mesh(
	EpicClanLogoGeometry,
	EpicClanLogoMaterial
)
EpicClanLogoMesh.position.z = -7
scene.add(EpicClanLogoMesh)

const videoEl = document.getElementById('video')
// videoEl.play()
let videoTexture = new THREE.VideoTexture(videoEl)
videoTexture.colorSpace = THREE.SRGBColorSpace

const parameters = {
	color: 0xffffff,
	map: videoTexture,
	side: THREE.DoubleSide,
}
const videoMaterial = new THREE.MeshBasicMaterial(parameters)
const videoGeometry = new THREE.BoxGeometry(2, 1, 2)

const videoMesh = new THREE.Mesh(videoGeometry, videoMaterial)
videoMesh.position.y = -1
scene.add(videoMesh)

/**
 * Fonts
 */
const fontLoader = new FontLoader()
fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
	const EpicClanTextGeometry = new TextGeometry('Epic Clan', {
		font: font,
		size: 0.9,
		height: 0.2,
		curvesSegments: 5,
		bevelEnabled: true,
		bevelThickness: 0.03,
		bevelSize: 0.02,
		bevelOffset: 0,
		bevelSegments: 4,
	})
	// Make the box bounding for optimizing rendering
	EpicClanTextGeometry.computeBoundingBox()
	EpicClanTextGeometry.center()
	console.log(EpicClanTextGeometry.boundingBox)
	const EpicClanTextMaterial = new THREE.MeshMatcapMaterial()
	EpicClanTextMaterial.matcap = matcapTexture8
	// EpicClanTextMaterial.wireframe = true
	const EpicClanMesh = new THREE.Mesh(
		EpicClanTextGeometry,
		EpicClanTextMaterial
	)
	EpicClanMesh.position.y = 1
	scene.add(EpicClanMesh)
})

//

const ringGeometry = new THREE.RingGeometry(0.6, 0.8, 16)
const ringMaterial = new THREE.MeshBasicMaterial({ map: matcapTexture4 })
ringMaterial.wireframe = true
for (let i = 0; i < 40; i++) {
	const ring = new THREE.Mesh(ringGeometry, ringMaterial)
	ring.position.x = (Math.random() - 0.5) * 10
	ring.position.y = (Math.random() - 0.5) * 10
	ring.position.z = (Math.random() - 0.5) * 10

	ring.rotation.x = Math.random() * Math.PI
	ring.rotation.z = Math.random() * Math.PI

	const randomScale = Math.random()
	ring.scale.set(randomScale, randomScale, randomScale)
	scene.add(ring)
}

/**
 * lights
 */
const ambientLight = new THREE.AmbientLight(0xff0000, 0.4)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(4, 4, 3)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

window.addEventListener('resize', () => {
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 20
scene.add(camera)

/**
 * Audios
 */

// create an AudioListener and add it to the camera
// const listener = new THREE.AudioListener();
// camera.add( listener );

// const sound1 = new THREE.PositionalAudio(listener)
// const soundEl = document.getElementById('sound')
// sound1.setMediaElementSource(soundEl)
// sound1.setRefDistance(20)

// videoMesh.add(sound1)

function initSky() {
	// Add Sky
	sky = new Sky()
	sky.scale.setScalar(450000)
	scene.add(sky)

	let sun = new THREE.Vector3()

	/// GUI

	const effectController = {
		turbidity: 10,
		rayleigh: 3,
		mieCoefficient: 0.005,
		mieDirectionalG: 0.7,
		elevation: 2,
		azimuth: 180,
		exposure: renderer.toneMappingExposure,
	}

	function guiChanged() {
		const uniforms = sky.material.uniforms
		uniforms['turbidity'].value = effectController.turbidity
		uniforms['rayleigh'].value = effectController.rayleigh
		uniforms['mieCoefficient'].value = effectController.mieCoefficient
		uniforms['mieDirectionalG'].value = effectController.mieDirectionalG

		const phi = THREE.MathUtils.degToRad(90 - effectController.elevation)
		const theta = THREE.MathUtils.degToRad(effectController.azimuth)

		sun.setFromSphericalCoords(1, phi, theta)

		uniforms['sunPosition'].value.copy(sun)

		renderer.toneMappingExposure = effectController.exposure
		renderer.render(scene, camera)
	}

	gui.add(effectController, 'turbidity', 0.0, 20.0, 0.1).onChange(guiChanged)
	gui.add(effectController, 'rayleigh', 0.0, 4, 0.001).onChange(guiChanged)
	gui
		.add(effectController, 'mieCoefficient', 0.0, 0.1, 0.001)
		.onChange(guiChanged)
	gui
		.add(effectController, 'mieDirectionalG', 0.0, 1, 0.001)
		.onChange(guiChanged)
	gui.add(effectController, 'elevation', 0, 90, 0.1).onChange(guiChanged)
	gui.add(effectController, 'azimuth', -180, 180, 0.1).onChange(guiChanged)
	gui.add(effectController, 'exposure', 0, 1, 0.0001).onChange(guiChanged)

	guiChanged()
}

// Controls
const controls = new OrbitControls(camera, canvas)
controls.maxDistance = 12;
controls.maxPolarAngle = THREE.MathUtils.degToRad(90);
controls.target.set( 0, 0.5, 0 );
controls.enableDamping = true

/**
 * Renderer
 */
renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.85;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// init sky after the rendere is defined
initSky()

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
	const elapsedTime = clock.getElapsedTime()

	videoMesh.rotation.y = elapsedTime * Math.PI * 0.08

	// Update controls
	controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

/**
 * Event listeners
 */
const startButton = document.getElementById('startButton')
const overlay = document.getElementById('overlay')
startButton.addEventListener('click', () => {
	gsap.to(camera.position, { z: 5, x: 3, duration: 6 })
	console.log('play')
	overlay.remove()
	videoEl.play()
})

// toggle controls
document.addEventListener('keypress', (keyEvent) => {
	console.log(keyEvent.key)
	if (keyEvent.key === 'c') {
		gui.show(gui._hidden)
	}
})

// toggle fullscreen
document.addEventListener('keypress', (keyEvent) => {
	function toggleFullScreen() {
		if (
			!document.fullscreenElement && // alternative standard method
			!document.mozFullScreenElement &&
			!document.webkitFullscreenElement
		) {
			// current working methods
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen()
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen()
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(
					Element.ALLOW_KEYBOARD_INPUT
				)
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen()
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen()
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen()
			}
		}
	}
	
	
	if (keyEvent.key === 'f') {
		toggleFullScreen()
		
	}
})


// tank movement



// movement - please calibrate these values
var xSpeed = 0.1;
var ySpeed = 0.1;

var angleX = - Math.PI * 0.5;
const carVector = new THREE.Vector3(10, 0, 0)

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
	console.log(event.which)
    var keyCode = event.which;
    if (keyCode == 87) {
			tank.translateX (xSpeed)
    } else if (keyCode == 83) {
			tank.translateX (-xSpeed)
    } else if (keyCode == 65) {
			tank.rotation.set(0, angleX += 0.1, 0)
    } else if (keyCode == 68) {
			tank.rotation.set(0, angleX -= 0.1 , 0)

			
    } else if (keyCode == 32) {
        tank.position.set(0, 0, 0);
	}
	render()
};


function render() {
	renderer.render(scene, camera);
}

tick()

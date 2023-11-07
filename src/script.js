import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * Declarations
 */

/**
 * Base
 */
// Debug
const gui = new GUI()

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

/* var gltfLoader = new GLTFLoader()
gltfLoader.load('/gltf/car.glb', function (gltf) {
	tank = gltf.scene 
	tank.scale.set(2, 2, 2)
	tank.position.y = -4
	scene.add(tank)
},
function ( xhr ) {

	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
// called when loading has errors
function ( error ) {

	console.log( 'An error happened' );

})
 */

// Environment map
const rbgeLoader = new RGBELoader()
rbgeLoader.load('/textures/environmentMap/2k.hdr', (environmentMap) => {
	environmentMap.mapping = THREE.EquirectangularReflectionMapping

	scene.background = environmentMap
	scene.environment = environmentMap
})

/**
 * Object
 */

const cube = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial()
)
cube.position.y = -1
// scene.add(cube)

const video = document.getElementById('video')
setTimeout(() => video.play(), 1000)
let videoTexture = new THREE.VideoTexture(video)
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
	EpicClanTextMaterial.matcap = matcapTexture7
	// EpicClanTextMaterial.wireframe = true
	const EpicClanMesh = new THREE.Mesh(
		EpicClanTextGeometry,
		EpicClanTextMaterial
	)
	EpicClanMesh.position.y = 1
	scene.add(EpicClanMesh)
})

// Donut

const ringGeometry = new THREE.RingGeometry(0.6, 0.8, 16)
const ringMaterial = new THREE.MeshBasicMaterial({ map: matcapTexture7 })
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
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)

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
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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

tick()

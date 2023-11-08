import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js'
import GUI from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Sky } from 'three/addons/objects/Sky.js'
import gsap from 'gsap'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'

const FUTURE_UPDATES = `
Future updates:
1. multiplayer game at the ground
2. texture for ground
3. change ec and the shapes texture`

/**
 * SECTION - Declarations
 */

let sky, renderer, tank, camera, videoEl, controls, soundEl

// objects
let epicClanPlaneMesh, epicClanTextMesh

/**
 * SECTION - Base
 */

// Debug
const gui = new GUI()
gui.hide()
const helpersFolder = gui.addFolder('helpers')

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axes Helper
const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

/**
 * SECTION - Textures
 */
const textureLoader = new THREE.TextureLoader()
const sphereShadowTexture = textureLoader.load('/textures/shadows/sphereShadow.jpg')
sphereShadowTexture.colorSpace = THREE.SRGBColorSpace
sphereShadowTexture.generateMipmaps = false
sphereShadowTexture.minFilter = THREE.NearestFilter
sphereShadowTexture.magFilter = THREE.NearestFilter

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
	'/gltf/tank.glb',
	async function (gltf) {
		tank = gltf.scene
		tank.scale.set(0.7, 0.7, 0.7)
		tank.position.z = -5
		tank.position.y = -10
		tank.rotateY(-Math.PI * 0.5)
		tank.axisHelper
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
 * SECTION Object
 */

function initSky() {
	// Add Sky
	sky = new Sky()
	sky.scale.setScalar(450000)
	scene.add(sky)

	let sun = new THREE.Vector3()

	/// GUI

	const effectController = {
		turbidity: 10,
		rayleigh: 0.3,
		mieCoefficient: 0.001,
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

	const skyFolderGui = gui.addFolder('SKY')
	skyFolderGui
		.add(effectController, 'turbidity', 0.0, 20.0, 0.1)
		.onChange(guiChanged)
	skyFolderGui
		.add(effectController, 'rayleigh', 0.0, 4, 0.001)
		.onChange(guiChanged)
	skyFolderGui
		.add(effectController, 'mieCoefficient', 0.0, 0.1, 0.001)
		.onChange(guiChanged)
	skyFolderGui
		.add(effectController, 'mieDirectionalG', 0.0, 1, 0.001)
		.onChange(guiChanged)
	skyFolderGui
		.add(effectController, 'elevation', 0, 90, 0.1)
		.onChange(guiChanged)
	skyFolderGui
		.add(effectController, 'azimuth', -180, 180, 0.1)
		.onChange(guiChanged)
	skyFolderGui
		.add(effectController, 'exposure', 0, 1, 0.0001)
		.onChange(guiChanged)

	guiChanged()
}

// ground
const initGround = () => {
	const groundGeometry = new THREE.PlaneGeometry(400, 400, 512, 512)
	const groundMaterial = new THREE.MeshBasicMaterial({
		color: '#aaa8eb',
		side: THREE.DoubleSide,
	})
	const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
	groundMesh.position.set(0, -10, 0)
	groundMesh.rotateX(Math.PI * 0.5)
	scene.add(groundMesh)
}

const initEpicClanLogo = () => {
	const EpicClanLogoGeometry = new THREE.PlaneGeometry(20, 20)
	const EpicClanLogoMaterial = new THREE.MeshPhongMaterial({
		side: THREE.DoubleSide,
	})
	EpicClanLogoMaterial.colorSpace = THREE.SRGBColorSpace
	EpicClanLogoMaterial.map = EpicClanTexture

	const EpicClanLogoMesh = new THREE.Mesh(
		EpicClanLogoGeometry,
		EpicClanLogoMaterial
	)
	EpicClanLogoMesh.castShadow = true
	EpicClanLogoMesh.receiveShadow = true
	EpicClanLogoMesh.position.z = -7
	scene.add(EpicClanLogoMesh)
}

const initRings = () => {
	const ringGeometry = new THREE.RingGeometry(1, 1.2, 16)
	const ringMaterial = new THREE.MeshBasicMaterial({ map: matcapTexture2 })
	ringMaterial.wireframe = true
	for (let i = 0; i < 16 ; i++) {
		const ring = new THREE.Mesh(ringGeometry, ringMaterial)
		ring.position.x = (Math.random() - 0.5) * 10
		ring.position.y = (Math.random() + -0.5) * 10
		ring.position.z = (Math.random() - 0.6) * 10

		ring.rotation.x = Math.random() * Math.PI
		ring.rotation.z = Math.random() * Math.PI

		const randomScale = Math.random()
		ring.scale.set(randomScale, randomScale, randomScale)
		scene.add(ring)
	}
}

// slab
const initEpicClanSurface = () => {
	const format = renderer.capabilities.isWebGL2
		? THREE.RedFormat
		: THREE.LuminanceFormat

	const colors = new Uint8Array(0.3 + 2)

	for (let c = 0; c <= colors.length; c++) {
		colors[c] = (c / colors.length) * 256
	}

	const epicClanSlabGeometry = new THREE.PlaneGeometry(9, 9)
	const diffuseColor = new THREE.Color('#bbbbff')
	const gradientMap = new THREE.DataTexture(colors, colors.length, 1, format)
	gradientMap.needsUpdate = true
	const epicClanPlaneMaterial = new THREE.MeshPhongMaterial({
		color: diffuseColor,
		gradientMap: gradientMap,
	})
	epicClanPlaneMaterial.roughness = 0.9
	epicClanPlaneMaterial.metalness = 0.7
	epicClanPlaneMaterial.side = THREE.DoubleSide
	epicClanPlaneMesh = new THREE.Mesh(
		epicClanSlabGeometry,
		epicClanPlaneMaterial
	)
	epicClanPlaneMesh.receiveShadow = true
	epicClanPlaneMesh.rotation.x = - Math.PI * 0.5
	epicClanPlaneMesh.position.y = -3
	epicClanPlaneMesh.position.z = -4
	scene.add(epicClanPlaneMesh)
}

const initSphere = () => {
	const sphereRight = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshPhongMaterial({ color: 0xbbbbff}),
	)
	sphereRight.position.set(4, -2.5, 0)
	scene.add(sphereRight)

	const sphereLeft = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshPhongMaterial({ color: 0xbbbbff}),
	)
	sphereLeft.position.set(-4, -2.5, 0)
	scene.add(sphereLeft)

	const sphereRightShadow = new THREE.Mesh(
		new THREE.PlaneGeometry(1.5, 1.5),
		new THREE.MeshBasicMaterial({
			color: 0x000000,
			transparent: true,
			alphaMap: sphereShadowTexture
		})
	)
	sphereRightShadow.rotation.x = - Math.PI * 0.5
	sphereRightShadow.position.x = sphereRight.position.x
	sphereRightShadow.position.y = epicClanPlaneMesh.position.y + 0.01
	scene.add(sphereRightShadow)

	const sphereLeftShadow = new THREE.Mesh(
		new THREE.PlaneGeometry(1.5, 1.5),
		new THREE.MeshBasicMaterial({
			color: 0x000000,
			transparent: true,
			alphaMap: sphereShadowTexture
		})
	)
	sphereLeftShadow.rotation.x = - Math.PI * 0.5
	sphereLeftShadow.position.x = sphereLeft.position.x
	sphereLeftShadow.position.y = epicClanPlaneMesh.position.y + 0.01
	scene.add(sphereLeftShadow)
}

const initVideo = () => {
	videoEl = document.getElementById('video')
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
	videoMesh.position.y = 5
	videoMesh.position.z = -4
	scene.add(videoMesh)
}

/**
 * SECTION Fonts
 */
const initTexts = () => {
	const fontLoader = new FontLoader()
	fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
		const epicClanTextGeometry = new TextGeometry('Epic Clan', {
			font: font,
			size: 1,
			height: 0.5,
			curvesSegments: 5,
			bevelEnabled: true,
			bevelThickness: 0.03,
			bevelSize: 0.02,
			bevelOffset: 0,
			bevelSegments: 4,
		})
		// Make the box bounding for optimizing rendering
		epicClanTextGeometry.computeBoundingBox()
		epicClanTextGeometry.center()
		console.log(epicClanTextGeometry.boundingBox)
		const epicClanTextMaterial = new THREE.MeshStandardMaterial()
		epicClanTextMaterial.matcap = matcapTexture3
		// EpicClanTextMaterial.wireframe = true
		epicClanTextMesh = new THREE.Mesh(
			epicClanTextGeometry,
			epicClanTextMaterial
		)
		epicClanTextMesh.castShadow = true
		epicClanTextMesh.receiveShadow = true
		epicClanTextMesh.position.y = 0
		epicClanTextMesh.position.z = -4
		scene.add(epicClanTextMesh)

		const plansGeometry = new TextGeometry(FUTURE_UPDATES, {
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
		const plansMaterial = new THREE.MeshMatcapMaterial()
		plansMaterial.matcap = matcapTexture3
		const plansMesh = new THREE.Mesh(plansGeometry, plansMaterial)
		plansMesh.position.y = 19
		plansMesh.position.z = -10
		scene.add(plansMesh)
	})
}

// rings

/**
 * SECTION - lights
 */
const initLights = () => {
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.45)
	scene.add(ambientLight)

	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
	directionalLight.shadow.mapSize.width = 512
	directionalLight.shadow.mapSize.height = 512
	directionalLight.shadow.camera.top = 2
	directionalLight.shadow.camera.bottom = -2
	directionalLight.shadow.camera.right = 2
	directionalLight.shadow.camera.left = -2
	directionalLight.shadow.camera.near = 3
	directionalLight.shadow.camera.far = 7
	directionalLight.target.position.set(3, 0, 3)
	scene.add(directionalLight.target)
	scene.add(directionalLight)

	// const pointLight = new THREE.PointLight(0xff9000, 1.5)
	// pointLight.shadow.camera.near = 1
	// pointLight.shadow.camera.far = 4
	// pointLight.castShadow = true
	// pointLight.position.set(0, 1, 2)
	// scene.add(pointLight)

	// HemisphereLight
	// const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x0044ff, 0.9)
	// scene.add(hemisphereLight)

	// rect area light
	const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 6, 1, 1)
	rectAreaLight.lookAt(new THREE.Vector3())
	scene.add(rectAreaLight)

	const spotLight = new THREE.SpotLight(
		0xccaa00,
		14,
		10,
		Math.PI * 0.2,
		0.03,
		1
	)
	spotLight.castShadow = true
	spotLight.target.position.z = -2
	spotLight.shadow.mapSize.width = 1024
	spotLight.shadow.mapSize.height = 1024
	spotLight.shadow.camera.near = 2
	spotLight.shadow.camera.far = 3
	spotLight.shadow.radius = 10
	scene.add(spotLight.target)
	scene.add(spotLight)

	// Helpers
	// const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
	// scene.add(hemisphereLightHelper)
	// helpersFolder.add(hemisphereLightHelper, '')

	const directionalLightHelper = new THREE.DirectionalLightHelper(
		directionalLight,
		0.5
	)
	directionalLightHelper.visible = false
	helpersFolder
		.add(directionalLightHelper, 'visible')
		.name('directional light helper ')
	const directionalLightHelperCamera = new THREE.CameraHelper(
		directionalLight.shadow.camera
	)
	directionalLightHelperCamera.visible = false
	helpersFolder
		.add(directionalLightHelperCamera, 'visible')
		.name('directional light helper camera')
	scene.add(directionalLightHelperCamera)
	scene.add(directionalLightHelper)

	// const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.7)
	// pointLightHelper.visible = false
	// helpersFolder.add(pointLightHelper, 'visible').name('point light helper')
	// const pointLightCameraHelper = new THREE.CameraHelper(
	// 	pointLight.shadow.camera
	// )
	// pointLightCameraHelper.visible = false
	// helpersFolder
	// 	.add(pointLightCameraHelper, 'visible')
	// 	.name('point light camera helper')
	// scene.add(pointLightCameraHelper)
	// scene.add(pointLightHelper)

	const spotLightHelper = new THREE.SpotLightHelper(spotLight)
	spotLightHelper.visible = false
	scene.add(spotLightHelper)
	helpersFolder.add(spotLightHelper, 'visible').name('spotlight helper')
	const spotLightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera)
	spotLightCameraHelper.visible = false
	helpersFolder
		.add(spotLightCameraHelper, 'visible')
		.name('spotlight camera helper')
	scene.add(spotLightCameraHelper)

	// const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight, 0xff0000)
	// scene.add(rectAreaLightHelper)
}

/**
 * SECTION - Sizes
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
 * SECTION - Camera
 */
// Base camera
const initCamera = () => {
	camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
	camera.position.x = 1
	camera.position.y = 1
	camera.position.z = 26
	scene.add(camera)
}
initCamera()

/**
 * SECTION - Audios
 */

// create an AudioListener and add it to the camera
const initAudio = () => {
	const listener = new THREE.AudioListener()
	camera.add(listener)

	const sound1 = new THREE.PositionalAudio(listener)
	soundEl = document.getElementById('ecsound')
	sound1.setMediaElementSource(soundEl)
	sound1.setRefDistance(10)
}

// Controls
const initControls = () => {
	controls = new OrbitControls(camera, canvas)
	controls.maxDistance = 20
	controls.maxPolarAngle = THREE.MathUtils.degToRad(90)
	controls.target.set(0, 0.5, 0)
	controls.enableDamping = true
}
initControls()

/**
 * SECTION - Renderer
 */
const initRenderer = () => {
	renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		antialias: true,
	})
	renderer.setSize(sizes.width, sizes.height)
	renderer.toneMapping = THREE.ACESFilmicToneMapping
	renderer.toneMappingExposure = 0.85
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

	// activate shadow
	renderer.shadowMap.enabled = true
	// renderer.shadowMap.type = THREE.PCFSoftShadowMap
}
initRenderer()

/**
 * SECTION Animate
 */
const clock = new THREE.Clock()

const tick = () => {
	const elapsedTime = clock.getElapsedTime()

	// Update controls
	controls.update()

	//ss
	setTimeout(() => epicClanTextMesh.position.y = Math.sin(elapsedTime) * 0.3, 1000)
	

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

/**
 * SECTION - Event listeners
 */
const startButton = document.getElementById('startButton')
const overlay = document.getElementById('overlay')
startButton.addEventListener('click', () => {
	gsap.to(camera.position, { z: 5, x: 3, duration: 12 })
	overlay.remove()
	videoEl.play()
})

// toggle controls
document.addEventListener('keypress', (keyEvent) => {
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
var xSpeed = 0.1
var ySpeed = 0.1

var angleX = -Math.PI * 0.5

document.addEventListener('keydown', onDocumentKeyDown, false)
function onDocumentKeyDown(event) {
	var keyCode = event.which
	if (keyCode == 87) {
		tank.translateX(xSpeed + 0.01)
	} else if (keyCode == 83) {
		tank.translateX(-xSpeed - 0.01)
	} else if (keyCode == 65) {
		tank.rotation.set(0, (angleX += 0.1), 0)
	} else if (keyCode == 68) {
		tank.rotation.set(0, (angleX -= 0.1), 0)
	} else if (keyCode == 32) {
		tank.position.set(0, 0, 0)
	}
	render()
}

function render() {
	renderer.render(scene, camera)
}

/** SECTION - Init */
// object
initEpicClanLogo()
initGround()
initRings()
initEpicClanSurface()
initSky()
initSphere()

// text
initTexts()

// media
initVideo()
// initAudio()
initLights()

//animation
tick()

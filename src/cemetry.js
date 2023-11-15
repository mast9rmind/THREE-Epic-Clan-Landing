import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * SECTION Base
 */
const canvas = document.querySelector('canvas.webgl')
let floor, house, renderer, camera, controls


// Scene
const scene = new THREE.Scene()

/**
 * SECTION Objects
 */
// House
const initHouse = () => {
	house = new THREE.Group()
	scene.add(house)
}

const initFloor = () => {
	floor = new THREE.Mesh(
		new THREE.PlaneGeometry(20, 20),
		new THREE.MeshStandardMaterial({ color: '#a9c388' })
	)
	floor.rotation.x = -Math.PI * 0.5
	floor.position.y = 0
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
 * SECTION CAMERA
 */
const initCamera = () => {
	camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
	camera.position.x = 1
	camera.position.y = 1
	camera.position.z = 26
	scene.add(camera)
}

/**
 * SECTION Animate
 */
const clock = new THREE.Clock()

const tick = () => {
	const elapsedTime = clock.getElapsedTime()

	// Update controls
	controls.update()



	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

// Controls
const initControls = () => {
	controls = new OrbitControls(camera, renderer.domElement)
	controls.maxDistance = 20
	controls.maxPolarAngle = THREE.MathUtils.degToRad(90)
	controls.target.set(0, 0.5, 0)
	controls.enableDamping = true
}

/**
 * SECTION RENDERER
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
function render() {
	renderer = new THREE.WebGLRenderer()
	renderer.render(scene, camera)
}

// Execution

initRenderer()
initCamera()
initControls()
render()
initControls()
tick()
initHouse()
initFloor()

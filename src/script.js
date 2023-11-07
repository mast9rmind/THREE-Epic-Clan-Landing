import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { RGBELoader} from 'three/examples/jsm/loaders/RGBELoader'



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
 * Environment map
 */
const rbgeLoader = new RGBELoader()
rbgeLoader.load('/textures/environmentMap/2k.hdr', (environmentMap) => {
    environmentMap.mapping = THREE.EquirectangularReflectionMapping

    scene.background = environmentMap
    scene.environment = environmentMap
})

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture1 = textureLoader.load('/textures/matcaps/1.png')
const matcapTexture2 = textureLoader.load('/textures/matcaps/2.png')
const matcapTexture3 = textureLoader.load('/textures/matcaps/3.png')
matcapTexture1.colorSpace = THREE.SRGBColorSpace


/**
 * Object
 */


const cube = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial()
)
cube.position.y = -1
// scene.add(cube)


const video = document.getElementById( 'video' );
video.play();
let videoTexture = new THREE.VideoTexture(video)
videoTexture.colorSpace = THREE.SRGBColorSpace;

const parameters = { color: 0xffffff, map: videoTexture, side: THREE.DoubleSide };
const videoMaterial = new THREE.MeshBasicMaterial(parameters);
const videoGeometry = new THREE.BoxGeometry(2, 1, 2)

const videoMesh = new THREE.Mesh(videoGeometry, videoMaterial)
videoMesh.position.y = 1.3
scene.add(videoMesh)


/**
 * Fonts
 */
const fontLoader = new FontLoader()
fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
	const textGeometry = new TextGeometry('Epic Clan', {
		font: font,
		size: 0.5,
		height: 0.2,
		curvesSegments: 5,
		bevelEnabled: true,
		bevelThickness: 0.03,
		bevelSize: 0.02,
		bevelOffset: 0,
		bevelSegments: 4,
	})
	// Make the box bounding for optimizing rendering
	textGeometry.computeBoundingBox()
	textGeometry.center()
	console.log(textGeometry.boundingBox)
    const textMaterial = new THREE.MeshMatcapMaterial()
    textMaterial.matcap = matcapTexture1
	// textMaterial.wireframe = true
	const textMesh = new THREE.Mesh(textGeometry, textMaterial)
	scene.add(textMesh)
})


// Donut

console.time('donuts');

const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture1 })
for (let i = 0; i < 40; i++) {
    const donut = new THREE.Mesh(donutGeometry, donutMaterial)
    donut.position.x = (Math.random() - 0.5) * 10
    donut.position.y = (Math.random() - 0.5) * 10
    donut.position.z = (Math.random() - 0.5) * 10

    donut.rotation.x = Math.random() * Math.PI
    donut.rotation.z = Math.random() * Math.PI

    const randomScale = Math.random()
    donut.scale.set(randomScale, randomScale, randomScale)
    scene.add(donut)

}
console.timeEnd('donuts');



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

	// Update controls
	controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

tick()

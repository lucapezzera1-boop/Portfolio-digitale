import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);
const textureLoader = new THREE.TextureLoader();
textureLoader.load('Assets/3Dbackground.jpg', (texture) => {
    
    texture.mapping = THREE.EquirectangularReflectionMapping;
    
    texture.colorSpace = THREE.SRGBColorSpace;

    scene.background = texture;
    
    scene.environment = texture; 
});

const canvas = document.getElementById('canvas-ariete');
const container = canvas.parentElement;

let width = canvas.clientWidth || container.clientWidth / 2;
let height = canvas.clientHeight || 300;

const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
camera.position.set(0, 5, 10);

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(width, height, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(2, 2, 2);
camera.add(directionalLight);
scene.add(camera);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

let model = null; 

let isHovered = false;
canvas.addEventListener('mouseenter', () => {
    isHovered = true;
});

canvas.addEventListener('mouseleave', () => {
    isHovered = false;
});

loader.load(
    'Assets/c1_ariete_main_battle_tank.glb', 
    function (gltf) {
        model = gltf.scene;
        
        model.traverse(function (child) {
            if (child.isMesh) {
                child.material.metalness = 0.2; 
                child.material.roughness = 0.15;
            }
        });
        
        model.scale.set(0.05, 0.05, 0.05);
        model.position.set(0, 0, 0);
        
        scene.add(model);
        console.log("L'Ariete C1 è pronto in battaglia!");
    },
    function (xhr) {
        if (xhr.total > 0) {
            console.log((xhr.loaded / xhr.total * 100) + '% caricato');
        } else {
            console.log(xhr.loaded + ' bytes caricati');
        }
    },
    function (error) {
        console.error("Errore durante il caricamento del modello:", error);
    }
);

function animate() {
    requestAnimationFrame(animate);
    controls.update(); 
    renderer.render(scene, camera);
    
    if (model && !isHovered) {
        model.rotation.y += 0.0075;
    }
}
animate();

window.addEventListener('resize', () => {
    const newWidth = canvas.clientWidth || container.clientWidth / 2;
    const newHeight = canvas.clientHeight || 300;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight, false);
});
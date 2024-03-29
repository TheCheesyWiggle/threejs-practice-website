import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Sphere } from 'three';

//sets up scene
const scene = new THREE.Scene();

//sets up camera with field of view, aspect ratio, view frustum details
const camera = new THREE.PerspectiveCamera(75, window.innerHeight/window.innerHeight,0.1,1000);

//sets up renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

//sets pixel ratio and size
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
//sets camera posistion (Moves it from the middle of the scene)
camera.position.setZ(30);

renderer.render(scene, camera);

//adding object
const geometry = new THREE.TorusGeometry(10, 3, 16, 100 );
//sets the looks of the object
const material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:true});
//creates object
const torus = new THREE.Mesh(geometry, material);

//adding object
const sphereGeometry = new THREE.SphereGeometry(10, 32, 16, 0 ,6.283185307179586,0,3.141592653589793 );
//sets the looks of the object
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:true});
//creates object
const sphere = new THREE.Mesh(sphereGeometry , sphereMaterial);
//sets sphere posistion
sphere.position.setZ(60);
//adds to the scene
scene.add(torus);
scene.add(sphere);


//adds grid helper
//const GridHelper = new THREE.GridHelper(200,50);
//adds helpers
//scene.add( GridHelper);

function moveCam(){
  const t = document.body.getBoundingClientRect().top;

  camera.rotation.x = t* -0.004;
}

document.body.onscroll = moveCam;

function animate(){
  //recusive loop
  requestAnimationFrame(animate);
  
  //torus rotations
  torus.rotation.x +=0.01;
  torus.rotation.y +=0.01;
  torus.rotation.z +=0.01;
  //sphere rotations
  sphere.rotation.x +=0.01;
  sphere.rotation.y +=0.01;
  sphere.rotation.z +=0.01;
  //creates paralax scroll
  document.body.onscroll = moveCam;

  //renders everything
  renderer.render(scene, camera);
}

animate();


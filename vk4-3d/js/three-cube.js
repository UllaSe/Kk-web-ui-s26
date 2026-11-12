import * as THREE from "three";

const div = document.querySelector(".webgl");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  div.offsetWidth / div.offsetHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});
renderer.setSize(div.offsetWidth, div.offsetHeight);
renderer.setAnimationLoop(animate);
div.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 3);
scene.add(light);

camera.position.z = 2;

function animate(time) {
  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;

  renderer.render(scene, camera);
}

window.addEventListener("resize", resize, false);

function resize() {
  camera.aspect = div.offsetWidth / div.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(div.offsetWidth, div.offsetHeight);
}

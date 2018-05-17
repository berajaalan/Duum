/* global THREE */

var p1 = new Player();

var scene = new THREE.Scene();

var object_list = [];

var render = new THREE.WebGLRenderer
        ({canvas: document.getElementById('canvas'), antialias: true});
render.setSize(window.innerWidth, window.innerHeight);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pointLight);

var geo = new THREE.BoxGeometry(10, 10, 10);
var mat = new THREE.MeshLambertMaterial({color: 0x123456});
var mesh = new THREE.Mesh(geo, mat);
mesh.position.set(0, 0, -50);

scene.add(mesh);
object_list.push(mesh);

function animate() {
    p1.update();
    render.render(scene, p1.cam);
    requestAnimationFrame(animate);
}
animate();

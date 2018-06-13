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

var geo = new THREE.PlaneGeometry(500, 50);
var mat = new THREE.MeshLambertMaterial({color: 0x123456});
var mesh = new THREE.Mesh(geo, mat);
mesh.position.set(-250, 0, 0);
mesh.rotation.set(0, 1.5708, 0);
scene.add(mesh);
object_list.push(mesh);

geo = new THREE.PlaneGeometry(500, 50);
mat = new THREE.MeshLambertMaterial({color: 0x654321});
mesh = new THREE.Mesh(geo, mat);
mesh.position.set(0, 0, -250);
scene.add(mesh);
object_list.push(mesh);

geo = new THREE.PlaneGeometry(500, 50);
mat = new THREE.MeshLambertMaterial({color: 0x569721});
mesh = new THREE.Mesh(geo, mat);
mesh.position.set(0, 0, 250);
mesh.rotation.set(0, 3.14159, 0);
scene.add(mesh);
object_list.push(mesh);

geo = new THREE.PlaneGeometry(500, 50);
mat = new THREE.MeshLambertMaterial({color: 0x495763});
mesh = new THREE.Mesh(geo, mat);
mesh.position.set(250, 0, 0);
mesh.rotation.set(0, -1.5708, 0);
scene.add(mesh);
object_list.push(mesh);

geo = new THREE.PlaneGeometry(500, 500);
mat = new THREE.MeshLambertMaterial({color: 0x159753});
mesh = new THREE.Mesh(geo, mat);
mesh.position.set(0, -25, 0);
mesh.rotation.set(-1.5708, 0, 0);
scene.add(mesh);
object_list.push(mesh);

geo = new THREE.SphereGeometry(10, 50, 50);
mat = new THREE.MeshLambertMaterial({color: 0x159753});
mesh = new THREE.Mesh(geo, mat);
mesh.position.set(0, 0, -50);
scene.add(mesh);
object_list.push(mesh);
function animate() {
    p1.update();
    render.render(scene, p1.cam);
    requestAnimationFrame(animate);
}
animate();

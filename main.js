/* global THREE */

var p1 = new Player();

var enemy_list = [];

var scene = new THREE.Scene();

var object_list = [];

var tick = 0;

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

var n = new Enemy();
n.mesh.position.set(200, 0, 200);
enemy_list.push(n);
object_list.push(n.mesh);
scene.add(n.mesh);

n = new Enemy();
n.mesh.position.set(-200, 0, 200);
enemy_list.push(n);
object_list.push(n.mesh);
scene.add(n.mesh);

n = new Enemy();
n.mesh.position.set(-200, 0, -200);
enemy_list.push(n);
object_list.push(n.mesh);
scene.add(n.mesh);

n = new Enemy();
n.mesh.position.set(200, 0, -200);
enemy_list.push(n);
object_list.push(n.mesh);
scene.add(n.mesh);

function animate() {
    tick++;
    p1.update();
    if (tick >= 100) {
        var novo = new Enemy();
        var a = Math.floor(Math.random() * 100);
        if (a <= 25) {
            novo.mesh.position.set(200, 0, 200);
            enemy_list.push(novo);
            object_list.push(n.mesh);
            scene.add(n.mesh);
        } else if (a <= 50) {
            novo.mesh.position.set(200, -200);
            enemy_list.push(novo);
            object_list.push(n.mesh);
            scene.add(n.mesh);
        } else if (a <= 75) {
            novo.mesh.position.set(-200, 200);
            enemy_list.push(novo);
            object_list.push(n.mesh);
            scene.add(n.mesh);
        } else {
            novo.mesh.position.set(-200, -200);
            enemy_list.push(novo);
            object_list.push(n.mesh);
            scene.add(n.mesh);
        }

        tick = 0;
    }
    for (var i = 0; i < enemy_list.length; i++) {
        enemy_list[i].update();
    }
    render.render(scene, p1.cam);
    requestAnimationFrame(animate);
}
animate();

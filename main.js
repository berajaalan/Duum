var render = new THREE.WebGLRenderer({canvas: document.getElementById('canvas'),
                                    antialias: true});

var camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,
    	                                  0.1,3000);

render.setSize(window.innerWidth, window.innerHeight)

var scene = new THREE.Scene();

var light = new THREE.AmbientLight(0xffffff,0.5);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff,0.5);
scene.add(light2);

var geo = new THREE.BoxGeometry(10,10,10);
var mat = new THREE.MeshLambertMaterial({color: 0x0123456});
var mesh = new THREE.Mesh(geo, mat)
mesh.position.set(0,0,-50);

scene.add(mesh);

requestAnimationFrame(animate);

function animate(){
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  render.render(scene, camera);
  requestAnimationFrame(animate);
}

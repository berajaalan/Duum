/* global THREE */

class Enemy {

    constructor() {
        this.vel = new THREE.Vector3();
        geo = new THREE.SphereGeometry(10, 50, 20);
        mat = new THREE.MeshLambertMaterial({color: 0x159753});
        this.mesh = new THREE.Mesh(geo, mat);
    }
    
    update(){
        if (p1.cam.position.x > this.mesh.position.x) {
            this.vel.x = 0.5;
        }else if (p1.cam.position.x < this.mesh.position.x) {
            this.vel.x = -0.5;
        }else{
            this.vel.x = 0;
        }
        
        if (p1.cam.position.z > this.mesh.position.z) {
            this.vel.z = 0.5;
        }else if (p1.cam.position.z < this.mesh.position.z) {
            this.vel.z = -0.5;
        }else{
            this.vel.z = 0;
        }
        
        this.mesh.position.x += this.vel.x;
        this.mesh.position.y += this.vel.y;
        this.mesh.position.z += this.vel.z;
        
        if (this.mesh.position.x + 10 >= 250 || this.mesh.position.x - 10 <= -250) {
            this.mesh.position.x -= this.vel.x;
        }
        
        if (this.mesh.position.z + 10 >= 250 || this.mesh.position.z - 10 <= -250) {
            this.mesh.position.z -= this.vel.z;
        }
        
        var d = Math.sqrt(Math.pow(p1.cam.position.x-this.mesh.x,2)+Math.pow(p1.cam.position.z-this.mesh.z,2));
        
        if (d < 15) {
            p1.hp -= 10;
        }
    }

}



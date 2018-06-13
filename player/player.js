/* global THREE */

class Player {

    constructor() {
        this.vel = new THREE.Vector3();
        this.camVel = 0;
        this.camF = new THREE.Vector3();
        this.cam = new THREE.PerspectiveCamera
                (65, window.innerWidth / window.innerHeight, 0.1, 800);
        this.forward = false;
        this.back = false;
        this.lookLeft = false;
        this.lookRight = false;
        this.hp = 1000;
        this.tick = 0;
    }

    move() {
        this.cam.getWorldDirection( this.camF );
        
        if (this.forward)
            this.vel = this.camF;

        if (this.back){
            this.vel.x = -this.camF.x;
            this.vel.z = -this.camF.z;
        }

        if (!this.forward && !this.back)
            this.vel.set(0,0,0);
        
        if (this.lookLeft) {
            this.camVel = 0.025;
        }
        
        if (this.lookRight) {
            this.camVel = -0.025;
        }
        
        if (!this.lookLeft && !this.lookRight) {
            this.camVel = 0;
        }

    }
    
    collision(){
        if (this.cam.position.x + 10 >= 250 || this.cam.position.x - 10 <= -250) {
            this.cam.position.x -= this.vel.x;
        }
        
        if (this.cam.position.z + 10 >= 250 || this.cam.position.z - 10 <= -250) {
            this.cam.position.z -= this.vel.z;
        }
    }
    
    enemyCollision(e){
        var dx = Math.pow(this.cam.position.x - e.mesh.position.x,2);
        var dz = Math.pow(this.cam.position.z - e.mesh.position.z,2);
        var d = Math.sqrt(dx+dz);
        
        if (d < 10) {
            if (this.tick === 0) {
                this.hp -= 1;
                this.tick++;
            }
            //console.log(this.tick);
            if (this.tick >= 100000000000) {
                this.tick = 0;
            }
        }else{
            this.tick = 0;
        }
    }

    update() {
        
        this.move();

        this.cam.position.x += this.vel.x;
        this.cam.position.y += this.vel.y;
        this.cam.position.z += this.vel.z;
        this.cam.rotation.y += this.camVel;
        
        this.collision();
        
        var hud = document.getElementById('vida');
        hud.style.color = "white";
        hud.innerHTML = "<p>Vida: " + this.hp + "<p>";
    }

}
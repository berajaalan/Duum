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
        document.addEventListener("keydown", this.keyPress);
        document.addEventListener("keyup", this.keyRelease);
    }

    keyPress(e) {
        switch (e.keyCode) {
            // W (Forward)
            case 87:
                p1.forward = true;
                break;

                // S (Back)
            case 83:
                p1.back = true;
                break;

                // D (Right)
            case 68:
                p1.lookRight = true;
                break;
            
            // A (Left)
            case 65:
                p1.lookLeft = true;
                break;
            
        }
    }

    keyRelease(e) {
        switch (e.keyCode) {
            // W (Forward)
            case 87:
                p1.forward = false;
                break;

                // S (Back)
            case 83:
                p1.back = false;
                break;

                // D (Right)
            case 68:
                p1.lookRight = false;
                break;
            
            // A (Left)
            case 65:
                p1.lookLeft = false;
                break;
            
        }
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

    update() {
        
        this.move();

        this.cam.position.x += this.vel.x;
        this.cam.position.y += this.vel.y;
        this.cam.position.z += this.vel.z;
        this.cam.rotation.y += this.camVel;
        
        this.collision();
    }

}
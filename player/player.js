/* global THREE */

class Player {

    constructor() {
        this.vel = new THREE.Vector3();
        this.cam = new THREE.PerspectiveCamera
                (90, window.innerWidth / window.innerHeight, 0.1, 3000);
        this.forward = false;
        this.back = false;
        this.left = false;
        this.right = false;
        document.addEventListener("keydown", this.keyPress);
        document.addEventListener("keyup", this.keyRelease);
    }

    keyPress(e) {
        switch (e.keyCode) {
            // W (Forward)
            case 87:
                p1.forward = true;
                break;

                // A (Left)
            case 65:
                p1.left = true;
                break;

                // S (Back)
            case 83:
                p1.back = true;
                break;

                // D (Right)
            case 68:
                p1.right = true;
                break;
        }
    }

    keyRelease(e) {
        switch (e.keyCode) {
            // W (Forward)
            case 87:
                p1.forward = false;
                break;

                // A (Left)
            case 65:
                p1.left = false;
                break;

                // S (Back)
            case 83:
                p1.back = false;
                break;

                // D (Right)
            case 68:
                p1.right = false;
                break;
        }
    }

    move() {
        if (this.forward)
            this.vel.z = -1;

        if (this.back)
            this.vel.z = 1;

        if (this.left)
            this.vel.x = -1;

        if (this.right)
            this.vel.x = 1;

        if (!this.forward && !this.back)
            this.vel.z = 0;

        if (!this.left && !this.right) {
            this.vel.x = 0;
        }

    }

    update() {

        this.move();

        this.cam.position.x += this.vel.x;
        this.cam.position.y += this.vel.y;
        this.cam.position.z += this.vel.z;
    }

}
/** 
 * class ConstantAccelerationBehavior < Behavior
 *
 * `Physics.behavior('constant-acceleration')`.
 *
 * Constant acceleration behavior.
 *
 * Basically the "gravity" behavior. Used to give "earth-like gravity" to the world.
 *
 * Additional options include:
 * - acc: The acceleration vector (Vectorish). (default: `{ x: 0, y: 0.0004 }`)
 **/
Physics.behavior('player', function( parent ){


    return {

        // extended
        init: function( options ){

            parent.init.call( this );
            this.options( options );
            var player = options.player,
                mouseDown = function(e) {
                    if (e.button === 2) {
                        oldX = e.screenX;
                        document.addEventListener('mousemove', mouseMove, false);
                    } else if (e.button === 0) {
                        player.shooting = 2;

                    }
                    document.addEventListener('mouseup', mouseUp, false);
                },

                mouseMove = function(e) {
                    mouseOffset.x = (e.screenX - oldX) / 500;
                    //player.state.angular.pos = (e.screenX - oldX) / 100;
                },

                mouseUp = function(e) { 
                    if (e.button === 2) {
                        mouseOffset.x = 0;
                        document.removeEventListener('mousemove', mouseMove, false);
                        document.removeEventListener('mouseup', mouseUp, false);
                    } else if (e.button === 0) {
                        player.shooting = false;

                    }
                },

                keyUp = function(e) {
                    var i = keysPressed.indexOf(e.keyCode);
                    if (i !== -1) {
                        keysPressed.splice(i, 1);
                    }
                    
                },

                keyDown = function(e) {
                    if (keysPressed.indexOf(e.keyCode) === -1) {
                        keysPressed.push(e.keyCode);
                    }
                },

                oldX,

                mouseOffset = {x: 0},
        
                keysPressed = [];


            document.addEventListener("contextmenu", function(e){
                e.preventDefault();
            }, false);

            document.addEventListener('mousedown', mouseDown, false);
            document.addEventListener('keydown', keyDown, false);
            document.addEventListener('keyup', keyUp, false);

            this.keysPressed = keysPressed;
            this.mouseOffset = mouseOffset;
            this.player = player;
        },


        // extended
        behave: function( data ){
            var ang = this.player.state.angular.pos,
                player = this.player,
                speed;

            player.state.angular.pos += this.mouseOffset.x;
                    console.log(this.mouseOffset.x); 
            
            if (player.shooting) {
                if (player.shooting <= 1) {
                    player.shoot();
                    player.shooting = 20;
                } else {
                    player.shooting--;
                }
            }
            
            if (this.keysPressed.indexOf(16) !== -1 && !player.shooting) {
                speed = 0.1;
            } else {
                speed = 0.05;
            }
            if (this.keysPressed.indexOf(87) !== -1) {
                this.player.state.acc.set( Math.cos(ang) * speed, Math.sin(ang) * speed );
            }
            if (this.keysPressed.indexOf(83) !== -1) {
                this.player.state.acc.set( Math.cos(ang + Math.PI) * speed, Math.sin(ang + Math.PI) * speed );

            }
            if (this.keysPressed.indexOf(68) !== -1) {
                this.player.state.acc.set( Math.cos(ang + Math.PI / 2) * speed, Math.sin(ang + Math.PI / 2) * speed );

            }
            if (this.keysPressed.indexOf(65) !== -1) {
                this.player.state.acc.set( Math.cos(ang + Math.PI * 1.5) * speed, Math.sin(ang + Math.PI * 1.5) * speed );
            }
        }
    };
});

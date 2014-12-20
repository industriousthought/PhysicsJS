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
                        document.addEventListener('mouseup', mouseUp, false);
                    }
                },

                mouseMove = function(e) {
                    player.state.angular.pos = (e.screenX - oldX) / 50;
                },

                mouseUp = function(e) { 
                    if (e.button === 2) {
                        document.removeEventListener('mousemove', mouseMove, false);
                        document.removeEventListener('mouseup', mouseUp, false);
                    }
                },

                keyUp = function(e) {
                    var i = keysPressed.indexOf(e.keyCode);
                    if (i !== -1) {
                        console.log('removd ' + e.keyCode);
                        keysPressed.splice(i, 1);
                    }
                    
                },

                keyDown = function(e) {
                    if (keysPressed.indexOf(e.keyCode) === -1) {
                        console.log('added' + e.keyCode);
                        keysPressed.push(e.keyCode);
                    }
                },

                oldX,
        
                keysPressed = [];

            

            document.addEventListener("contextmenu", function(e){
                e.preventDefault();
            }, false);

            document.addEventListener('mousedown', mouseDown, false);
            document.addEventListener('keydown', keyDown, false);
            document.addEventListener('keyup', keyUp, false);

            this.keysPressed = keysPressed;
            this.player = player;
        },


        // extended
        behave: function( data ){
            var ang = this.player.state.angular.pos,
                speed = 0.1;//this.player.speed;

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

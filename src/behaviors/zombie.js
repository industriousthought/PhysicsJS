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
Physics.behavior('zombie', function( parent ){


    return {

        // extended
        init: function( options ){

            parent.init.call( this );
            this.options( options );


            this.zombies = options.zombies;
            this.follow = options.follow;
        },


        // extended
        behave: function( data ){
            var follow = this.follow,
                zombies = this.zombies.list(),
                speed = .01,
                i,
                ang,
                x,
                y;

            for (i = 0; i < zombies.length; i++) {
                x = follow.state.pos.get(0) - zombies[i].state.pos.get(0);
                y = follow.state.pos.get(1) - zombies[i].state.pos.get(1);
                ang = Math.atan2(y, x);
                zombies[i].state.angular.pos = ang;

                zombies[i].state.acc.set( Math.cos(ang) * speed, Math.sin(ang) * speed );

            }
        }
    };
});

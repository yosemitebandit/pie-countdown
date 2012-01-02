circle-timer
js class and some css to make a css transition-based countdown timer in which a circle is 'eaten away.'

high-level:

 - imagine four circles on top of another
 - each is transparent except for a 90 degree wedge which is opaque
 - the opaque wedge of each circle is in a different quadrant
   - moving up from the bottom of the stack of circles they are in quadrants I, IV, III, and II
   - the circle appears entirely filled at the start
 - countdown begins and the circle in quadrant II spins counter clockwise 90 degrees, revealing the background
   - when its opaque quarter is in quadrant III, the next wedge begins rotating in the same direction
   - this first circle is removed
 - this pattern of spinning a quadrant underneath the next quadrant repeats twice
   - quadrant III will spin underneath quadrant IV
   - quadrant IV will then rotate beneath quadrant I
 - the final quarter of a circle is handled differently -- a fifth circle rotates on top of it
   - this fifth circle has an opaque quarter that is the same color as the background
   - this circle is waiting in quadrant IV and rotates counterclockwise to cover the final segment

would-be-nice:

 - fix the thin quarter-ring left visible in the quadrant I circle as the final circle rotates over top
   - perhaps make the final circle somewhat larger
 - better demo with interactive input
 - better positioning of the timer -- guarantee centering within the container div

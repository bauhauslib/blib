#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect MyTex;
uniform float threshold;

void main(void)
{
    vec4 pel = texture2D(MyTex,texCoord);
    vec4 res = vec4(0.0,0.0,0.0,0.0);
    
    // Now, for every value above threshhold, put in the maximum:
    if (pel.r > threshold) { res.r = 1.0; };
    
    if (pel.g > threshold) { res.g = 1.0; };
    
    if (pel.b > threshold) { res.b = 1.0; };
    
    gl_FragColor = res;
}
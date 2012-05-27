// Cyrille Henry 2007

#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect MyTex;
//uniform sampler2D MyTex;
uniform float B;
uniform int D;

void main (void)
{
 vec4 color = texture2DRect(MyTex,  (gl_TextureMatrix[0] * gl_TexCoord[0]).st);
 color *= color / B;
 D = B;
 color =  D;
 gl_FragColor = color;
}

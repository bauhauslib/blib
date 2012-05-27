uniform sampler2D sceneTex; // 0
uniform float gamma; // 0.6
uniform float numColors; // 8.0
void main()
{
  vec3 c = texture2D(sceneTex, gl_TexCoord[0].xy).rgb;
  c = pow(c, vec3(gamma, gamma, gamma));
  c = c * numColors;
  c = floor(c);
  c = c / numColors;
  c = pow(c, vec3(1.0/gamma));
  gl_FragColor = vec4(c, 1.0);
}

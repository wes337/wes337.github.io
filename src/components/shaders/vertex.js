export default function vertexShader() {
  return `
        #define M_PI 3.1415926535897932384626433832795
        precision highp float;
        attribute vec4 a_position;
        attribute vec4 a_color;
        uniform float u_time;
        uniform float u_size;
        uniform float u_speed;
        uniform vec3 u_field;
        uniform mat4 u_projection;
        varying vec4 v_color;
        void main() {
            vec3 pos = a_position.xyz;
            pos.y += (
                cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +
                sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)
            ) * u_field.y;
            gl_Position = u_projection * vec4( pos.xyz, a_position.w );
            gl_PointSize = ( u_size / gl_Position.w ) * 100.0;
            v_color = a_color;
        }
    `;
}

(this["webpackJsonpwesley-moses-portfolio"]=this["webpackJsonpwesley-moses-portfolio"]||[]).push([[0],Array(26).concat([function(e,t,a){},,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(18),s=a.n(n),i=(a(26),a(13)),c=a(19),o=a.n(c),l=a(10),u=a(21),j=a(9),d=a(3),b=(a(30),a(0));var h=function(){var e=Object(d.c)({opacity:1,from:{opacity:0}});return Object(b.jsx)(d.a.div,{style:e,children:Object(b.jsxs)("div",{className:"spinner",children:[Object(b.jsx)("div",{className:"spinner__cube"}),Object(b.jsx)("div",{className:"spinner__cube"}),Object(b.jsx)("div",{className:"spinner__cube"}),Object(b.jsx)("div",{className:"spinner__cube"}),Object(b.jsx)("div",{className:"spinner__cube"}),Object(b.jsx)("div",{className:"spinner__cube"})]})})},m=a(5);a(34);var A=function(){var e=[Object(b.jsx)("a",{href:"http://github.com/wes337",target:"blank",children:Object(b.jsx)(m.a,{icon:["fab","github"],size:"2x"})},"github"),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/wesley-moses-7a6213149/",target:"blank",children:Object(b.jsx)(m.a,{icon:["fab","linkedin"],size:"2x"})},"linkedin"),Object(b.jsx)("a",{href:"https://www.instagram.com/moseswes/",target:"blank",children:Object(b.jsx)(m.a,{icon:["fab","instagram"],size:"2x"})},"instagram"),Object(b.jsx)("a",{href:"https://www.facebook.com/wesmoses",target:"blank",children:Object(b.jsx)(m.a,{icon:["fab","facebook"],size:"2x"})},"facebook"),Object(b.jsx)("a",{href:"https://brethrenmetal.bandcamp.com/",target:"blank",children:Object(b.jsx)(m.a,{icon:["fab","bandcamp"],size:"2x"})},"bandcamp")],t=Object(d.d)(e.length,e.map((function(e,t){return{opacity:1,from:{opacity:0},delay:3800+100*t}})));return Object(b.jsx)("div",{className:"social-media-links",children:t.map((function(t,a){return Object(b.jsx)(d.a.div,{style:t,children:e[a]},"icons--".concat(a))}))})},f=a(8),p=a(6),v=a(7),g=function(){function e(t){var a=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(p.a)(this,e),r=Object.assign({antialias:!1,depthTest:!1,mousemove:!1,autosize:!0,msaa:0,vertex:"\n          precision highp float;\n  \n          attribute vec4 a_position;\n          attribute vec4 a_color;\n  \n          uniform float u_time;\n          uniform vec2 u_resolution;\n          uniform vec2 u_mousemove;\n          uniform mat4 u_projection;\n  \n          varying vec4 v_color;\n  \n          void main() {\n  \n            gl_Position = u_projection * a_position;\n            gl_PointSize = (10.0 / gl_Position.w) * 100.0;\n  \n            v_color = a_color;\n  \n          }",fragment:"\n          precision highp float;\n  \n          uniform sampler2D u_texture;\n          uniform int u_hasTexture;\n  \n          varying vec4 v_color;\n  \n          void main() {\n  \n            if (u_hasTexture == 1) {\n  \n              gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n  \n            } else {\n  \n              gl_FragColor = v_color;\n  \n            }\n  \n          }",uniforms:{},buffers:{},camera:{},texture:null,onUpdate:function(){},onResize:function(){}},r);var n=Object.assign({time:{type:"float",value:0},hasTexture:{type:"int",value:0},resolution:{type:"vec2",value:[0,0]},mousemove:{type:"vec2",value:[0,0]},projection:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},r.uniforms),s=Object.assign({position:{size:3,data:[]},color:{size:4,data:[]}},r.buffers),i=Object.assign({fov:60,near:1,far:1e4,aspect:1,z:100,perspective:!0},r.camera),c=document.createElement("canvas"),o=c.getContext("webgl",{antialias:r.antialias});if(!o)return!1;this.count=0,this.gl=o,this.canvas=c,this.camera=i,this.holder=t,this.msaa=r.msaa,this.onUpdate=r.onUpdate,this.onResize=r.onResize,this.data={},t.appendChild(c),this.createProgram(r.vertex,r.fragment),this.createBuffers(s),this.createUniforms(n),this.updateBuffers(),this.updateUniforms(),this.createTexture(r.texture),o.enable(o.BLEND),o.enable(o.CULL_FACE),o.blendFunc(o.SRC_ALPHA,o.ONE),o[r.depthTest?"enable":"disable"](o.DEPTH_TEST),r.autosize&&window.addEventListener("resize",(function(e){return a.resize(e)}),!1),r.mousemove&&window.addEventListener("mousemove",(function(e){return a.mousemove(e)}),!1),this.resize(),this.update=this.update.bind(this),this.time={start:performance.now(),old:performance.now()},this.update()}return Object(v.a)(e,[{key:"mousemove",value:function(e){var t=e.pageX/this.width*2-1,a=e.pageY/this.height*2-1;this.uniforms.mousemove=[t,a]}},{key:"resize",value:function(){var e=this.holder,t=this.canvas,a=this.gl,r=this.width=e.offsetWidth,n=this.height=e.offsetHeight,s=this.aspect=r/n,i=this.dpi=Math.max(this.msaa?2:1,devicePixelRatio);t.width=r*i,t.height=n*i,t.style.width=r+"px",t.style.height=n+"px",a.viewport(0,0,r*i,n*i),a.clearColor(0,0,0,0),this.uniforms.resolution=[r,n],this.uniforms.projection=this.setProjection(s),this.onResize(r,n,i)}},{key:"setProjection",value:function(e){var t=this.camera;if(t.perspective){t.aspect=e;var a=t.fov*(Math.PI/180),r=Math.tan(.5*Math.PI-.5*a),n=1/(t.near-t.far),s=[r/t.aspect,0,0,0,0,r,0,0,0,0,(t.near+t.far)*n,-1,0,0,t.near*t.far*n*2,0];return s[14]+=t.z,s[15]+=t.z,s}return[2/this.width,0,0,0,0,-2/this.height,0,0,0,0,1,0,-1,1,0,1]}},{key:"createShader",value:function(e,t){var a=this.gl,r=a.createShader(e);if(a.shaderSource(r,t),a.compileShader(r),a.getShaderParameter(r,a.COMPILE_STATUS))return r;console.log(a.getShaderInfoLog(r)),a.deleteShader(r)}},{key:"createProgram",value:function(e,t){var a=this.gl,r=this.createShader(a.VERTEX_SHADER,e),n=this.createShader(a.FRAGMENT_SHADER,t),s=a.createProgram();a.attachShader(s,r),a.attachShader(s,n),a.linkProgram(s),a.getProgramParameter(s,a.LINK_STATUS)?(a.useProgram(s),this.program=s):(console.log(a.getProgramInfoLog(s)),a.deleteProgram(s))}},{key:"createUniforms",value:function(e){var t=this,a=this.gl,r=this.data.uniforms=e,n=this.uniforms={};Object.keys(r).forEach((function(e){r[e].location=a.getUniformLocation(t.program,"u_"+e),Object.defineProperty(n,e,{set:function(a){r[e].value=a,t.setUniform(e,a)},get:function(){return r[e].value}})}))}},{key:"setUniform",value:function(e,t){var a=this.gl,r=this.data.uniforms[e];switch(r.value=t,r.type){case"int":default:a.uniform1i(r.location,t);break;case"float":a.uniform1f(r.location,t);break;case"vec2":a.uniform2f.apply(a,[r.location].concat(Object(f.a)(t)));break;case"vec3":a.uniform3f.apply(a,[r.location].concat(Object(f.a)(t)));break;case"vec4":a.uniform4f.apply(a,[r.location].concat(Object(f.a)(t)));break;case"mat2":a.uniformMatrix2fv(r.location,!1,t);break;case"mat3":a.uniformMatrix3fv(r.location,!1,t);break;case"mat4":a.uniformMatrix4fv(r.location,!1,t)}}},{key:"updateUniforms",value:function(){var e=this,t=this.data.uniforms;Object.keys(t).forEach((function(a){var r=t[a];e.uniforms[a]=r.value}))}},{key:"createBuffers",value:function(e){var t=this,a=this.data.buffers=e,r=this.buffers={};Object.keys(a).forEach((function(e){var n=a[e];n.buffer=t.createBuffer("a_"+e,n.size),Object.defineProperty(r,e,{set:function(r){a[e].data=r,t.setBuffer(e,r),"position"===e&&(t.count=a.position.data.length/3)},get:function(){return a[e].data}})}))}},{key:"createBuffer",value:function(e,t){var a=this.gl,r=this.program,n=a.getAttribLocation(r,e),s=a.createBuffer();return a.bindBuffer(a.ARRAY_BUFFER,s),a.enableVertexAttribArray(n),a.vertexAttribPointer(n,t,a.FLOAT,!1,0,0),s}},{key:"setBuffer",value:function(e,t){var a=this.gl,r=this.data.buffers;(null!=e||a.bindBuffer(a.ARRAY_BUFFER,null))&&(a.bindBuffer(a.ARRAY_BUFFER,r[e].buffer),a.bufferData(a.ARRAY_BUFFER,new Float32Array(t),a.STATIC_DRAW))}},{key:"updateBuffers",value:function(){var e=this.buffers;Object.keys(e).forEach((function(t){return e[t]=t.data})),this.setBuffer(null)}},{key:"createTexture",value:function(e){var t=this.gl,a=t.createTexture();t.bindTexture(t.TEXTURE_2D,a),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),this.texture=a,e&&(this.uniforms.hasTexture=1,this.loadTexture(e))}},{key:"loadTexture",value:function(e){var t=this.gl,a=this.texture,r=new Image;r.onload=function(){t.bindTexture(t.TEXTURE_2D,a),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},r.src=e}},{key:"update",value:function(){var e=this.gl,t=performance.now(),a=(t-this.time.start)/5e3,r=t-this.time.old;this.time.old=t,this.uniforms.time=a,this.count>0&&(e.COLORBUFFERBIT>0&&e.clear(e.COLORBUFFERBIT),e.drawArrays(e.POINTS,0,this.count)),this.onUpdate(r),requestAnimationFrame(this.update)}}]),e}();a(35);var O=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){new g(e.current,{texture:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC",uniforms:{size:{type:"float",value:2.5},field:{type:"vec3",value:[0,0,0]},speed:{type:"float",value:5}},vertex:"\n        #define M_PI 3.1415926535897932384626433832795\n        precision highp float;\n        attribute vec4 a_position;\n        attribute vec4 a_color;\n        uniform float u_time;\n        uniform float u_size;\n        uniform float u_speed;\n        uniform vec3 u_field;\n        uniform mat4 u_projection;\n        varying vec4 v_color;\n        void main() {\n            vec3 pos = a_position.xyz;\n            pos.y += (\n                cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +\n                sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)\n            ) * u_field.y;\n            gl_Position = u_projection * vec4( pos.xyz, a_position.w );\n            gl_PointSize = ( u_size / gl_Position.w ) * 100.0;\n            v_color = a_color;\n        }\n    ",fragment:"\n        precision highp float;\n        uniform sampler2D u_texture;\n        varying vec4 v_color;\n        void main() {\n            gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n        }\n    ",onResize:function(e,t,a){for(var r=[],n=[],s=e/t*400,i=400,c=0;c<s;c+=5)for(var o=0;o<i;o+=5)r.push(-s/2+c,-30,-200+o),n.push(0,1-c/s*1,.5+c/s*.5,o/i);this.uniforms.field=[s,3,i],this.buffers.position=r,this.buffers.color=n,this.uniforms.size=t/400*2.5*a}})}),[]),Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("div",{className:"waves__container",ref:e})})},x=a(20),_=a.n(x);a(36),a(37);var y=function(){var e=Object(d.c)({opacity:1,from:{opacity:0},delay:200}),t=Object(r.useRef)();return Object(r.useEffect)((function(){_()({target:t.current});for(var e=t.current.querySelectorAll(".char"),a=function(t){var a=e[t];setTimeout((function(){return a.classList.add("init")}),2200+100*t),setTimeout((function(){return a.classList.remove("init")}),2400+100*t),setTimeout((function(){return a.classList.add("init")}),3200),setTimeout((function(){return a.classList.remove("init")}),3400)},r=0;r<e.length;r+=1)a(r)})),Object(b.jsx)(d.a.div,{className:"name",style:e,children:Object(b.jsx)("div",{className:"name__text",ref:t,children:Object(b.jsx)("h1",{children:"Wesley"})})})},w=a(2),k=(a(38),function(){var e=Object(r.useRef)(),t=Object(r.useState)(0),a=Object(i.a)(t,2),n=a[0],s=a[1],c="#F6F7F8",o={color:"#EAB331",position:"absolute",width:"125%"},l=[function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),o),children:"Software Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),o),children:"React Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),o),children:"Full-Stack Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),o),children:"Programmer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),o),children:"Front-End Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),o),children:"Back-End Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),o),children:"Nerd"})}],u=[function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),{},{position:"absolute"}),children:"Software Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),{},{position:"absolute"}),children:"React Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),{},{position:"absolute"}),children:"Full-Stack Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),{},{position:"absolute"}),children:"Programmer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),{},{position:"absolute"}),children:"Front-End Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),{},{position:"absolute"}),children:"Back-End Developer"})},function(e){var t=e.style;return Object(b.jsx)(d.a.h2,{style:Object(w.a)(Object(w.a)({},t),{},{position:"absolute"}),children:"Nerd"})}];Object(r.useEffect)((function(){return e.current=setInterval((function(){return s((function(e){return(e+1)%7}))}),5e3),function(){return clearInterval(e.current)}}),[]);var j=Object(d.e)(n,(function(e){return e}),{from:{opacity:0,transform:"translate3d(0%,0,0)"},enter:{opacity:1,transform:"translate3d(100%,0,0)"},leave:{opacity:0,transform:"translate3d(-100%,0,0)"}}),h=Object(d.e)(n,(function(e){return e}),{from:{opacity:0,transform:"translate3d(100%,0,0)",textAlign:"center",width:"100%",color:c},enter:{opacity:1,transform:"translate3d(0%,0,0)",textAlign:"center",width:"100%",color:c},leave:{opacity:0,transform:"translate3d(-50%,0,0)",textAlign:"center",width:"100%",color:"#081EFC"}});return Object(b.jsxs)("div",{className:"subtitles",children:[Object(b.jsx)("div",{className:"subtitles__text",children:h.map((function(e){var t=e.item,a=e.props,r=e.key,n=u[t];return Object(b.jsx)(n,{style:a},r)}))}),Object(b.jsx)("div",{className:"subtitles__text--cover",children:j.map((function(e){var t=e.item,a=e.props,r=e.key,n=l[t];return Object(b.jsx)(n,{style:a},r)}))})]})}),N=(a(39),function(){var e=Object(d.c)({opacity:1,from:{opacity:0},delay:6e3});return Object(b.jsx)("div",{id:"home",children:Object(b.jsxs)("section",{className:"home",children:[Object(b.jsx)(A,{}),Object(b.jsx)(y,{}),Object(b.jsx)(k,{}),Object(b.jsx)(d.a.div,{style:e,children:Object(b.jsx)(m.a,{icon:"hand-point-down",size:"2x",className:"home__scroll--icon"})}),Object(b.jsx)(O,{})]})})}),E=a(15),R=a.n(E),T=a.p+"static/media/wesley.05789c61.jpg";a(40);var S=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){R.a.init(e.current,{max:20,speed:200})})),Object(b.jsx)("div",{id:"about",children:Object(b.jsxs)("section",{className:"about",children:[Object(b.jsxs)("div",{className:"about__content--container",children:[Object(b.jsxs)("div",{className:"about__header",children:[Object(b.jsx)("h2",{children:"Hey, I'm Wesley Moses."}),Object(b.jsx)("hr",{})]}),Object(b.jsxs)("div",{className:"about__content",children:[Object(b.jsxs)("p",{children:["I'm a full-stack developer from"," ",Object(b.jsx)("img",{className:"flag",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH4wYREwIwMW5J0QAAAUFQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwEBFgUEFwUEGQUEGQYFGgYFGwYFGw4OHh4eoiQeuCkiuSYfuSkiuyojx2tm0Ssj0Swj0Swk0i0l0i4m0i8n0jAo0jEp0ywk0zEq0zIq0zMr0zMs0zQs0zUu1C8n1Dgw1Dgx1TAo1Tw12ElC2U5H2U9I3WJb3WJc3mZg3mZh3mdh3mdi3mhi3mhj32pk32tl4HBq4d/f4eHh4nl04np14nt14nt243p055GN6JOP6JSP6JSQ66Cd7aqn7auo7ayp77Wy77Wz77az77e08b268sTB88nH9M/N9c/N99rZ99vZ+eLg+eLh+ePi+eTi+eTj+eXk+urp++vq++vr++zr/fX1/fb1/fb2/ff3/fj3/vj4/vz7/v38//39//7+////GI4bNAAAAAp0Uk5TAAEtWFpb2Pz9/lBtUh4AAAABYktHRGolYpUOAAACJElEQVRo3u3ZaVPaQBzHcQUPxNuqaGRzeKB4VGwrFrV41XogoFZbTL3FI77/F1AYTDR1A5PO/HfH8fd9xM5m9vOAYUOydXUIIYQQQggh9J/VB4INQgoG6l1woKklJKSWpoALDjaHBdUcdMGNoXBrW6dHHT0ffNXT4bVSW2s41Pgv3N47EOHXP7j8zUfLg/0eCw30tnPg7sh0nN/w+sOjjx7Whz0Wmo50c+CuvrjGbyjtD04PeSwU7+sCDBgw4HLX+/vXMuDixsTERlE8XPwxrqqxzaJouOxqmjq+eSMWrrglOfb9RiRsu1yZEt6JqfakOrYjDrZWledZZdUSBruWrj77lmHrKLeXzWby5zz4PJ/JZvdyRxYBfJzQjVKjqcJruJAaLc/piWMCOKdXRix5Yrlhy1xglc96jgDOPMEl+dfaS3jtt+1qeoYS1tjnOfY8yz7NOyNiWFONl9OGs5mQw56RwPmR2vBIngC+WGS1XJa6oNi5nB+Np5s8odkya8gsaVLt1VVllizQ3SSqyI5Lc3cyv3rBCybtbfFwRuVdos78JL4fbxv8a4xtWvhqPsq/JvrlkhQ+SyjMrvy/2hkoiTNS+H5r9qPdlKZNOYPZrXva7/ju9M9T5lI0umTao9M7YQ9tVlpR0paEp0XA7wBeUZQVGfDj7uTkrpSXL7cHB7d4zwUYMGCpsLQDL2lHfHIONaUd40o7uJZ2VI8QQgghhBBCPvoLBZ5kPlDzDk8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDYtMTdUMTk6MDI6MzUrMDA6MDDxSTbNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA2LTE3VDE5OjAyOjM1KzAwOjAwgBSOcQAAAABJRU5ErkJggg==",alt:"Canada"}),", now living in"," ",Object(b.jsx)("img",{className:"flag",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUAAAAAAAABAgMBAwUBAwUAAAAAAAAAAAAAAAAAAAAAAAAAAAACBQoDBw8DBw8AAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBg0AAQEEChQEChMCBQoDBw8DBw8AAAAEBAQaGhoeHh4eHh4eHh4eHh4NERcDCRMECRMcHBzFxcXj4+Ph4eHh4eHf4OBhfqsXRIwaR40gICDf39/////9/v5vj8MbTqAeUaEgICDf39/9/f5uj8IaTZ4eUKAgICAgICDf39/9/f5uj8IgICDd3t79/v77/P1ujsIaTZ4OEhhhfapvkMRuj8JujsI7ZqwdT58AAQIDChQXRIsbTqAaTZ4aTZ4eUKAXRIsAAQIEChQaRoweUaECXvw0AAAAKnRSTlMAAAAAAAEtWFpaWlpfY2Mt2P79/f3+//9Y/Fv9W/1b/Vtb/WP/Z2dfY2P5Lo+RAAAAAWJLR0Q/PmMwdQAAAAd0SU1FB+MGERUkDjdcq+wAAAFpSURBVGje7dk9S8NQGAXgHG0TsVSNDtZSii04uekgKPjjBQUH3ZyENkjxY9BYS8Sm6nGRJm1JizHmUjzvdklenuQm5N5wYBkqCBYsWLBgwYIFCxYseO7hIoDka8DIUZJkSo4kB3F4dSpsTcDWL+BuHK7AzWmKfd7H4Sqm3XNWU02SXd7G4RrKy7nArz12xuCNGW9XFs+YfJyEqwgTG5wxuJ8StoueYMGCBQsWLFiwcbiOUgO9xIYVhDHY5ktKuMx2AC8GYxtLO/CdhPNLAIJoRDJI5fZdXr/RYwQvNGDvAs8JDS6Ap+FonaSfCl4jr0K2PyN4sXlwuQ88JDRUEDp3w9FW3/7+G/hpbRbCi73z1kcEF5rHZ0fAjfW3VSdPD09a74IFCxacAWzsk2lskTC2LBrbCGizJ1iwYMGCBQv+Z7CxwMtMxGcs1DQW4xoLrmdF9bURuJNdVJ9/CRYsWLBgwYIFCxYseI7hL0JwdJfRSDayAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA2LTE3VDIxOjM2OjAzKzAwOjAwqn002QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNi0xN1QyMTozNjowMyswMDowMNsgjGUAAAAASUVORK5CYII=",alt:"Finland"}),"."]}),Object(b.jsx)("p",{children:"I take pride in building simple, beautiful applications using modern web technologies."}),Object(b.jsxs)("p",{children:["I'm a Senior Software Engineer at"," ",Object(b.jsx)("a",{className:"external__link",href:"https://www.nordea.com/",target:"_blank",rel:"noopener noreferrer",children:"Nordea"}),", the largest financial group in the Nordics. Previously, I developed"," ",Object(b.jsx)("a",{className:"external__link",href:"https://www.happeo.com/",target:"_blank",rel:"noopener noreferrer",children:"Happeo"}),", a social intranet for Google Workspace, and"," ",Object(b.jsx)("a",{className:"external__link",href:"https://www.recright.com/en/",target:"_blank",rel:"noopener noreferrer",children:"RecRight"}),", video recruitment SaaS."]}),Object(b.jsxs)("p",{children:["When I'm not coding, you can find me"," ",Object(b.jsx)("a",{href:"https://brethrenmetal.bandcamp.com/",target:"_blank",rel:"noopener noreferrer",children:"making music"}),"."]})]})]}),Object(b.jsx)("div",{className:"about__image--container",ref:e,children:Object(b.jsx)("img",{className:"about__image",src:T,alt:"Portrait of Wesley Moses"})}),Object(b.jsx)("div",{className:"about__image--background"})]})})},B=a.p+"static/media/cv.5a7bf195.pdf";a(41);var U=function(){var e=Object(r.useRef)();return Object(b.jsx)("div",{id:"cv",ref:e,children:Object(b.jsx)("section",{className:"cv",children:Object(b.jsxs)("div",{className:"cv__container",children:[Object(b.jsxs)("div",{className:"cv__container--content",children:[Object(b.jsx)("div",{className:"cv__container--content-text",children:"Want to know more?"}),Object(b.jsx)("div",{className:"cv__container--content-btn",children:Object(b.jsx)("a",{href:B,target:"_blank",rel:"noopener noreferrer",children:"Check out my CV!"})})]}),Object(b.jsxs)("div",{className:"cv__container--shapes",children:[Object(b.jsx)("div",{className:"cv__container--shapes-triangle"}),Object(b.jsx)("div",{className:"cv__container--shapes-dots--container",children:Object(b.jsx)("div",{className:"cv__container--shapes-dots"})}),Object(b.jsx)("div",{className:"cv__container--shapes-circle--container",children:Object(b.jsx)("div",{className:"cv__container--shapes-circle"})})]})]})})})},C=(a(42),function(e){var t=e.text,a=e.url,r=e.light;return a?Object(b.jsxs)("a",{className:"button btn-custom",href:a,target:"_blank",rel:"noopener noreferrer",children:[Object(b.jsx)("span",{className:"circle","aria-hidden":"true",children:Object(b.jsx)("span",{className:"icon arrow"})}),Object(b.jsx)("span",{className:"button-text",children:t})]}):Object(b.jsxs)("button",{className:"button btn-custom",type:"button",children:[Object(b.jsx)("span",{className:"circle ".concat(r?"light":""),"aria-hidden":"true",children:Object(b.jsx)("span",{className:"icon arrow"})}),Object(b.jsx)("span",{className:"button-text",children:t})]})});C.defaultProps={text:"",url:"",light:!1};var P=C,D=a.p+"static/media/astar.a7cf7bc5.png",M=a.p+"static/media/personaltraining.bf9ef3e3.png",F=a.p+"static/media/homeworktracker.67dc70fa.png",z=a.p+"static/media/nativebugtracker.5198e773.png",I=a.p+"static/media/nativeplaces.4b1dd815.png",L=a.p+"static/media/bookstore.02fa61e0.png",G={aStar:{modalName:"aStar",title:"A* Search Algorithm",subtitle:["js","react"],info:"JavaScript (React, ES6)",image:D,details:Object(b.jsxs)(b.Fragment,{children:["A visual way to see how the"," ",Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/A*_search_algorithm",target:"_blank",rel:"noopener noreferrer",children:"A* search algorithm works"})," ","in pathfinding.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Click to set a start and ending position, then you can draw unpassable nodes/walls. The algorithm will find the shortest path!"]}),viewUrl:"https://wes337.github.io/astar-search-visualization/",srcUrl:"https://github.com/wes337/astar-search-visualization",mobile:!1},personalTraining:{modalName:"personalTraining",title:"Personal Training",subtitle:["js","react"],info:"JavaScript (React, ES6)",image:M,details:Object(b.jsxs)(b.Fragment,{children:["A Bootsrapped React app of a Personal Training Company. I created this for my Front-End Development course at University. You can manage customers and their schedules for their trainings at the gym.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I've deployed this app"," ",Object(b.jsx)("a",{href:"https://personaltrainingapp-9023e.firebaseapp.com/",target:"_blank",rel:"noopener noreferrer",children:"here"})," ","using Google Firebase.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:"You can sign up, or login using these test credentials:"}),Object(b.jsx)("pre",{children:"test@test.com/test123"})]}),viewUrl:"https://personaltrainingapp-9023e.firebaseapp.com/",srcUrl:"https://github.com/wes337/FrontEndDevelopment-PersonalTraining",mobile:!1},bugTracking:{modalName:"bugTracking",title:"Mobile Bug Tracking App",subtitle:["js","react"],info:"JavaScript (React Native, ES6)",image:z,details:Object(b.jsxs)(b.Fragment,{children:["A project manager app for iOS & Android. Create tasks for your projects, organize them using custom categories, and track their progress with project milestones.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Built using"," ",Object(b.jsx)("a",{href:"https://www.expo.io",target:"_blank",rel:"noopener noreferrer",children:"Expo"})," ","and styled with"," ",Object(b.jsx)("a",{href:"https://docs.nativebase.io/",target:"_blank",rel:"noopener noreferrer",children:"native-base"}),"."]}),viewUrl:"https://github.com/wes337/react-native-bugtracker",srcUrl:"https://github.com/wes337/react-native-bugtracker",mobile:!0},mobilePlaces:{modalName:"mobilePlaces",title:"Mobile Places App",subtitle:["js","react"],info:"JavaScript (React Native, ES6)",image:I,details:Object(b.jsxs)(b.Fragment,{children:["A React Native app used to track your favourite places. Built with"," ",Object(b.jsx)("a",{href:"https://www.expo.io",target:"_blank",rel:"noopener noreferrer",children:"Expo"}),","," ",Object(b.jsx)("a",{href:"https://github.com/react-native-community/react-native-maps",target:"_blank",rel:"noopener noreferrer",children:"react-native-maps"})," ","and"," ",Object(b.jsx)("a",{href:"https://react-native-elements.github.io/react-native-elements/",target:"_blank",rel:"noopener noreferrer",children:"react-native-elements"}),". Real-time database provided by Google FireBase."]}),viewUrl:"https://github.com/wes337/react-native-places",srcUrl:"https://github.com/wes337/react-native-places",mobile:!0},hwTracker:{modalName:"hwTracker",title:"Homework Tracker",subtitle:["java"],info:"Java (Spring, H2)",image:F,details:Object(b.jsxs)(b.Fragment,{children:["A homework tracking application built with Java Spring. Can be used to keep track of assignments, projects, and other deadlines. ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"A live version of this app has been deployed on Heroku, you can see it"," ",Object(b.jsx)("a",{href:"https://serverprog-homeworktracker.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),viewUrl:"https://serverprog-homeworktracker.herokuapp.com/",srcUrl:"https://github.com/wes337/ServerProgramming-HomeworkTracker",mobile:!1},bookStore:{modalName:"bookStore",title:"Bookstore",subtitle:["java"],info:"Java (Spring, H2, Thymeleaf)",image:L,details:Object(b.jsxs)(b.Fragment,{children:["A book store app created for my Server Programming course at university. Created using an MVC design and implementing basic CRUD functions.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"A live version of this app has been deployed on Heroku, you can see it"," ",Object(b.jsx)("a",{href:"https://serverprogramming-bookstore.herokuapp.com/login",target:"_blank",rel:"noopener noreferrer",children:"here"}),".",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:"You can signup, or login using the following test account:"}),Object(b.jsx)("pre",{children:"username: user password: user"})]}),viewUrl:"https://serverprogramming-bookstore.herokuapp.com/booklist",srcUrl:"https://github.com/wes337/ServerProgramming-BookStore",mobile:!1}},H=(a(43),{modalName:!1,modal:{title:"",subtitle:[],viewUrl:"",srcUrl:"",image:"",details:""}}),Y=function(e){var t=e.modalName,a=e.toggleModal,n=G[t]||H.modal,s=n.title,i=n.subtitle,c=n.viewUrl,o=n.srcUrl,l=n.image,u=n.details,j=n.mobile,h=Object(r.useRef)(),A=Object(d.c)({display:t?"block":"none",ref:h}),f=Object(r.useRef)(),p=Object(d.c)({opacity:t?1:0,ref:f});Object(d.b)([f,h]),Object(r.useEffect)((function(){t?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open")}),[t]);return Object(b.jsx)(d.a.div,{className:"modal",style:A,onClick:function(e){"modal"===e.target.className&&a(null)},children:Object(b.jsxs)(d.a.div,{className:"modal__content",style:p,children:[Object(b.jsx)("button",{onClick:function(){return a(null)},className:"modal__close",type:"button",children:Object(b.jsx)(m.a,{icon:"times"})}),Object(b.jsxs)("div",{className:"modal__header",children:[Object(b.jsx)("h1",{className:"modal__title",children:s}),Object(b.jsxs)("h2",{className:"modal__subtitle",children:["Built with",i.map((function(e){return Object(b.jsx)(m.a,{icon:["fab",e],className:"modal__icon icon--".concat(e),size:"2x"},"icon-key-".concat(e))}))]})]}),Object(b.jsxs)("div",{className:"modal__actions",children:[Object(b.jsx)(P,{text:"Demo",url:c}),Object(b.jsx)(P,{text:"Source",url:o})]}),Object(b.jsx)("div",{className:"modal__screenshot",children:Object(b.jsx)("img",{src:l,alt:"screenshot of ".concat(s),className:j?"--mobile":""})}),Object(b.jsx)("div",{className:"modal__details",children:Object(b.jsx)("p",{children:u})})]})})};Y.defaultProps=H;var J=Y;a(44);function Q(e){var t=e.modalName,a=e.image,n=e.title,s=e.info,i=e.mobile,c=e.toggleModal,o=Object(r.useRef)(),l=function(){o.current.children[0].classList.add("--hover")},u=function(){o.current.children[0].classList.remove("--hover")};return Object(b.jsxs)("div",{className:"card",onClick:function(){return c(t)},onKeyDown:function(e){["Enter","Space"].includes(e.code)&&c(t)},onMouseOver:l,onFocus:l,onBlur:u,onMouseOut:u,role:"button",tabIndex:"0",children:[Object(b.jsxs)("div",{className:"card__content",children:[Object(b.jsx)("p",{className:"card__title",children:n}),Object(b.jsxs)("div",{className:"card__info",children:[Object(b.jsx)("p",{className:"card__info-text",children:s}),Object(b.jsx)("div",{className:"card__info-btn",ref:o,children:Object(b.jsx)(P,{light:!0})})]})]}),Object(b.jsx)("div",{className:"card__image-container",children:Object(b.jsx)("img",{src:a,className:"card__image ".concat(i?"--mobile":""),alt:""})})]})}Q.defaultProps={mobile:!1};var W=Q,X=(a(45),function(){var e=Object(r.useState)(void 0),t=Object(i.a)(e,2),a=t[0],n=t[1],s=function(e){n(e)};return Object(b.jsxs)("div",{id:"projects",children:[Object(b.jsx)("section",{className:"projects",children:Object(b.jsx)("div",{className:"projects__cards-container",children:Object(b.jsxs)("div",{className:"projects__cards",children:[Object(b.jsxs)("div",{className:"projects__cards--header",children:[Object(b.jsx)("h2",{children:"Projects"}),Object(b.jsx)("hr",{className:"projects__cards--header--hr"})]}),Object(b.jsx)(W,Object(w.a)({toggleModal:s},G.aStar)),Object(b.jsx)(W,Object(w.a)({toggleModal:s},G.personalTraining)),Object(b.jsx)(W,Object(w.a)({toggleModal:s},G.hwTracker)),Object(b.jsx)(W,Object(w.a)({toggleModal:s,mobile:!0},G.bugTracking)),Object(b.jsx)(W,Object(w.a)({toggleModal:s,mobile:!0},G.mobilePlaces)),Object(b.jsx)(W,Object(w.a)({toggleModal:s},G.bookStore))]})})}),Object(b.jsx)(J,{modalName:a,toggleModal:s})]})});a(46);var V=function(){return Object(r.useEffect)((function(){R.a.init(document.querySelectorAll(".contact__body--parallax-item"),{max:20,speed:200})})),Object(b.jsx)("div",{id:"contact",children:Object(b.jsxs)("section",{className:"contact",children:[Object(b.jsxs)("div",{className:"contact__header",children:[Object(b.jsx)("h3",{children:"Let's get in touch!"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:["I'm always interested in new projects and opportunities.",Object(b.jsx)("br",{}),"Don't hesitate to give me a call or send an email, I'll get back to you as soon as I can!"]})]}),Object(b.jsx)("div",{className:"contact__body",children:Object(b.jsx)("div",{className:"contact__body--parallax-item",children:Object(b.jsxs)("div",{className:"inner-parallax",children:[Object(b.jsx)(m.a,{icon:"envelope",size:"2x"}),Object(b.jsx)("p",{children:"wesmoses@gmail.com"})]})})})]})})},Z=(a(47),function(){return Object(b.jsx)("div",{id:"footer",children:Object(b.jsx)("section",{className:"footer",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"footer__bracket",children:"[ "}),"Made with"," ",Object(b.jsx)("span",{role:"img","aria-label":"love",children:"\u2764\ufe0f"})," ","by"," ",Object(b.jsx)("a",{href:"http://github.com/wes337",target:"_blank",rel:"noopener noreferrer",children:"Wesley Moses"})," ","\xa92020",Object(b.jsx)("span",{className:"footer__bracket",children:" ]"})]})})})}),q=(a(48),function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.b.add(u.a,j.a,j.f,j.c,j.e,j.g,j.b,j.d),Object(r.useEffect)((function(){o.a.load({google:{families:["Montserrat:300,400,500,600,700,800,900","Open Sans:300,400,500,600,700,800,900"]},loading:function(){return n(!0)},active:function(){return n(!1)}})}),[]),a?Object(b.jsx)("div",{className:"app__loading",children:Object(b.jsx)(h,{})}):Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(N,{}),Object(b.jsx)(S,{}),Object(b.jsx)(U,{}),Object(b.jsx)(X,{}),Object(b.jsx)(V,{}),Object(b.jsx)(Z,{})]})});s.a.render(Object(b.jsx)(q,{}),document.getElementById("root"))}]),[[49,1,2]]]);
//# sourceMappingURL=main.85bf5279.chunk.js.map
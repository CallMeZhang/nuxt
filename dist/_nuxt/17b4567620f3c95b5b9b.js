(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{294:function(e,t,n){var o=n(324);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(44).default)("59497dc0",o,!0,{})},295:function(e,t,n){var o=n(326);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(44).default)("d4be674c",o,!0,{})},323:function(e,t,n){"use strict";var o=n(294);n.n(o).a},324:function(e,t,n){(e.exports=n(43)(!1)).push([e.i,"\n.VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px\n}\n.Triangle{position:absolute;top:0;left:0;width:0;height:0\n}\n.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883\n}\n.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070\n}\n.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards\n}\n.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e\n}\n.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff\n}\n@-webkit-keyframes turn{\nto{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n}\n@keyframes turn{\nto{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n}\n@-webkit-keyframes godown{\nto{top:180px\n}\n}\n@keyframes godown{\nto{top:180px\n}\n}\n@-webkit-keyframes goright{\nto{left:70px\n}\n}\n@keyframes goright{\nto{left:70px\n}\n}",""])},325:function(e,t,n){"use strict";var o=n(295);n.n(o).a},326:function(e,t,n){(e.exports=n(43)(!1)).push([e.i,"\n*{moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none\n}\n.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center\n}\n.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;color:#ff4500;letter-spacing:1px\n}\n.subtitle,.title{font-weight:300;font-size:20px\n}\n.subtitle{right:30px;top:50px;color:#e6a23c;word-spacing:5px;padding-bottom:15px\n}\n.subtitle,.text{position:absolute\n}\n.text{left:30px;top:30px\n}",""])},327:function(e,t,n){"use strict";n.r(t);n(297),n(65);var o=n(4),r=n.n(o),i=(n(323),n(22)),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"VueToNuxtLogo"},[t("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),t("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);a.options.__file="Logo.vue";var s=a.exports,l=n(289);n(296),l.Cache.enabled=!0;var d,c={asyncData:(d=r()(regeneratorRuntime.mark(function e(t){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.next=3,n.$axios.$get("/api/getCount");case 3:return o=e.sent,e.abrupt("return",{user:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return d.apply(this,arguments)}),components:{Logo:s},methods:{},mounted:function(){var e,t,n,o,r,i,a,s,d,c,p,u=100,f=50,g=50,h="welcome",m=20,v=200,w=200,x=4,b=2,y=1.5,_=!0,k=void 0,C="optimer",M=!0,P=0,T=0,S=window.innerWidth/2,z=window.innerHeight/2;function B(){S=window.innerWidth/2,z=window.innerHeight/2,s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}function E(e){T=e.clientX-S,e.clientY-z}function L(e){1===e.touches.length&&(e.preventDefault(),T=e.touches[0].pageX-S,e.touches[0].pageY-z)}function A(e){1===e.touches.length&&(e.preventDefault(),T=e.touches[0].pageX-S,e.touches[0].pageY-z)}!function(){e=document.getElementById("three"),document.body.appendChild(e),(s=new l.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e4)).position.z=1e3,(d=new l.Scene).background=new l.Color(0),d.fog=new l.Fog(0,850,1400);for(var P=f*g,T=new Float32Array(3*P),S=new Float32Array(P),z=0,G=0,I=0;I<f;I++)for(var N=0;N<g;N++)T[z]=I*u-f*u/2,T[z+1]=0,T[z+2]=N*u-g*u/2,S[G]=1,z+=3,G++;var X=new l.BufferGeometry;X.addAttribute("position",new l.BufferAttribute(T,3)),X.addAttribute("scale",new l.BufferAttribute(S,1));var H=new l.ShaderMaterial({uniforms:{color:{value:new l.Color("rgb(9,123,219)")}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent});p=new l.Points(X,H),d.add(p);var F=new l.DirectionalLight(16777215,.125);F.position.set(0,0,1).normalize(),d.add(F);var W=new l.PointLight(16777215,1.5);W.position.set(0,100,90),d.add(W),W.color.setStyle("rgb(255, 0, 0)"),a=[new l.MeshPhongMaterial({color:16777215,flatShading:!0}),new l.MeshPhongMaterial({color:16777215})],(n=new l.Group).position.y=100,d.add(n),(new l.FontLoader).load("/fonts/"+C+"_bold.typeface.json",function(e){k=e,n.remove(o),h&&function(){if((i=new l.TextGeometry(h,{font:k,size:v,height:m,weight:"bold",curveSegments:x,bevelThickness:b,bevelSize:y,bevelEnabled:_})).computeBoundingBox(),i.computeVertexNormals(),!_)for(var e=m*v*.1,t=0;t<i.faces.length;t++){var s=i.faces[t];if(1==s.materialIndex){for(var d=0;d<s.vertexNormals.length;d++)s.vertexNormals[d].z=0,s.vertexNormals[d].normalize();var c=i.vertices[s.a],p=i.vertices[s.b],u=i.vertices[s.c],f=l.GeometryUtils.triangleArea(c,p,u);if(f>e)for(var d=0;d<s.vertexNormals.length;d++)s.vertexNormals[d].copy(s.normal)}}var g=-.5*(i.boundingBox.max.x-i.boundingBox.min.x);i=(new l.BufferGeometry).fromGeometry(i),(o=new l.Mesh(i,a)).position.x=g,o.position.y=0,o.position.z=m,o.rotation.x=0,o.rotation.y=2*Math.PI,n.add(o),M&&((r=new l.Mesh(i,a)).position.x=g,r.position.y=-w,r.position.z=m,r.rotation.x=Math.PI,r.rotation.y=2*Math.PI,n.add(r))}()});var j=new l.Mesh(new l.PlaneBufferGeometry(1e4,1e4),new l.MeshBasicMaterial({color:16777215,opacity:.5,transparent:!0}));j.position.y=0,j.rotation.x=-Math.PI/2,d.add(j),(c=new l.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),c.setSize(window.innerWidth,window.innerHeight),c.setClearColor("rgb(21,40,96)",1),e.appendChild(c.domElement),t=new Stats,document.addEventListener("mousemove",E,!1),document.addEventListener("touchstart",L,!1),document.addEventListener("touchmove",A,!1),window.addEventListener("resize",B,!1)}(),function e(){requestAnimationFrame(e);!function(){s.position.x+=.05*(T-s.position.x),s.position.y+=.05*(450-s.position.y),s.lookAt(d.position);for(var e=p.geometry.attributes.position.array,t=p.geometry.attributes.scale.array,n=0,o=0,r=0;r<f;r++)for(var i=0;i<g;i++)e[n+1]=50*Math.sin(.3*(r+P))+50*Math.sin(.5*(i+P)),t[o]=8*(Math.sin(.3*(r+P))+1)+8*(Math.sin(.5*(i+P))+1),n+=3,o++;p.geometry.attributes.position.needsUpdate=!0,p.geometry.attributes.scale.needsUpdate=!0,c.render(d,s),P+=.1}();t.update()}()}},p=(n(325),Object(i.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container",attrs:{id:"three"}},[n("script",{attrs:{type:"x-shader/x-vertex",id:"vertexshader"}},[e._v("\n    attribute float scale;\n    void main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = scale * ( 300.0 / - mvPosition.z );\n    gl_Position = projectionMatrix * mvPosition;\n    }\n  ")]),e._v(" "),n("script",{attrs:{type:"x-shader/x-fragment",id:"fragmentshader"}},[e._v("\n    uniform vec3 color;\n    void main() {\n    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;\n    gl_FragColor = vec4( color, 1.0 );\n    }\n  ")]),e._v(" "),n("div",{staticClass:"text"},[e._e(),e._v(" "),n("h1",{staticClass:"title"},[e._v("\n      ip:"+e._s(e.user[0].ip)+" "+e._s(e.user[0].count)+" visit\n    ")]),e._v(" "),n("p",{staticStyle:{color:"#409eff"}},[n("nuxt-link",{attrs:{to:"/user"}},[e._v("Go Home")]),e._v(" "),n("nuxt-link",{attrs:{to:"/model"}},[e._v("ThreeJs model")])],1)],1),e._v(" "),e._m(0)])},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"subtitle"},[n("p",{staticStyle:{float:"right"}},[e._v("人"),n("br"),e._v("间"),n("br"),e._v("草"),n("br"),e._v("木"),n("br"),e._v("深")]),e._v(" "),n("p",{staticStyle:{float:"left",padding:"30px 10px 0 0"}},[e._v("我"),n("br"),e._v("心"),n("br"),e._v("桃"),n("br"),e._v("花"),n("br"),e._v("源")])])}],!1,null,null,null));p.options.__file="index.vue";t.default=p.exports}}]);
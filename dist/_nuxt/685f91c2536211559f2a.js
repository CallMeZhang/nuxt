(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{296:function(e,t,r){"use strict";r.r(t);r(105);var a=r(32),n=r.n(a),i=(r(297),r(307),r(308),r(309),r(310),r(311),r(110),r(161),r(314),r(37),r(102),r(48),r(315),r(289));i.GLTFLoader=function(){function e(e){this.manager=void 0!==e?e:i.DefaultLoadingManager,this.dracoLoader=null}function t(){var e={};return{get:function(t){return e[t]},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},removeAll:function(){e={}}}}e.prototype={constructor:e,crossOrigin:"anonymous",load:function(e,t,r,a){var n,s=this;n=void 0!==this.resourcePath?this.resourcePath:void 0!==this.path?this.path:i.LoaderUtils.extractUrlBase(e),s.manager.itemStart(e);var o=function(t){a?a(t):console.error(t),s.manager.itemError(e),s.manager.itemEnd(e)},l=new i.FileLoader(s.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.load(e,function(r){try{s.parse(r,n,function(r){t(r),s.manager.itemEnd(e)},o)}catch(e){o(e)}},r,o)},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setDRACOLoader:function(e){return this.dracoLoader=e,this},parse:function(e,t,n,u){var p,m={};if("string"==typeof e)p=e;else if(i.LoaderUtils.decodeText(new Uint8Array(e,0,4))===l){try{m[r.KHR_BINARY_GLTF]=new c(e)}catch(e){return void(u&&u(e))}p=m[r.KHR_BINARY_GLTF].content}else p=i.LoaderUtils.decodeText(new Uint8Array(e));var v=JSON.parse(p);if(void 0===v.asset||v.asset.version[0]<2)u&&u(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead."));else{if(v.extensionsUsed)for(var g=0;g<v.extensionsUsed.length;++g){var M=v.extensionsUsed[g],S=v.extensionsRequired||[];switch(M){case r.KHR_LIGHTS_PUNCTUAL:m[M]=new s(v);break;case r.KHR_MATERIALS_UNLIT:m[M]=new o(v);break;case r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:m[M]=new f(v);break;case r.KHR_DRACO_MESH_COMPRESSION:m[M]=new d(v,this.dracoLoader);break;case r.MSFT_TEXTURE_DDS:m[r.MSFT_TEXTURE_DDS]=new a(v);break;case r.KHR_TEXTURE_TRANSFORM:m[r.KHR_TEXTURE_TRANSFORM]=new h(v);break;default:S.indexOf(M)>=0&&console.warn('THREE.GLTFLoader: Unknown extension "'+M+'".')}}var y=new K(v,m,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager});y.parse(function(e,t,r,a,i){var s={scene:e,scenes:t,cameras:r,animations:a,asset:i.asset,parser:y,userData:{}};C(m,s,i),n(s)},u)}}};var r={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function a(){if(!i.DDSLoader)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader");this.name=r.MSFT_TEXTURE_DDS,this.ddsLoader=new i.DDSLoader}function s(e){this.name=r.KHR_LIGHTS_PUNCTUAL;var t=e.extensions&&e.extensions[r.KHR_LIGHTS_PUNCTUAL]||{};this.lightDefs=t.lights||[]}function o(e){this.name=r.KHR_MATERIALS_UNLIT}s.prototype.loadLight=function(e){var t,r=this.lightDefs[e],a=new i.Color(16777215);void 0!==r.color&&a.fromArray(r.color);var n=void 0!==r.range?r.range:0;switch(r.type){case"directional":(t=new i.DirectionalLight(a)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new i.PointLight(a)).distance=n;break;case"spot":(t=new i.SpotLight(a)).distance=n,r.spot=r.spot||{},r.spot.innerConeAngle=void 0!==r.spot.innerConeAngle?r.spot.innerConeAngle:0,r.spot.outerConeAngle=void 0!==r.spot.outerConeAngle?r.spot.outerConeAngle:Math.PI/4,t.angle=r.spot.outerConeAngle,t.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+r.type+'".')}return t.decay=2,void 0!==r.intensity&&(t.intensity=r.intensity),t.name=r.name||"light_"+e,Promise.resolve(t)},o.prototype.getMaterialType=function(e){return i.MeshBasicMaterial},o.prototype.extendParams=function(e,t,r){var a=[];e.color=new i.Color(1,1,1),e.opacity=1;var n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){var s=n.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}void 0!==n.baseColorTexture&&a.push(r.assignTexture(e,"map",n.baseColorTexture))}return Promise.all(a)};var l="glTF",u=12,p={JSON:1313821514,BIN:5130562};function c(e){this.name=r.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,u);if(this.header={magic:i.LoaderUtils.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==l)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");for(var a=new DataView(e,u),n=0;n<a.byteLength;){var s=a.getUint32(n,!0);n+=4;var o=a.getUint32(n,!0);if(n+=4,o===p.JSON){var c=new Uint8Array(e,u+n,s);this.content=i.LoaderUtils.decodeText(c)}else if(o===p.BIN){var d=u+n;this.body=e.slice(d,d+s)}n+=s}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}function d(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=r.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,i.DRACOLoader.getDecoderModule()}function h(e){this.name=r.KHR_TEXTURE_TRANSFORM}function f(){return{name:r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return i.ShaderMaterial},extendParams:function(e,t,r){var a=t.extensions[this.name],n=i.ShaderLib.standard,s=i.UniformsUtils.clone(n.uniforms),o=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join("\n"),l=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join("\n"),u=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),p=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),c=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );","material.specularColor = specularFactor.rgb;"].join("\n"),d=n.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",o).replace("#include <metalnessmap_pars_fragment>",l).replace("#include <roughnessmap_fragment>",u).replace("#include <metalnessmap_fragment>",p).replace("#include <lights_physical_fragment>",c);delete s.roughness,delete s.metalness,delete s.roughnessMap,delete s.metalnessMap,s.specular={value:(new i.Color).setHex(1118481)},s.glossiness={value:.5},s.specularMap={value:null},s.glossinessMap={value:null},e.vertexShader=n.vertexShader,e.fragmentShader=d,e.uniforms=s,e.defines={STANDARD:""},e.color=new i.Color(1,1,1),e.opacity=1;var h=[];if(Array.isArray(a.diffuseFactor)){var f=a.diffuseFactor;e.color.fromArray(f),e.opacity=f[3]}if(void 0!==a.diffuseTexture&&h.push(r.assignTexture(e,"map",a.diffuseTexture)),e.emissive=new i.Color(0,0,0),e.glossiness=void 0!==a.glossinessFactor?a.glossinessFactor:1,e.specular=new i.Color(1,1,1),Array.isArray(a.specularFactor)&&e.specular.fromArray(a.specularFactor),void 0!==a.specularGlossinessTexture){var m=a.specularGlossinessTexture;h.push(r.assignTexture(e,"glossinessMap",m)),h.push(r.assignTexture(e,"specularMap",m))}return Promise.all(h)},createMaterial:function(e){var t=new i.ShaderMaterial({defines:e.defines,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms,fog:!0,lights:!0,opacity:e.opacity,transparent:e.transparent});return t.isGLTFSpecularGlossinessMaterial=!0,t.color=e.color,t.map=void 0===e.map?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=void 0===e.aoMap?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=void 0===e.emissiveMap?null:e.emissiveMap,t.bumpMap=void 0===e.bumpMap?null:e.bumpMap,t.bumpScale=1,t.normalMap=void 0===e.normalMap?null:e.normalMap,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=void 0===e.specularMap?null:e.specularMap,t.specular=e.specular,t.glossinessMap=void 0===e.glossinessMap?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=void 0===e.envMap?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t.extensions.derivatives=!0,t},cloneMaterial:function(e){var t=e.clone();t.isGLTFSpecularGlossinessMaterial=!0;for(var r=this.specularGlossinessParams,a=0,n=r.length;a<n;a++)t[r[a]]=e[r[a]];return t},refreshUniforms:function(e,t,r,a,n,i){if(!0===n.isGLTFSpecularGlossinessMaterial){var s,o=n.uniforms,l=n.defines;o.opacity.value=n.opacity,o.diffuse.value.copy(n.color),o.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),o.map.value=n.map,o.specularMap.value=n.specularMap,o.alphaMap.value=n.alphaMap,o.lightMap.value=n.lightMap,o.lightMapIntensity.value=n.lightMapIntensity,o.aoMap.value=n.aoMap,o.aoMapIntensity.value=n.aoMapIntensity,n.map?s=n.map:n.specularMap?s=n.specularMap:n.displacementMap?s=n.displacementMap:n.normalMap?s=n.normalMap:n.bumpMap?s=n.bumpMap:n.glossinessMap?s=n.glossinessMap:n.alphaMap?s=n.alphaMap:n.emissiveMap&&(s=n.emissiveMap),void 0!==s&&(s.isWebGLRenderTarget&&(s=s.texture),!0===s.matrixAutoUpdate&&s.updateMatrix(),o.uvTransform.value.copy(s.matrix)),n.envMap&&(o.envMap.value=n.envMap,o.envMapIntensity.value=n.envMapIntensity,o.flipEnvMap.value=n.envMap.isCubeTexture?-1:1,o.reflectivity.value=n.reflectivity,o.refractionRatio.value=n.refractionRatio,o.maxMipLevel.value=e.properties.get(n.envMap).__maxMipLevel),o.specular.value.copy(n.specular),o.glossiness.value=n.glossiness,o.glossinessMap.value=n.glossinessMap,o.emissiveMap.value=n.emissiveMap,o.bumpMap.value=n.bumpMap,o.normalMap.value=n.normalMap,o.displacementMap.value=n.displacementMap,o.displacementScale.value=n.displacementScale,o.displacementBias.value=n.displacementBias,null!==o.glossinessMap.value&&void 0===l.USE_GLOSSINESSMAP&&(l.USE_GLOSSINESSMAP="",l.USE_ROUGHNESSMAP=""),null===o.glossinessMap.value&&void 0!==l.USE_GLOSSINESSMAP&&(delete l.USE_GLOSSINESSMAP,delete l.USE_ROUGHNESSMAP)}}}}function m(e,t,r,a){i.Interpolant.call(this,e,t,r,a)}d.prototype.decodePrimitive=function(e,t){var r=this.json,a=this.dracoLoader,n=e.extensions[this.name].bufferView,i=e.extensions[this.name].attributes,s={},o={},l={};for(var u in i)u in b&&(s[b[u]]=i[u]);for(u in e.attributes)if(void 0!==b[u]&&void 0!==i[u]){var p=r.accessors[e.attributes[u]],c=L[p.componentType];l[b[u]]=c,o[b[u]]=!0===p.normalized}return t.getDependency("bufferView",n).then(function(e){return new Promise(function(t){a.decodeDracoFile(e,function(e){for(var r in e.attributes){var a=e.attributes[r],n=o[r];void 0!==n&&(a.normalized=n)}t(e)},s,l)})})},h.prototype.extendTexture=function(e,t){return e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.needsUpdate=!0,e},m.prototype=Object.create(i.Interpolant.prototype),m.prototype.constructor=m,m.prototype.copySampleValue_=function(e){for(var t=this.resultBuffer,r=this.sampleValues,a=this.valueSize,n=e*a*3+a,i=0;i!==a;i++)t[i]=r[n+i];return t},m.prototype.beforeStart_=m.prototype.copySampleValue_,m.prototype.afterEnd_=m.prototype.copySampleValue_,m.prototype.interpolate_=function(e,t,r,a){for(var n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=2*s,l=3*s,u=a-t,p=(r-t)/u,c=p*p,d=c*p,h=e*l,f=h-l,m=-2*d+3*c,v=d-c,g=1-m,M=v-c+p,S=0;S!==s;S++){var y=i[f+S+s],T=i[f+S+o]*u,R=i[h+S+s],L=i[h+S]*u;n[S]=g*y+M*T+m*R+v*L}return n};var v=0,g=1,M=2,S=3,y=4,T=5,R=6,L=(Number,i.Matrix3,i.Matrix4,i.Vector2,i.Vector3,i.Vector4,i.Texture,{5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array}),E={9728:i.NearestFilter,9729:i.LinearFilter,9984:i.NearestMipMapNearestFilter,9985:i.LinearMipMapNearestFilter,9986:i.NearestMipMapLinearFilter,9987:i.LinearMipMapLinearFilter},_={33071:i.ClampToEdgeWrapping,33648:i.MirroredRepeatWrapping,10497:i.RepeatWrapping},A=(i.BackSide,i.FrontSide,i.NeverDepth,i.LessDepth,i.EqualDepth,i.LessEqualDepth,i.GreaterEqualDepth,i.NotEqualDepth,i.GreaterEqualDepth,i.AlwaysDepth,i.AddEquation,i.SubtractEquation,i.ReverseSubtractEquation,i.ZeroFactor,i.OneFactor,i.SrcColorFactor,i.OneMinusSrcColorFactor,i.SrcAlphaFactor,i.OneMinusSrcAlphaFactor,i.DstAlphaFactor,i.OneMinusDstAlphaFactor,i.DstColorFactor,i.OneMinusDstColorFactor,i.SrcAlphaSaturateFactor,{SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16}),b={POSITION:"position",NORMAL:"normal",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},x={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w={CUBICSPLINE:i.InterpolateSmooth,LINEAR:i.InterpolateLinear,STEP:i.InterpolateDiscrete},P="OPAQUE",I="MASK",F="BLEND",U={"image/png":i.RGBAFormat,"image/jpeg":i.RGBFormat};function D(e,t){return"string"!=typeof e||""===e?"":/^(https?:)?\/\//i.test(e)?e:/^data:.*,.*$/i.test(e)?e:/^blob:.*$/i.test(e)?e:t+e}function C(e,t,r){for(var a in r.extensions)void 0===e[a]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[a]=r.extensions[a])}function O(e,t){void 0!==t.extras&&("object"===n()(t.extras)?e.userData=t.extras:console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function G(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(var r=0,a=t.weights.length;r<a;r++)e.morphTargetInfluences[r]=t.weights[r];if(t.extras&&Array.isArray(t.extras.targetNames)){var n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(r=0,a=n.length;r<a;r++)e.morphTargetDictionary[n[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function N(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e)if(e[r]!==t[r])return!1;return!0}function H(e,t){if(e.length!==t.length)return!1;for(var r=0,a=e.length;r<a;r++)if(e[r]!==t[r])return!1;return!0}function B(e,t){for(var a=0,n=e.length;a<n;a++){var i=e[a];if(s=i.primitive,o=t,l=void 0,u=void 0,l=s.extensions?s.extensions[r.KHR_DRACO_MESH_COMPRESSION]:void 0,u=o.extensions?o.extensions[r.KHR_DRACO_MESH_COMPRESSION]:void 0,l&&u?l.bufferView===u.bufferView&&N(l.attributes,u.attributes):s.indices===o.indices&&N(s.attributes,o.attributes))return i.promise}var s,o,l,u;return null}function k(e){if(e.isInterleavedBufferAttribute){for(var t=e.count,r=e.itemSize,a=e.array.slice(0,t*r),n=0;n<t;++n)a[n]=e.getX(n),r>=2&&(a[n+1]=e.getY(n)),r>=3&&(a[n+2]=e.getZ(n)),r>=4&&(a[n+3]=e.getW(n));return new i.BufferAttribute(a,r,e.normalized)}return e.clone()}function K(e,r,a){this.json=e||{},this.extensions=r||{},this.options=a||{},this.cache=new t,this.primitiveCache=[],this.multiplePrimitivesCache=[],this.multiPassGeometryCache=[],this.textureLoader=new i.TextureLoader(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new i.FileLoader(this.options.manager),this.fileLoader.setResponseType("arraybuffer")}function j(e,t,r){var a=t.attributes,n=[];function i(t,a){return r.getDependency("accessor",t).then(function(t){e.addAttribute(a,t)})}for(var s in a){var o=b[s];o&&(o in e.attributes||n.push(i(a[s],o)))}if(void 0!==t.indices&&!e.index){var l=r.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});n.push(l)}return O(e,t),Promise.all(n).then(function(){return void 0!==t.targets?function(e,t,r){for(var a=!1,n=!1,i=0,s=t.length;i<s&&(void 0!==(u=t[i]).POSITION&&(a=!0),void 0!==u.NORMAL&&(n=!0),!a||!n);i++);if(!a&&!n)return Promise.resolve(e);var o=[],l=[];for(i=0,s=t.length;i<s;i++){var u=t[i];if(a){var p=void 0!==u.POSITION?r.getDependency("accessor",u.POSITION).then(function(e){return k(e)}):e.attributes.position;o.push(p)}n&&(p=void 0!==u.NORMAL?r.getDependency("accessor",u.NORMAL).then(function(e){return k(e)}):e.attributes.normal,l.push(p))}return Promise.all([Promise.all(o),Promise.all(l)]).then(function(r){for(var i=r[0],s=r[1],o=0,l=t.length;o<l;o++){var u=t[o],p="morphTarget"+o;if(a&&void 0!==u.POSITION){var c=i[o];c.name=p;for(var d=e.attributes.position,h=0,f=c.count;h<f;h++)c.setXYZ(h,c.getX(h)+d.getX(h),c.getY(h)+d.getY(h),c.getZ(h)+d.getZ(h))}if(n&&void 0!==u.NORMAL){var m=s[o];m.name=p;var v=e.attributes.normal;for(h=0,f=m.count;h<f;h++)m.setXYZ(h,m.getX(h)+v.getX(h),m.getY(h)+v.getY(h),m.getZ(h)+v.getZ(h))}}return a&&(e.morphAttributes.position=i),n&&(e.morphAttributes.normal=s),e})}(e,t.targets,r):e})}return K.prototype.parse=function(e,t){var r=this.json;this.cache.removeAll(),this.markDefs(),this.getMultiDependencies(["scene","animation","camera"]).then(function(t){var a=t.scenes||[],n=a[r.scene||0],i=t.animations||[],s=t.cameras||[];e(n,a,s,i,r)}).catch(t)},K.prototype.markDefs=function(){for(var e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[],a={},n={},i=0,s=t.length;i<s;i++)for(var o=t[i].joints,l=0,u=o.length;l<u;l++)e[o[l]].isBone=!0;for(var p=0,c=e.length;p<c;p++){var d=e[p];void 0!==d.mesh&&(void 0===a[d.mesh]&&(a[d.mesh]=n[d.mesh]=0),a[d.mesh]++,void 0!==d.skin&&(r[d.mesh].isSkinnedMesh=!0))}this.json.meshReferences=a,this.json.meshUses=n},K.prototype.getDependency=function(e,t){var a=e+":"+t,n=this.cache.get(a);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this.loadNode(t);break;case"mesh":n=this.loadMesh(t);break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this.loadBufferView(t);break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this.loadMaterial(t);break;case"texture":n=this.loadTexture(t);break;case"skin":n=this.loadSkin(t);break;case"animation":n=this.loadAnimation(t);break;case"camera":n=this.loadCamera(t);break;case"light":n=this.extensions[r.KHR_LIGHTS_PUNCTUAL].loadLight(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(a,n)}return n},K.prototype.getDependencies=function(e){var t=this.cache.get(e);if(!t){var r=this,a=this.json[e+("mesh"===e?"es":"s")]||[];t=Promise.all(a.map(function(t,a){return r.getDependency(e,a)})),this.cache.add(e,t)}return t},K.prototype.getMultiDependencies=function(e){for(var t={},r=[],a=0,n=e.length;a<n;a++){var i=e[a],s=this.getDependencies(i);s=s.then(function(e,r){t[e]=r}.bind(this,i+("mesh"===i?"es":"s"))),r.push(s)}return Promise.all(r).then(function(){return t})},K.prototype.loadBuffer=function(e){var t=this.json.buffers[e],a=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[r.KHR_BINARY_GLTF].body);var n=this.options;return new Promise(function(e,r){a.load(D(t.uri,n.path),e,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})},K.prototype.loadBufferView=function(e){var t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){var r=t.byteLength||0,a=t.byteOffset||0;return e.slice(a,a+r)})},K.prototype.loadAccessor=function(e){var t=this,r=this.json,a=this.json.accessors[e];if(void 0===a.bufferView&&void 0===a.sparse)return Promise.resolve(null);var n=[];return void 0!==a.bufferView?n.push(this.getDependency("bufferView",a.bufferView)):n.push(null),void 0!==a.sparse&&(n.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(n).then(function(e){var n,s,o=e[0],l=A[a.type],u=L[a.componentType],p=u.BYTES_PER_ELEMENT,c=p*l,d=a.byteOffset||0,h=void 0!==a.bufferView?r.bufferViews[a.bufferView].byteStride:void 0,f=!0===a.normalized;if(h&&h!==c){var m="InterleavedBuffer:"+a.bufferView+":"+a.componentType,v=t.cache.get(m);v||(n=new u(o),v=new i.InterleavedBuffer(n,h/p),t.cache.add(m,v)),s=new i.InterleavedBufferAttribute(v,l,d/p,f)}else n=null===o?new u(a.count*l):new u(o,d,a.count*l),s=new i.BufferAttribute(n,l,f);if(void 0!==a.sparse){var g=A.SCALAR,M=L[a.sparse.indices.componentType],S=a.sparse.indices.byteOffset||0,y=a.sparse.values.byteOffset||0,T=new M(e[1],S,a.sparse.count*g),R=new u(e[2],y,a.sparse.count*l);null!==o&&s.setArray(s.array.slice());for(var E=0,_=T.length;E<_;E++){var b=T[E];if(s.setX(b,R[E*l]),l>=2&&s.setY(b,R[E*l+1]),l>=3&&s.setZ(b,R[E*l+2]),l>=4&&s.setW(b,R[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return s})},K.prototype.loadTexture=function(e){var t,a=this,n=this.json,s=this.options,o=this.textureLoader,l=window.URL||window.webkitURL,u=n.textures[e],p=u.extensions||{},c=(t=p[r.MSFT_TEXTURE_DDS]?n.images[p[r.MSFT_TEXTURE_DDS].source]:n.images[u.source]).uri,d=!1;return void 0!==t.bufferView&&(c=a.getDependency("bufferView",t.bufferView).then(function(e){d=!0;var r=new Blob([e],{type:t.mimeType});return c=l.createObjectURL(r)})),Promise.resolve(c).then(function(e){var t=i.Loader.Handlers.get(e);return t||(t=p[r.MSFT_TEXTURE_DDS]?a.extensions[r.MSFT_TEXTURE_DDS].ddsLoader:o),new Promise(function(r,a){t.load(D(e,s.path),r,void 0,a)})}).then(function(e){!0===d&&l.revokeObjectURL(c),e.flipY=!1,void 0!==u.name&&(e.name=u.name),t.mimeType in U&&(e.format=U[t.mimeType]);var r=(n.samplers||{})[u.sampler]||{};return e.magFilter=E[r.magFilter]||i.LinearFilter,e.minFilter=E[r.minFilter]||i.LinearMipMapLinearFilter,e.wrapS=_[r.wrapS]||i.RepeatWrapping,e.wrapT=_[r.wrapT]||i.RepeatWrapping,e})},K.prototype.assignTexture=function(e,t,a){var n=this;return this.getDependency("texture",a.index).then(function(i){if(n.extensions[r.KHR_TEXTURE_TRANSFORM]){var s=void 0!==a.extensions?a.extensions[r.KHR_TEXTURE_TRANSFORM]:void 0;s&&(i=n.extensions[r.KHR_TEXTURE_TRANSFORM].extendTexture(i,s))}e[t]=i})},K.prototype.loadMaterial=function(e){var t,a=this.json,n=this.extensions,s=a.materials[e],o={},l=s.extensions||{},u=[];if(l[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var p=n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];t=p.getMaterialType(s),u.push(p.extendParams(o,s,this))}else if(l[r.KHR_MATERIALS_UNLIT]){var c=n[r.KHR_MATERIALS_UNLIT];t=c.getMaterialType(s),u.push(c.extendParams(o,s,this))}else{t=i.MeshStandardMaterial;var d=s.pbrMetallicRoughness||{};if(o.color=new i.Color(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){var h=d.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}void 0!==d.baseColorTexture&&u.push(this.assignTexture(o,"map",d.baseColorTexture)),o.metalness=void 0!==d.metallicFactor?d.metallicFactor:1,o.roughness=void 0!==d.roughnessFactor?d.roughnessFactor:1,void 0!==d.metallicRoughnessTexture&&(u.push(this.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),u.push(this.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture)))}!0===s.doubleSided&&(o.side=i.DoubleSide);var f=s.alphaMode||P;return f===F?o.transparent=!0:(o.transparent=!1,f===I&&(o.alphaTest=void 0!==s.alphaCutoff?s.alphaCutoff:.5)),void 0!==s.normalTexture&&t!==i.MeshBasicMaterial&&(u.push(this.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new i.Vector2(1,1),void 0!==s.normalTexture.scale&&o.normalScale.set(s.normalTexture.scale,s.normalTexture.scale)),void 0!==s.occlusionTexture&&t!==i.MeshBasicMaterial&&(u.push(this.assignTexture(o,"aoMap",s.occlusionTexture)),void 0!==s.occlusionTexture.strength&&(o.aoMapIntensity=s.occlusionTexture.strength)),void 0!==s.emissiveFactor&&t!==i.MeshBasicMaterial&&(o.emissive=(new i.Color).fromArray(s.emissiveFactor)),void 0!==s.emissiveTexture&&t!==i.MeshBasicMaterial&&u.push(this.assignTexture(o,"emissiveMap",s.emissiveTexture)),Promise.all(u).then(function(){var e;return e=t===i.ShaderMaterial?n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):new t(o),void 0!==s.name&&(e.name=s.name),e.normalScale&&(e.normalScale.y=-e.normalScale.y),e.map&&(e.map.encoding=i.sRGBEncoding),e.emissiveMap&&(e.emissiveMap.encoding=i.sRGBEncoding),e.specularMap&&(e.specularMap.encoding=i.sRGBEncoding),O(e,s),s.extensions&&C(n,e,s),e})},K.prototype.loadGeometries=function(e){var t,a=this,n=this.extensions,s=this.primitiveCache,o=function(e){if(e.length<2)return!1;var t=e[0],a=t.targets||[];if(void 0===t.indices)return!1;for(var n=1,i=e.length;n<i;n++){var s=e[n];if(t.mode!==s.mode)return!1;if(void 0===s.indices)return!1;if(s.extensions&&s.extensions[r.KHR_DRACO_MESH_COMPRESSION])return!1;if(!N(t.attributes,s.attributes))return!1;var o=s.targets||[];if(a.length!==o.length)return!1;for(var l=0,u=a.length;l<u;l++)if(!N(a[l],o[l]))return!1}return!0}(e);function l(e){return n[r.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,a).then(function(t){return j(t,e,a)})}o&&(t=e,e=[e[0]]);for(var u=[],p=0,c=e.length;p<c;p++){var d,h=e[p],f=B(s,h);if(f)u.push(f);else d=h.extensions&&h.extensions[r.KHR_DRACO_MESH_COMPRESSION]?l(h):j(new i.BufferGeometry,h,a),s.push({primitive:h,promise:d}),u.push(d)}return Promise.all(u).then(function(r){if(o){var n=r[0];if(null!==(h=function(e,t,r){for(var a=0,n=e.length;a<n;a++){var i=e[a];if(t===i.baseGeometry&&H(r,i.primitives))return i.geometry}return null}(d=a.multiPassGeometryCache,n,t)))return[h.geometry];var s=new i.BufferGeometry;for(var l in s.name=n.name,s.userData=n.userData,n.attributes)s.addAttribute(l,n.attributes[l]);for(var l in n.morphAttributes)s.morphAttributes[l]=n.morphAttributes[l];for(var u=[],p=0,c=t.length;p<c;p++)u.push(a.getDependency("accessor",t[p].indices));return Promise.all(u).then(function(e){for(var r=[],a=0,i=0,o=t.length;i<o;i++){for(var l=e[i],u=0,p=l.count;u<p;u++)r.push(l.array[u]);s.addGroup(a,l.count,i),a+=l.count}return s.setIndex(r),d.push({geometry:s,baseGeometry:n,primitives:t}),[s]})}if(r.length>1&&void 0!==i.BufferGeometryUtils){for(p=1,c=e.length;p<c;p++)if(e[0].mode!==e[p].mode)return r;var d,h;if(h=function(e,t){for(var r=0,a=e.length;r<a;r++){var n=e[r];if(H(t,n.baseGeometries))return n.geometry}return null}(d=a.multiplePrimitivesCache,r)){if(null!==h.geometry)return[h.geometry]}else{s=i.BufferGeometryUtils.mergeBufferGeometries(r,!0);if(d.push({geometry:s,baseGeometries:r}),null!==s)return[s]}}return r})},K.prototype.loadMesh=function(e){for(var t=this,a=this.json,n=this.extensions,s=a.meshes[e],o=s.primitives,l=[],u=0,p=o.length;u<p;u++){var c=void 0===o[u].material?new i.MeshStandardMaterial({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:i.FrontSide}):this.getDependency("material",o[u].material);l.push(c)}return Promise.all(l).then(function(a){return t.loadGeometries(o).then(function(l){for(var u=1===l.length&&l[0].groups.length>0,p=[],c=0,d=l.length;c<d;c++){var h,f=l[c],m=o[c],L=u?a:a[c];if(m.mode===y||m.mode===T||m.mode===R||void 0===m.mode)h=!0===s.isSkinnedMesh?new i.SkinnedMesh(f,L):new i.Mesh(f,L),m.mode===T?h.drawMode=i.TriangleStripDrawMode:m.mode===R&&(h.drawMode=i.TriangleFanDrawMode);else if(m.mode===g)h=new i.LineSegments(f,L);else if(m.mode===S)h=new i.Line(f,L);else if(m.mode===M)h=new i.LineLoop(f,L);else{if(m.mode!==v)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);h=new i.Points(f,L)}Object.keys(h.geometry.morphAttributes).length>0&&G(h,s),h.name=s.name||"mesh_"+e,l.length>1&&(h.name+="_"+c),O(h,s),p.push(h);for(var E=u?h.material:[h.material],_=void 0!==f.attributes.color,A=void 0===f.attributes.normal,b=!0===h.isSkinnedMesh,x=Object.keys(f.morphAttributes).length>0,w=x&&void 0!==f.morphAttributes.normal,P=0,I=E.length;P<I;P++){L=E[P];if(h.isPoints){var F="PointsMaterial:"+L.uuid,U=t.cache.get(F);U||(U=new i.PointsMaterial,i.Material.prototype.copy.call(U,L),U.color.copy(L.color),U.map=L.map,U.lights=!1,t.cache.add(F,U)),L=U}else if(h.isLine){F="LineBasicMaterial:"+L.uuid;var D=t.cache.get(F);D||(D=new i.LineBasicMaterial,i.Material.prototype.copy.call(D,L),D.color.copy(L.color),D.lights=!1,t.cache.add(F,D)),L=D}if(_||A||b||x){F="ClonedMaterial:"+L.uuid+":";L.isGLTFSpecularGlossinessMaterial&&(F+="specular-glossiness:"),b&&(F+="skinning:"),_&&(F+="vertex-colors:"),A&&(F+="flat-shading:"),x&&(F+="morph-targets:"),w&&(F+="morph-normals:");var C=t.cache.get(F);C||(C=L.isGLTFSpecularGlossinessMaterial?n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(L):L.clone(),b&&(C.skinning=!0),_&&(C.vertexColors=i.VertexColors),A&&(C.flatShading=!0),x&&(C.morphTargets=!0),w&&(C.morphNormals=!0),t.cache.add(F,C)),L=C}E[P]=L,L.aoMap&&void 0===f.attributes.uv2&&void 0!==f.attributes.uv&&(console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap."),f.addAttribute("uv2",new i.BufferAttribute(f.attributes.uv.array,2))),L.isGLTFSpecularGlossinessMaterial&&(h.onBeforeRender=n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms)}h.material=u?E:E[0]}if(1===p.length)return p[0];var N=new i.Group;for(c=0,d=p.length;c<d;c++)N.add(p[c]);return N})})},K.prototype.loadCamera=function(e){var t,r=this.json.cameras[e],a=r[r.type];if(a)return"perspective"===r.type?t=new i.PerspectiveCamera(i.Math.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):"orthographic"===r.type&&(t=new i.OrthographicCamera(a.xmag/-2,a.xmag/2,a.ymag/2,a.ymag/-2,a.znear,a.zfar)),void 0!==r.name&&(t.name=r.name),O(t,r),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")},K.prototype.loadSkin=function(e){var t=this.json.skins[e],r={joints:t.joints};return void 0===t.inverseBindMatrices?Promise.resolve(r):this.getDependency("accessor",t.inverseBindMatrices).then(function(e){return r.inverseBindMatrices=e,r})},K.prototype.loadAnimation=function(e){for(var t=this.json.animations[e],r=[],a=[],n=[],s=[],o=[],l=0,u=t.channels.length;l<u;l++){var p=t.channels[l],c=t.samplers[p.sampler],d=p.target,h=void 0!==d.node?d.node:d.id,f=void 0!==t.parameters?t.parameters[c.input]:c.input,v=void 0!==t.parameters?t.parameters[c.output]:c.output;r.push(this.getDependency("node",h)),a.push(this.getDependency("accessor",f)),n.push(this.getDependency("accessor",v)),s.push(c),o.push(d)}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(n),Promise.all(s),Promise.all(o)]).then(function(r){for(var a=r[0],n=r[1],s=r[2],o=r[3],l=r[4],u=[],p=0,c=a.length;p<c;p++){var d=a[p],h=n[p],f=s[p],v=o[p],g=l[p];if(void 0!==d){var M;switch(d.updateMatrix(),d.matrixAutoUpdate=!0,x[g.path]){case x.weights:M=i.NumberKeyframeTrack;break;case x.rotation:M=i.QuaternionKeyframeTrack;break;case x.position:case x.scale:default:M=i.VectorKeyframeTrack}var S=d.name?d.name:d.uuid,y=void 0!==v.interpolation?w[v.interpolation]:i.InterpolateLinear,T=[];x[g.path]===x.weights?d.traverse(function(e){!0===e.isMesh&&e.morphTargetInfluences&&T.push(e.name?e.name:e.uuid)}):T.push(S);for(var R=0,L=T.length;R<L;R++){var E=new M(T[R]+"."+x[g.path],i.AnimationUtils.arraySlice(h.array,0),i.AnimationUtils.arraySlice(f.array,0),y);"CUBICSPLINE"===v.interpolation&&(E.createInterpolant=function(e){return new m(this.times,this.values,this.getValueSize()/3,e)},E.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),u.push(E)}}}var _=void 0!==t.name?t.name:"animation_"+e;return new i.AnimationClip(_,void 0,u)})},K.prototype.loadNode=function(e){var t=this.json,a=this.extensions,n=this,s=t.meshReferences,o=t.meshUses,l=t.nodes[e];return new Promise(function(e){!0===l.isBone?e(new i.Bone):void 0!==l.mesh?n.getDependency("mesh",l.mesh).then(function(t){var r;if(s[l.mesh]>1){var a=o[l.mesh]++;(r=t.clone()).name+="_instance_"+a,r.onBeforeRender=t.onBeforeRender;for(var n=0,i=r.children.length;n<i;n++)r.children[n].name+="_instance_"+a,r.children[n].onBeforeRender=t.children[n].onBeforeRender}else r=t;e(r)}):void 0!==l.camera?n.getDependency("camera",l.camera).then(e):l.extensions&&l.extensions[r.KHR_LIGHTS_PUNCTUAL]&&void 0!==l.extensions[r.KHR_LIGHTS_PUNCTUAL].light?n.getDependency("light",l.extensions[r.KHR_LIGHTS_PUNCTUAL].light).then(e):e(new i.Object3D)}).then(function(e){if(void 0!==l.name&&(e.name=i.PropertyBinding.sanitizeNodeName(l.name)),O(e,l),l.extensions&&C(a,e,l),void 0!==l.matrix){var t=new i.Matrix4;t.fromArray(l.matrix),e.applyMatrix(t)}else void 0!==l.translation&&e.position.fromArray(l.translation),void 0!==l.rotation&&e.quaternion.fromArray(l.rotation),void 0!==l.scale&&e.scale.fromArray(l.scale);return e})},K.prototype.loadScene=function(){function e(t,r,a,n){var s=a.nodes[t];return n.getDependency("node",t).then(function(e){return void 0===s.skin?e:n.getDependency("skin",s.skin).then(function(e){for(var r=[],a=0,i=(t=e).joints.length;a<i;a++)r.push(n.getDependency("node",t.joints[a]));return Promise.all(r)}).then(function(r){for(var a=!0===e.isGroup?e.children:[e],n=0,s=a.length;n<s;n++){for(var o=a[n],l=[],u=[],p=0,c=r.length;p<c;p++){var d=r[p];if(d){l.push(d);var h=new i.Matrix4;void 0!==t.inverseBindMatrices&&h.fromArray(t.inverseBindMatrices.array,16*p),u.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[p])}o.bind(new i.Skeleton(l,u),o.matrixWorld)}return e});var t}).then(function(t){r.add(t);var i=[];if(s.children)for(var o=s.children,l=0,u=o.length;l<u;l++){var p=o[l];i.push(e(p,t,a,n))}return Promise.all(i)})}return function(t){var r=this.json,a=this.extensions,n=this.json.scenes[t],s=new i.Scene;void 0!==n.name&&(s.name=n.name),O(s,n),n.extensions&&C(a,s,n);for(var o=n.nodes||[],l=[],u=0,p=o.length;u<p;u++)l.push(e(o[u],s,r,this));return Promise.all(l).then(function(){return s})}}(),e}()}}]);
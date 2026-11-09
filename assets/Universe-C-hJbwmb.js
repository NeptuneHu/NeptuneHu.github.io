var Vi=Object.defineProperty;var Wi=(t,e,i)=>e in t?Vi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Jt=(t,e,i)=>Wi(t,typeof e!="symbol"?e+"":e,i);import{b as S,j as d,u as Si,c as ye,C as Xi,d as $i}from"./scene-tools-gIc_NJH9.js";import{u as Yi}from"./index-7cY8f13P.js";import{V as $,M as Ki,f as Ri,k as Zi,i as Je,D as Et,l as W,m as _i,Q as Qi,n as Ji,o as ei,p as es,q as ts}from"./three-CenKRY5A.js";function qe(t){let e=t[0],i=t[1],s=t[2];return Math.sqrt(e*e+i*i+s*s)}function Mt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function is(t,e,i,s){return t[0]=e,t[1]=i,t[2]=s,t}function ti(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}function ii(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t}function ss(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t}function rs(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],t}function mt(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function ns(t,e){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(i*i+s*s+r*r)}function as(t,e){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2];return i*i+s*s+r*r}function si(t){let e=t[0],i=t[1],s=t[2];return e*e+i*i+s*s}function ls(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function os(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function bt(t,e){let i=e[0],s=e[1],r=e[2],n=i*i+s*s+r*r;return n>0&&(n=1/Math.sqrt(n)),t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function Fi(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ri(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[0],l=i[1],o=i[2];return t[0]=r*o-n*l,t[1]=n*a-s*o,t[2]=s*l-r*a,t}function hs(t,e,i,s){let r=e[0],n=e[1],a=e[2];return t[0]=r+s*(i[0]-r),t[1]=n+s*(i[1]-n),t[2]=a+s*(i[2]-a),t}function cs(t,e,i,s,r){const n=Math.exp(-s*r);let a=e[0],l=e[1],o=e[2];return t[0]=i[0]+(a-i[0])*n,t[1]=i[1]+(l-i[1])*n,t[2]=i[2]+(o-i[2])*n,t}function us(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[3]*s+i[7]*r+i[11]*n+i[15];return a=a||1,t[0]=(i[0]*s+i[4]*r+i[8]*n+i[12])/a,t[1]=(i[1]*s+i[5]*r+i[9]*n+i[13])/a,t[2]=(i[2]*s+i[6]*r+i[10]*n+i[14])/a,t}function fs(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[3]*s+i[7]*r+i[11]*n+i[15];return a=a||1,t[0]=(i[0]*s+i[4]*r+i[8]*n)/a,t[1]=(i[1]*s+i[5]*r+i[9]*n)/a,t[2]=(i[2]*s+i[6]*r+i[10]*n)/a,t}function ds(t,e,i){let s=e[0],r=e[1],n=e[2];return t[0]=s*i[0]+r*i[3]+n*i[6],t[1]=s*i[1]+r*i[4]+n*i[7],t[2]=s*i[2]+r*i[5]+n*i[8],t}function ms(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[0],l=i[1],o=i[2],h=i[3],c=l*n-o*r,f=o*s-a*n,m=a*r-l*s,p=l*m-o*f,u=o*c-a*m,v=a*f-l*c,y=h*2;return c*=y,f*=y,m*=y,p*=2,u*=2,v*=2,t[0]=s+c+p,t[1]=r+f+u,t[2]=n+m+v,t}const ps=(function(){const t=[0,0,0],e=[0,0,0];return function(i,s){Mt(t,i),Mt(e,s),bt(t,t),bt(e,e);let r=Fi(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}})();function gs(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class ae extends Array{constructor(e=0,i=e,s=e){return super(e,i,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,i=e,s=e){return e.length?this.copy(e):(is(this,e,i,s),this)}copy(e){return Mt(this,e),this}add(e,i){return i?ti(this,e,i):ti(this,this,e),this}sub(e,i){return i?ii(this,e,i):ii(this,this,e),this}multiply(e){return e.length?ss(this,this,e):mt(this,this,e),this}divide(e){return e.length?rs(this,this,e):mt(this,this,1/e),this}inverse(e=this){return os(this,e),this}len(){return qe(this)}distance(e){return e?ns(this,e):qe(this)}squaredLen(){return si(this)}squaredDistance(e){return e?as(this,e):si(this)}negate(e=this){return ls(this,e),this}cross(e,i){return i?ri(this,e,i):ri(this,this,e),this}scale(e){return mt(this,this,e),this}normalize(){return bt(this,this),this}dot(e){return Fi(this,e)}equals(e){return gs(this,e)}applyMatrix3(e){return ds(this,this,e),this}applyMatrix4(e){return us(this,this,e),this}scaleRotateMatrix4(e){return fs(this,this,e),this}applyQuaternion(e){return ms(this,this,e),this}angle(e){return ps(this,e)}lerp(e,i){return hs(this,this,e,i),this}smoothLerp(e,i,s){return cs(this,this,e,i,s),this}clone(){return new ae(this[0],this[1],this[2])}fromArray(e,i=0){return this[0]=e[i],this[1]=e[i+1],this[2]=e[i+2],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e}transformDirection(e){const i=this[0],s=this[1],r=this[2];return this[0]=e[0]*i+e[4]*s+e[8]*r,this[1]=e[1]*i+e[5]*s+e[9]*r,this[2]=e[2]*i+e[6]*s+e[10]*r,this.normalize()}}const ni=new ae;let vs=1,xs=1,ai=!1;class Ai{constructor(e,i={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=i,this.id=vs++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in i)this.addAttribute(s,i[s])}addAttribute(e,i){if(this.attributes[e]=i,i.id=xs++,i.size=i.size||1,i.type=i.type||(i.data.constructor===Float32Array?this.gl.FLOAT:i.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),i.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,i.normalized=i.normalized||!1,i.stride=i.stride||0,i.offset=i.offset||0,i.count=i.count||(i.stride?i.data.byteLength/i.stride:i.data.length/i.size),i.divisor=i.instanced||0,i.needsUpdate=!1,i.usage=i.usage||this.gl.STATIC_DRAW,i.buffer||this.updateAttribute(i),i.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==i.count*i.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,i.count*i.divisor);this.instancedCount=i.count*i.divisor}else e==="index"?this.drawRange.count=i.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,i.count))}updateAttribute(e){const i=!e.buffer;i&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),i?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((i,{name:s,type:r})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const n=this.attributes[s];this.gl.bindBuffer(n.target,n.buffer),this.glState.boundBuffer=n.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const l=n.size/a,o=a===1?0:a*a*4,h=a===1?0:a*4;for(let c=0;c<a;c++)this.gl.vertexAttribPointer(i+c,l,n.type,n.normalized,n.stride+o,n.offset+c*h),this.gl.enableVertexAttribArray(i+c),this.gl.renderer.vertexAttribDivisor(i+c,n.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:i=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((n,{name:a})=>{const l=this.attributes[a];l.needsUpdate&&this.updateAttribute(l)});let s=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(i,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(i,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!ai)return console.warn("No position buffer data found to compute bounds"),ai=!0}computeBoundingBox(e){e||(e=this.getPosition());const i=e.data,s=e.size;this.bounds||(this.bounds={min:new ae,max:new ae,center:new ae,scale:new ae,radius:1/0});const r=this.bounds.min,n=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;r.set(1/0),n.set(-1/0);for(let o=0,h=i.length;o<h;o+=s){const c=i[o],f=i[o+1],m=i[o+2];r.x=Math.min(c,r.x),r.y=Math.min(f,r.y),r.z=Math.min(m,r.z),n.x=Math.max(c,n.x),n.y=Math.max(f,n.y),n.z=Math.max(m,n.z)}l.sub(n,r),a.add(r,n).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const i=e.data,s=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let n=0,a=i.length;n<a;n+=s)ni.fromArray(i,n),r=Math.max(r,this.bounds.center.squaredDistance(ni));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let ys=1;const li={};class Ke{constructor(e,{vertex:i,fragment:s,uniforms:r={},transparent:n=!1,cullFace:a=e.BACK,frontFace:l=e.CCW,depthTest:o=!0,depthWrite:h=!0,depthFunc:c=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=ys++,i||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=n,this.cullFace=a,this.frontFace=l,this.depthTest=o,this.depthWrite=h,this.depthFunc=c,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:i,fragment:s})}setShaders({vertex:e,fragment:i}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${oi(e)}`)),i&&(this.gl.shaderSource(this.fragmentShader,i),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${oi(i)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<s;a++){let l=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));const o=l.name.match(/(\w+)/g);l.uniformName=o[0],l.nameComponents=o.slice(1)}this.attributeLocations=new Map;const r=[],n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const l=this.gl.getActiveAttrib(this.program,a),o=this.gl.getAttribLocation(this.program,l.name);o!==-1&&(r[o]=l.name,this.attributeLocations.set(l,o))}this.attributeOrder=r.join("")}setBlendFunc(e,i,s,r){this.blendFunc.src=e,this.blendFunc.dst=i,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,i){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=i}setStencilFunc(e,i,s){this.stencilRef=i,this.stencilFunc.func=e,this.stencilFunc.ref=i,this.stencilFunc.mask=s}setStencilOp(e,i,s){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=i,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let i=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,n)=>{let a=this.uniforms[n.uniformName];for(const l of n.nameComponents){if(!a)break;if(l in a)a=a[l];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return hi(`Active uniform ${n.name} has not been supplied`);if(a&&a.value===void 0)return hi(`${n.name} uniform is missing a value parameter`);if(a.value.texture)return i=i+1,a.value.update(i),pt(this.gl,n.type,r,i);if(a.value.length&&a.value[0].texture){const l=[];return a.value.forEach(o=>{i=i+1,o.update(i),l.push(i)}),pt(this.gl,n.type,r,l)}pt(this.gl,n.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function pt(t,e,i,s){s=s.length?ws(s):s;const r=t.renderer.state.uniformLocations.get(i);if(s.length)if(r===void 0||r.length!==s.length)t.renderer.state.uniformLocations.set(i,s.slice(0));else{if(Ms(r,s))return;r.set?r.set(s):bs(r,s),t.renderer.state.uniformLocations.set(i,r)}else{if(r===s)return;t.renderer.state.uniformLocations.set(i,s)}switch(e){case 5126:return s.length?t.uniform1fv(i,s):t.uniform1f(i,s);case 35664:return t.uniform2fv(i,s);case 35665:return t.uniform3fv(i,s);case 35666:return t.uniform4fv(i,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?t.uniform1iv(i,s):t.uniform1i(i,s);case 35671:case 35667:return t.uniform2iv(i,s);case 35672:case 35668:return t.uniform3iv(i,s);case 35673:case 35669:return t.uniform4iv(i,s);case 35674:return t.uniformMatrix2fv(i,!1,s);case 35675:return t.uniformMatrix3fv(i,!1,s);case 35676:return t.uniformMatrix4fv(i,!1,s)}}function oi(t){let e=t.split(`
`);for(let i=0;i<e.length;i++)e[i]=i+1+": "+e[i];return e.join(`
`)}function ws(t){const e=t.length,i=t[0].length;if(i===void 0)return t;const s=e*i;let r=li[s];r||(li[s]=r=new Float32Array(s));for(let n=0;n<e;n++)r.set(t[n],n*i);return r}function Ms(t,e){if(t.length!==e.length)return!1;for(let i=0,s=t.length;i<s;i++)if(t[i]!==e[i])return!1;return!0}function bs(t,e){for(let i=0,s=t.length;i<s;i++)t[i]=e[i]}let gt=0;function hi(t){gt>100||(console.warn(t),gt++,gt>100&&console.warn("More than 100 program warnings - stopping logs."))}const vt=new ae;let Es=1;class Ts{constructor({canvas:e=document.createElement("canvas"),width:i=300,height:s=150,dpr:r=1,alpha:n=!1,depth:a=!0,stencil:l=!1,antialias:o=!1,premultipliedAlpha:h=!1,preserveDrawingBuffer:c=!1,powerPreference:f="default",autoClear:m=!0,webgl:p=2}={}){const u={alpha:n,depth:a,stencil:l,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:f};this.dpr=r,this.alpha=n,this.color=!0,this.depth=a,this.stencil=l,this.premultipliedAlpha=h,this.autoClear=m,this.id=Es++,p===2&&(this.gl=e.getContext("webgl2",u)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",u)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(i,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,i){this.width=e,this.height=i,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=i*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:i+"px"})}setViewport(e,i,s=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===i||(this.state.viewport.width=e,this.state.viewport.height=i,this.state.viewport.x=s,this.state.viewport.y=r,this.gl.viewport(s,r,e,i))}setScissor(e,i,s=0,r=0){this.gl.scissor(s,r,e,i)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,i,s,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===i&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=i,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=r,s!==void 0?this.gl.blendFuncSeparate(e,i,s,r):this.gl.blendFunc(e,i))}setBlendEquation(e,i){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===i)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=i,i!==void 0?this.gl.blendEquationSeparate(e,i):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,i,s){this.state.stencilFunc===e&&this.state.stencilRef===i&&this.state.stencilFuncMask===s||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=i||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(e||this.gl.ALWAYS,i||0,s||0))}setStencilOp(e,i,s){this.state.stencilFail===e&&this.state.stencilDepthFail===i&&this.state.stencilDepthPass===s||(this.state.stencilFail=e,this.state.stencilDepthFail=i,this.state.stencilDepthPass=s,this.gl.stencilOp(e,i,s))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:i=null}={}){this.state.framebuffer!==i&&(this.state.framebuffer=i,this.gl.bindFramebuffer(e,i))}getExtension(e,i,s){return i&&this.gl[i]?this.gl[i].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),i?this.extensions[e]?this.extensions[e][s].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program.id!==i.program.id?e.program.id-i.program.id:e.zDepth!==i.zDepth?e.zDepth-i.zDepth:i.id-e.id}sortTransparent(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.zDepth!==i.zDepth?i.zDepth-e.zDepth:i.id-e.id}sortUI(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program.id!==i.program.id?e.program.id-i.program.id:i.id-e.id}getRenderList({scene:e,camera:i,frustumCull:s,sort:r}){let n=[];if(i&&s&&i.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(s&&a.frustumCulled&&i&&!i.frustumIntersectsMesh(a)||n.push(a))}),r){const a=[],l=[],o=[];n.forEach(h=>{h.program.transparent?h.program.depthTest?l.push(h):o.push(h):a.push(h),h.zDepth=0,!(h.renderOrder!==0||!h.program.depthTest||!i)&&(h.worldMatrix.getTranslation(vt),vt.applyMatrix4(i.projectionViewMatrix),h.zDepth=vt.z)}),a.sort(this.sortOpaque),l.sort(this.sortTransparent),o.sort(this.sortUI),n=a.concat(l,o)}return n}render({scene:e,camera:i,target:s=null,update:r=!0,sort:n=!0,frustumCull:a=!0,clear:l}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),i&&i.updateMatrixWorld(),this.getRenderList({scene:e,camera:i,frustumCull:a,sort:n}).forEach(h=>{h.draw({camera:i})})}}function Ss(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Rs(t,e,i,s,r){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t}function _s(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i*i+s*s+r*r+n*n;return a>0&&(a=1/Math.sqrt(a)),t[0]=i*a,t[1]=s*a,t[2]=r*a,t[3]=n*a,t}function Fs(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function As(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function zs(t,e,i){i=i*.5;let s=Math.sin(i);return t[0]=s*e[0],t[1]=s*e[1],t[2]=s*e[2],t[3]=Math.cos(i),t}function ci(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=i[0],o=i[1],h=i[2],c=i[3];return t[0]=s*c+a*l+r*h-n*o,t[1]=r*c+a*o+n*l-s*h,t[2]=n*c+a*h+s*o-r*l,t[3]=a*c-s*l-r*o-n*h,t}function Cs(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=s*o+a*l,t[1]=r*o+n*l,t[2]=n*o-r*l,t[3]=a*o-s*l,t}function Ps(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=s*o-n*l,t[1]=r*o+a*l,t[2]=n*o+s*l,t[3]=a*o-r*l,t}function Ds(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=s*o+r*l,t[1]=r*o-s*l,t[2]=n*o+a*l,t[3]=a*o-n*l,t}function ks(t,e,i,s){let r=e[0],n=e[1],a=e[2],l=e[3],o=i[0],h=i[1],c=i[2],f=i[3],m,p,u,v,y;return p=r*o+n*h+a*c+l*f,p<0&&(p=-p,o=-o,h=-h,c=-c,f=-f),1-p>1e-6?(m=Math.acos(p),u=Math.sin(m),v=Math.sin((1-s)*m)/u,y=Math.sin(s*m)/u):(v=1-s,y=s),t[0]=v*r+y*o,t[1]=v*n+y*h,t[2]=v*a+y*c,t[3]=v*l+y*f,t}function Ls(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i*i+s*s+r*r+n*n,l=a?1/a:0;return t[0]=-i*l,t[1]=-s*l,t[2]=-r*l,t[3]=n*l,t}function Ns(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Bs(t,e){let i=e[0]+e[4]+e[8],s;if(i>0)s=Math.sqrt(i+1),t[3]=.5*s,s=.5/s,t[0]=(e[5]-e[7])*s,t[1]=(e[6]-e[2])*s,t[2]=(e[1]-e[3])*s;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let n=(r+1)%3,a=(r+2)%3;s=Math.sqrt(e[r*3+r]-e[n*3+n]-e[a*3+a]+1),t[r]=.5*s,s=.5/s,t[3]=(e[n*3+a]-e[a*3+n])*s,t[n]=(e[n*3+r]+e[r*3+n])*s,t[a]=(e[a*3+r]+e[r*3+a])*s}return t}function js(t,e,i="YXZ"){let s=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),n=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),o=Math.cos(e[2]*.5);return i==="XYZ"?(t[0]=s*a*o+r*n*l,t[1]=r*n*o-s*a*l,t[2]=r*a*l+s*n*o,t[3]=r*a*o-s*n*l):i==="YXZ"?(t[0]=s*a*o+r*n*l,t[1]=r*n*o-s*a*l,t[2]=r*a*l-s*n*o,t[3]=r*a*o+s*n*l):i==="ZXY"?(t[0]=s*a*o-r*n*l,t[1]=r*n*o+s*a*l,t[2]=r*a*l+s*n*o,t[3]=r*a*o-s*n*l):i==="ZYX"?(t[0]=s*a*o-r*n*l,t[1]=r*n*o+s*a*l,t[2]=r*a*l-s*n*o,t[3]=r*a*o+s*n*l):i==="YZX"?(t[0]=s*a*o+r*n*l,t[1]=r*n*o+s*a*l,t[2]=r*a*l-s*n*o,t[3]=r*a*o-s*n*l):i==="XZY"&&(t[0]=s*a*o-r*n*l,t[1]=r*n*o-s*a*l,t[2]=r*a*l+s*n*o,t[3]=r*a*o+s*n*l),t}const Is=Ss,Os=Rs,Us=Fs,Hs=_s;class Gs extends Array{constructor(e=0,i=0,s=0,r=1){super(e,i,s,r),this.onChange=()=>{},this._target=this;const n=["0","1","2","3"];return new Proxy(this,{set(a,l){const o=Reflect.set(...arguments);return o&&n.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return As(this._target),this.onChange(),this}set(e,i,s,r){return e.length?this.copy(e):(Os(this._target,e,i,s,r),this.onChange(),this)}rotateX(e){return Cs(this._target,this._target,e),this.onChange(),this}rotateY(e){return Ps(this._target,this._target,e),this.onChange(),this}rotateZ(e){return Ds(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Ls(this._target,e),this.onChange(),this}conjugate(e=this._target){return Ns(this._target,e),this.onChange(),this}copy(e){return Is(this._target,e),this.onChange(),this}normalize(e=this._target){return Hs(this._target,e),this.onChange(),this}multiply(e,i){return i?ci(this._target,e,i):ci(this._target,this._target,e),this.onChange(),this}dot(e){return Us(this._target,e)}fromMatrix3(e){return Bs(this._target,e),this.onChange(),this}fromEuler(e,i){return js(this._target,e,e.order),i||this.onChange(),this}fromAxisAngle(e,i){return zs(this._target,e,i),this.onChange(),this}slerp(e,i){return ks(this._target,this._target,e,i),this.onChange(),this}fromArray(e,i=0){return this._target[0]=e[i],this._target[1]=e[i+1],this._target[2]=e[i+2],this._target[3]=e[i+3],this.onChange(),this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e[i+3]=this[3],e}}const qs=1e-6;function Vs(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Ws(t,e,i,s,r,n,a,l,o,h,c,f,m,p,u,v,y){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t[4]=n,t[5]=a,t[6]=l,t[7]=o,t[8]=h,t[9]=c,t[10]=f,t[11]=m,t[12]=p,t[13]=u,t[14]=v,t[15]=y,t}function Xs(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $s(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=e[9],m=e[10],p=e[11],u=e[12],v=e[13],y=e[14],x=e[15],g=i*l-s*a,w=i*o-r*a,M=i*h-n*a,E=s*o-r*l,R=s*h-n*l,I=r*h-n*o,F=c*v-f*u,B=c*y-m*u,k=c*x-p*u,C=f*y-m*v,j=f*x-p*v,z=m*x-p*y,b=g*z-w*j+M*C+E*k-R*B+I*F;return b?(b=1/b,t[0]=(l*z-o*j+h*C)*b,t[1]=(r*j-s*z-n*C)*b,t[2]=(v*I-y*R+x*E)*b,t[3]=(m*R-f*I-p*E)*b,t[4]=(o*k-a*z-h*B)*b,t[5]=(i*z-r*k+n*B)*b,t[6]=(y*M-u*I-x*w)*b,t[7]=(c*I-m*M+p*w)*b,t[8]=(a*j-l*k+h*F)*b,t[9]=(s*k-i*j-n*F)*b,t[10]=(u*R-v*M+x*g)*b,t[11]=(f*M-c*R-p*g)*b,t[12]=(l*B-a*C-o*F)*b,t[13]=(i*C-s*B+r*F)*b,t[14]=(v*w-u*E-y*g)*b,t[15]=(c*E-f*w+m*g)*b,t):null}function zi(t){let e=t[0],i=t[1],s=t[2],r=t[3],n=t[4],a=t[5],l=t[6],o=t[7],h=t[8],c=t[9],f=t[10],m=t[11],p=t[12],u=t[13],v=t[14],y=t[15],x=e*a-i*n,g=e*l-s*n,w=e*o-r*n,M=i*l-s*a,E=i*o-r*a,R=s*o-r*l,I=h*u-c*p,F=h*v-f*p,B=h*y-m*p,k=c*v-f*u,C=c*y-m*u,j=f*y-m*v;return x*j-g*C+w*k+M*B-E*F+R*I}function ui(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],m=e[9],p=e[10],u=e[11],v=e[12],y=e[13],x=e[14],g=e[15],w=i[0],M=i[1],E=i[2],R=i[3];return t[0]=w*s+M*l+E*f+R*v,t[1]=w*r+M*o+E*m+R*y,t[2]=w*n+M*h+E*p+R*x,t[3]=w*a+M*c+E*u+R*g,w=i[4],M=i[5],E=i[6],R=i[7],t[4]=w*s+M*l+E*f+R*v,t[5]=w*r+M*o+E*m+R*y,t[6]=w*n+M*h+E*p+R*x,t[7]=w*a+M*c+E*u+R*g,w=i[8],M=i[9],E=i[10],R=i[11],t[8]=w*s+M*l+E*f+R*v,t[9]=w*r+M*o+E*m+R*y,t[10]=w*n+M*h+E*p+R*x,t[11]=w*a+M*c+E*u+R*g,w=i[12],M=i[13],E=i[14],R=i[15],t[12]=w*s+M*l+E*f+R*v,t[13]=w*r+M*o+E*m+R*y,t[14]=w*n+M*h+E*p+R*x,t[15]=w*a+M*c+E*u+R*g,t}function Ys(t,e,i){let s=i[0],r=i[1],n=i[2],a,l,o,h,c,f,m,p,u,v,y,x;return e===t?(t[12]=e[0]*s+e[4]*r+e[8]*n+e[12],t[13]=e[1]*s+e[5]*r+e[9]*n+e[13],t[14]=e[2]*s+e[6]*r+e[10]*n+e[14],t[15]=e[3]*s+e[7]*r+e[11]*n+e[15]):(a=e[0],l=e[1],o=e[2],h=e[3],c=e[4],f=e[5],m=e[6],p=e[7],u=e[8],v=e[9],y=e[10],x=e[11],t[0]=a,t[1]=l,t[2]=o,t[3]=h,t[4]=c,t[5]=f,t[6]=m,t[7]=p,t[8]=u,t[9]=v,t[10]=y,t[11]=x,t[12]=a*s+c*r+u*n+e[12],t[13]=l*s+f*r+v*n+e[13],t[14]=o*s+m*r+y*n+e[14],t[15]=h*s+p*r+x*n+e[15]),t}function Ks(t,e,i){let s=i[0],r=i[1],n=i[2];return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Zs(t,e,i,s){let r=s[0],n=s[1],a=s[2],l=Math.hypot(r,n,a),o,h,c,f,m,p,u,v,y,x,g,w,M,E,R,I,F,B,k,C,j,z,b,O;return Math.abs(l)<qs?null:(l=1/l,r*=l,n*=l,a*=l,o=Math.sin(i),h=Math.cos(i),c=1-h,f=e[0],m=e[1],p=e[2],u=e[3],v=e[4],y=e[5],x=e[6],g=e[7],w=e[8],M=e[9],E=e[10],R=e[11],I=r*r*c+h,F=n*r*c+a*o,B=a*r*c-n*o,k=r*n*c-a*o,C=n*n*c+h,j=a*n*c+r*o,z=r*a*c+n*o,b=n*a*c-r*o,O=a*a*c+h,t[0]=f*I+v*F+w*B,t[1]=m*I+y*F+M*B,t[2]=p*I+x*F+E*B,t[3]=u*I+g*F+R*B,t[4]=f*k+v*C+w*j,t[5]=m*k+y*C+M*j,t[6]=p*k+x*C+E*j,t[7]=u*k+g*C+R*j,t[8]=f*z+v*b+w*O,t[9]=m*z+y*b+M*O,t[10]=p*z+x*b+E*O,t[11]=u*z+g*b+R*O,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function Qs(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Ci(t,e){let i=e[0],s=e[1],r=e[2],n=e[4],a=e[5],l=e[6],o=e[8],h=e[9],c=e[10];return t[0]=Math.hypot(i,s,r),t[1]=Math.hypot(n,a,l),t[2]=Math.hypot(o,h,c),t}function Js(t){let e=t[0],i=t[1],s=t[2],r=t[4],n=t[5],a=t[6],l=t[8],o=t[9],h=t[10];const c=e*e+i*i+s*s,f=r*r+n*n+a*a,m=l*l+o*o+h*h;return Math.sqrt(Math.max(c,f,m))}const Pi=(function(){const t=[1,1,1];return function(e,i){let s=t;Ci(s,i);let r=1/s[0],n=1/s[1],a=1/s[2],l=i[0]*r,o=i[1]*n,h=i[2]*a,c=i[4]*r,f=i[5]*n,m=i[6]*a,p=i[8]*r,u=i[9]*n,v=i[10]*a,y=l+f+v,x=0;return y>0?(x=Math.sqrt(y+1)*2,e[3]=.25*x,e[0]=(m-u)/x,e[1]=(p-h)/x,e[2]=(o-c)/x):l>f&&l>v?(x=Math.sqrt(1+l-f-v)*2,e[3]=(m-u)/x,e[0]=.25*x,e[1]=(o+c)/x,e[2]=(p+h)/x):f>v?(x=Math.sqrt(1+f-l-v)*2,e[3]=(p-h)/x,e[0]=(o+c)/x,e[1]=.25*x,e[2]=(m+u)/x):(x=Math.sqrt(1+v-l-f)*2,e[3]=(o-c)/x,e[0]=(p+h)/x,e[1]=(m+u)/x,e[2]=.25*x),e}})();function er(t,e,i,s){let r=qe([t[0],t[1],t[2]]);const n=qe([t[4],t[5],t[6]]),a=qe([t[8],t[9],t[10]]);zi(t)<0&&(r=-r),i[0]=t[12],i[1]=t[13],i[2]=t[14];const o=t.slice(),h=1/r,c=1/n,f=1/a;o[0]*=h,o[1]*=h,o[2]*=h,o[4]*=c,o[5]*=c,o[6]*=c,o[8]*=f,o[9]*=f,o[10]*=f,Pi(e,o),s[0]=r,s[1]=n,s[2]=a}function tr(t,e,i,s){const r=t,n=e[0],a=e[1],l=e[2],o=e[3],h=n+n,c=a+a,f=l+l,m=n*h,p=n*c,u=n*f,v=a*c,y=a*f,x=l*f,g=o*h,w=o*c,M=o*f,E=s[0],R=s[1],I=s[2];return r[0]=(1-(v+x))*E,r[1]=(p+M)*E,r[2]=(u-w)*E,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(m+x))*R,r[6]=(y+g)*R,r[7]=0,r[8]=(u+w)*I,r[9]=(y-g)*I,r[10]=(1-(m+v))*I,r[11]=0,r[12]=i[0],r[13]=i[1],r[14]=i[2],r[15]=1,r}function ir(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i+i,l=s+s,o=r+r,h=i*a,c=s*a,f=s*l,m=r*a,p=r*l,u=r*o,v=n*a,y=n*l,x=n*o;return t[0]=1-f-u,t[1]=c+x,t[2]=m-y,t[3]=0,t[4]=c-x,t[5]=1-h-u,t[6]=p+v,t[7]=0,t[8]=m+y,t[9]=p-v,t[10]=1-h-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function sr(t,e,i,s,r){let n=1/Math.tan(e/2),a=1/(s-r);return t[0]=n/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+s)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*s*a,t[15]=0,t}function rr(t,e,i,s,r,n,a){let l=1/(e-i),o=1/(s-r),h=1/(n-a);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+i)*l,t[13]=(r+s)*o,t[14]=(a+n)*h,t[15]=1,t}function nr(t,e,i,s){let r=e[0],n=e[1],a=e[2],l=s[0],o=s[1],h=s[2],c=r-i[0],f=n-i[1],m=a-i[2],p=c*c+f*f+m*m;p===0?m=1:(p=1/Math.sqrt(p),c*=p,f*=p,m*=p);let u=o*m-h*f,v=h*c-l*m,y=l*f-o*c;return p=u*u+v*v+y*y,p===0&&(h?l+=1e-6:o?h+=1e-6:o+=1e-6,u=o*m-h*f,v=h*c-l*m,y=l*f-o*c,p=u*u+v*v+y*y),p=1/Math.sqrt(p),u*=p,v*=p,y*=p,t[0]=u,t[1]=v,t[2]=y,t[3]=0,t[4]=f*y-m*v,t[5]=m*u-c*y,t[6]=c*v-f*u,t[7]=0,t[8]=c,t[9]=f,t[10]=m,t[11]=0,t[12]=r,t[13]=n,t[14]=a,t[15]=1,t}function fi(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t[4]=e[4]+i[4],t[5]=e[5]+i[5],t[6]=e[6]+i[6],t[7]=e[7]+i[7],t[8]=e[8]+i[8],t[9]=e[9]+i[9],t[10]=e[10]+i[10],t[11]=e[11]+i[11],t[12]=e[12]+i[12],t[13]=e[13]+i[13],t[14]=e[14]+i[14],t[15]=e[15]+i[15],t}function di(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t[4]=e[4]-i[4],t[5]=e[5]-i[5],t[6]=e[6]-i[6],t[7]=e[7]-i[7],t[8]=e[8]-i[8],t[9]=e[9]-i[9],t[10]=e[10]-i[10],t[11]=e[11]-i[11],t[12]=e[12]-i[12],t[13]=e[13]-i[13],t[14]=e[14]-i[14],t[15]=e[15]-i[15],t}function ar(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12]*i,t[13]=e[13]*i,t[14]=e[14]*i,t[15]=e[15]*i,t}class et extends Array{constructor(e=1,i=0,s=0,r=0,n=0,a=1,l=0,o=0,h=0,c=0,f=1,m=0,p=0,u=0,v=0,y=1){return super(e,i,s,r,n,a,l,o,h,c,f,m,p,u,v,y),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,i,s,r,n,a,l,o,h,c,f,m,p,u,v,y){return e.length?this.copy(e):(Ws(this,e,i,s,r,n,a,l,o,h,c,f,m,p,u,v,y),this)}translate(e,i=this){return Ys(this,i,e),this}rotate(e,i,s=this){return Zs(this,s,e,i),this}scale(e,i=this){return Ks(this,i,typeof e=="number"?[e,e,e]:e),this}add(e,i){return i?fi(this,e,i):fi(this,this,e),this}sub(e,i){return i?di(this,e,i):di(this,this,e),this}multiply(e,i){return e.length?i?ui(this,e,i):ui(this,this,e):ar(this,this,e),this}identity(){return Xs(this),this}copy(e){return Vs(this,e),this}fromPerspective({fov:e,aspect:i,near:s,far:r}={}){return sr(this,e,i,s,r),this}fromOrthogonal({left:e,right:i,bottom:s,top:r,near:n,far:a}){return rr(this,e,i,s,r,n,a),this}fromQuaternion(e){return ir(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return $s(this,e),this}compose(e,i,s){return tr(this,e,i,s),this}decompose(e,i,s){return er(this,e,i,s),this}getRotation(e){return Pi(e,this),this}getTranslation(e){return Qs(e,this),this}getScaling(e){return Ci(e,this),this}getMaxScaleOnAxis(){return Js(this)}lookAt(e,i,s){return nr(this,e,i,s),this}determinant(){return zi(this)}fromArray(e,i=0){return this[0]=e[i],this[1]=e[i+1],this[2]=e[i+2],this[3]=e[i+3],this[4]=e[i+4],this[5]=e[i+5],this[6]=e[i+6],this[7]=e[i+7],this[8]=e[i+8],this[9]=e[i+9],this[10]=e[i+10],this[11]=e[i+11],this[12]=e[i+12],this[13]=e[i+13],this[14]=e[i+14],this[15]=e[i+15],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e[i+3]=this[3],e[i+4]=this[4],e[i+5]=this[5],e[i+6]=this[6],e[i+7]=this[7],e[i+8]=this[8],e[i+9]=this[9],e[i+10]=this[10],e[i+11]=this[11],e[i+12]=this[12],e[i+13]=this[13],e[i+14]=this[14],e[i+15]=this[15],e}}function lr(t,e,i="YXZ"){return i==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):i==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):i==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):i==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):i==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):i==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const mi=new et;class or extends Array{constructor(e=0,i=e,s=e,r="YXZ"){super(e,i,s),this.order=r,this.onChange=()=>{},this._target=this;const n=["0","1","2"];return new Proxy(this,{set(a,l){const o=Reflect.set(...arguments);return o&&n.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,i=e,s=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=i,this._target[2]=s,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,i=this.order){return lr(this._target,e,i),this.onChange(),this}fromQuaternion(e,i=this.order,s){return mi.fromQuaternion(e),this._target.fromRotationMatrix(mi,i),s||this.onChange(),this}fromArray(e,i=0){return this._target[0]=e[i],this._target[1]=e[i+1],this._target[2]=e[i+2],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e}}class hr{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new et,this.worldMatrix=new et,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new ae,this.quaternion=new Gs,this.scale=new ae(1),this.rotation=new or,this.up=new ae(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,i=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,i&&e&&e.addChild(this,!1)}addChild(e,i=!0){~this.children.indexOf(e)||this.children.push(e),i&&e.setParent(this,!1)}removeChild(e,i=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),i&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let i=0,s=this.children.length;i<s;i++)this.children[i].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let i=0,s=this.children.length;i<s;i++)this.children[i].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,i=!1){i?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function cr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function ur(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i+i,l=s+s,o=r+r,h=i*a,c=s*a,f=s*l,m=r*a,p=r*l,u=r*o,v=n*a,y=n*l,x=n*o;return t[0]=1-f-u,t[3]=c-x,t[6]=m+y,t[1]=c+x,t[4]=1-h-u,t[7]=p-v,t[2]=m-y,t[5]=p+v,t[8]=1-h-f,t}function fr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function dr(t,e,i,s,r,n,a,l,o,h){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t[4]=n,t[5]=a,t[6]=l,t[7]=o,t[8]=h,t}function mr(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function pr(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=c*a-l*h,m=-c*n+l*o,p=h*n-a*o,u=i*f+s*m+r*p;return u?(u=1/u,t[0]=f*u,t[1]=(-c*s+r*h)*u,t[2]=(l*s-r*a)*u,t[3]=m*u,t[4]=(c*i-r*o)*u,t[5]=(-l*i+r*n)*u,t[6]=p*u,t[7]=(-h*i+s*o)*u,t[8]=(a*i-s*n)*u,t):null}function pi(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],m=i[0],p=i[1],u=i[2],v=i[3],y=i[4],x=i[5],g=i[6],w=i[7],M=i[8];return t[0]=m*s+p*a+u*h,t[1]=m*r+p*l+u*c,t[2]=m*n+p*o+u*f,t[3]=v*s+y*a+x*h,t[4]=v*r+y*l+x*c,t[5]=v*n+y*o+x*f,t[6]=g*s+w*a+M*h,t[7]=g*r+w*l+M*c,t[8]=g*n+w*o+M*f,t}function gr(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],m=i[0],p=i[1];return t[0]=s,t[1]=r,t[2]=n,t[3]=a,t[4]=l,t[5]=o,t[6]=m*s+p*a+h,t[7]=m*r+p*l+c,t[8]=m*n+p*o+f,t}function vr(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],m=Math.sin(i),p=Math.cos(i);return t[0]=p*s+m*a,t[1]=p*r+m*l,t[2]=p*n+m*o,t[3]=p*a-m*s,t[4]=p*l-m*r,t[5]=p*o-m*n,t[6]=h,t[7]=c,t[8]=f,t}function xr(t,e,i){let s=i[0],r=i[1];return t[0]=s*e[0],t[1]=s*e[1],t[2]=s*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function yr(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=e[9],m=e[10],p=e[11],u=e[12],v=e[13],y=e[14],x=e[15],g=i*l-s*a,w=i*o-r*a,M=i*h-n*a,E=s*o-r*l,R=s*h-n*l,I=r*h-n*o,F=c*v-f*u,B=c*y-m*u,k=c*x-p*u,C=f*y-m*v,j=f*x-p*v,z=m*x-p*y,b=g*z-w*j+M*C+E*k-R*B+I*F;return b?(b=1/b,t[0]=(l*z-o*j+h*C)*b,t[1]=(o*k-a*z-h*B)*b,t[2]=(a*j-l*k+h*F)*b,t[3]=(r*j-s*z-n*C)*b,t[4]=(i*z-r*k+n*B)*b,t[5]=(s*k-i*j-n*F)*b,t[6]=(v*I-y*R+x*E)*b,t[7]=(y*M-u*I-x*w)*b,t[8]=(u*R-v*M+x*g)*b,t):null}class wr extends Array{constructor(e=1,i=0,s=0,r=0,n=1,a=0,l=0,o=0,h=1){return super(e,i,s,r,n,a,l,o,h),this}set(e,i,s,r,n,a,l,o,h){return e.length?this.copy(e):(dr(this,e,i,s,r,n,a,l,o,h),this)}translate(e,i=this){return gr(this,i,e),this}rotate(e,i=this){return vr(this,i,e),this}scale(e,i=this){return xr(this,i,e),this}multiply(e,i){return i?pi(this,e,i):pi(this,this,e),this}identity(){return mr(this),this}copy(e){return fr(this,e),this}fromMatrix4(e){return cr(this,e),this}fromQuaternion(e){return ur(this,e),this}fromBasis(e,i,s){return this.set(e[0],e[1],e[2],i[0],i[1],i[2],s[0],s[1],s[2]),this}inverse(e=this){return pr(this,e),this}getNormalMatrix(e){return yr(this,e),this}}let Mr=0;class Ze extends hr{constructor(e,{geometry:i,program:s,mode:r=e.TRIANGLES,frustumCulled:n=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Mr++,this.geometry=i,this.program=s,this.mode=r,this.frustumCulled=n,this.renderOrder=a,this.modelViewMatrix=new et,this.normalMatrix=new wr,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}));let i=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:i}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}))}}const gi=new Uint8Array(4);function vi(t){return(t&t-1)===0}let br=1;class tt{constructor(e,{image:i,target:s=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:n=e.RGBA,internalFormat:a=n,wrapS:l=e.CLAMP_TO_EDGE,wrapT:o=e.CLAMP_TO_EDGE,wrapR:h=e.CLAMP_TO_EDGE,generateMipmaps:c=s===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:f=c?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:m=e.LINEAR,premultiplyAlpha:p=!1,unpackAlignment:u=4,flipY:v=s==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:y=0,level:x=0,width:g,height:w=g,length:M=1}={}){this.gl=e,this.id=br++,this.image=i,this.target=s,this.type=r,this.format=n,this.internalFormat=a,this.minFilter=f,this.magFilter=m,this.wrapS=l,this.wrapT=o,this.wrapR=h,this.generateMipmaps=c,this.premultiplyAlpha=p,this.unpackAlignment=u,this.flipY=v,this.anisotropy=Math.min(y,this.gl.renderer.parameters.maxAnisotropy),this.level=x,this.width=g,this.height=w,this.length=M,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const i=!(this.image===this.store.image&&!this.needsUpdate);if((i||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!i){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,this.level,this.internalFormat,this.format,this.type,this.image[s]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let s=0;s<this.image.length;s++)this.gl.compressedTexImage2D(this.target,s,this.internalFormat,this.image[s].width,this.image[s].height,0,this.image[s].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!vi(this.image.width)||!vi(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,gi);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,gi);this.store.image=this.image}}}class xi{constructor(e,{width:i=e.canvas.width,height:s=e.canvas.height,target:r=e.FRAMEBUFFER,color:n=1,depth:a=!0,stencil:l=!1,depthTexture:o=!1,wrapS:h=e.CLAMP_TO_EDGE,wrapT:c=e.CLAMP_TO_EDGE,wrapR:f=e.CLAMP_TO_EDGE,minFilter:m=e.LINEAR,magFilter:p=m,type:u=e.UNSIGNED_BYTE,format:v=e.RGBA,internalFormat:y=v,unpackAlignment:x,premultiplyAlpha:g}={}){this.gl=e,this.width=i,this.height=s,this.depth=a,this.stencil=l,this.buffer=this.gl.createFramebuffer(),this.target=r,this.gl.renderer.bindFramebuffer(this),this.textures=[];const w=[];for(let M=0;M<n;M++)this.textures.push(new tt(e,{width:i,height:s,wrapS:h,wrapT:c,wrapR:f,minFilter:m,magFilter:p,type:u,format:v,internalFormat:y,unpackAlignment:x,premultiplyAlpha:g,flipY:!1,generateMipmaps:!1})),this.textures[M].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+M,this.gl.TEXTURE_2D,this.textures[M].texture,0),w.push(this.gl.COLOR_ATTACHMENT0+M);w.length>1&&this.gl.renderer.drawBuffers(w),this.texture=this.textures[0],o&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new tt(e,{width:i,height:s,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.stencil?this.gl.DEPTH_STENCIL:this.gl.DEPTH_COMPONENT,internalFormat:e.renderer.isWebgl2?this.stencil?this.gl.DEPTH24_STENCIL8:this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.stencil?this.gl.UNSIGNED_INT_24_8:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.stencil?this.gl.DEPTH_STENCIL_ATTACHMENT:this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(a&&!l&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),l&&!a&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),a&&l&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(e,i){if(!(this.width===e&&this.height===i)){this.width=e,this.height=i,this.gl.renderer.bindFramebuffer(this);for(let s=0;s<this.textures.length;s++)this.textures[s].width=e,this.textures[s].height=i,this.textures[s].needsUpdate=!0,this.textures[s].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+s,this.gl.TEXTURE_2D,this.textures[s].texture,0);this.depthTexture?(this.depthTexture.width=e,this.depthTexture.height=i,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,i)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,i)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,i))),this.gl.renderer.bindFramebuffer({target:this.target})}}}class Er extends Ai{constructor(e,{attributes:i={}}={}){Object.assign(i,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,i)}}const yi={plasma:{color:"#F25BD0",strands:6,crackle:.85,flares:.65,glow:.9,sparks:.6,particleCount:15e3,fill:.5,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1},aurora:{color:"#5CFFC8",strands:5,crackle:.6,flares:.5,glow:.8,sparks:.45,particleCount:15e3,fill:.5,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1},nebula:{color:"#9478FF",strands:6,crackle:1,flares:.5,glow:.9,sparks:.6,particleCount:18e3,fill:.45,motion:"rise",particleShape:"square",depth:.5,sway:.4,twinkle:.6,haze:.8,dustSpeed:1.2},ember:{color:"#FF8A2A",strands:5,crackle:.9,flares:.8,glow:1,sparks:.8,particleCount:12e3,fill:.35,motion:"rise",particleShape:"round",depth:.7,sway:.3,twinkle:.7,haze:.9,dustSpeed:1.6},frost:{color:"#BFE6FF",strands:3,crackle:.3,flares:.3,glow:.6,sparks:.2,particleCount:16e3,fill:.6,motion:"fall",particleShape:"round",depth:.8,sway:.4,twinkle:.4,haze:.5,dustSpeed:.7},solar:{color:"#FFD36E",strands:6,crackle:.7,flares:1,glow:1.1,sparks:.5,particleCount:15e3,fill:.55,motion:"orbit",particleShape:"square",depth:.6,sway:.7,twinkle:.5,haze:.8,dustSpeed:1},eclipse:{color:"#FFFFFF",strands:4,crackle:.5,flares:.4,glow:.7,sparks:.35,particleCount:14e3,fill:.5,motion:"drift",particleShape:"square",depth:.7,sway:.5,twinkle:.5,haze:.5,dustSpeed:.8},abyss:{color:"#3F7BFF",strands:5,crackle:.55,flares:.6,glow:.9,sparks:.4,particleCount:2e4,fill:.8,motion:"orbit",particleShape:"round",depth:.8,sway:.8,twinkle:.5,haze:.6,dustSpeed:.9}},Tr={rise:0,fall:1,drift:2,orbit:3},Sr={square:0,round:1},Di=8,xt=4,Rr=4e4,xe=256,_r=45e5,Fr=2.2,Ar=7,Qe=[1,1,1],yt=[0,0,0],H=(t,e,i)=>Math.min(Math.max(t,e),i),pe=(t,e,i)=>{const s=H((i-t)/(e-t),0,1);return s*s*(3-2*s)},wi=t=>1-Math.pow(1-t,3),Be=(t,e,i)=>t.map((s,r)=>s+(e[r]-s)*i),Mi=t=>t-Math.PI*2*Math.floor((t+Math.PI)/(Math.PI*2)),zr=(t,e)=>{try{const i=document.createElement("canvas").getContext("2d");if(!i)return e;i.fillStyle="#000000",i.fillStyle=t;const s=i.fillStyle;if(s.startsWith("#")){const n=parseInt(s.slice(1),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}const r=s.match(/[\d.]+/g);return!r||r.length<3?e:[Number(r[0])/255,Number(r[1])/255,Number(r[2])/255]}catch{return e}},Cr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4),Pr=t=>t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055,Ve=t=>{const[e,i,s]=t.map(Cr),r=Math.cbrt(.4122214708*e+.5363325363*i+.0514459929*s),n=Math.cbrt(.2119034982*e+.6806995451*i+.1073969566*s),a=Math.cbrt(.0883024619*e+.2817188376*i+.6299787005*s);return[.2104542553*r+.793617785*n-.0040720468*a,1.9779984951*r-2.428592205*n+.4505937099*a,.0259040371*r+.7827717662*n-.808675766*a]},Tt=([t,e,i])=>{const s=Math.pow(t+.3963377774*e+.2158037573*i,3),r=Math.pow(t-.1055613458*e-.0638541728*i,3),n=Math.pow(t-.0894841775*e-1.291485548*i,3);return[4.0767416621*s-3.3077115913*r+.2309699292*n,-1.2684380046*s+2.6097574011*r-.3413193965*n,-.0041960863*s-.7034186147*r+1.707614701*n].map(a=>H(Pr(H(a,0,1)),0,1))},bi=(t,e,i)=>Tt(Be(Ve(t),Ve(e),i)),ke=(t,e,i,s)=>{const[r,n,a]=Ve(t),l=Math.hypot(n,a)*s,o=Math.atan2(a,n)+e*Math.PI/180;return Tt([H(r+i,0,1),l*Math.cos(o),l*Math.sin(o)])},ne=(t,e,i,s)=>{const[,r,n]=Ve(t),a=Math.max(Math.hypot(r,n)*s,.02),l=Math.atan2(n,r)+e*Math.PI/180;return Tt([H(i,0,1),a*Math.cos(l),a*Math.sin(l)])},Dr=(t,e)=>{if(e){const i=ne(t,0,Math.min(Ve(t)[0],.62),1.15);return{rim:i,rimHot:i,rimMid:i,rimDeep:ne(t,0,.72,.8),spark:ne(t,0,.6,1.2),sparkGlow:ne(t,0,.78,.8),haze:ne(t,0,.8,.6),edge:ne(t,0,.72,.8),tones:[ne(t,0,.56,1.1),ne(t,16,.6,1.05),ne(t,-16,.5,1.1),ne(t,0,.66,.9),ne(t,0,.74,.7)]}}return{rim:t,rimHot:Be(t,Qe,.72),rimMid:Be(t,yt,.15),rimDeep:Be(t,yt,.45),spark:Be(t,Qe,.45),sparkGlow:ke(t,0,-.15,1),haze:Be(t,yt,.6),edge:ke(t,0,-.3,.9),tones:[ke(t,0,-.06,1),ke(t,16,-.02,1),ke(t,-16,-.12,1.05),ke(bi(t,Qe,.25),0,.04,1),bi(t,Qe,.7)]}},St=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}},kr=()=>{const t=St(99),e=[[6,12,.6,1.6],[18,34,1.5,3.5],[40,70,3,7],[80,130,6,12]],i={harmonics:[],rates:[],phases:[],flareHarmonics:[],flareRates:[],flarePhases:[]};for(let s=0;s<Di;s++){e.forEach(([n,a,l,o])=>{i.harmonics.push(Math.round(n+t()*(a-n))),i.rates.push((l+t()*(o-l))*(t()<.5?-1:1)),i.phases.push(t()*Math.PI*2)});for(let n=0;n<3;n++)i.flareHarmonics.push(4+Math.floor(t()*6)),i.flareRates.push((.4+t()*.8)*(t()<.5?-1:1)),i.flarePhases.push(t()*Math.PI*2);const r=s===0;i.flareHarmonics.push(r?.75:.95+t()*.3),i.flareRates.push(r?1.15:.8+t()*.2),i.flarePhases.push(r?1:.7+t()*.25)}return i},Lr=t=>{const e=St(1337),i=Math.max(1,Math.ceil(t/xe)),s=new Float32Array(xe*i*4),r=new Float32Array(xe*i*4);let n=0,a=0;for(;n<t&&a<t*80;){a++;let l,o,h;if(e()<.28){const f=e()*Math.PI*2,m=.87+Math.sqrt(e())*.105;if(l=Math.cos(f)*m,o=Math.sin(f)*m,e()>pe(-.6,.3,-o))continue;const p=e();h=p<.5?3:p<.8?2:1}else{l=e()*2-1,o=e()*2-1;const f=Math.hypot(l,o);if(f>.975)continue;const m=Math.pow(pe(-.25,.85,-o),1.3),p=pe(.66,.96,f)*pe(-.7,.3,-o),u=Math.max(m,p*.9);if(e()>.012+.988*u)continue;if(u<.12)h=4;else{const v=e();h=v<.32?0:v<.52?1:v<.8?2:3}}const c=Math.sqrt(Math.max(0,.95-l*l-o*o));s[n*4]=l,s[n*4+1]=o,s[n*4+2]=(e()*2-1)*c,s[n*4+3]=h,r[n*4]=h===4?1.8:e()<.22?2.1:1.3,r[n*4+1]=e(),r[n*4+2]=2.5+e()*3.5,r[n*4+3]=.16+e()*.26,n++}return{home:s,seed:r,count:n,rows:i}},wt=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Rt=`
uint scramble(uint v) {
  v = v * 747796405u + 2891336453u;
  uint w = ((v >> ((v >> 28u) + 4u)) ^ v) * 277803737u;
  return (w >> 22u) ^ w;
}

float random(uint v) {
  return float(scramble(v)) * (1.0 / 4294967295.0);
}
`,ki=`
uniform float uDustTime;
uniform vec2 uTurn;
uniform float uMotion;
uniform float uFill;

vec3 settle(vec3 p, out float spread) {
  float bend = exp2((0.5 - uFill) * 1.8);
  float h = clamp((p.y + 1.0) * 0.5, 0.0, 1.0);
  float y = 2.0 * pow(h, bend) - 1.0;
  float from = sqrt(max(1.0 - p.y * p.y, 1e-4));
  float to = sqrt(max(1.0 - y * y, 0.0));
  spread = clamp(bend * pow(max(h, 1e-3), bend - 1.0) * to / from, 0.25, 1.0);
  return vec3(p.xz * (to / from), y).xzy;
}

vec3 drift(vec4 home, vec4 seed, uint id, out float life, out float spread) {
  vec3 p = settle(home.xyz, spread);
  float t = uDustTime;
  float u = fract(t / seed.z + seed.y);
  life = sin(3.14159265 * u);
  float travel = seed.w;
  if (uMotion < 0.5) {
    p.y += travel * (u - 0.5);
  } else if (uMotion < 1.5) {
    p.y -= travel * (u - 0.5);
  } else if (uMotion < 2.5) {
    p += 0.045 * vec3(
      sin(t * 0.37 + seed.y * 17.0) + 0.5 * sin(t * 0.83 + seed.z * 5.0),
      sin(t * 0.29 + seed.z * 11.0) + 0.5 * sin(t * 0.61 + seed.w * 7.0),
      sin(t * 0.33 + seed.w * 23.0)
    );
  } else {
    float loop = t * (0.6 + 0.9 * random(id * 7u + 3u)) * (random(id * 7u + 10u) < 0.5 ? -1.0 : 1.0) + seed.y * 6.2831853;
    p.xy += (0.025 + 0.05 * random(id * 7u + 16u)) * vec2(cos(loop), sin(loop));
  }
  float wobble = 0.002 + 0.006 * random(id * 7u + 1u);
  float w1 = 0.8 + 2.4 * random(id * 7u + 2u);
  float w2 = 0.8 + 2.4 * random(id * 7u + 4u);
  p += wobble * vec3(sin(t * w1 + seed.y * 40.0), cos(t * w2 + seed.z * 30.0), sin(t * (w1 + w2) * 0.5 + seed.w * 20.0));
  float cy = cos(uTurn.x);
  float sy = sin(uTurn.x);
  p.xz = mat2(cy, -sy, sy, cy) * p.xz;
  float cx = cos(uTurn.y);
  float sx = sin(uTurn.y);
  p.yz = mat2(cx, -sx, sx, cx) * p.yz;
  return p;
}
`,Nr=`#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform float uRadius;
uniform float uDpr;
uniform float uLine;
uniform float uTime;
uniform float uFrame;
uniform float uBins;
uniform float uStrands;
uniform float uCrackle;
uniform float uFlares;
uniform float uGlow;
uniform float uHaze;
uniform float uFill;
uniform float uPresence;
uniform float uUnfold;
uniform float uBloom;
uniform float uInside;
uniform float uEncode;
uniform vec3 uRim;
uniform vec3 uRimHot;
uniform vec3 uRimMid;
uniform vec3 uRimDeep;
uniform vec3 uSpark;
uniform vec3 uSparkGlow;
uniform vec3 uHazeColor;
uniform vec3 uEdgeColor;
uniform vec4 uHeat;
uniform vec4 uHarmonics[8];
uniform vec4 uRates[8];
uniform vec4 uPhases[8];
uniform vec4 uFlareHarmonics[8];
uniform vec4 uFlareRates[8];
uniform vec4 uFlarePhases[8];
uniform vec4 uArcs[4];

out vec4 fragColor;
${Rt}
const float PI = 3.14159265;
const float TAU = 6.28318531;
const vec4 AMPS = vec4(0.35, 0.3, 0.22, 0.13);

float bell(float d, float w) {
  float x = d / w;
  return exp(-x * x);
}

float segment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
  return length(pa - ba * h);
}

float pool(vec2 q) {
  float t = length(q - vec2(0.0, mix(-1.0, -0.66, uFill))) / mix(0.8, 1.35, uFill);
  return t < 0.6 ? mix(0.5, 0.22, t / 0.6) : mix(0.22, 0.0, clamp((t - 0.6) / 0.4, 0.0, 1.0));
}

void main() {
  vec2 p = gl_FragCoord.xy / uDpr - uCenter;
  float r = length(p);
  float R = uRadius;
  float theta = atan(p.y, p.x);
  float lift = p.y / max(r, 1e-3);
  float topDim = 1.0 - 0.35 * pow(max(lift, 0.0), 1.5);
  vec3 col = vec3(0.0);
  float hot = 0.0;
  uint frame = uint(uFrame);

  if (r < R) {
    vec2 q = p / R;
    float chord = sqrt(max(1.0 - dot(q, q), 0.0));
    float haze = pool(q) * (0.55 + 0.45 * chord);
    col += uHazeColor * haze * uHaze * uInside;
    float e = length(q - vec2(0.0, 0.2)) / 1.2;
    float edge = 0.5 * pow(smoothstep(0.62, 1.0, e), 1.4);
    col += uEdgeColor * edge * uInside * (0.5 + 0.5 * uHaze);
  }

  float dr = r - R;
  float halo = 1.0 - smoothstep(R * 0.05, R * 0.105, abs(dr - R * 0.0213));
  col += uRimDeep * 0.18 * halo * topDim * uGlow * uBloom;
  col += uRim * 0.12 * bell(dr + R * 0.0383, R * 0.032) * uGlow * uBloom;
  col += uRim * 0.32 * bell(dr, max(R * 0.0117, uLine)) * uPresence * uUnfold;

  float delta = mod(theta - uHeat.x + PI, TAU) - PI;
  float heat = uHeat.z * uHeat.y * exp(-delta * delta / 0.3);
  float crackle = uCrackle + heat * 0.9;
  float amp = R * 0.016 * (0.3 + 1.4 * crackle) * uUnfold;
  float jitterAmp = R * 0.0048 * (0.3 + 1.4 * uCrackle) * uUnfold * (1.0 + heat * 0.3);
  float flareAmp = R * 0.064 * (0.4 + 1.2 * crackle) * uFlares * 1.6 * uUnfold;

  if (abs(dr) < amp * 2.0 + flareAmp + R * 0.3) {
    float step = TAU / uBins;
    float binPos = (theta + PI) / step;
    float bin0 = floor(binPos);
    float binF = binPos - bin0;
    float th0 = bin0 * step - PI;
    float th1 = th0 + step;
    uint b0 = uint(mod(bin0, uBins));
    uint b1 = uint(mod(bin0 + 1.0, uBins));
    float gain = min(1.0, 2.4 / max(uStrands, 1.0));
    for (int k = 0; k < 8; k++) {
      if (float(k) >= uStrands) break;
      vec4 m = uHarmonics[k];
      vec4 lead = uRates[k] * uTime + uPhases[k];
      float wave0 = dot(AMPS, sin(m * th0 + lead));
      float wave1 = dot(AMPS, sin(m * th1 + lead));
      uint salt = uint(k) * 1013u + frame * 7919u;
      vec4 shape = uFlareHarmonics[k];
      vec4 look = uFlareRates[k];
      vec4 tone = uFlarePhases[k];
      float a = amp * shape.w;
      float off0 = a * wave0 + jitterAmp * (random(b0 + salt) - 0.5);
      float off1 = a * wave1 + jitterAmp * (random(b1 + salt) - 0.5);
      float rc = R + mix(off0, off1, binF);
      float grade = (off1 - off0) / (step * max(r, 1.0));
      float d = abs(r - rc) * inversesqrt(1.0 + grade * grade);
      float swell = 0.8 + 0.4 * (0.5 + 0.5 * sin(3.0 * theta + uTime * 0.7 + tone.x * 1.7));
      float width = uLine * look.w * swell * (1.0 + heat * 0.25);
      float core = exp(-d * d / (width * width));
      float sheath = exp(-d * d / (width * width * 3.0));
      float bright = tone.w * (1.0 + heat * 0.45) * uPresence;
      col += (uRimHot * core * 0.8 + uRim * sheath * 0.32) * bright;
      hot += core * bright;
      vec3 fargs = shape.xyz * theta + look.xyz * uTime + tone.xyz;
      float flare = max(0.0, (sin(fargs.x) + sin(fargs.y) + sin(fargs.z)) / 3.0);
      flare = (flare * flare + heat * 0.35) * flareAmp;
      float dw = abs(r - rc - flare);
      float dm = abs(r - rc - flare * 0.6);
      float dn = abs(r - rc - flare * 0.25);
      vec3 glow = uRimDeep * (0.07 * bell(dw, R * 0.09) + 0.16 * bell(dw, R * 0.05));
      glow += uRimMid * 0.28 * bell(dm, R * 0.027) + uRim * 0.38 * bell(dn, R * 0.013);
      col += glow * gain * topDim * uGlow * uBloom * (1.0 + heat * 1.4);
    }
  }

  for (int i = 0; i < 4; i++) {
    vec4 arc = uArcs[i];
    if (arc.w <= 0.002) continue;
    float mid = arc.x + arc.y * 0.5;
    vec2 center = R * 0.93 * vec2(cos(mid), sin(mid));
    if (distance(p, center) > R * (abs(arc.y) * 0.6 + 0.1) + 12.0) continue;
    float ar = R * 0.955;
    vec2 a0 = ar * vec2(cos(arc.x), sin(arc.x));
    vec2 a2 = ar * vec2(cos(arc.x + arc.y), sin(arc.x + arc.y));
    vec2 a1 = R * (0.955 - arc.z) * vec2(cos(mid), sin(mid));
    float dmin = 1e5;
    float along = 0.0;
    vec2 prev = a0;
    for (int s = 1; s <= 10; s++) {
      float u = float(s) / 10.0;
      vec2 b = mix(mix(a0, a1, u), mix(a1, a2, u), u);
      vec2 pa = p - prev;
      vec2 ba = b - prev;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
      float dist = length(pa - ba * h);
      if (dist < dmin) {
        dmin = dist;
        along = (float(s) - 1.0 + h) / 10.0;
      }
      prev = b;
    }
    float taper = sqrt(max(sin(PI * along), 0.0));
    float arcWidth = uLine * (0.55 + 0.6 * taper);
    float arcCore = exp(-dmin * dmin / (arcWidth * arcWidth));
    float arcGlow = exp(-dmin * dmin / (arcWidth * arcWidth * 12.0));
    col += (uSpark * 0.95 * arcCore + uSparkGlow * 0.4 * arcGlow) * arc.w * taper;
    hot += arcCore * arc.w * taper * 0.6;
  }

  fragColor = vec4(col, hot) * uEncode;
}
`,Br=`#version 300 es
precision highp float;

in float aIndex;

uniform sampler2D tHome;
uniform sampler2D tSeed;
uniform sampler2D tOffset;
uniform float uStirred;
uniform vec2 uCenter;
uniform vec2 uViewport;
uniform float uRadius;
uniform float uDpr;
uniform float uDepth;
uniform float uTwinkle;
uniform float uPointScale;
uniform float uReveal;
uniform float uEncode;
uniform vec3 uTones[5];
uniform vec3 uRimTone;

out vec3 vColor;
out float vSize;
${Rt}
${ki}
void main() {
  ivec2 cell = ivec2(int(mod(aIndex, ${xe}.0)), int(floor(aIndex / ${xe}.0)));
  uint id = uint(aIndex);
  vec4 home = texelFetch(tHome, cell, 0);
  vec4 seed = texelFetch(tSeed, cell, 0);
  float life;
  float spread;
  vec3 p = drift(home, seed, id, life, spread);
  if (uStirred > 0.5) p += texelFetch(tOffset, cell, 0).xyz;
  float len = length(p);
  float inside = 1.0 - smoothstep(0.955, 0.985, length(p.xy));
  if (len > 0.975) p *= 0.975 / len;

  float front = p.z * 0.5 + 0.5;
  float depthSize = mix(1.0, 0.7 + 0.6 * front, uDepth);
  float depthLight = mix(1.0, 0.35 + 0.8 * front, uDepth);
  float blink = sin(uDustTime * (2.0 + 6.0 * random(id * 7u + 5u)) + random(id * 7u + 6u) * 6.2831853);
  float twinkle = mix(1.0, smoothstep(-0.9, -0.6, blink), uTwinkle);
  float fade = smoothstep(0.04, 0.12, life);
  float order = (home.y + 1.0) * 0.5 * 0.55 + random(id * 7u + 8u) * 0.25;
  float reveal = smoothstep(order, order + 0.2, uReveal * 1.0);
  float alpha = random(id * 7u + 9u) < 0.5 || home.w > 3.5 ? 1.0 : 0.6;

  float size = seed.x * uPointScale * (0.35 + 0.95 * life) * depthSize * mix(0.5, 1.0, reveal);
  vec2 screen = uCenter + p.xy * uRadius;
  gl_Position = vec4(screen / uViewport * 2.0 - 1.0, 0.0, 1.0);
  float px = size * uDpr;
  gl_PointSize = px + 2.0;
  vSize = px;

  int tone = int(home.w + 0.5);
  float rimLit = smoothstep(0.8, 0.97, length(p.xy));
  vec3 color = uTones[tone] + uRimTone * rimLit * rimLit * 0.12;
  vColor = color * alpha * fade * twinkle * depthLight * reveal * inside * sqrt(spread) * uEncode;
}
`,jr=`#version 300 es
precision highp float;

uniform float uShape;

in vec3 vColor;
in float vSize;

out vec4 fragColor;

void main() {
  vec2 q = (gl_PointCoord - 0.5) * (vSize + 2.0);
  float half_ = max(vSize * 0.5, 0.5);
  float cover;
  if (uShape < 0.5) {
    vec2 c = clamp(half_ - abs(q) + 0.5, 0.0, 1.0);
    cover = c.x * c.y;
  } else {
    cover = clamp(half_ - length(q) + 0.5, 0.0, 1.0);
  }
  if (cover <= 0.0) discard;
  fragColor = vec4(vColor * cover, 0.0);
}
`,Ir=`#version 300 es
precision highp float;

uniform sampler2D tHome;
uniform sampler2D tSeed;
uniform sampler2D tOffset;
uniform sampler2D tVelocity;
uniform float uDt;
uniform float uReset;
uniform vec4 uBrush;
uniform float uBrushPower;
uniform vec4 uKick;

layout(location = 0) out vec4 outOffset;
layout(location = 1) out vec4 outVelocity;
${Rt}
${ki}
vec3 swirl(vec3 p) {
  float t = uDustTime * 0.15;
  vec3 a = vec3(1.7, 1.9, 1.5) * p.yzx + vec3(t, 1.2, 2.1);
  vec3 b = vec3(2.3, 2.1, 2.7) * p.zxy + vec3(0.4, t * 1.3, 0.9);
  vec3 ca = cos(a) * vec3(1.7, 1.9, 1.5);
  vec3 cb = cos(b) * vec3(2.3, 2.1, 2.7);
  return vec3(ca.z - cb.x, cb.y - ca.x, ca.y - cb.z);
}

void main() {
  ivec2 cell = ivec2(gl_FragCoord.xy);
  if (uReset > 0.5) {
    outOffset = vec4(0.0);
    outVelocity = vec4(0.0);
    return;
  }
  uint id = uint(cell.y * ${xe} + cell.x);
  vec4 home = texelFetch(tHome, cell, 0);
  vec4 seed = texelFetch(tSeed, cell, 0);
  vec3 o = texelFetch(tOffset, cell, 0).xyz;
  vec3 v = texelFetch(tVelocity, cell, 0).xyz;
  float life;
  float spread;
  vec3 base = drift(home, seed, id, life, spread);
  vec3 p = base + o;

  float k = mix(0.8, 2.2, random(id * 7u + 11u));
  vec3 acc = -k * o - 1.5 * sqrt(k) * v;

  vec2 gap = p.xy - uBrush.xy;
  float touch = exp(-dot(gap, gap) / 0.07) * uBrushPower;
  acc += (vec3(uBrush.zw, 0.0) - v) * touch * 14.0;
  float pace = length(v);
  if (pace > 1e-4) {
    vec3 heading = v / pace;
    vec3 curl = swirl(p * 1.6);
    acc += (curl - heading * dot(curl, heading)) * min(pace, 2.0) * 1.8;
  }

  if (uKick.z > 0.0) {
    vec3 jolt = vec3(random(id * 7u + 12u), random(id * 7u + 13u), random(id * 7u + 14u)) - 0.5;
    float near = exp(-dot(p.xy - uKick.xy, p.xy - uKick.xy) / 0.4);
    vec3 spinKick = vec3(-p.z, 0.0, p.x) * 0.9;
    vec3 lift = vec3(0.0, 0.5 + 0.8 * random(id * 7u + 15u), 0.0) * (0.3 + 0.7 * smoothstep(0.2, -0.8, p.y));
    v += (jolt * 0.8 + spinKick + lift) * uKick.z * (0.4 + 0.45 * near);
  }

  v += acc * uDt;
  o += v * uDt;
  vec3 q = base + o;
  float len = length(q);
  if (len > 0.97) {
    vec3 n = q / len;
    o -= n * (len - 0.97);
    v -= n * max(dot(v, n), 0.0) * 1.5;
  }
  outOffset = vec4(o, 1.0);
  outVelocity = vec4(v, 1.0);
}
`,Or=`#version 300 es
precision highp float;

uniform sampler2D tScene;
uniform float uLight;
uniform float uDecode;

in vec2 vUv;
out vec4 fragColor;

vec3 soften(vec3 x) {
  vec3 over = max(x - 0.6, 0.0);
  return min(x, 0.6) + 0.4 * (1.0 - exp(-over / 0.4));
}

void main() {
  vec4 scene = texture(tScene, vUv) * uDecode;
  vec3 light = max(scene.rgb, 0.0);
  float peak = max(light.r, max(light.g, light.b));
  if (uLight > 0.5) {
    vec3 hue = light / max(peak, 1e-4);
    float cover = 1.0 - exp(-peak * 2.4);
    vec3 ink = hue * mix(0.92, 0.72, cover);
    float core = clamp(scene.a * 0.7, 0.0, 1.0) * cover;
    vec3 tint = mix(vec3(1.0), hue, 0.22);
    fragColor = vec4(tint * core + ink * cover * (1.0 - core), core + cover * (1.0 - core));
    return;
  }
  light += vec3(max(peak - 1.8, 0.0) * 0.25);
  vec3 shown = soften(light);
  fragColor = vec4(shown, max(shown.r, max(shown.g, shown.b)));
}
`,Ur=({preset:t="plasma",color:e,theme:i="dark",size:s=.7,strands:r,crackle:n,flares:a,glow:l,sparks:o,particleCount:h,fill:c,motion:f,particleShape:m,depth:p,sway:u,twinkle:v,haze:y,speed:x=1,dustSpeed:g,interactive:w=!0,hoverStrength:M=.7,intro:E=!0,paused:R=!1,className:I="",style:F})=>{const B=S.useRef(null),k=S.useRef(null),C=S.useRef(null),j=yi[t]||yi.plasma,z=(P,D)=>P??j[D],b=z(e,"color"),O=S.useMemo(()=>{const P=i==="light";return{light:P,palette:Dr(zr(b,[.95,.36,.82]),P)}},[b,i]);return S.useEffect(()=>{var P;k.current={...O,size:s,strands:z(r,"strands"),crackle:z(n,"crackle"),flares:z(a,"flares"),glow:z(l,"glow"),sparks:z(o,"sparks"),particleCount:z(h,"particleCount"),fill:z(c,"fill"),motion:z(f,"motion"),particleShape:z(m,"particleShape"),depth:z(p,"depth"),sway:z(u,"sway"),twinkle:z(v,"twinkle"),haze:z(y,"haze"),dustSpeed:z(g,"dustSpeed"),speed:x,interactive:w,hoverStrength:M,intro:E,paused:R},(P=C.current)==null||P.call(C)}),S.useEffect(()=>{var qt,Vt;const P=B.current;if(!P)return;let D;try{D=new Ts({alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1})}catch{return}const T=D.gl;if(!D.isWebgl2){(qt=T.getExtension("WEBGL_lose_context"))==null||qt.loseContext();return}const Y=T.canvas;Y.style.display="block",Y.style.width="100%",Y.style.height="100%",Y.setAttribute("aria-hidden","true"),P.appendChild(Y);const Oe=!!T.getExtension("EXT_color_buffer_float"),ce=Oe||!!T.getExtension("EXT_color_buffer_half_float"),_e=ce?1:.25,Fe=new Er(T),ge=new tt(T),Ae=kr(),Ue=new xi(T,{width:1,height:1,depth:!1,type:ce?T.HALF_FLOAT:T.UNSIGNED_BYTE,format:T.RGBA,internalFormat:ce?T.RGBA16F:T.RGBA,minFilter:T.NEAREST,magFilter:T.NEAREST}),He=new Array(xt*4).fill(0),N={uCenter:{value:[0,0]},uRadius:{value:1},uDpr:{value:1},uLine:{value:.6},uTime:{value:0},uFrame:{value:0},uBins:{value:420},uStrands:{value:5},uCrackle:{value:.6},uFlares:{value:.5},uGlow:{value:.8},uHaze:{value:.7},uFill:{value:.5},uPresence:{value:0},uUnfold:{value:0},uBloom:{value:0},uInside:{value:0},uEncode:{value:_e},uRim:{value:[1,1,1]},uRimHot:{value:[1,1,1]},uRimMid:{value:[1,1,1]},uRimDeep:{value:[1,1,1]},uSpark:{value:[1,1,1]},uSparkGlow:{value:[1,1,1]},uHazeColor:{value:[0,0,0]},uEdgeColor:{value:[0,0,0]},uHeat:{value:[0,0,0,0]},uHarmonics:{value:Ae.harmonics},uRates:{value:Ae.rates},uPhases:{value:Ae.phases},uFlareHarmonics:{value:Ae.flareHarmonics},uFlareRates:{value:Ae.flareRates},uFlarePhases:{value:Ae.flarePhases},uArcs:{value:He}},we={uDustTime:{value:0},uTurn:{value:[0,0]},uMotion:{value:0},uFill:N.uFill,tHome:{value:ge},tSeed:{value:ge}},te={...we,tOffset:{value:ge},uStirred:{value:0},uCenter:N.uCenter,uViewport:{value:[1,1]},uRadius:N.uRadius,uDpr:N.uDpr,uDepth:{value:.6},uTwinkle:{value:.5},uPointScale:{value:1},uReveal:{value:0},uEncode:{value:_e},uTones:{value:new Array(15).fill(1)},uRimTone:{value:[1,1,1]},uShape:{value:0}},ie={...we,tOffset:{value:ge},tVelocity:{value:ge},uDt:{value:.016},uReset:{value:1},uBrush:{value:[0,0,0,0]},uBrushPower:{value:0},uKick:{value:[0,0,0,0]}},_t={tScene:{value:Ue.texture},uLight:{value:0},uDecode:{value:1/_e}},Ft=L=>(L.setBlendFunc(T.ONE,T.ONE),L),Li=new Ze(T,{geometry:Fe,program:Ft(new Ke(T,{vertex:wt,fragment:Nr,uniforms:N,transparent:!0,depthTest:!1,depthWrite:!1}))}),Ni=Ft(new Ke(T,{vertex:Br,fragment:jr,uniforms:te,transparent:!0,depthTest:!1,depthWrite:!1})),ve=ce?new Ze(T,{geometry:Fe,program:new Ke(T,{vertex:wt,fragment:Ir,uniforms:ie,depthTest:!1,depthWrite:!1})}):null,Bi=new Ze(T,{geometry:Fe,program:new Ke(T,{vertex:wt,fragment:Or,uniforms:_t,depthTest:!1,depthWrite:!1})}),it=L=>{L&&(T.deleteFramebuffer(L.buffer),L.textures.forEach(_=>T.deleteTexture(_.texture)))},At=L=>new xi(T,{width:xe,height:L,color:2,depth:!1,type:Oe?T.FLOAT:T.HALF_FLOAT,format:T.RGBA,internalFormat:Oe?T.RGBA32F:T.RGBA16F,minFilter:T.NEAREST,magFilter:T.NEAREST}),zt=(L,_)=>new tt(T,{image:L,width:xe,height:_,type:T.FLOAT,format:T.RGBA,internalFormat:T.RGBA32F,minFilter:T.NEAREST,magFilter:T.NEAREST,generateMipmaps:!1,flipY:!1});let G=null;const Ct=()=>{G&&(G.mesh.geometry.remove(),T.deleteTexture(G.home.texture),T.deleteTexture(G.seed.texture),it(G.read),it(G.write),G=null)},Pt=()=>{!ve||!G||!G.read||!G.write||(ie.tOffset.value=ge,ie.tVelocity.value=ge,ie.uReset.value=1,D.render({scene:ve,target:G.read,clear:!1}),D.render({scene:ve,target:G.write,clear:!1}),ie.uReset.value=0)},ji=L=>{const _=H(Math.round(L/100)*100,0,Rr);if(G&&G.requested===_)return;if(Ct(),!_){G=null;return}const A=Lr(_),J=new Float32Array(A.count);for(let oe=0;oe<A.count;oe++)J[oe]=oe;const ee=new Ai(T,{aIndex:{size:1,data:J}});G={requested:_,rows:A.rows,home:zt(A.home,A.rows),seed:zt(A.seed,A.rows),mesh:new Ze(T,{mode:T.POINTS,geometry:ee,program:Ni}),read:ve?At(A.rows):null,write:ve?At(A.rows):null},we.tHome.value=G.home,we.tSeed.value=G.seed,Pt(),Me=0},We=((Vt=window.matchMedia)==null?void 0:Vt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,Q=St(913);let ue=1,fe=1,de=0,st=performance.now(),rt=0,Dt=0,nt=0,me=0,ze=!0,at=!0,le=0,Me=0,lt=0,be=null,ot=.3;const Ee=[],V={x:0,y:0,inside:!1,fresh:!0},U={angle:0,velocity:0,power:0,near:0},q={x:0,y:0,vx:0,vy:0},X={x:0,y:0,vx:0,vy:0},kt=()=>{ue=Math.max(1,P.clientWidth),fe=Math.max(1,P.clientHeight),D.dpr=Math.min(window.devicePixelRatio||1,2,Math.sqrt(_r/(ue*fe))),D.setSize(ue,fe),Ue.setSize(T.canvas.width,T.canvas.height),Te()},ht=(L,_)=>{Ee.length>=xt||Ee.push({start:L,span:(.05+Q()*.07)*(Q()<.5?-1:1),curl:.02+Q()*.04,life:0,duration:.2+Q()*.2,drift:(Q()-.5)*.3,strength:_})},Lt=L=>{if(de=0,!at||!ze||document.hidden)return;const _=k.current,A=Math.min(.05,Math.max(1/240,(L-st)/1e3));if(st=L,!_)return;const J=!_.paused&&!We;me=_.intro&&!We?Math.min(1,me+A/Fr):1;const ee=wi(pe(0,.42,me)),oe=wi(pe(0,.32,me)),ct=Math.sin(Math.PI*pe(.22,.78,me))*.35,se=Math.max(8,H(_.size,.1,1.5)*Math.min(ue,fe)/2),Ce=_.interactive&&!We?H(_.hoverStrength,0,1):0,$e=V.x-ue/2,Ye=fe/2-V.y,Ii=Math.hypot($e,Ye),ut=V.inside?Ce:0;U.power<.02&&(U.angle=Math.atan2(Ye,$e),U.velocity=0);const Oi=Mi(Math.atan2(Ye,$e)-U.angle);U.velocity+=(120*Oi-19*U.velocity)*A,U.angle=Mi(U.angle+U.velocity*A),U.power+=(ut-U.power)*(1-Math.exp(-A/(ut>U.power?.3:.55)));const Ui=Math.exp(-Math.pow((Ii-se)/(se*.45),2));U.near+=(Ui-U.near)*(1-Math.exp(-A/.15)),le*=Math.exp(-A/.7);const Pe=$e/se,De=Ye/se;Math.hypot(Pe-q.x,De-q.y)>.6&&(V.fresh=!0),V.fresh&&(q.x=Pe,q.y=De,q.vx=0,q.vy=0,V.fresh=!1);const Wt=1-Math.exp(-A/.05);q.vx+=((Pe-q.x)/A-q.vx)*Wt,q.vy+=((De-q.y)/A-q.vy)*Wt,q.x=Pe,q.y=De;const ft=Math.hypot(q.vx,q.vy),Xt=ft>4?4/ft:1,Hi=Math.exp(-Math.max(0,Math.hypot(Pe,De)-1)*6),$t=V.inside?Ce*Hi*ee:0;if(lt=lt*Math.exp(-A/1.2)+$t*Math.min(ft,4)*A,J){const re=1+le*.6+U.power*U.near*.3,K=A*Math.max(0,_.speed)*2*re;rt+=K,Dt+=A*Math.max(0,_.dustSpeed)*(1+le*.4),nt+=A*Math.max(0,_.dustSpeed);const qi=H(_.crackle+le*.5,0,1.5);if(_.sparks>.01&&me>.55&&(ot-=K*_.sparks*2*(.6+qi*.6),ot<=0)){const Se=U.power*U.near,Re=Q()<Se*.7?U.angle+(Q()-.5)*.8:Q()<.7?Math.PI/2+(Q()-.5)*1.5:Q()*Math.PI*2;ht(Re,.8+Se*.6+le*.4),ot=.15+Q()*.6}for(let Se=Ee.length-1;Se>=0;Se--){const Re=Ee[Se];Re.life+=K,Re.start+=Re.drift*K,Re.life>=Re.duration&&Ee.splice(Se,1)}}else Ee.length=0;for(let re=0;re<xt;re++){const K=Ee[re];He[re*4]=K?K.start:0,He[re*4+1]=K?K.span:0,He[re*4+2]=K?K.curl:0,He[re*4+3]=K?Math.sin(Math.PI*K.life/K.duration)*K.strength:0}ji(_.particleCount);const he=_.palette;N.uCenter.value=[ue/2,fe/2],N.uRadius.value=se,N.uDpr.value=D.dpr,N.uLine.value=Math.max(.6,se*.0035),N.uTime.value=rt,N.uFrame.value=Math.floor(rt*24)%1e5,N.uBins.value=H(Math.round(Math.PI*2*se/2.6),240,900),N.uStrands.value=Math.round(H(_.strands,1,Di)),N.uCrackle.value=H(_.crackle,0,1)+le*.5+ct,N.uFlares.value=H(_.flares,0,1),N.uGlow.value=H(_.glow,0,2)*(1+le*.5+ct)*(_.light?.35:1),N.uHaze.value=H(_.haze,0,2)*(_.light?.6:1),N.uFill.value=H(_.fill,0,1),N.uPresence.value=ee,N.uUnfold.value=oe,N.uBloom.value=ee*ee,N.uInside.value=pe(.2,.95,me),N.uRim.value=he.rim,N.uRimHot.value=he.rimHot,N.uRimMid.value=he.rimMid,N.uRimDeep.value=he.rimDeep,N.uSpark.value=he.spark,N.uSparkGlow.value=he.sparkGlow,N.uHazeColor.value=he.haze,N.uEdgeColor.value=he.edge,N.uHeat.value=[U.angle,U.near,U.power*ee,0],we.uDustTime.value=Dt;const Yt=V.inside?Ce*ee:0,Kt=H(Pe,-1.6,1.6)*Yt,Zt=H(De,-1.6,1.6)*Yt;X.vx+=(40*(Kt-X.x)-11*X.vx)*A,X.vy+=(40*(Zt-X.y)-11*X.vy)*A,X.x+=X.vx*A,X.y+=X.vy*A;const Qt=H(_.sway,0,1);we.uTurn.value=[Qt*.42*Math.sin(nt*.23)+X.x*.3,Qt*.12*Math.sin(nt*.17+1.3)-X.y*.16],we.uMotion.value=Tr[_.motion]??0,te.uViewport.value=[ue,fe],te.uDepth.value=H(_.depth,0,1),te.uTwinkle.value=H(_.twinkle,0,1),te.uPointScale.value=Math.max(1,se/491),te.uReveal.value=pe(.18,1,me),te.uTones.value=he.tones.flat(),te.uRimTone.value=he.rim,te.uShape.value=Sr[_.particleShape]??0;const Z=G;Z&&ve&&(lt>.002||be)&&(Me=Ar);let dt=!1;if(Z&&Z.read&&Z.write&&ve&&Me>0){ie.uDt.value=Math.min(A,1/30),ie.uBrush.value=[q.x,q.y,q.vx*Xt,q.vy*Xt],ie.uBrushPower.value=$t,ie.uKick.value=be?[be.x,be.y,be.strength,0]:[0,0,0,0],ie.tOffset.value=Z.read.textures[0],ie.tVelocity.value=Z.read.textures[1],D.render({scene:ve,target:Z.write,clear:!1});const re=Z.read;Z.read=Z.write,Z.write=re,Me-=A,dt=Me>0,dt||(Me=0,Pt())}be=null,te.uStirred.value=dt?1:0,te.tOffset.value=Z&&Z.read?Z.read.textures[0]:ge,T.clearColor(0,0,0,0),D.render({scene:Li,target:Ue,clear:!0}),G&&D.render({scene:G.mesh,target:Ue,clear:!1}),_t.uLight.value=_.light?1:0,D.render({scene:Bi,clear:!1}),P.dataset.ready="true";const Gi=Math.abs(ut-U.power)>.002||le>.002||Me>0||Math.abs(U.velocity)>.01||Math.hypot(X.vx,X.vy,X.x-Kt,X.y-Zt)>.001;ze&&(J||me<1||Gi)&&(de=requestAnimationFrame(Lt))},Te=()=>{de||!ze||!at||document.hidden||(st=performance.now(),de=requestAnimationFrame(Lt))},Nt=L=>{const _=P.getBoundingClientRect(),A=L.clientX-_.left,J=L.clientY-_.top;return{x:A,y:J,inside:A>=0&&J>=0&&A<=_.width&&J<=_.height}},Bt=L=>{const _=Nt(L);_.inside&&!V.inside&&(V.fresh=!0),V.x=_.x,V.y=_.y,V.inside=_.inside,_.inside&&Te()},jt=L=>{const _=k.current,A=Nt(L);if(!_||!_.interactive||We||!A.inside)return;V.inside||(V.fresh=!0),V.x=A.x,V.y=A.y,V.inside=!0;const J=Math.max(8,H(_.size,.1,1.5)*Math.min(ue,fe)/2),ee=(A.x-ue/2)/J,oe=(fe/2-A.y)/J;if(Math.hypot(ee,oe)>1.3)return;const se=H(_.hoverStrength,0,1);be={x:ee,y:oe,strength:se*1.2},le=Math.max(le,se);const Ce=Math.atan2(oe,ee);ht(Ce+(Q()-.5)*.5,1.3),ht(Ce+Math.PI+(Q()-.5)*1.2,1.1),Te()},Xe=()=>{V.inside=!1,Te()},It=L=>{L.relatedTarget||Xe()},Ot=L=>{L.pointerType==="touch"&&Xe()},Ut=()=>{cancelAnimationFrame(de),de=0,document.hidden||Te()};window.addEventListener("pointermove",Bt,{passive:!0}),window.addEventListener("pointerdown",jt,{passive:!0}),window.addEventListener("pointerout",It,{passive:!0}),window.addEventListener("pointerup",Ot,{passive:!0}),window.addEventListener("blur",Xe),document.addEventListener("visibilitychange",Ut);const Ht=new ResizeObserver(kt);Ht.observe(P);const Gt=new IntersectionObserver(([L])=>{ze=L.isIntersecting,ze?Te():(cancelAnimationFrame(de),de=0)});return Gt.observe(P),C.current=Te,kt(),()=>{var L;delete P.dataset.ready,at=!1,ze=!1,cancelAnimationFrame(de),Ht.disconnect(),Gt.disconnect(),window.removeEventListener("pointermove",Bt),window.removeEventListener("pointerdown",jt),window.removeEventListener("pointerout",It),window.removeEventListener("pointerup",Ot),window.removeEventListener("blur",Xe),document.removeEventListener("visibilitychange",Ut),C.current=null,Ct(),it(Ue),(L=T.getExtension("WEBGL_lose_context"))==null||L.loseContext(),Y.parentNode&&Y.parentNode.removeChild(Y)}},[]),d.jsx("div",{ref:B,className:`crystalized-ball ${I}`.trim(),style:F})},Hr=`
uniform float uRadius, uFlatten;
varying vec2 vUv;
varying vec3 vLocal, vNormal;
void main() {
  vUv = uv;
  vec3 p = position; p.y *= uFlatten;
  vLocal = p / uRadius;
  vNormal = normalize(vec3(normal.x, normal.y / uFlatten, normal.z));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
}`,Gr=`
uniform sampler2D uMap, uRings;
uniform vec3 uSun, uEye, uHit, uCloudFlow;
uniform float uTurn, uSaturn, uHover, uCloudTime;
varying vec2 vUv;
varying vec3 vLocal, vNormal;
float cloudHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float cloudNoise(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(mix(cloudHash(i), cloudHash(i + vec3(1,0,0)), f.x),
                 mix(cloudHash(i + vec3(0,1,0)), cloudHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(cloudHash(i + vec3(0,0,1)), cloudHash(i + vec3(1,0,1)), f.x),
                 mix(cloudHash(i + vec3(0,1,1)), cloudHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float cloudField(vec3 p) { return .58 * cloudNoise(p) + .28 * cloudNoise(p * 2.03) + .14 * cloudNoise(p * 4.07); }
vec3 cloudVortex(vec3 p, vec3 axis, float strength) {
  float angle = exp(-max(0., 1. - dot(p, axis)) * 32.) * strength;
  return p * cos(angle) + cross(axis, p) * sin(angle) + axis * dot(axis, p) * (1. - cos(angle));
}
void main() {
  vec3 n = normalize(vNormal), sun = normalize(uSun);
  vec3 view = normalize(uEye - vLocal);
  vec3 albedo = texture2D(uMap, vec2(fract(vUv.x + uTurn), vUv.y)).rgb;
  if (uSaturn < .5) {
    // Cyan-blue grading and fine, advected cloud filaments inspired by the reference.
    albedo = vec3(albedo.r * .50 + albedo.b * .03,
                  albedo.g * .55 + albedo.b * .20,
                  albedo.b * .72 + albedo.g * .05);
    vec3 p = normalize(vLocal);
    float influence = exp(-12. * pow(distance(p, uHit), 2.)) * uHover;
    // Small, damped pointer currents advect the white cloud field, leaving the lighting intact.
    vec3 q = normalize(p + uCloudFlow * influence + cross(uHit, p) * influence * .018 * sin(uCloudTime * .7));
    q = cloudVortex(q, normalize(vec3(.38,-.25,1.)), 1.65);
    q = cloudVortex(q, normalize(vec3(-.50,.38,.85)), -1.25);
    float wind = uCloudTime * .009;
    float warp = cloudField(q * 5. + vec3(wind, 0., 0.));
    vec3 field = q * vec3(8., 25., 8.) + vec3(warp * 1.3, warp * .8, wind);
    float mist = cloudField(field * .65);
    float detail = cloudField(field * 2.8 + vec3(wind * .4, 0., 0.));
    float filaments = pow(clamp(1. - abs(detail - .51) * 2.4, 0., 1.), 10.) * smoothstep(.45, .65, mist);
    float clouds = smoothstep(.50, .74, mist) * .21 + filaments * .33 + smoothstep(.65, .83, detail) * .1;
    albedo = mix(albedo, vec3(.64, .79, .87), clamp(clouds, 0., .44));
    float storm = pow(max(dot(p, normalize(vec3(.34,-.24,1.))), 0.), 95.);
    albedo *= 1. - storm * .24;
  }
  float daylight = max(dot(n, sun), 0.);
  float ringShadow = 0.;
  if (uSaturn > .5 && abs(sun.y) > .02) {
    float t = -vLocal.y / sun.y;
    float r = length((vLocal + sun * max(t, 0.)).xz);
    float coverage = smoothstep(1.18, 1.21, r) * (1. - smoothstep(1.80, 1.83, r));
    ringShadow = t > 0. ? coverage * texture2D(uRings, vec2(clamp((r - 1.18) / .65, 0., 1.), .5)).a : 0.;
  }
  float light = mix(.065, .16, uSaturn) + 1.02 * pow(daylight, .85) * (1. - ringShadow * .7);
  float limb = pow(1. - max(dot(n, view), 0.), 3.5);
  vec3 haze = mix(vec3(.07, .28, .42), vec3(.46, .37, .24), uSaturn);
  vec3 color = albedo * light + haze * limb * (.035 + daylight * .12);
  float response = exp(-8. * pow(distance(normalize(vLocal), uHit), 2.)) * uHover;
  color += mix(vec3(.025, .055, .08), vec3(.28, .16, .055), uSaturn) * response;
  color += vec3(.12, .075, .025) * limb * uHover * uSaturn;
  gl_FragColor = vec4(color, 1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,qr=`
uniform float uRadius;
varying vec3 vLocal;
void main() {
  // RingGeometry is in XY; the mesh rotation places it on the planet's equator.
  vLocal = vec3(position.x, 0., -position.y) / uRadius;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,Vr=`
uniform sampler2D uRings;
uniform vec3 uSun, uHit;
uniform float uHover;
varying vec3 vLocal;
void main() {
  float r = length(vLocal.xz);
  vec4 dust = texture2D(uRings, vec2(clamp((r - 1.18) / .65, 0., 1.), .5));
  if (dust.a < .025) discard;
  // Analytic ellipsoid shadow: no high-resolution shadow maps or extra render pass.
  vec3 p = vLocal * vec3(1., 1. / .91, 1.);
  vec3 ray = normalize(uSun) * vec3(1., 1. / .91, 1.);
  float t = max(0., -dot(p, ray) / dot(ray, ray));
  float closest = length(p + ray * t);
  float shadow = t > 0. ? 1. - smoothstep(.97, 1.045, closest) : 0.;
  float edge = smoothstep(1.18, 1.20, r) * (1. - smoothstep(1.81, 1.83, r));
  vec3 color = dust.rgb * (1.05 - .85 * shadow);
  float glow = exp(-3.5 * pow(distance(normalize(vLocal), uHit), 2.)) * uHover;
  color += vec3(.30, .19, .075) * glow * (1. - shadow * .8);
  gl_FragColor = vec4(color, dust.a * edge * (.9 + uHover * .06));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Wr=`
uniform float uFlatten;
varying vec3 vNormal, vView;
void main() {
  vec3 p = position; p.y *= uFlatten;
  vec4 view = modelViewMatrix * vec4(p, 1.);
  vNormal = normalize(normalMatrix * vec3(normal.x, normal.y / uFlatten, normal.z));
  vView = -view.xyz;
  gl_Position = projectionMatrix * view;
}`,Xr=`
uniform float uSaturn, uHover;
varying vec3 vNormal, vView;
void main() {
  float rim = pow(1. - max(dot(normalize(vNormal), normalize(vView)), 0.), 4.);
  gl_FragColor = vec4(mix(vec3(.16, .43, .65), vec3(.90, .69, .34), uSaturn), rim * (.12 + uSaturn * uHover * .22));
  #include <colorspace_fragment>
}`;function $r({kind:t,radius:e=1,reduced:i,highlighted:s,onHover:r,onChoose:n}){const a=t==="ticker",l=S.useRef(null),o=S.useRef(!1),h=S.useMemo(()=>new $(0,0,1),[]),c=S.useMemo(()=>new $,[]),f=S.useMemo(()=>new $,[]),m=S.useRef(!1),p=S.useMemo(()=>new Ki,[]),[u,v]=Si(_i,[a?"/assets/saturn.jpg":"/assets/neptune.jpg","/assets/saturn-rings.png"]),y=S.useMemo(()=>{for(const M of[u,v])M.colorSpace=Ri,M.anisotropy=4,M.needsUpdate=!0;u.wrapS=Zi;const w={uMap:{value:u},uRings:{value:v},uRadius:{value:e},uFlatten:{value:a?.91:.985},uSaturn:{value:a?1:0},uTurn:{value:a?.1:.32},uSun:{value:new $},uEye:{value:new $},uHover:{value:0},uHit:{value:new $(0,0,1)},uCloudTime:{value:0},uCloudFlow:{value:new $}};return{surface:new Je({vertexShader:Hr,fragmentShader:Gr,uniforms:w}),rings:a?new Je({vertexShader:qr,fragmentShader:Vr,uniforms:w,transparent:!0,side:Et,depthWrite:!1}):null,atmosphere:new Je({vertexShader:Wr,fragmentShader:Xr,uniforms:w,transparent:!0,depthWrite:!1})}},[u,v,e,a]);S.useEffect(()=>()=>{var w;y.surface.dispose(),(w=y.rings)==null||w.dispose(),y.atmosphere.dispose()},[y]),ye(({camera:w,clock:M},E)=>{if(!l.current)return;l.current.updateWorldMatrix(!0,!1);const R=y.surface.uniforms;p.copy(l.current.matrixWorld).invert(),R.uSun.value.set(a?-.7:-.95,a?.65:.45,a?1.25:.6).normalize().transformDirection(p),w.getWorldPosition(R.uEye.value),l.current.worldToLocal(R.uEye.value).divideScalar(e),R.uTurn.value=(a?.1:.32)+(i?0:M.elapsedTime*(a?.002:.003)),R.uHover.value=W.damp(R.uHover.value,o.current||s?1:0,6,E),R.uHit.value.lerp(h,1-Math.exp(-E*12)),R.uCloudTime.value=i?0:M.elapsedTime,R.uCloudFlow.value.lerp(i?c.set(0,0,0):c,1-Math.exp(-E*5)),c.multiplyScalar(Math.exp(-E*3))});const x=w=>{o.current=w,w||(m.current=!1),r==null||r(w?t:null)},g=w=>{w.stopPropagation(),l.current&&(f.copy(w.point),l.current.worldToLocal(f),f.normalize(),!a&&!i&&m.current&&c.addScaledVector(f,.5).addScaledVector(h,-.5).clampLength(0,.065),h.copy(f),m.current=!0)};return d.jsxs("group",{ref:l,rotation:[a?.45:.08,0,a?-.32:-.1],onPointerOver:w=>{w.stopPropagation(),x(!0)},onPointerOut:()=>x(!1),onPointerMove:g,onClick:w=>{w.stopPropagation(),w.delta<6&&(n==null||n(t))},children:[d.jsx("mesh",{material:y.surface,children:d.jsx("sphereGeometry",{args:[e,i?48:96,i?32:64]})}),d.jsx("mesh",{material:y.atmosphere,raycast:()=>{},children:d.jsx("sphereGeometry",{args:[e*1.012,48,32]})}),y.rings&&d.jsx("mesh",{rotation:[-Math.PI/2,0,0],material:y.rings,children:d.jsx("ringGeometry",{args:[e*1.18,e*1.83,192]})})]})}const Yr=`
uniform float uTime; uniform vec3 uHit; uniform float uHover;
varying vec3 vLocal; varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv;
void main(){
  vLocal=position; vUv=uv;
  float d=distance(normalize(position),uHit);
  float bump=exp(-d*d*10.)*uHover;
  vec3 p=position+normal*bump*(.035+.008*sin(uTime*2.-d*12.));
  vec4 world=modelMatrix*vec4(p,1.);
  vWorld=world.xyz; vNormal=normalize(mat3(modelMatrix)*normal);
  gl_Position=projectionMatrix*viewMatrix*world;
}`,Kr=`
uniform float uTime; uniform float uKind; uniform vec3 uHit; uniform float uHover; uniform sampler2D uDigits;
varying vec3 vLocal; varying vec3 vNormal; varying vec3 vWorld; varying vec2 vUv;
float hash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise(vec3 p){
 vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 float a=mix(hash(i),hash(i+vec3(1,0,0)),f.x);
 float b=mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x);
 float c=mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x);
 float d=mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x);
 return mix(mix(a,b,f.y),mix(c,d,f.y),f.z);
}
float fbm(vec3 p){return .53*noise(p)+.27*noise(p*2.03)+.13*noise(p*4.01)+.065*noise(p*8.1);}
void main(){
 vec3 n=normalize(vNormal),p=normalize(vLocal);
 float grain=fbm(p*8.);
 float bands=sin(p.y*38.+fbm(p*vec3(3.,1.5,3.)+vec3(uTime*.008,0,0))*3.);
 vec3 base;
 if(uKind<.5){
  base=mix(vec3(.06,.25,.61),vec3(.35,.65,.94),.3+grain*.5+.12*bands);
  base+=vec3(.07,.11,.14)*smoothstep(.55,.78,fbm(p*vec3(4,22,4)));
 }else if(uKind<1.5){
  base=mix(vec3(.28,.20,.14),vec3(.77,.64,.44),grain+.16*bands);
  float ticks=pow(abs(sin(atan(p.z,p.x)*65.)),35.)*(1.-smoothstep(0.,.025,abs(p.y)));
  float latitude=pow(abs(sin(p.y*32.)),40.);
  base+=vec3(.19,.22,.2)*(ticks+latitude*.08)+texture2D(uDigits,vUv).rgb*.09;
 }else if(uKind<2.5){base=mix(vec3(.31,.29,.36),vec3(.75,.71,.76),grain);base*=.8+.2*noise(p*33.);}
 else if(uKind>3.5){base=mix(vec3(.88,.58,.66),vec3(1.,.86,.88),.35+grain*.6+.025*bands);}
 else{float grid=pow(abs(sin(p.x*25.)),30.)+pow(abs(sin(p.y*25.)),30.);base=vec3(.09,.32,.35)+grid*vec3(.10,.3,.29);}
 float light=max(dot(n,normalize(vec3(-.8,.8,1.))),0.);
 vec3 viewDir=normalize(cameraPosition-vWorld);
 float rim=pow(1.-max(dot(n,viewDir),0.),3.5);
 float spot=exp(-pow(distance(p,uHit),2.)*12.)*uHover;
 vec3 accent=uKind>3.5?vec3(.27,.19,.08):uKind>.5&&uKind<1.5?vec3(.42,.30,.14):vec3(.10,.28,.36);
 vec3 rimColor=uKind>3.5?vec3(.34,.23,.08):vec3(.08,.25,.5);
 vec3 color=base*(.33+light*.95)+rim*rimColor*(.3+light)+spot*accent;
 gl_FragColor=vec4(color,1.);
}`;function Ie({radius:t,color:e="#658cab",tilt:i=.8,dashed:s=!1}){const r=S.useMemo(()=>{const n=new Float32Array(723);for(let a=0;a<=240;a++){const l=a/240*Math.PI*2;n[a*3]=Math.cos(l)*t,n[a*3+1]=Math.sin(l)*t}return n},[t]);return d.jsxs("lineLoop",{rotation:[i,.1,-.2],children:[d.jsx("bufferGeometry",{children:d.jsx("bufferAttribute",{attach:"attributes-position",args:[r,3]})}),d.jsx("lineBasicMaterial",{color:e,transparent:!0,opacity:s?.23:.48})]})}function Zr({radius:t,reduced:e,active:i}){const s=S.useRef([]),r=S.useRef([]),n=S.useRef(0);return ye((a,l)=>{e||(n.current+=Math.min(l,.05),s.current.forEach((o,h)=>{o&&(o.rotation.z=n.current*(h%2?.065:.085))}),r.current.forEach((o,h)=>{o&&(o.rotation.y=h*.72+n.current*(.22+h%3*.035),o.rotation.z=Math.sin(n.current*.3+h)*.12)}))}),d.jsxs("group",{rotation:[1.05,.12,-.3],children:[d.jsx(Ie,{radius:t*1.43,color:"#e9bf65",tilt:0,dashed:!0}),Array.from({length:12},(a,l)=>{const o=l*Math.PI*2/12,h=t*(l%2?1.58:1.38),c=t*(l%3===0?.115:.092);return d.jsx("group",{ref:f=>{s.current[l]=f},children:d.jsx("group",{position:[Math.cos(o)*h,Math.sin(o)*h,0],children:d.jsxs("group",{ref:f=>{r.current[l]=f},rotation:[0,l*.72,0],children:[d.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[d.jsx("cylinderGeometry",{args:[c,c,t*.032,32]}),d.jsx("meshStandardMaterial",{color:"#ffd35b",metalness:.72,roughness:.25,emissive:"#c88912",emissiveIntensity:i?.42:.22})]}),[-1,1].map(f=>d.jsxs("mesh",{position:[0,0,f*t*.018],children:[d.jsx("torusGeometry",{args:[c*.78,c*.075,6,28]}),d.jsx("meshStandardMaterial",{color:"#ffe7a0",metalness:.65,roughness:.23,emissive:"#e8b541",emissiveIntensity:.3})]},f))]})})},l)})]})}function Qr({kind:t,radius:e=1,reduced:i,onHover:s,onChoose:r,highlighted:n}){const a=S.useRef(null),l=S.useRef(null),o=S.useRef(!1),[h,c]=S.useState(!1),f=h||n,m=S.useMemo(()=>new $(0,0,1),[]),p=S.useMemo(()=>{const x=document.createElement("canvas");x.width=1024,x.height=512;const g=x.getContext("2d");if(g&&t==="ticker"){g.fillStyle="#000",g.fillRect(0,0,1024,512),g.font="19px monospace",g.fillStyle="#8fe4ef";for(let M=0;M<9;M++)for(let E=0;E<7;E++)g.fillText(`${(M*6+E+.001426).toFixed(6)}`,E*150+3,M*55+30)}return new Ji(x)},[t]),u=S.useMemo(()=>new Je({vertexShader:Yr,fragmentShader:Kr,uniforms:{uTime:{value:0},uHit:{value:new $(0,0,1)},uHover:{value:0},uKind:{value:t==="neptune"?0:t==="ticker"?1:t==="prototype"?2:t==="feifei"?4:3},uDigits:{value:p}}}),[t,p]);S.useEffect(()=>()=>{u.dispose(),p.dispose()},[u,p]);const v=x=>{x.stopPropagation(),a.current&&(m.copy(x.point),a.current.worldToLocal(m),m.normalize())};ye(({clock:x},g)=>{u.uniforms.uTime.value=i?0:x.elapsedTime,u.uniforms.uHover.value=W.damp(u.uniforms.uHover.value,o.current||n?1:0,7,g),u.uniforms.uHit.value.lerp(m,1-Math.exp(-g*14)),l.current&&l.current.scale.setScalar((t==="feifei"?1.045:1.028)*(1+(i?0:Math.sin(x.elapsedTime*.8)*.005)))});const y=x=>{o.current=x,c(x),s==null||s(x?t:null)};return d.jsxs("group",{children:[d.jsx("mesh",{ref:a,material:u,onPointerMove:v,onPointerOver:()=>y(!0),onPointerOut:()=>y(!1),onClick:x=>{x.stopPropagation(),x.delta<6&&(r==null||r(t))},children:d.jsx("sphereGeometry",{args:[e,i?48:96,i?32:64]})}),t==="neptune"&&d.jsxs("mesh",{ref:l,scale:1.028,children:[d.jsx("sphereGeometry",{args:[e,48,32]}),d.jsx("shaderMaterial",{transparent:!0,depthWrite:!1,side:ei,vertexShader:"varying vec3 vn;varying vec3 vp;void main(){vn=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.);vp=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:"varying vec3 vn;varying vec3 vp;void main(){float r=pow(max(0.,1.-abs(dot(vn,normalize(-vp)))),2.);gl_FragColor=vec4(.1,.37,1.,r*.48);}"})]}),t==="ticker"&&d.jsxs("group",{rotation:[.2,.1,-.4],children:[d.jsxs("mesh",{rotation:[1.12,.1,-.2],children:[d.jsx("ringGeometry",{args:[e*1.28,e*1.83,128]}),d.jsx("meshBasicMaterial",{color:"#c5ae88",transparent:!0,opacity:.22,side:Et,depthWrite:!1})]}),[1.28,1.43,1.6,1.81].map((x,g)=>d.jsx(Ie,{radius:e*x,color:g===2?"#d2c1a4":"#938774",tilt:1.12},x))]}),t==="feifei"&&d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{ref:l,scale:1.045,children:[d.jsx("sphereGeometry",{args:[e,48,32]}),d.jsx("shaderMaterial",{transparent:!0,depthWrite:!1,side:ei,blending:es,toneMapped:!1,vertexShader:"varying vec3 vn;varying vec3 vp;void main(){vn=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.);vp=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:"varying vec3 vn;varying vec3 vp;void main(){float r=pow(max(0.,1.-abs(dot(vn,normalize(-vp)))),2.5);gl_FragColor=vec4(1.,.76,.32,r*.23);}"})]}),d.jsx(Zr,{radius:e,reduced:i,active:!!f})]}),t==="station"&&d.jsxs("group",{rotation:[.3,.4,.2],children:[d.jsxs("mesh",{children:[d.jsx("icosahedronGeometry",{args:[e*1.25,0]}),d.jsx("meshBasicMaterial",{color:"#9be8e1",wireframe:!0,transparent:!0,opacity:f?.85:.55})]}),d.jsx(Ie,{radius:e*1.7,tilt:1.2})]}),t==="prototype"&&[0,1,2].map(x=>d.jsxs("mesh",{position:[(x-1)*e*.58,.08,e*.86],children:[d.jsx("boxGeometry",{args:[e*.27,e*.3,e*.16]}),d.jsx("meshStandardMaterial",{color:f?["#bbd9ff","#e8c3c9","#bcdde2"][x]:"#53627b",emissive:"#8298ce",emissiveIntensity:f?.65:.06})]},x))]})}function Jr(t){const e=Si(_i,"/assets/earth-night.jpg");e.colorSpace=Ri;const i=S.useRef(null),s=S.useRef(null),r=S.useRef(null),n=S.useRef(!1),[a,l]=S.useState(!1),o=a||t.highlighted,h=t.radius??1,c=S.useMemo(()=>Array.from({length:12},(u,v)=>{const y=v*2.399,x=1-(v+.5)/12*2,g=Math.sqrt(1-x*x);return new $(Math.cos(y)*g,x,Math.sin(y)*g).multiplyScalar(h*1.012)}),[h]),f=S.useMemo(()=>{const u=new $(-.4,.38,.85).normalize(),v=new $(.58,.1,.81).normalize(),y=u.clone().add(v).normalize().multiplyScalar(h*1.7);return new Qi(u.multiplyScalar(h),y,v.multiplyScalar(h)).getPoints(48)},[h]),m=S.useMemo(()=>new Float32Array(f.flatMap(u=>[u.x,u.y,u.z])),[f]);ye(({clock:u},v)=>{s.current&&!t.reduced&&!n.current&&!t.highlighted&&(s.current.rotation.y+=v*.055),r.current&&r.current.scale.setScalar(1+(t.reduced?0:Math.sin(u.elapsedTime*4)*.2))});const p=u=>{var v;n.current=u,l(u),(v=t.onHover)==null||v.call(t,u?"travel":null)};return d.jsxs("group",{children:[d.jsxs("group",{ref:s,rotation:[0,2.1,-.2],children:[d.jsxs("mesh",{ref:i,onPointerOver:()=>p(!0),onPointerOut:()=>p(!1),onPointerMove:u=>{if(u.stopPropagation(),i.current&&r.current){const v=i.current.worldToLocal(u.point.clone()).normalize().multiplyScalar(h*1.015);r.current.position.copy(v)}},onClick:u=>{var v;u.stopPropagation(),u.delta<6&&((v=t.onChoose)==null||v.call(t,"travel"))},children:[d.jsx("sphereGeometry",{args:[h,64,48]}),d.jsx("meshStandardMaterial",{map:e,emissiveMap:e,emissive:"#bedff9",emissiveIntensity:o?1.8:1.2,color:"#e0efff",roughness:.8})]}),c.map((u,v)=>d.jsxs("mesh",{position:u,children:[d.jsx("sphereGeometry",{args:[.015,8,8]}),d.jsx("meshBasicMaterial",{color:o?"#fff4cf":"#a4c9d7"})]},v)),d.jsxs("mesh",{ref:r,visible:o,children:[d.jsx("sphereGeometry",{args:[h*.045,16,16]}),d.jsx("meshBasicMaterial",{color:"#83f0ff"})]}),d.jsxs("lineLoop",{children:[d.jsx("bufferGeometry",{children:d.jsx("bufferAttribute",{attach:"attributes-position",args:[m,3]})}),d.jsx("lineBasicMaterial",{color:"#b2e5f5",transparent:!0,opacity:o?.9:.45})]})]}),d.jsx(Ie,{radius:h*1.2,color:"#45697d",tilt:.45})]})}function en(t){const e=S.useRef(null);return ye(({clock:i})=>{e.current&&!t.reduced&&(e.current.rotation.y=Math.sin(i.elapsedTime*.4)*.1)}),d.jsxs("group",{ref:e,onPointerOver:()=>{var i;return(i=t.onHover)==null?void 0:i.call(t,"probe")},onPointerOut:()=>{var i;return(i=t.onHover)==null?void 0:i.call(t,null)},onClick:i=>{var s;i.stopPropagation(),i.delta<6&&((s=t.onChoose)==null||s.call(t,"probe"))},rotation:[.3,-.3,.2],children:[d.jsxs("mesh",{children:[d.jsx("octahedronGeometry",{args:[.17]}),d.jsx("meshStandardMaterial",{color:"#a9b6d2",metalness:.7,roughness:.4})]}),[-1,1].map(i=>d.jsxs("mesh",{position:[i*.3,0,0],children:[d.jsx("boxGeometry",{args:[.35,.22,.025]}),d.jsx("meshStandardMaterial",{color:"#23497e",metalness:.7,roughness:.3})]},i)),d.jsxs("mesh",{position:[0,.2,0],rotation:[Math.PI/2,0,0],children:[d.jsx("coneGeometry",{args:[.17,.1,24,1,!0]}),d.jsx("meshStandardMaterial",{color:"#839eb8",side:Et})]})]})}function tn({radius:t=1,reduced:e,onHover:i,onChoose:s,highlighted:r}){const n=S.useRef(null),[a,l]=S.useState(!1),o=a||r,h=c=>{l(c),i==null||i(c?"classroom":null)};return ye(({clock:c,pointer:f},m)=>{n.current&&(n.current.rotation.y=e?0:c.elapsedTime*.16,n.current.rotation.x=W.damp(n.current.rotation.x,e?0:f.y*.18,4,m),n.current.scale.setScalar(W.damp(n.current.scale.x,o?1.07:1,6,m)))}),d.jsx("group",{children:d.jsxs("group",{ref:n,onPointerOver:c=>{c.stopPropagation(),h(!0)},onPointerOut:()=>h(!1),onClick:c=>{c.stopPropagation(),c.delta<6&&(s==null||s("classroom"))},children:[d.jsxs("mesh",{children:[d.jsx("sphereGeometry",{args:[t,48,32]}),d.jsx("meshStandardMaterial",{color:"#b66329",emissive:"#d47935",emissiveIntensity:o?.65:.25,metalness:.5,roughness:.52})]}),d.jsxs("mesh",{children:[d.jsx("icosahedronGeometry",{args:[t*1.025,2]}),d.jsx("meshBasicMaterial",{color:"#ffe0a1",wireframe:!0,transparent:!0,opacity:o?.6:.24})]}),d.jsx(Ie,{radius:t*1.4,color:"#ffc78b",tilt:.85}),[0,1,2,3,4].map(c=>{const f=c*Math.PI*2/5;return d.jsxs("mesh",{position:[Math.cos(f)*t*1.4,Math.sin(f)*t*.93,Math.sin(f)*t*1.04],children:[d.jsx("octahedronGeometry",{args:[t*.1]}),d.jsx("meshBasicMaterial",{color:o?"#fff5d8":"#ffcc8d"})]},c)})]})})}function Ei(t){return t.kind==="neptune"||t.kind==="ticker"?d.jsx($r,{...t,kind:t.kind}):t.kind==="prototype"?d.jsxs("mesh",{onPointerOver:()=>{var e;return(e=t.onHover)==null?void 0:e.call(t,"prototype")},onPointerOut:()=>{var e;return(e=t.onHover)==null?void 0:e.call(t,null)},onClick:e=>{var i;e.stopPropagation(),e.delta<6&&((i=t.onChoose)==null||i.call(t,"prototype"))},children:[d.jsx("sphereGeometry",{args:[t.radius??1,24,16]}),d.jsx("meshBasicMaterial",{transparent:!0,opacity:0,depthWrite:!1})]}):t.kind==="classroom"?d.jsx(tn,{...t}):t.kind==="travel"?d.jsx(Jr,{...t}):t.kind==="probe"?d.jsx(en,{...t}):d.jsx(Qr,{...t})}function sn({reduced:t,waiting:e,entranceAt:i}){const s=S.useRef(null),r=S.useMemo(()=>{let n=3024;const a=()=>(n=n*16807%2147483647,n/2147483647),l=new Float32Array(1600*3);for(let o=0;o<1600;o++)l[o*3]=(a()-.5)*50,l[o*3+1]=(a()-.5)*30,l[o*3+2]=-6-a()*20;return l},[]);return ye(({pointer:n},a)=>{if(!s.current)return;const l=Ge(e,i,t,300,2100);s.current.material.opacity=.3+l*.55,t||(s.current.rotation.y=W.damp(s.current.rotation.y,n.x*.025+(1-l)*.065,2,a),s.current.rotation.x=W.damp(s.current.rotation.x,-n.y*.02,2,a))}),d.jsxs("points",{ref:s,children:[d.jsx("bufferGeometry",{children:d.jsx("bufferAttribute",{attach:"attributes-position",args:[r,3]})}),d.jsx("pointsMaterial",{size:.023,color:"#c4defe",transparent:!0,opacity:.85,sizeAttenuation:!0})]})}const je=[{kind:"classroom",position:[0,3.25,-.3],radius:.43},{kind:"neptune",position:[0,.1,0],radius:1.65,labelOffset:[-1.25,0]},{kind:"travel",position:[-3.65,1.25,.3],radius:.94},{kind:"ticker",position:[3.75,1.35,-.4],radius:.78},{kind:"station",position:[-2.75,-2.1,.7],radius:.49},{kind:"feifei",position:[.35,-2.7,.15],radius:.76,labelOffset:[1.6,.55]},{kind:"prototype",position:[3.05,-1.55,.6],radius:.45},{kind:"probe",position:[-5.1,-.85,-.7],radius:.2}],rn={neptune:[0,6.35],travel:[-1.65,2.65],ticker:[1.65,2.65],station:[-1.65,-.8],feifei:[1.65,-.8],prototype:[-1.65,-4.15],classroom:[1.65,-4.15],probe:[0,-7]};function Le(t,e){return e?[...rn[t.kind],t.position[2]]:t.position}const Ne={x:0,y:0,zoom:1};function Ge(t,e,i,s,r){if(t)return 0;if(i||e==null)return 1;const n=W.clamp((performance.now()-e-s)/r,0,1);return n*n*(3-2*n)}function nn({hiddenKinds:t,reduced:e,onHover:i,onChoose:s,selected:r,single:n,waiting:a,entranceAt:l,rotation:o,zoom:h,labelRefs:c,highlighted:f,crystalRef:m,sceneReady:p}){const u=S.useRef(null),v=S.useRef({}),y=S.useRef(null),{camera:x,size:g}=$i(),w=S.useMemo(()=>new $,[]),M=S.useMemo(()=>new $,[]),E=S.useMemo(()=>new $,[]),R=S.useMemo(()=>new $,[]),I=()=>{const F=m.current,B=u.current;if(!F||!B)return;const k=je.find(z=>z.kind==="prototype");n?E.set(0,0,0):E.set(...Le(k,g.width<=700)),B.localToWorld(E),R.copy(E),R.y+=(n?1.7:k.radius)*B.scale.x,E.project(x),R.project(x);const C=Math.round(Math.hypot((R.x-E.x)*g.width,(R.y-E.y)*g.height)/.7/2)*2;if(!Number.isFinite(C)||E.z<-1||E.z>1){F.style.visibility="hidden";return}const j=`${Math.max(24,Math.min(2048,C))}px`;F.style.width!==j&&(F.style.width=j,F.style.height=j),F.style.left=`${(E.x+1)*g.width/2}px`,F.style.top=`${(1-E.y)*g.height/2}px`,F.style.visibility="visible"};return S.useEffect(()=>{x.position.set(0,0,n?7.8:15),x.lookAt(0,0,0)},[x,n]),ye(({pointer:F,clock:B},k)=>{if(!u.current)return;if(n){u.current.rotation.y=W.damp(u.current.rotation.y,o.current.y+(e?0:F.x*.1),3,k),u.current.rotation.x=W.damp(u.current.rotation.x,o.current.x,3,k),u.current.updateWorldMatrix(!0,!1),x.updateMatrixWorld(),I();return}const C=g.width<=700;if(je.forEach((b,O)=>{const P=v.current[b.kind];if(!P)return;if(b.kind==="neptune"){const Fe=Ge(a,l,e,450,800);P.position.set(...Le(b,C)),P.visible=Fe>0,P.scale.setScalar(.78+Fe*.22);return}const D=Ge(a,l,e,1150+O*75,1200),[T,Y,Oe]=Le(b,C),ce=(1-D)*(O%2?-.35:.35),_e=.68+D*.32;P.position.set((T*Math.cos(ce)-Y*Math.sin(ce))*_e,(T*Math.sin(ce)+Y*Math.cos(ce))*_e,Oe),P.scale.setScalar(.15+.85*D),P.visible=D>0}),y.current){const b=Ge(a,l,e,850,1450);y.current.scale.setScalar(.55+b*.45),y.current.traverse(O=>{O instanceof ts&&(O.material.opacity=.23*b)})}if(u.current.scale.setScalar(C?1:1.12),u.current.rotation.x=W.damp(u.current.rotation.x,o.current.x+(e?0:F.y*.025),4,k),u.current.rotation.y=W.damp(u.current.rotation.y,o.current.y+(e?0:F.x*.035),4,k),r){const b=je.find(O=>O.kind===r);w.set(...Le(b,C)),u.current.localToWorld(w),w.z+=b.radius*3+1,x.position.lerp(w,1-Math.exp(-k*3))}else{const b=C?Math.max(18.4,7.4*g.height/g.width)/(2*Math.tan(W.degToRad(20))):13.8;x.position.lerp(w.set(0,0,b*(C?1:h.current)),1-Math.exp(-k*4))}e||(u.current.position.y=Math.sin(B.elapsedTime*.13)*.035),u.current.updateWorldMatrix(!0,!1),x.updateMatrixWorld(),p.current&&(p.current.dataset.ready="true"),I();const j=[];for(const b of je){const O=c.current[b.kind];if(!O)continue;const P=Ge(a,l,e,2780,580);if(r||P===0){O.style.visibility="hidden";continue}O.style.opacity=String(P),M.set(...Le(b,C)),M.y-=b.kind==="probe"?.55:b.radius+.37;const D=C?void 0:b.labelOffset;if(D&&(M.x+=D[0],M.y+=D[1]),u.current.localToWorld(M).project(x),!Number.isFinite(M.x)||!Number.isFinite(M.y)||M.z<-1||M.z>1){O.style.visibility="hidden";continue}const T=O.offsetWidth,Y=O.offsetHeight;j.push({node:O,width:T,height:Y,left:W.clamp((M.x+1)*g.width/2-T/2,8,Math.max(8,g.width-T-8)),top:W.clamp((1-M.y)*g.height/2-Y/2,8,Math.max(8,g.height-Y-8))})}const z=[];for(const b of j.sort((O,P)=>O.top-P.top)){const P=[b.top,...z.flatMap(D=>[D.top-b.height-6,D.top+D.height+6])].sort((D,T)=>Math.abs(D-b.top)-Math.abs(T-b.top)).find(D=>D>=8&&D+b.height<=g.height-8&&z.every(T=>b.left+b.width+6<=T.left||b.left>=T.left+T.width+6||D+b.height+6<=T.top||D>=T.top+T.height+6));P!==void 0&&(b.top=P),b.node.style.left=`${b.left+b.width/2}px`,b.node.style.top=`${b.top+b.height/2}px`,b.node.style.visibility="visible",z.push(b)}}),d.jsxs(d.Fragment,{children:[d.jsx("ambientLight",{intensity:1.15}),d.jsx("directionalLight",{position:[-6,5,7],intensity:2.8,color:"#e5f2ff"}),d.jsx("pointLight",{position:[5,-2,4],intensity:12,color:"#7faeff"}),d.jsx(sn,{reduced:e,waiting:a,entranceAt:l}),d.jsx("group",{ref:u,children:n?d.jsx(Ei,{kind:n,radius:1.7,reduced:e}):d.jsxs(d.Fragment,{children:[d.jsx("group",{ref:y,rotation:[.2,.12,-.23],children:[2.45,3.7,5.1].map((F,B)=>d.jsx(Ie,{radius:F,tilt:1.1,color:B===0?"#7a9ac2":"#49617e",dashed:!0},F))}),je.filter(F=>!(t!=null&&t.includes(F.kind))).map(F=>d.jsx("group",{ref:B=>{v.current[F.kind]=B},position:Le(F,g.width<=700),children:d.jsx(Ei,{kind:F.kind,radius:F.radius,reduced:e,onHover:i,onChoose:s,highlighted:F.kind===f})},F.kind))]})})]})}class Ti extends S.Component{constructor(){super(...arguments);Jt(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}function cn(t){const e=Yi(),i=je.filter(g=>!e.some(w=>w.id===g.kind)).map(g=>g.kind),s=S.useRef(null),r=S.useRef(null),n=S.useRef({}),[a,l]=S.useState(null),o=g=>{var w;l(g),(w=t.onHover)==null||w.call(t,g)},h=S.useRef(null),c=S.useRef(null),f=S.useRef({x:t.single?0:Ne.x,y:t.single?0:Ne.y}),m=S.useRef(t.single?1:Ne.zoom),[p,u]=S.useState(!0),[v,y]=S.useState(!1);S.useEffect(()=>{const g=h.current;if(!g)return;const w=new IntersectionObserver(([E])=>u(E.isIntersecting&&!document.hidden));w.observe(g);const M=()=>{const E=g.getBoundingClientRect();u(!document.hidden&&E.bottom>0&&E.top<innerHeight)};return document.addEventListener("visibilitychange",M),()=>{w.disconnect(),document.removeEventListener("visibilitychange",M),t.single||(Ne.x=f.current.x,Ne.y=f.current.y,Ne.zoom=m.current)}},[t.single]),S.useEffect(()=>{const g=h.current;if(!g||t.single)return;const w=E=>{E.preventDefault(),m.current=W.clamp(m.current+E.deltaY*2e-4,.86,1.15)},M=E=>{g.clientWidth>700&&w(E)};return g.addEventListener("wheel",M,{passive:!1}),()=>g.removeEventListener("wheel",M)},[t.single]);const x=d.jsxs("div",{className:"fallback-universe",children:[d.jsx("div",{className:`fallback-planet ${t.single??"neptune"}`}),!t.single&&d.jsx("div",{className:"fallback-links",children:e.map(g=>d.jsxs("button",{onClick:()=>{var w;return(w=t.onChoose)==null?void 0:w.call(t,g.id)},children:[g.name,d.jsxs("small",{children:[g.label," ↗"]})]},g.id))})]});return d.jsxs("div",{ref:h,className:`universe ${t.single?"single-universe":""}`,onPointerDown:g=>{g.target.closest("button")||g.pointerType==="touch"&&g.currentTarget.clientWidth<=700||(c.current={x:g.clientX,y:g.clientY})},onPointerMove:g=>{c.current&&(f.current.y=W.clamp(f.current.y+(g.clientX-c.current.x)*.002,t.single?-2:-.3,t.single?2:.3),f.current.x=W.clamp(f.current.x+(g.clientY-c.current.y)*.001,t.single?-.5:-.14,t.single?.5:.14),c.current={x:g.clientX,y:g.clientY})},onPointerCancel:()=>{c.current=null},onPointerUp:()=>{c.current=null},onPointerLeave:()=>{c.current=null},children:[d.jsx(Ti,{fallback:x,children:v?x:d.jsx(Xi,{camera:{position:[0,0,t.single?7.8:15],fov:40,near:.1,far:100},dpr:[1,window.innerWidth<=700?1.25:1.75],frameloop:p?"always":"never",gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},onCreated:({gl:g})=>{g.domElement.addEventListener("webglcontextlost",w=>{w.preventDefault(),y(!0)},{once:!0})},fallback:x,children:d.jsx(S.Suspense,{fallback:null,children:d.jsx(nn,{...t,hiddenKinds:i,onHover:o,rotation:f,zoom:m,labelRefs:n,highlighted:a,crystalRef:s,sceneReady:r})})})}),!t.single&&d.jsx("div",{ref:r,className:"scene-ready","aria-hidden":"true"}),(!t.single||t.single==="prototype")&&!v&&d.jsxs("div",{ref:s,className:"crystal-world",children:[d.jsx("div",{className:"crystal-orb-fallback"}),d.jsx(Ti,{fallback:null,children:d.jsx(Ur,{preset:"plasma",color:"#424d5d",size:.7,crackle:.85,fill:.5,particleCount:t.single?12e3:3e3,interactive:!t.reduced,hoverStrength:.7,intro:!1,paused:t.reduced||!p})}),!t.single&&d.jsx("button",{type:"button",className:"crystal-world-hitarea","aria-label":"进入早期实验",onMouseEnter:()=>o("prototype"),onMouseLeave:()=>o(null),onFocus:()=>o("prototype"),onBlur:()=>o(null),onClick:()=>{var g;return(g=t.onChoose)==null?void 0:g.call(t,"prototype")}})]}),!t.single&&!v&&e.map(g=>{var w,M;return d.jsxs("button",{ref:E=>{n.current[g.id]=E},type:"button",className:`world-label ${g.id==="probe"?"compact":""} ${g.id==="classroom"?"public-deploy-label":""} ${a===g.id?"locked":""} ${(w=t.visited)!=null&&w.includes(g.path)?"visited":""}`,style:{position:"absolute",left:0,top:0,visibility:"hidden",transform:"translate(-50%, -50%)",zIndex:16},"aria-label":`探索${g.label}`,onFocus:()=>o(g.id),onBlur:()=>o(null),onMouseEnter:()=>o(g.id),onMouseLeave:()=>o(null),onClick:()=>{var E;return(E=t.onChoose)==null?void 0:E.call(t,g.id)},children:[d.jsxs("span",{className:"label-code",children:[g.code,g.id==="travel"?" / FLAGSHIP":(M=t.visited)!=null&&M.includes(g.path)?" / EXPLORED":""]}),d.jsxs("strong",{children:[g.name," ",d.jsx("span",{children:"↗"})]}),d.jsx("small",{children:g.id==="travel"?"旅行回忆 · 开发中":g.label})]},g.id)})]})}export{cn as default};

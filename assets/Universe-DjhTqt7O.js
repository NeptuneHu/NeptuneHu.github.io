var Wi=Object.defineProperty;var Xi=(t,e,i)=>e in t?Wi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Jt=(t,e,i)=>Xi(t,typeof e!="symbol"?e+"":e,i);import{b as E,j as p,u as Ri,c as ye,C as $i,d as Yi}from"./scene-tools-gIc_NJH9.js";import{w as ei}from"./index-BuntcKAn.js";import{V as $,M as Ki,f as _i,k as Zi,i as Qe,D as Et,l as W,m as Fi,Q as Qi,n as Ji,o as ti,p as es,q as ts}from"./three-CenKRY5A.js";function Ge(t){let e=t[0],i=t[1],s=t[2];return Math.sqrt(e*e+i*i+s*s)}function Mt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function is(t,e,i,s){return t[0]=e,t[1]=i,t[2]=s,t}function ii(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}function si(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t}function ss(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t}function rs(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],t}function mt(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function ns(t,e){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(i*i+s*s+r*r)}function as(t,e){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2];return i*i+s*s+r*r}function ri(t){let e=t[0],i=t[1],s=t[2];return e*e+i*i+s*s}function ls(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function os(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function bt(t,e){let i=e[0],s=e[1],r=e[2],n=i*i+s*s+r*r;return n>0&&(n=1/Math.sqrt(n)),t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function Ai(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ni(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[0],l=i[1],o=i[2];return t[0]=r*o-n*l,t[1]=n*a-s*o,t[2]=s*l-r*a,t}function hs(t,e,i,s){let r=e[0],n=e[1],a=e[2];return t[0]=r+s*(i[0]-r),t[1]=n+s*(i[1]-n),t[2]=a+s*(i[2]-a),t}function cs(t,e,i,s,r){const n=Math.exp(-s*r);let a=e[0],l=e[1],o=e[2];return t[0]=i[0]+(a-i[0])*n,t[1]=i[1]+(l-i[1])*n,t[2]=i[2]+(o-i[2])*n,t}function us(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[3]*s+i[7]*r+i[11]*n+i[15];return a=a||1,t[0]=(i[0]*s+i[4]*r+i[8]*n+i[12])/a,t[1]=(i[1]*s+i[5]*r+i[9]*n+i[13])/a,t[2]=(i[2]*s+i[6]*r+i[10]*n+i[14])/a,t}function fs(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[3]*s+i[7]*r+i[11]*n+i[15];return a=a||1,t[0]=(i[0]*s+i[4]*r+i[8]*n)/a,t[1]=(i[1]*s+i[5]*r+i[9]*n)/a,t[2]=(i[2]*s+i[6]*r+i[10]*n)/a,t}function ds(t,e,i){let s=e[0],r=e[1],n=e[2];return t[0]=s*i[0]+r*i[3]+n*i[6],t[1]=s*i[1]+r*i[4]+n*i[7],t[2]=s*i[2]+r*i[5]+n*i[8],t}function ms(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[0],l=i[1],o=i[2],h=i[3],c=l*n-o*r,f=o*s-a*n,v=a*r-l*s,d=l*v-o*f,m=o*c-a*v,x=a*f-l*c,u=h*2;return c*=u,f*=u,v*=u,d*=2,m*=2,x*=2,t[0]=s+c+d,t[1]=r+f+m,t[2]=n+v+x,t}const ps=(function(){const t=[0,0,0],e=[0,0,0];return function(i,s){Mt(t,i),Mt(e,s),bt(t,t),bt(e,e);let r=Ai(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}})();function gs(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class ne extends Array{constructor(e=0,i=e,s=e){return super(e,i,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,i=e,s=e){return e.length?this.copy(e):(is(this,e,i,s),this)}copy(e){return Mt(this,e),this}add(e,i){return i?ii(this,e,i):ii(this,this,e),this}sub(e,i){return i?si(this,e,i):si(this,this,e),this}multiply(e){return e.length?ss(this,this,e):mt(this,this,e),this}divide(e){return e.length?rs(this,this,e):mt(this,this,1/e),this}inverse(e=this){return os(this,e),this}len(){return Ge(this)}distance(e){return e?ns(this,e):Ge(this)}squaredLen(){return ri(this)}squaredDistance(e){return e?as(this,e):ri(this)}negate(e=this){return ls(this,e),this}cross(e,i){return i?ni(this,e,i):ni(this,this,e),this}scale(e){return mt(this,this,e),this}normalize(){return bt(this,this),this}dot(e){return Ai(this,e)}equals(e){return gs(this,e)}applyMatrix3(e){return ds(this,this,e),this}applyMatrix4(e){return us(this,this,e),this}scaleRotateMatrix4(e){return fs(this,this,e),this}applyQuaternion(e){return ms(this,this,e),this}angle(e){return ps(this,e)}lerp(e,i){return hs(this,this,e,i),this}smoothLerp(e,i,s){return cs(this,this,e,i,s),this}clone(){return new ne(this[0],this[1],this[2])}fromArray(e,i=0){return this[0]=e[i],this[1]=e[i+1],this[2]=e[i+2],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e}transformDirection(e){const i=this[0],s=this[1],r=this[2];return this[0]=e[0]*i+e[4]*s+e[8]*r,this[1]=e[1]*i+e[5]*s+e[9]*r,this[2]=e[2]*i+e[6]*s+e[10]*r,this.normalize()}}const ai=new ne;let vs=1,xs=1,li=!1;class zi{constructor(e,i={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=i,this.id=vs++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in i)this.addAttribute(s,i[s])}addAttribute(e,i){if(this.attributes[e]=i,i.id=xs++,i.size=i.size||1,i.type=i.type||(i.data.constructor===Float32Array?this.gl.FLOAT:i.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),i.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,i.normalized=i.normalized||!1,i.stride=i.stride||0,i.offset=i.offset||0,i.count=i.count||(i.stride?i.data.byteLength/i.stride:i.data.length/i.size),i.divisor=i.instanced||0,i.needsUpdate=!1,i.usage=i.usage||this.gl.STATIC_DRAW,i.buffer||this.updateAttribute(i),i.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==i.count*i.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,i.count*i.divisor);this.instancedCount=i.count*i.divisor}else e==="index"?this.drawRange.count=i.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,i.count))}updateAttribute(e){const i=!e.buffer;i&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),i?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((i,{name:s,type:r})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const n=this.attributes[s];this.gl.bindBuffer(n.target,n.buffer),this.glState.boundBuffer=n.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const l=n.size/a,o=a===1?0:a*a*4,h=a===1?0:a*4;for(let c=0;c<a;c++)this.gl.vertexAttribPointer(i+c,l,n.type,n.normalized,n.stride+o,n.offset+c*h),this.gl.enableVertexAttribArray(i+c),this.gl.renderer.vertexAttribDivisor(i+c,n.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:i=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((n,{name:a})=>{const l=this.attributes[a];l.needsUpdate&&this.updateAttribute(l)});let s=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(i,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(i,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!li)return console.warn("No position buffer data found to compute bounds"),li=!0}computeBoundingBox(e){e||(e=this.getPosition());const i=e.data,s=e.size;this.bounds||(this.bounds={min:new ne,max:new ne,center:new ne,scale:new ne,radius:1/0});const r=this.bounds.min,n=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;r.set(1/0),n.set(-1/0);for(let o=0,h=i.length;o<h;o+=s){const c=i[o],f=i[o+1],v=i[o+2];r.x=Math.min(c,r.x),r.y=Math.min(f,r.y),r.z=Math.min(v,r.z),n.x=Math.max(c,n.x),n.y=Math.max(f,n.y),n.z=Math.max(v,n.z)}l.sub(n,r),a.add(r,n).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const i=e.data,s=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let n=0,a=i.length;n<a;n+=s)ai.fromArray(i,n),r=Math.max(r,this.bounds.center.squaredDistance(ai));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let ys=1;const oi={};class Ye{constructor(e,{vertex:i,fragment:s,uniforms:r={},transparent:n=!1,cullFace:a=e.BACK,frontFace:l=e.CCW,depthTest:o=!0,depthWrite:h=!0,depthFunc:c=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=ys++,i||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=n,this.cullFace=a,this.frontFace=l,this.depthTest=o,this.depthWrite=h,this.depthFunc=c,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:i,fragment:s})}setShaders({vertex:e,fragment:i}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${hi(e)}`)),i&&(this.gl.shaderSource(this.fragmentShader,i),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${hi(i)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<s;a++){let l=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));const o=l.name.match(/(\w+)/g);l.uniformName=o[0],l.nameComponents=o.slice(1)}this.attributeLocations=new Map;const r=[],n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const l=this.gl.getActiveAttrib(this.program,a),o=this.gl.getAttribLocation(this.program,l.name);o!==-1&&(r[o]=l.name,this.attributeLocations.set(l,o))}this.attributeOrder=r.join("")}setBlendFunc(e,i,s,r){this.blendFunc.src=e,this.blendFunc.dst=i,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,i){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=i}setStencilFunc(e,i,s){this.stencilRef=i,this.stencilFunc.func=e,this.stencilFunc.ref=i,this.stencilFunc.mask=s}setStencilOp(e,i,s){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=i,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let i=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,n)=>{let a=this.uniforms[n.uniformName];for(const l of n.nameComponents){if(!a)break;if(l in a)a=a[l];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return ci(`Active uniform ${n.name} has not been supplied`);if(a&&a.value===void 0)return ci(`${n.name} uniform is missing a value parameter`);if(a.value.texture)return i=i+1,a.value.update(i),pt(this.gl,n.type,r,i);if(a.value.length&&a.value[0].texture){const l=[];return a.value.forEach(o=>{i=i+1,o.update(i),l.push(i)}),pt(this.gl,n.type,r,l)}pt(this.gl,n.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function pt(t,e,i,s){s=s.length?ws(s):s;const r=t.renderer.state.uniformLocations.get(i);if(s.length)if(r===void 0||r.length!==s.length)t.renderer.state.uniformLocations.set(i,s.slice(0));else{if(Ms(r,s))return;r.set?r.set(s):bs(r,s),t.renderer.state.uniformLocations.set(i,r)}else{if(r===s)return;t.renderer.state.uniformLocations.set(i,s)}switch(e){case 5126:return s.length?t.uniform1fv(i,s):t.uniform1f(i,s);case 35664:return t.uniform2fv(i,s);case 35665:return t.uniform3fv(i,s);case 35666:return t.uniform4fv(i,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?t.uniform1iv(i,s):t.uniform1i(i,s);case 35671:case 35667:return t.uniform2iv(i,s);case 35672:case 35668:return t.uniform3iv(i,s);case 35673:case 35669:return t.uniform4iv(i,s);case 35674:return t.uniformMatrix2fv(i,!1,s);case 35675:return t.uniformMatrix3fv(i,!1,s);case 35676:return t.uniformMatrix4fv(i,!1,s)}}function hi(t){let e=t.split(`
`);for(let i=0;i<e.length;i++)e[i]=i+1+": "+e[i];return e.join(`
`)}function ws(t){const e=t.length,i=t[0].length;if(i===void 0)return t;const s=e*i;let r=oi[s];r||(oi[s]=r=new Float32Array(s));for(let n=0;n<e;n++)r.set(t[n],n*i);return r}function Ms(t,e){if(t.length!==e.length)return!1;for(let i=0,s=t.length;i<s;i++)if(t[i]!==e[i])return!1;return!0}function bs(t,e){for(let i=0,s=t.length;i<s;i++)t[i]=e[i]}let gt=0;function ci(t){gt>100||(console.warn(t),gt++,gt>100&&console.warn("More than 100 program warnings - stopping logs."))}const vt=new ne;let Es=1;class Ts{constructor({canvas:e=document.createElement("canvas"),width:i=300,height:s=150,dpr:r=1,alpha:n=!1,depth:a=!0,stencil:l=!1,antialias:o=!1,premultipliedAlpha:h=!1,preserveDrawingBuffer:c=!1,powerPreference:f="default",autoClear:v=!0,webgl:d=2}={}){const m={alpha:n,depth:a,stencil:l,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:f};this.dpr=r,this.alpha=n,this.color=!0,this.depth=a,this.stencil=l,this.premultipliedAlpha=h,this.autoClear=v,this.id=Es++,d===2&&(this.gl=e.getContext("webgl2",m)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",m)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(i,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,i){this.width=e,this.height=i,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=i*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:i+"px"})}setViewport(e,i,s=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===i||(this.state.viewport.width=e,this.state.viewport.height=i,this.state.viewport.x=s,this.state.viewport.y=r,this.gl.viewport(s,r,e,i))}setScissor(e,i,s=0,r=0){this.gl.scissor(s,r,e,i)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,i,s,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===i&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=i,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=r,s!==void 0?this.gl.blendFuncSeparate(e,i,s,r):this.gl.blendFunc(e,i))}setBlendEquation(e,i){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===i)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=i,i!==void 0?this.gl.blendEquationSeparate(e,i):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,i,s){this.state.stencilFunc===e&&this.state.stencilRef===i&&this.state.stencilFuncMask===s||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=i||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(e||this.gl.ALWAYS,i||0,s||0))}setStencilOp(e,i,s){this.state.stencilFail===e&&this.state.stencilDepthFail===i&&this.state.stencilDepthPass===s||(this.state.stencilFail=e,this.state.stencilDepthFail=i,this.state.stencilDepthPass=s,this.gl.stencilOp(e,i,s))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:i=null}={}){this.state.framebuffer!==i&&(this.state.framebuffer=i,this.gl.bindFramebuffer(e,i))}getExtension(e,i,s){return i&&this.gl[i]?this.gl[i].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),i?this.extensions[e]?this.extensions[e][s].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program.id!==i.program.id?e.program.id-i.program.id:e.zDepth!==i.zDepth?e.zDepth-i.zDepth:i.id-e.id}sortTransparent(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.zDepth!==i.zDepth?i.zDepth-e.zDepth:i.id-e.id}sortUI(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program.id!==i.program.id?e.program.id-i.program.id:i.id-e.id}getRenderList({scene:e,camera:i,frustumCull:s,sort:r}){let n=[];if(i&&s&&i.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(s&&a.frustumCulled&&i&&!i.frustumIntersectsMesh(a)||n.push(a))}),r){const a=[],l=[],o=[];n.forEach(h=>{h.program.transparent?h.program.depthTest?l.push(h):o.push(h):a.push(h),h.zDepth=0,!(h.renderOrder!==0||!h.program.depthTest||!i)&&(h.worldMatrix.getTranslation(vt),vt.applyMatrix4(i.projectionViewMatrix),h.zDepth=vt.z)}),a.sort(this.sortOpaque),l.sort(this.sortTransparent),o.sort(this.sortUI),n=a.concat(l,o)}return n}render({scene:e,camera:i,target:s=null,update:r=!0,sort:n=!0,frustumCull:a=!0,clear:l}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),i&&i.updateMatrixWorld(),this.getRenderList({scene:e,camera:i,frustumCull:a,sort:n}).forEach(h=>{h.draw({camera:i})})}}function Ss(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Rs(t,e,i,s,r){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t}function _s(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i*i+s*s+r*r+n*n;return a>0&&(a=1/Math.sqrt(a)),t[0]=i*a,t[1]=s*a,t[2]=r*a,t[3]=n*a,t}function Fs(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function As(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function zs(t,e,i){i=i*.5;let s=Math.sin(i);return t[0]=s*e[0],t[1]=s*e[1],t[2]=s*e[2],t[3]=Math.cos(i),t}function ui(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=i[0],o=i[1],h=i[2],c=i[3];return t[0]=s*c+a*l+r*h-n*o,t[1]=r*c+a*o+n*l-s*h,t[2]=n*c+a*h+s*o-r*l,t[3]=a*c-s*l-r*o-n*h,t}function Cs(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=s*o+a*l,t[1]=r*o+n*l,t[2]=n*o-r*l,t[3]=a*o-s*l,t}function Ps(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=s*o-n*l,t[1]=r*o+a*l,t[2]=n*o+s*l,t[3]=a*o-r*l,t}function Ds(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=s*o+r*l,t[1]=r*o-s*l,t[2]=n*o+a*l,t[3]=a*o-n*l,t}function ks(t,e,i,s){let r=e[0],n=e[1],a=e[2],l=e[3],o=i[0],h=i[1],c=i[2],f=i[3],v,d,m,x,u;return d=r*o+n*h+a*c+l*f,d<0&&(d=-d,o=-o,h=-h,c=-c,f=-f),1-d>1e-6?(v=Math.acos(d),m=Math.sin(v),x=Math.sin((1-s)*v)/m,u=Math.sin(s*v)/m):(x=1-s,u=s),t[0]=x*r+u*o,t[1]=x*n+u*h,t[2]=x*a+u*c,t[3]=x*l+u*f,t}function Ls(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i*i+s*s+r*r+n*n,l=a?1/a:0;return t[0]=-i*l,t[1]=-s*l,t[2]=-r*l,t[3]=n*l,t}function Ns(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Bs(t,e){let i=e[0]+e[4]+e[8],s;if(i>0)s=Math.sqrt(i+1),t[3]=.5*s,s=.5/s,t[0]=(e[5]-e[7])*s,t[1]=(e[6]-e[2])*s,t[2]=(e[1]-e[3])*s;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let n=(r+1)%3,a=(r+2)%3;s=Math.sqrt(e[r*3+r]-e[n*3+n]-e[a*3+a]+1),t[r]=.5*s,s=.5/s,t[3]=(e[n*3+a]-e[a*3+n])*s,t[n]=(e[n*3+r]+e[r*3+n])*s,t[a]=(e[a*3+r]+e[r*3+a])*s}return t}function js(t,e,i="YXZ"){let s=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),n=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),o=Math.cos(e[2]*.5);return i==="XYZ"?(t[0]=s*a*o+r*n*l,t[1]=r*n*o-s*a*l,t[2]=r*a*l+s*n*o,t[3]=r*a*o-s*n*l):i==="YXZ"?(t[0]=s*a*o+r*n*l,t[1]=r*n*o-s*a*l,t[2]=r*a*l-s*n*o,t[3]=r*a*o+s*n*l):i==="ZXY"?(t[0]=s*a*o-r*n*l,t[1]=r*n*o+s*a*l,t[2]=r*a*l+s*n*o,t[3]=r*a*o-s*n*l):i==="ZYX"?(t[0]=s*a*o-r*n*l,t[1]=r*n*o+s*a*l,t[2]=r*a*l-s*n*o,t[3]=r*a*o+s*n*l):i==="YZX"?(t[0]=s*a*o+r*n*l,t[1]=r*n*o+s*a*l,t[2]=r*a*l-s*n*o,t[3]=r*a*o-s*n*l):i==="XZY"&&(t[0]=s*a*o-r*n*l,t[1]=r*n*o-s*a*l,t[2]=r*a*l+s*n*o,t[3]=r*a*o+s*n*l),t}const Is=Ss,Os=Rs,Us=Fs,Hs=_s;class Gs extends Array{constructor(e=0,i=0,s=0,r=1){super(e,i,s,r),this.onChange=()=>{},this._target=this;const n=["0","1","2","3"];return new Proxy(this,{set(a,l){const o=Reflect.set(...arguments);return o&&n.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return As(this._target),this.onChange(),this}set(e,i,s,r){return e.length?this.copy(e):(Os(this._target,e,i,s,r),this.onChange(),this)}rotateX(e){return Cs(this._target,this._target,e),this.onChange(),this}rotateY(e){return Ps(this._target,this._target,e),this.onChange(),this}rotateZ(e){return Ds(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Ls(this._target,e),this.onChange(),this}conjugate(e=this._target){return Ns(this._target,e),this.onChange(),this}copy(e){return Is(this._target,e),this.onChange(),this}normalize(e=this._target){return Hs(this._target,e),this.onChange(),this}multiply(e,i){return i?ui(this._target,e,i):ui(this._target,this._target,e),this.onChange(),this}dot(e){return Us(this._target,e)}fromMatrix3(e){return Bs(this._target,e),this.onChange(),this}fromEuler(e,i){return js(this._target,e,e.order),i||this.onChange(),this}fromAxisAngle(e,i){return zs(this._target,e,i),this.onChange(),this}slerp(e,i){return ks(this._target,this._target,e,i),this.onChange(),this}fromArray(e,i=0){return this._target[0]=e[i],this._target[1]=e[i+1],this._target[2]=e[i+2],this._target[3]=e[i+3],this.onChange(),this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e[i+3]=this[3],e}}const qs=1e-6;function Vs(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Ws(t,e,i,s,r,n,a,l,o,h,c,f,v,d,m,x,u){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t[4]=n,t[5]=a,t[6]=l,t[7]=o,t[8]=h,t[9]=c,t[10]=f,t[11]=v,t[12]=d,t[13]=m,t[14]=x,t[15]=u,t}function Xs(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $s(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=e[9],v=e[10],d=e[11],m=e[12],x=e[13],u=e[14],g=e[15],b=i*l-s*a,y=i*o-r*a,w=i*h-n*a,S=s*o-r*l,R=s*h-n*l,A=r*h-n*o,j=c*x-f*m,L=c*u-v*m,P=c*g-d*m,N=f*u-v*x,I=f*g-d*x,M=v*g-d*u,T=b*M-y*I+w*N+S*P-R*L+A*j;return T?(T=1/T,t[0]=(l*M-o*I+h*N)*T,t[1]=(r*I-s*M-n*N)*T,t[2]=(x*A-u*R+g*S)*T,t[3]=(v*R-f*A-d*S)*T,t[4]=(o*P-a*M-h*L)*T,t[5]=(i*M-r*P+n*L)*T,t[6]=(u*w-m*A-g*y)*T,t[7]=(c*A-v*w+d*y)*T,t[8]=(a*I-l*P+h*j)*T,t[9]=(s*P-i*I-n*j)*T,t[10]=(m*R-x*w+g*b)*T,t[11]=(f*w-c*R-d*b)*T,t[12]=(l*L-a*N-o*j)*T,t[13]=(i*N-s*L+r*j)*T,t[14]=(x*y-m*S-u*b)*T,t[15]=(c*S-f*y+v*b)*T,t):null}function Ci(t){let e=t[0],i=t[1],s=t[2],r=t[3],n=t[4],a=t[5],l=t[6],o=t[7],h=t[8],c=t[9],f=t[10],v=t[11],d=t[12],m=t[13],x=t[14],u=t[15],g=e*a-i*n,b=e*l-s*n,y=e*o-r*n,w=i*l-s*a,S=i*o-r*a,R=s*o-r*l,A=h*m-c*d,j=h*x-f*d,L=h*u-v*d,P=c*x-f*m,N=c*u-v*m,I=f*u-v*x;return g*I-b*N+y*P+w*L-S*j+R*A}function fi(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],v=e[9],d=e[10],m=e[11],x=e[12],u=e[13],g=e[14],b=e[15],y=i[0],w=i[1],S=i[2],R=i[3];return t[0]=y*s+w*l+S*f+R*x,t[1]=y*r+w*o+S*v+R*u,t[2]=y*n+w*h+S*d+R*g,t[3]=y*a+w*c+S*m+R*b,y=i[4],w=i[5],S=i[6],R=i[7],t[4]=y*s+w*l+S*f+R*x,t[5]=y*r+w*o+S*v+R*u,t[6]=y*n+w*h+S*d+R*g,t[7]=y*a+w*c+S*m+R*b,y=i[8],w=i[9],S=i[10],R=i[11],t[8]=y*s+w*l+S*f+R*x,t[9]=y*r+w*o+S*v+R*u,t[10]=y*n+w*h+S*d+R*g,t[11]=y*a+w*c+S*m+R*b,y=i[12],w=i[13],S=i[14],R=i[15],t[12]=y*s+w*l+S*f+R*x,t[13]=y*r+w*o+S*v+R*u,t[14]=y*n+w*h+S*d+R*g,t[15]=y*a+w*c+S*m+R*b,t}function Ys(t,e,i){let s=i[0],r=i[1],n=i[2],a,l,o,h,c,f,v,d,m,x,u,g;return e===t?(t[12]=e[0]*s+e[4]*r+e[8]*n+e[12],t[13]=e[1]*s+e[5]*r+e[9]*n+e[13],t[14]=e[2]*s+e[6]*r+e[10]*n+e[14],t[15]=e[3]*s+e[7]*r+e[11]*n+e[15]):(a=e[0],l=e[1],o=e[2],h=e[3],c=e[4],f=e[5],v=e[6],d=e[7],m=e[8],x=e[9],u=e[10],g=e[11],t[0]=a,t[1]=l,t[2]=o,t[3]=h,t[4]=c,t[5]=f,t[6]=v,t[7]=d,t[8]=m,t[9]=x,t[10]=u,t[11]=g,t[12]=a*s+c*r+m*n+e[12],t[13]=l*s+f*r+x*n+e[13],t[14]=o*s+v*r+u*n+e[14],t[15]=h*s+d*r+g*n+e[15]),t}function Ks(t,e,i){let s=i[0],r=i[1],n=i[2];return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Zs(t,e,i,s){let r=s[0],n=s[1],a=s[2],l=Math.hypot(r,n,a),o,h,c,f,v,d,m,x,u,g,b,y,w,S,R,A,j,L,P,N,I,M,T,U;return Math.abs(l)<qs?null:(l=1/l,r*=l,n*=l,a*=l,o=Math.sin(i),h=Math.cos(i),c=1-h,f=e[0],v=e[1],d=e[2],m=e[3],x=e[4],u=e[5],g=e[6],b=e[7],y=e[8],w=e[9],S=e[10],R=e[11],A=r*r*c+h,j=n*r*c+a*o,L=a*r*c-n*o,P=r*n*c-a*o,N=n*n*c+h,I=a*n*c+r*o,M=r*a*c+n*o,T=n*a*c-r*o,U=a*a*c+h,t[0]=f*A+x*j+y*L,t[1]=v*A+u*j+w*L,t[2]=d*A+g*j+S*L,t[3]=m*A+b*j+R*L,t[4]=f*P+x*N+y*I,t[5]=v*P+u*N+w*I,t[6]=d*P+g*N+S*I,t[7]=m*P+b*N+R*I,t[8]=f*M+x*T+y*U,t[9]=v*M+u*T+w*U,t[10]=d*M+g*T+S*U,t[11]=m*M+b*T+R*U,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function Qs(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Pi(t,e){let i=e[0],s=e[1],r=e[2],n=e[4],a=e[5],l=e[6],o=e[8],h=e[9],c=e[10];return t[0]=Math.hypot(i,s,r),t[1]=Math.hypot(n,a,l),t[2]=Math.hypot(o,h,c),t}function Js(t){let e=t[0],i=t[1],s=t[2],r=t[4],n=t[5],a=t[6],l=t[8],o=t[9],h=t[10];const c=e*e+i*i+s*s,f=r*r+n*n+a*a,v=l*l+o*o+h*h;return Math.sqrt(Math.max(c,f,v))}const Di=(function(){const t=[1,1,1];return function(e,i){let s=t;Pi(s,i);let r=1/s[0],n=1/s[1],a=1/s[2],l=i[0]*r,o=i[1]*n,h=i[2]*a,c=i[4]*r,f=i[5]*n,v=i[6]*a,d=i[8]*r,m=i[9]*n,x=i[10]*a,u=l+f+x,g=0;return u>0?(g=Math.sqrt(u+1)*2,e[3]=.25*g,e[0]=(v-m)/g,e[1]=(d-h)/g,e[2]=(o-c)/g):l>f&&l>x?(g=Math.sqrt(1+l-f-x)*2,e[3]=(v-m)/g,e[0]=.25*g,e[1]=(o+c)/g,e[2]=(d+h)/g):f>x?(g=Math.sqrt(1+f-l-x)*2,e[3]=(d-h)/g,e[0]=(o+c)/g,e[1]=.25*g,e[2]=(v+m)/g):(g=Math.sqrt(1+x-l-f)*2,e[3]=(o-c)/g,e[0]=(d+h)/g,e[1]=(v+m)/g,e[2]=.25*g),e}})();function er(t,e,i,s){let r=Ge([t[0],t[1],t[2]]);const n=Ge([t[4],t[5],t[6]]),a=Ge([t[8],t[9],t[10]]);Ci(t)<0&&(r=-r),i[0]=t[12],i[1]=t[13],i[2]=t[14];const o=t.slice(),h=1/r,c=1/n,f=1/a;o[0]*=h,o[1]*=h,o[2]*=h,o[4]*=c,o[5]*=c,o[6]*=c,o[8]*=f,o[9]*=f,o[10]*=f,Di(e,o),s[0]=r,s[1]=n,s[2]=a}function tr(t,e,i,s){const r=t,n=e[0],a=e[1],l=e[2],o=e[3],h=n+n,c=a+a,f=l+l,v=n*h,d=n*c,m=n*f,x=a*c,u=a*f,g=l*f,b=o*h,y=o*c,w=o*f,S=s[0],R=s[1],A=s[2];return r[0]=(1-(x+g))*S,r[1]=(d+w)*S,r[2]=(m-y)*S,r[3]=0,r[4]=(d-w)*R,r[5]=(1-(v+g))*R,r[6]=(u+b)*R,r[7]=0,r[8]=(m+y)*A,r[9]=(u-b)*A,r[10]=(1-(v+x))*A,r[11]=0,r[12]=i[0],r[13]=i[1],r[14]=i[2],r[15]=1,r}function ir(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i+i,l=s+s,o=r+r,h=i*a,c=s*a,f=s*l,v=r*a,d=r*l,m=r*o,x=n*a,u=n*l,g=n*o;return t[0]=1-f-m,t[1]=c+g,t[2]=v-u,t[3]=0,t[4]=c-g,t[5]=1-h-m,t[6]=d+x,t[7]=0,t[8]=v+u,t[9]=d-x,t[10]=1-h-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function sr(t,e,i,s,r){let n=1/Math.tan(e/2),a=1/(s-r);return t[0]=n/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+s)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*s*a,t[15]=0,t}function rr(t,e,i,s,r,n,a){let l=1/(e-i),o=1/(s-r),h=1/(n-a);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+i)*l,t[13]=(r+s)*o,t[14]=(a+n)*h,t[15]=1,t}function nr(t,e,i,s){let r=e[0],n=e[1],a=e[2],l=s[0],o=s[1],h=s[2],c=r-i[0],f=n-i[1],v=a-i[2],d=c*c+f*f+v*v;d===0?v=1:(d=1/Math.sqrt(d),c*=d,f*=d,v*=d);let m=o*v-h*f,x=h*c-l*v,u=l*f-o*c;return d=m*m+x*x+u*u,d===0&&(h?l+=1e-6:o?h+=1e-6:o+=1e-6,m=o*v-h*f,x=h*c-l*v,u=l*f-o*c,d=m*m+x*x+u*u),d=1/Math.sqrt(d),m*=d,x*=d,u*=d,t[0]=m,t[1]=x,t[2]=u,t[3]=0,t[4]=f*u-v*x,t[5]=v*m-c*u,t[6]=c*x-f*m,t[7]=0,t[8]=c,t[9]=f,t[10]=v,t[11]=0,t[12]=r,t[13]=n,t[14]=a,t[15]=1,t}function di(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t[4]=e[4]+i[4],t[5]=e[5]+i[5],t[6]=e[6]+i[6],t[7]=e[7]+i[7],t[8]=e[8]+i[8],t[9]=e[9]+i[9],t[10]=e[10]+i[10],t[11]=e[11]+i[11],t[12]=e[12]+i[12],t[13]=e[13]+i[13],t[14]=e[14]+i[14],t[15]=e[15]+i[15],t}function mi(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t[4]=e[4]-i[4],t[5]=e[5]-i[5],t[6]=e[6]-i[6],t[7]=e[7]-i[7],t[8]=e[8]-i[8],t[9]=e[9]-i[9],t[10]=e[10]-i[10],t[11]=e[11]-i[11],t[12]=e[12]-i[12],t[13]=e[13]-i[13],t[14]=e[14]-i[14],t[15]=e[15]-i[15],t}function ar(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12]*i,t[13]=e[13]*i,t[14]=e[14]*i,t[15]=e[15]*i,t}class Je extends Array{constructor(e=1,i=0,s=0,r=0,n=0,a=1,l=0,o=0,h=0,c=0,f=1,v=0,d=0,m=0,x=0,u=1){return super(e,i,s,r,n,a,l,o,h,c,f,v,d,m,x,u),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,i,s,r,n,a,l,o,h,c,f,v,d,m,x,u){return e.length?this.copy(e):(Ws(this,e,i,s,r,n,a,l,o,h,c,f,v,d,m,x,u),this)}translate(e,i=this){return Ys(this,i,e),this}rotate(e,i,s=this){return Zs(this,s,e,i),this}scale(e,i=this){return Ks(this,i,typeof e=="number"?[e,e,e]:e),this}add(e,i){return i?di(this,e,i):di(this,this,e),this}sub(e,i){return i?mi(this,e,i):mi(this,this,e),this}multiply(e,i){return e.length?i?fi(this,e,i):fi(this,this,e):ar(this,this,e),this}identity(){return Xs(this),this}copy(e){return Vs(this,e),this}fromPerspective({fov:e,aspect:i,near:s,far:r}={}){return sr(this,e,i,s,r),this}fromOrthogonal({left:e,right:i,bottom:s,top:r,near:n,far:a}){return rr(this,e,i,s,r,n,a),this}fromQuaternion(e){return ir(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return $s(this,e),this}compose(e,i,s){return tr(this,e,i,s),this}decompose(e,i,s){return er(this,e,i,s),this}getRotation(e){return Di(e,this),this}getTranslation(e){return Qs(e,this),this}getScaling(e){return Pi(e,this),this}getMaxScaleOnAxis(){return Js(this)}lookAt(e,i,s){return nr(this,e,i,s),this}determinant(){return Ci(this)}fromArray(e,i=0){return this[0]=e[i],this[1]=e[i+1],this[2]=e[i+2],this[3]=e[i+3],this[4]=e[i+4],this[5]=e[i+5],this[6]=e[i+6],this[7]=e[i+7],this[8]=e[i+8],this[9]=e[i+9],this[10]=e[i+10],this[11]=e[i+11],this[12]=e[i+12],this[13]=e[i+13],this[14]=e[i+14],this[15]=e[i+15],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e[i+3]=this[3],e[i+4]=this[4],e[i+5]=this[5],e[i+6]=this[6],e[i+7]=this[7],e[i+8]=this[8],e[i+9]=this[9],e[i+10]=this[10],e[i+11]=this[11],e[i+12]=this[12],e[i+13]=this[13],e[i+14]=this[14],e[i+15]=this[15],e}}function lr(t,e,i="YXZ"){return i==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):i==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):i==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):i==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):i==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):i==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const pi=new Je;class or extends Array{constructor(e=0,i=e,s=e,r="YXZ"){super(e,i,s),this.order=r,this.onChange=()=>{},this._target=this;const n=["0","1","2"];return new Proxy(this,{set(a,l){const o=Reflect.set(...arguments);return o&&n.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,i=e,s=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=i,this._target[2]=s,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,i=this.order){return lr(this._target,e,i),this.onChange(),this}fromQuaternion(e,i=this.order,s){return pi.fromQuaternion(e),this._target.fromRotationMatrix(pi,i),s||this.onChange(),this}fromArray(e,i=0){return this._target[0]=e[i],this._target[1]=e[i+1],this._target[2]=e[i+2],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e}}class hr{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Je,this.worldMatrix=new Je,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new ne,this.quaternion=new Gs,this.scale=new ne(1),this.rotation=new or,this.up=new ne(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,i=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,i&&e&&e.addChild(this,!1)}addChild(e,i=!0){~this.children.indexOf(e)||this.children.push(e),i&&e.setParent(this,!1)}removeChild(e,i=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),i&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let i=0,s=this.children.length;i<s;i++)this.children[i].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let i=0,s=this.children.length;i<s;i++)this.children[i].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,i=!1){i?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function cr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function ur(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i+i,l=s+s,o=r+r,h=i*a,c=s*a,f=s*l,v=r*a,d=r*l,m=r*o,x=n*a,u=n*l,g=n*o;return t[0]=1-f-m,t[3]=c-g,t[6]=v+u,t[1]=c+g,t[4]=1-h-m,t[7]=d-x,t[2]=v-u,t[5]=d+x,t[8]=1-h-f,t}function fr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function dr(t,e,i,s,r,n,a,l,o,h){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t[4]=n,t[5]=a,t[6]=l,t[7]=o,t[8]=h,t}function mr(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function pr(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=c*a-l*h,v=-c*n+l*o,d=h*n-a*o,m=i*f+s*v+r*d;return m?(m=1/m,t[0]=f*m,t[1]=(-c*s+r*h)*m,t[2]=(l*s-r*a)*m,t[3]=v*m,t[4]=(c*i-r*o)*m,t[5]=(-l*i+r*n)*m,t[6]=d*m,t[7]=(-h*i+s*o)*m,t[8]=(a*i-s*n)*m,t):null}function gi(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],v=i[0],d=i[1],m=i[2],x=i[3],u=i[4],g=i[5],b=i[6],y=i[7],w=i[8];return t[0]=v*s+d*a+m*h,t[1]=v*r+d*l+m*c,t[2]=v*n+d*o+m*f,t[3]=x*s+u*a+g*h,t[4]=x*r+u*l+g*c,t[5]=x*n+u*o+g*f,t[6]=b*s+y*a+w*h,t[7]=b*r+y*l+w*c,t[8]=b*n+y*o+w*f,t}function gr(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],v=i[0],d=i[1];return t[0]=s,t[1]=r,t[2]=n,t[3]=a,t[4]=l,t[5]=o,t[6]=v*s+d*a+h,t[7]=v*r+d*l+c,t[8]=v*n+d*o+f,t}function vr(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],v=Math.sin(i),d=Math.cos(i);return t[0]=d*s+v*a,t[1]=d*r+v*l,t[2]=d*n+v*o,t[3]=d*a-v*s,t[4]=d*l-v*r,t[5]=d*o-v*n,t[6]=h,t[7]=c,t[8]=f,t}function xr(t,e,i){let s=i[0],r=i[1];return t[0]=s*e[0],t[1]=s*e[1],t[2]=s*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function yr(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=e[9],v=e[10],d=e[11],m=e[12],x=e[13],u=e[14],g=e[15],b=i*l-s*a,y=i*o-r*a,w=i*h-n*a,S=s*o-r*l,R=s*h-n*l,A=r*h-n*o,j=c*x-f*m,L=c*u-v*m,P=c*g-d*m,N=f*u-v*x,I=f*g-d*x,M=v*g-d*u,T=b*M-y*I+w*N+S*P-R*L+A*j;return T?(T=1/T,t[0]=(l*M-o*I+h*N)*T,t[1]=(o*P-a*M-h*L)*T,t[2]=(a*I-l*P+h*j)*T,t[3]=(r*I-s*M-n*N)*T,t[4]=(i*M-r*P+n*L)*T,t[5]=(s*P-i*I-n*j)*T,t[6]=(x*A-u*R+g*S)*T,t[7]=(u*w-m*A-g*y)*T,t[8]=(m*R-x*w+g*b)*T,t):null}class wr extends Array{constructor(e=1,i=0,s=0,r=0,n=1,a=0,l=0,o=0,h=1){return super(e,i,s,r,n,a,l,o,h),this}set(e,i,s,r,n,a,l,o,h){return e.length?this.copy(e):(dr(this,e,i,s,r,n,a,l,o,h),this)}translate(e,i=this){return gr(this,i,e),this}rotate(e,i=this){return vr(this,i,e),this}scale(e,i=this){return xr(this,i,e),this}multiply(e,i){return i?gi(this,e,i):gi(this,this,e),this}identity(){return mr(this),this}copy(e){return fr(this,e),this}fromMatrix4(e){return cr(this,e),this}fromQuaternion(e){return ur(this,e),this}fromBasis(e,i,s){return this.set(e[0],e[1],e[2],i[0],i[1],i[2],s[0],s[1],s[2]),this}inverse(e=this){return pr(this,e),this}getNormalMatrix(e){return yr(this,e),this}}let Mr=0;class Ke extends hr{constructor(e,{geometry:i,program:s,mode:r=e.TRIANGLES,frustumCulled:n=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Mr++,this.geometry=i,this.program=s,this.mode=r,this.frustumCulled=n,this.renderOrder=a,this.modelViewMatrix=new Je,this.normalMatrix=new wr,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}));let i=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:i}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}))}}const vi=new Uint8Array(4);function xi(t){return(t&t-1)===0}let br=1;class et{constructor(e,{image:i,target:s=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:n=e.RGBA,internalFormat:a=n,wrapS:l=e.CLAMP_TO_EDGE,wrapT:o=e.CLAMP_TO_EDGE,wrapR:h=e.CLAMP_TO_EDGE,generateMipmaps:c=s===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:f=c?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:v=e.LINEAR,premultiplyAlpha:d=!1,unpackAlignment:m=4,flipY:x=s==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:u=0,level:g=0,width:b,height:y=b,length:w=1}={}){this.gl=e,this.id=br++,this.image=i,this.target=s,this.type=r,this.format=n,this.internalFormat=a,this.minFilter=f,this.magFilter=v,this.wrapS=l,this.wrapT=o,this.wrapR=h,this.generateMipmaps=c,this.premultiplyAlpha=d,this.unpackAlignment=m,this.flipY=x,this.anisotropy=Math.min(u,this.gl.renderer.parameters.maxAnisotropy),this.level=g,this.width=b,this.height=y,this.length=w,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const i=!(this.image===this.store.image&&!this.needsUpdate);if((i||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!i){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,this.level,this.internalFormat,this.format,this.type,this.image[s]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let s=0;s<this.image.length;s++)this.gl.compressedTexImage2D(this.target,s,this.internalFormat,this.image[s].width,this.image[s].height,0,this.image[s].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!xi(this.image.width)||!xi(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,vi);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,vi);this.store.image=this.image}}}class yi{constructor(e,{width:i=e.canvas.width,height:s=e.canvas.height,target:r=e.FRAMEBUFFER,color:n=1,depth:a=!0,stencil:l=!1,depthTexture:o=!1,wrapS:h=e.CLAMP_TO_EDGE,wrapT:c=e.CLAMP_TO_EDGE,wrapR:f=e.CLAMP_TO_EDGE,minFilter:v=e.LINEAR,magFilter:d=v,type:m=e.UNSIGNED_BYTE,format:x=e.RGBA,internalFormat:u=x,unpackAlignment:g,premultiplyAlpha:b}={}){this.gl=e,this.width=i,this.height=s,this.depth=a,this.stencil=l,this.buffer=this.gl.createFramebuffer(),this.target=r,this.gl.renderer.bindFramebuffer(this),this.textures=[];const y=[];for(let w=0;w<n;w++)this.textures.push(new et(e,{width:i,height:s,wrapS:h,wrapT:c,wrapR:f,minFilter:v,magFilter:d,type:m,format:x,internalFormat:u,unpackAlignment:g,premultiplyAlpha:b,flipY:!1,generateMipmaps:!1})),this.textures[w].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+w,this.gl.TEXTURE_2D,this.textures[w].texture,0),y.push(this.gl.COLOR_ATTACHMENT0+w);y.length>1&&this.gl.renderer.drawBuffers(y),this.texture=this.textures[0],o&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new et(e,{width:i,height:s,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.stencil?this.gl.DEPTH_STENCIL:this.gl.DEPTH_COMPONENT,internalFormat:e.renderer.isWebgl2?this.stencil?this.gl.DEPTH24_STENCIL8:this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.stencil?this.gl.UNSIGNED_INT_24_8:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.stencil?this.gl.DEPTH_STENCIL_ATTACHMENT:this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(a&&!l&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),l&&!a&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),a&&l&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(e,i){if(!(this.width===e&&this.height===i)){this.width=e,this.height=i,this.gl.renderer.bindFramebuffer(this);for(let s=0;s<this.textures.length;s++)this.textures[s].width=e,this.textures[s].height=i,this.textures[s].needsUpdate=!0,this.textures[s].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+s,this.gl.TEXTURE_2D,this.textures[s].texture,0);this.depthTexture?(this.depthTexture.width=e,this.depthTexture.height=i,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,i)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,i)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,i))),this.gl.renderer.bindFramebuffer({target:this.target})}}}class Er extends zi{constructor(e,{attributes:i={}}={}){Object.assign(i,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,i)}}const wi={plasma:{color:"#F25BD0",strands:6,crackle:.85,flares:.65,glow:.9,sparks:.6,particleCount:15e3,fill:.5,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1},aurora:{color:"#5CFFC8",strands:5,crackle:.6,flares:.5,glow:.8,sparks:.45,particleCount:15e3,fill:.5,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1},nebula:{color:"#9478FF",strands:6,crackle:1,flares:.5,glow:.9,sparks:.6,particleCount:18e3,fill:.45,motion:"rise",particleShape:"square",depth:.5,sway:.4,twinkle:.6,haze:.8,dustSpeed:1.2},ember:{color:"#FF8A2A",strands:5,crackle:.9,flares:.8,glow:1,sparks:.8,particleCount:12e3,fill:.35,motion:"rise",particleShape:"round",depth:.7,sway:.3,twinkle:.7,haze:.9,dustSpeed:1.6},frost:{color:"#BFE6FF",strands:3,crackle:.3,flares:.3,glow:.6,sparks:.2,particleCount:16e3,fill:.6,motion:"fall",particleShape:"round",depth:.8,sway:.4,twinkle:.4,haze:.5,dustSpeed:.7},solar:{color:"#FFD36E",strands:6,crackle:.7,flares:1,glow:1.1,sparks:.5,particleCount:15e3,fill:.55,motion:"orbit",particleShape:"square",depth:.6,sway:.7,twinkle:.5,haze:.8,dustSpeed:1},eclipse:{color:"#FFFFFF",strands:4,crackle:.5,flares:.4,glow:.7,sparks:.35,particleCount:14e3,fill:.5,motion:"drift",particleShape:"square",depth:.7,sway:.5,twinkle:.5,haze:.5,dustSpeed:.8},abyss:{color:"#3F7BFF",strands:5,crackle:.55,flares:.6,glow:.9,sparks:.4,particleCount:2e4,fill:.8,motion:"orbit",particleShape:"round",depth:.8,sway:.8,twinkle:.5,haze:.6,dustSpeed:.9}},Tr={rise:0,fall:1,drift:2,orbit:3},Sr={square:0,round:1},ki=8,xt=4,Rr=4e4,xe=256,_r=45e5,Fr=2.2,Ar=7,Ze=[1,1,1],yt=[0,0,0],H=(t,e,i)=>Math.min(Math.max(t,e),i),me=(t,e,i)=>{const s=H((i-t)/(e-t),0,1);return s*s*(3-2*s)},Mi=t=>1-Math.pow(1-t,3),Be=(t,e,i)=>t.map((s,r)=>s+(e[r]-s)*i),bi=t=>t-Math.PI*2*Math.floor((t+Math.PI)/(Math.PI*2)),zr=(t,e)=>{try{const i=document.createElement("canvas").getContext("2d");if(!i)return e;i.fillStyle="#000000",i.fillStyle=t;const s=i.fillStyle;if(s.startsWith("#")){const n=parseInt(s.slice(1),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}const r=s.match(/[\d.]+/g);return!r||r.length<3?e:[Number(r[0])/255,Number(r[1])/255,Number(r[2])/255]}catch{return e}},Cr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4),Pr=t=>t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055,qe=t=>{const[e,i,s]=t.map(Cr),r=Math.cbrt(.4122214708*e+.5363325363*i+.0514459929*s),n=Math.cbrt(.2119034982*e+.6806995451*i+.1073969566*s),a=Math.cbrt(.0883024619*e+.2817188376*i+.6299787005*s);return[.2104542553*r+.793617785*n-.0040720468*a,1.9779984951*r-2.428592205*n+.4505937099*a,.0259040371*r+.7827717662*n-.808675766*a]},Tt=([t,e,i])=>{const s=Math.pow(t+.3963377774*e+.2158037573*i,3),r=Math.pow(t-.1055613458*e-.0638541728*i,3),n=Math.pow(t-.0894841775*e-1.291485548*i,3);return[4.0767416621*s-3.3077115913*r+.2309699292*n,-1.2684380046*s+2.6097574011*r-.3413193965*n,-.0041960863*s-.7034186147*r+1.707614701*n].map(a=>H(Pr(H(a,0,1)),0,1))},Ei=(t,e,i)=>Tt(Be(qe(t),qe(e),i)),ke=(t,e,i,s)=>{const[r,n,a]=qe(t),l=Math.hypot(n,a)*s,o=Math.atan2(a,n)+e*Math.PI/180;return Tt([H(r+i,0,1),l*Math.cos(o),l*Math.sin(o)])},re=(t,e,i,s)=>{const[,r,n]=qe(t),a=Math.max(Math.hypot(r,n)*s,.02),l=Math.atan2(n,r)+e*Math.PI/180;return Tt([H(i,0,1),a*Math.cos(l),a*Math.sin(l)])},Dr=(t,e)=>{if(e){const i=re(t,0,Math.min(qe(t)[0],.62),1.15);return{rim:i,rimHot:i,rimMid:i,rimDeep:re(t,0,.72,.8),spark:re(t,0,.6,1.2),sparkGlow:re(t,0,.78,.8),haze:re(t,0,.8,.6),edge:re(t,0,.72,.8),tones:[re(t,0,.56,1.1),re(t,16,.6,1.05),re(t,-16,.5,1.1),re(t,0,.66,.9),re(t,0,.74,.7)]}}return{rim:t,rimHot:Be(t,Ze,.72),rimMid:Be(t,yt,.15),rimDeep:Be(t,yt,.45),spark:Be(t,Ze,.45),sparkGlow:ke(t,0,-.15,1),haze:Be(t,yt,.6),edge:ke(t,0,-.3,.9),tones:[ke(t,0,-.06,1),ke(t,16,-.02,1),ke(t,-16,-.12,1.05),ke(Ei(t,Ze,.25),0,.04,1),Ei(t,Ze,.7)]}},St=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}},kr=()=>{const t=St(99),e=[[6,12,.6,1.6],[18,34,1.5,3.5],[40,70,3,7],[80,130,6,12]],i={harmonics:[],rates:[],phases:[],flareHarmonics:[],flareRates:[],flarePhases:[]};for(let s=0;s<ki;s++){e.forEach(([n,a,l,o])=>{i.harmonics.push(Math.round(n+t()*(a-n))),i.rates.push((l+t()*(o-l))*(t()<.5?-1:1)),i.phases.push(t()*Math.PI*2)});for(let n=0;n<3;n++)i.flareHarmonics.push(4+Math.floor(t()*6)),i.flareRates.push((.4+t()*.8)*(t()<.5?-1:1)),i.flarePhases.push(t()*Math.PI*2);const r=s===0;i.flareHarmonics.push(r?.75:.95+t()*.3),i.flareRates.push(r?1.15:.8+t()*.2),i.flarePhases.push(r?1:.7+t()*.25)}return i},Lr=t=>{const e=St(1337),i=Math.max(1,Math.ceil(t/xe)),s=new Float32Array(xe*i*4),r=new Float32Array(xe*i*4);let n=0,a=0;for(;n<t&&a<t*80;){a++;let l,o,h;if(e()<.28){const f=e()*Math.PI*2,v=.87+Math.sqrt(e())*.105;if(l=Math.cos(f)*v,o=Math.sin(f)*v,e()>me(-.6,.3,-o))continue;const d=e();h=d<.5?3:d<.8?2:1}else{l=e()*2-1,o=e()*2-1;const f=Math.hypot(l,o);if(f>.975)continue;const v=Math.pow(me(-.25,.85,-o),1.3),d=me(.66,.96,f)*me(-.7,.3,-o),m=Math.max(v,d*.9);if(e()>.012+.988*m)continue;if(m<.12)h=4;else{const x=e();h=x<.32?0:x<.52?1:x<.8?2:3}}const c=Math.sqrt(Math.max(0,.95-l*l-o*o));s[n*4]=l,s[n*4+1]=o,s[n*4+2]=(e()*2-1)*c,s[n*4+3]=h,r[n*4]=h===4?1.8:e()<.22?2.1:1.3,r[n*4+1]=e(),r[n*4+2]=2.5+e()*3.5,r[n*4+3]=.16+e()*.26,n++}return{home:s,seed:r,count:n,rows:i}},wt=`#version 300 es
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
`,Li=`
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
${Li}
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
${Li}
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
`,Ur=({preset:t="plasma",color:e,theme:i="dark",size:s=.7,strands:r,crackle:n,flares:a,glow:l,sparks:o,particleCount:h,fill:c,motion:f,particleShape:v,depth:d,sway:m,twinkle:x,haze:u,speed:g=1,dustSpeed:b,interactive:y=!0,hoverStrength:w=.7,intro:S=!0,paused:R=!1,className:A="",style:j})=>{const L=E.useRef(null),P=E.useRef(null),N=E.useRef(null),I=wi[t]||wi.plasma,M=(C,B)=>C??I[B],T=M(e,"color"),U=E.useMemo(()=>{const C=i==="light";return{light:C,palette:Dr(zr(T,[.95,.36,.82]),C)}},[T,i]);return E.useEffect(()=>{var C;P.current={...U,size:s,strands:M(r,"strands"),crackle:M(n,"crackle"),flares:M(a,"flares"),glow:M(l,"glow"),sparks:M(o,"sparks"),particleCount:M(h,"particleCount"),fill:M(c,"fill"),motion:M(f,"motion"),particleShape:M(v,"particleShape"),depth:M(d,"depth"),sway:M(m,"sway"),twinkle:M(x,"twinkle"),haze:M(u,"haze"),dustSpeed:M(b,"dustSpeed"),speed:g,interactive:y,hoverStrength:w,intro:S,paused:R},(C=N.current)==null||C.call(N)}),E.useEffect(()=>{var qt,Vt;const C=L.current;if(!C)return;let B;try{B=new Ts({alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1})}catch{return}const _=B.gl;if(!B.isWebgl2){(qt=_.getExtension("WEBGL_lose_context"))==null||qt.loseContext();return}const ae=_.canvas;ae.style.display="block",ae.style.width="100%",ae.style.height="100%",ae.setAttribute("aria-hidden","true"),C.appendChild(ae);const pe=!!_.getExtension("EXT_color_buffer_float"),we=pe||!!_.getExtension("EXT_color_buffer_half_float"),Fe=we?1:.25,tt=new Er(_),ge=new et(_),Ae=kr(),Ie=new yi(_,{width:1,height:1,depth:!1,type:we?_.HALF_FLOAT:_.UNSIGNED_BYTE,format:_.RGBA,internalFormat:we?_.RGBA16F:_.RGBA,minFilter:_.NEAREST,magFilter:_.NEAREST}),Oe=new Array(xt*4).fill(0),k={uCenter:{value:[0,0]},uRadius:{value:1},uDpr:{value:1},uLine:{value:.6},uTime:{value:0},uFrame:{value:0},uBins:{value:420},uStrands:{value:5},uCrackle:{value:.6},uFlares:{value:.5},uGlow:{value:.8},uHaze:{value:.7},uFill:{value:.5},uPresence:{value:0},uUnfold:{value:0},uBloom:{value:0},uInside:{value:0},uEncode:{value:Fe},uRim:{value:[1,1,1]},uRimHot:{value:[1,1,1]},uRimMid:{value:[1,1,1]},uRimDeep:{value:[1,1,1]},uSpark:{value:[1,1,1]},uSparkGlow:{value:[1,1,1]},uHazeColor:{value:[0,0,0]},uEdgeColor:{value:[0,0,0]},uHeat:{value:[0,0,0,0]},uHarmonics:{value:Ae.harmonics},uRates:{value:Ae.rates},uPhases:{value:Ae.phases},uFlareHarmonics:{value:Ae.flareHarmonics},uFlareRates:{value:Ae.flareRates},uFlarePhases:{value:Ae.flarePhases},uArcs:{value:Oe}},Me={uDustTime:{value:0},uTurn:{value:[0,0]},uMotion:{value:0},uFill:k.uFill,tHome:{value:ge},tSeed:{value:ge}},ee={...Me,tOffset:{value:ge},uStirred:{value:0},uCenter:k.uCenter,uViewport:{value:[1,1]},uRadius:k.uRadius,uDpr:k.uDpr,uDepth:{value:.6},uTwinkle:{value:.5},uPointScale:{value:1},uReveal:{value:0},uEncode:{value:Fe},uTones:{value:new Array(15).fill(1)},uRimTone:{value:[1,1,1]},uShape:{value:0}},te={...Me,tOffset:{value:ge},tVelocity:{value:ge},uDt:{value:.016},uReset:{value:1},uBrush:{value:[0,0,0,0]},uBrushPower:{value:0},uKick:{value:[0,0,0,0]}},_t={tScene:{value:Ie.texture},uLight:{value:0},uDecode:{value:1/Fe}},Ft=D=>(D.setBlendFunc(_.ONE,_.ONE),D),Ni=new Ke(_,{geometry:tt,program:Ft(new Ye(_,{vertex:wt,fragment:Nr,uniforms:k,transparent:!0,depthTest:!1,depthWrite:!1}))}),Bi=Ft(new Ye(_,{vertex:Br,fragment:jr,uniforms:ee,transparent:!0,depthTest:!1,depthWrite:!1})),ve=we?new Ke(_,{geometry:tt,program:new Ye(_,{vertex:wt,fragment:Ir,uniforms:te,depthTest:!1,depthWrite:!1})}):null,ji=new Ke(_,{geometry:tt,program:new Ye(_,{vertex:wt,fragment:Or,uniforms:_t,depthTest:!1,depthWrite:!1})}),it=D=>{D&&(_.deleteFramebuffer(D.buffer),D.textures.forEach(F=>_.deleteTexture(F.texture)))},At=D=>new yi(_,{width:xe,height:D,color:2,depth:!1,type:pe?_.FLOAT:_.HALF_FLOAT,format:_.RGBA,internalFormat:pe?_.RGBA32F:_.RGBA16F,minFilter:_.NEAREST,magFilter:_.NEAREST}),zt=(D,F)=>new et(_,{image:D,width:xe,height:F,type:_.FLOAT,format:_.RGBA,internalFormat:_.RGBA32F,minFilter:_.NEAREST,magFilter:_.NEAREST,generateMipmaps:!1,flipY:!1});let G=null;const Ct=()=>{G&&(G.mesh.geometry.remove(),_.deleteTexture(G.home.texture),_.deleteTexture(G.seed.texture),it(G.read),it(G.write),G=null)},Pt=()=>{!ve||!G||!G.read||!G.write||(te.tOffset.value=ge,te.tVelocity.value=ge,te.uReset.value=1,B.render({scene:ve,target:G.read,clear:!1}),B.render({scene:ve,target:G.write,clear:!1}),te.uReset.value=0)},Ii=D=>{const F=H(Math.round(D/100)*100,0,Rr);if(G&&G.requested===F)return;if(Ct(),!F){G=null;return}const z=Lr(F),Q=new Float32Array(z.count);for(let oe=0;oe<z.count;oe++)Q[oe]=oe;const J=new zi(_,{aIndex:{size:1,data:Q}});G={requested:F,rows:z.rows,home:zt(z.home,z.rows),seed:zt(z.seed,z.rows),mesh:new Ke(_,{mode:_.POINTS,geometry:J,program:Bi}),read:ve?At(z.rows):null,write:ve?At(z.rows):null},Me.tHome.value=G.home,Me.tSeed.value=G.seed,Pt(),be=0},Ve=((Vt=window.matchMedia)==null?void 0:Vt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,Z=St(913);let ce=1,ue=1,fe=0,st=performance.now(),rt=0,Dt=0,nt=0,de=0,ze=!0,at=!0,le=0,be=0,lt=0,Ee=null,ot=.3;const Te=[],V={x:0,y:0,inside:!1,fresh:!0},O={angle:0,velocity:0,power:0,near:0},q={x:0,y:0,vx:0,vy:0},X={x:0,y:0,vx:0,vy:0},kt=()=>{ce=Math.max(1,C.clientWidth),ue=Math.max(1,C.clientHeight),B.dpr=Math.min(window.devicePixelRatio||1,2,Math.sqrt(_r/(ce*ue))),B.setSize(ce,ue),Ie.setSize(_.canvas.width,_.canvas.height),Se()},ht=(D,F)=>{Te.length>=xt||Te.push({start:D,span:(.05+Z()*.07)*(Z()<.5?-1:1),curl:.02+Z()*.04,life:0,duration:.2+Z()*.2,drift:(Z()-.5)*.3,strength:F})},Lt=D=>{if(fe=0,!at||!ze||document.hidden)return;const F=P.current,z=Math.min(.05,Math.max(1/240,(D-st)/1e3));if(st=D,!F)return;const Q=!F.paused&&!Ve;de=F.intro&&!Ve?Math.min(1,de+z/Fr):1;const J=Mi(me(0,.42,de)),oe=Mi(me(0,.32,de)),ct=Math.sin(Math.PI*me(.22,.78,de))*.35,ie=Math.max(8,H(F.size,.1,1.5)*Math.min(ce,ue)/2),Ce=F.interactive&&!Ve?H(F.hoverStrength,0,1):0,Xe=V.x-ce/2,$e=ue/2-V.y,Oi=Math.hypot(Xe,$e),ut=V.inside?Ce:0;O.power<.02&&(O.angle=Math.atan2($e,Xe),O.velocity=0);const Ui=bi(Math.atan2($e,Xe)-O.angle);O.velocity+=(120*Ui-19*O.velocity)*z,O.angle=bi(O.angle+O.velocity*z),O.power+=(ut-O.power)*(1-Math.exp(-z/(ut>O.power?.3:.55)));const Hi=Math.exp(-Math.pow((Oi-ie)/(ie*.45),2));O.near+=(Hi-O.near)*(1-Math.exp(-z/.15)),le*=Math.exp(-z/.7);const Pe=Xe/ie,De=$e/ie;Math.hypot(Pe-q.x,De-q.y)>.6&&(V.fresh=!0),V.fresh&&(q.x=Pe,q.y=De,q.vx=0,q.vy=0,V.fresh=!1);const Wt=1-Math.exp(-z/.05);q.vx+=((Pe-q.x)/z-q.vx)*Wt,q.vy+=((De-q.y)/z-q.vy)*Wt,q.x=Pe,q.y=De;const ft=Math.hypot(q.vx,q.vy),Xt=ft>4?4/ft:1,Gi=Math.exp(-Math.max(0,Math.hypot(Pe,De)-1)*6),$t=V.inside?Ce*Gi*J:0;if(lt=lt*Math.exp(-z/1.2)+$t*Math.min(ft,4)*z,Q){const se=1+le*.6+O.power*O.near*.3,Y=z*Math.max(0,F.speed)*2*se;rt+=Y,Dt+=z*Math.max(0,F.dustSpeed)*(1+le*.4),nt+=z*Math.max(0,F.dustSpeed);const Vi=H(F.crackle+le*.5,0,1.5);if(F.sparks>.01&&de>.55&&(ot-=Y*F.sparks*2*(.6+Vi*.6),ot<=0)){const Re=O.power*O.near,_e=Z()<Re*.7?O.angle+(Z()-.5)*.8:Z()<.7?Math.PI/2+(Z()-.5)*1.5:Z()*Math.PI*2;ht(_e,.8+Re*.6+le*.4),ot=.15+Z()*.6}for(let Re=Te.length-1;Re>=0;Re--){const _e=Te[Re];_e.life+=Y,_e.start+=_e.drift*Y,_e.life>=_e.duration&&Te.splice(Re,1)}}else Te.length=0;for(let se=0;se<xt;se++){const Y=Te[se];Oe[se*4]=Y?Y.start:0,Oe[se*4+1]=Y?Y.span:0,Oe[se*4+2]=Y?Y.curl:0,Oe[se*4+3]=Y?Math.sin(Math.PI*Y.life/Y.duration)*Y.strength:0}Ii(F.particleCount);const he=F.palette;k.uCenter.value=[ce/2,ue/2],k.uRadius.value=ie,k.uDpr.value=B.dpr,k.uLine.value=Math.max(.6,ie*.0035),k.uTime.value=rt,k.uFrame.value=Math.floor(rt*24)%1e5,k.uBins.value=H(Math.round(Math.PI*2*ie/2.6),240,900),k.uStrands.value=Math.round(H(F.strands,1,ki)),k.uCrackle.value=H(F.crackle,0,1)+le*.5+ct,k.uFlares.value=H(F.flares,0,1),k.uGlow.value=H(F.glow,0,2)*(1+le*.5+ct)*(F.light?.35:1),k.uHaze.value=H(F.haze,0,2)*(F.light?.6:1),k.uFill.value=H(F.fill,0,1),k.uPresence.value=J,k.uUnfold.value=oe,k.uBloom.value=J*J,k.uInside.value=me(.2,.95,de),k.uRim.value=he.rim,k.uRimHot.value=he.rimHot,k.uRimMid.value=he.rimMid,k.uRimDeep.value=he.rimDeep,k.uSpark.value=he.spark,k.uSparkGlow.value=he.sparkGlow,k.uHazeColor.value=he.haze,k.uEdgeColor.value=he.edge,k.uHeat.value=[O.angle,O.near,O.power*J,0],Me.uDustTime.value=Dt;const Yt=V.inside?Ce*J:0,Kt=H(Pe,-1.6,1.6)*Yt,Zt=H(De,-1.6,1.6)*Yt;X.vx+=(40*(Kt-X.x)-11*X.vx)*z,X.vy+=(40*(Zt-X.y)-11*X.vy)*z,X.x+=X.vx*z,X.y+=X.vy*z;const Qt=H(F.sway,0,1);Me.uTurn.value=[Qt*.42*Math.sin(nt*.23)+X.x*.3,Qt*.12*Math.sin(nt*.17+1.3)-X.y*.16],Me.uMotion.value=Tr[F.motion]??0,ee.uViewport.value=[ce,ue],ee.uDepth.value=H(F.depth,0,1),ee.uTwinkle.value=H(F.twinkle,0,1),ee.uPointScale.value=Math.max(1,ie/491),ee.uReveal.value=me(.18,1,de),ee.uTones.value=he.tones.flat(),ee.uRimTone.value=he.rim,ee.uShape.value=Sr[F.particleShape]??0;const K=G;K&&ve&&(lt>.002||Ee)&&(be=Ar);let dt=!1;if(K&&K.read&&K.write&&ve&&be>0){te.uDt.value=Math.min(z,1/30),te.uBrush.value=[q.x,q.y,q.vx*Xt,q.vy*Xt],te.uBrushPower.value=$t,te.uKick.value=Ee?[Ee.x,Ee.y,Ee.strength,0]:[0,0,0,0],te.tOffset.value=K.read.textures[0],te.tVelocity.value=K.read.textures[1],B.render({scene:ve,target:K.write,clear:!1});const se=K.read;K.read=K.write,K.write=se,be-=z,dt=be>0,dt||(be=0,Pt())}Ee=null,ee.uStirred.value=dt?1:0,ee.tOffset.value=K&&K.read?K.read.textures[0]:ge,_.clearColor(0,0,0,0),B.render({scene:Ni,target:Ie,clear:!0}),G&&B.render({scene:G.mesh,target:Ie,clear:!1}),_t.uLight.value=F.light?1:0,B.render({scene:ji,clear:!1}),C.dataset.ready="true";const qi=Math.abs(ut-O.power)>.002||le>.002||be>0||Math.abs(O.velocity)>.01||Math.hypot(X.vx,X.vy,X.x-Kt,X.y-Zt)>.001;ze&&(Q||de<1||qi)&&(fe=requestAnimationFrame(Lt))},Se=()=>{fe||!ze||!at||document.hidden||(st=performance.now(),fe=requestAnimationFrame(Lt))},Nt=D=>{const F=C.getBoundingClientRect(),z=D.clientX-F.left,Q=D.clientY-F.top;return{x:z,y:Q,inside:z>=0&&Q>=0&&z<=F.width&&Q<=F.height}},Bt=D=>{const F=Nt(D);F.inside&&!V.inside&&(V.fresh=!0),V.x=F.x,V.y=F.y,V.inside=F.inside,F.inside&&Se()},jt=D=>{const F=P.current,z=Nt(D);if(!F||!F.interactive||Ve||!z.inside)return;V.inside||(V.fresh=!0),V.x=z.x,V.y=z.y,V.inside=!0;const Q=Math.max(8,H(F.size,.1,1.5)*Math.min(ce,ue)/2),J=(z.x-ce/2)/Q,oe=(ue/2-z.y)/Q;if(Math.hypot(J,oe)>1.3)return;const ie=H(F.hoverStrength,0,1);Ee={x:J,y:oe,strength:ie*1.2},le=Math.max(le,ie);const Ce=Math.atan2(oe,J);ht(Ce+(Z()-.5)*.5,1.3),ht(Ce+Math.PI+(Z()-.5)*1.2,1.1),Se()},We=()=>{V.inside=!1,Se()},It=D=>{D.relatedTarget||We()},Ot=D=>{D.pointerType==="touch"&&We()},Ut=()=>{cancelAnimationFrame(fe),fe=0,document.hidden||Se()};window.addEventListener("pointermove",Bt,{passive:!0}),window.addEventListener("pointerdown",jt,{passive:!0}),window.addEventListener("pointerout",It,{passive:!0}),window.addEventListener("pointerup",Ot,{passive:!0}),window.addEventListener("blur",We),document.addEventListener("visibilitychange",Ut);const Ht=new ResizeObserver(kt);Ht.observe(C);const Gt=new IntersectionObserver(([D])=>{ze=D.isIntersecting,ze?Se():(cancelAnimationFrame(fe),fe=0)});return Gt.observe(C),N.current=Se,kt(),()=>{var D;delete C.dataset.ready,at=!1,ze=!1,cancelAnimationFrame(fe),Ht.disconnect(),Gt.disconnect(),window.removeEventListener("pointermove",Bt),window.removeEventListener("pointerdown",jt),window.removeEventListener("pointerout",It),window.removeEventListener("pointerup",Ot),window.removeEventListener("blur",We),document.removeEventListener("visibilitychange",Ut),N.current=null,Ct(),it(Ie),(D=_.getExtension("WEBGL_lose_context"))==null||D.loseContext(),ae.parentNode&&ae.parentNode.removeChild(ae)}},[]),p.jsx("div",{ref:L,className:`crystalized-ball ${A}`.trim(),style:j})},Hr=`
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
}`;function $r({kind:t,radius:e=1,reduced:i,highlighted:s,onHover:r,onChoose:n}){const a=t==="ticker",l=E.useRef(null),o=E.useRef(!1),h=E.useMemo(()=>new $(0,0,1),[]),c=E.useMemo(()=>new $,[]),f=E.useMemo(()=>new $,[]),v=E.useRef(!1),d=E.useMemo(()=>new Ki,[]),[m,x]=Ri(Fi,[a?"/assets/saturn.jpg":"/assets/neptune.jpg","/assets/saturn-rings.png"]),u=E.useMemo(()=>{for(const w of[m,x])w.colorSpace=_i,w.anisotropy=4,w.needsUpdate=!0;m.wrapS=Zi;const y={uMap:{value:m},uRings:{value:x},uRadius:{value:e},uFlatten:{value:a?.91:.985},uSaturn:{value:a?1:0},uTurn:{value:a?.1:.32},uSun:{value:new $},uEye:{value:new $},uHover:{value:0},uHit:{value:new $(0,0,1)},uCloudTime:{value:0},uCloudFlow:{value:new $}};return{surface:new Qe({vertexShader:Hr,fragmentShader:Gr,uniforms:y}),rings:a?new Qe({vertexShader:qr,fragmentShader:Vr,uniforms:y,transparent:!0,side:Et,depthWrite:!1}):null,atmosphere:new Qe({vertexShader:Wr,fragmentShader:Xr,uniforms:y,transparent:!0,depthWrite:!1})}},[m,x,e,a]);E.useEffect(()=>()=>{var y;u.surface.dispose(),(y=u.rings)==null||y.dispose(),u.atmosphere.dispose()},[u]),ye(({camera:y,clock:w},S)=>{if(!l.current)return;l.current.updateWorldMatrix(!0,!1);const R=u.surface.uniforms;d.copy(l.current.matrixWorld).invert(),R.uSun.value.set(a?-.7:-.95,a?.65:.45,a?1.25:.6).normalize().transformDirection(d),y.getWorldPosition(R.uEye.value),l.current.worldToLocal(R.uEye.value).divideScalar(e),R.uTurn.value=(a?.1:.32)+(i?0:w.elapsedTime*(a?.002:.003)),R.uHover.value=W.damp(R.uHover.value,o.current||s?1:0,6,S),R.uHit.value.lerp(h,1-Math.exp(-S*12)),R.uCloudTime.value=i?0:w.elapsedTime,R.uCloudFlow.value.lerp(i?c.set(0,0,0):c,1-Math.exp(-S*5)),c.multiplyScalar(Math.exp(-S*3))});const g=y=>{o.current=y,y||(v.current=!1),r==null||r(y?t:null)},b=y=>{y.stopPropagation(),l.current&&(f.copy(y.point),l.current.worldToLocal(f),f.normalize(),!a&&!i&&v.current&&c.addScaledVector(f,.5).addScaledVector(h,-.5).clampLength(0,.065),h.copy(f),v.current=!0)};return p.jsxs("group",{ref:l,rotation:[a?.45:.08,0,a?-.32:-.1],onPointerOver:y=>{y.stopPropagation(),g(!0)},onPointerOut:()=>g(!1),onPointerMove:b,onClick:y=>{y.stopPropagation(),y.delta<6&&(n==null||n(t))},children:[p.jsx("mesh",{material:u.surface,children:p.jsx("sphereGeometry",{args:[e,i?48:96,i?32:64]})}),p.jsx("mesh",{material:u.atmosphere,raycast:()=>{},children:p.jsx("sphereGeometry",{args:[e*1.012,48,32]})}),u.rings&&p.jsx("mesh",{rotation:[-Math.PI/2,0,0],material:u.rings,children:p.jsx("ringGeometry",{args:[e*1.18,e*1.83,192]})})]})}const Yr=`
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
}`;function je({radius:t,color:e="#658cab",tilt:i=.8,dashed:s=!1}){const r=E.useMemo(()=>{const n=new Float32Array(723);for(let a=0;a<=240;a++){const l=a/240*Math.PI*2;n[a*3]=Math.cos(l)*t,n[a*3+1]=Math.sin(l)*t}return n},[t]);return p.jsxs("lineLoop",{rotation:[i,.1,-.2],children:[p.jsx("bufferGeometry",{children:p.jsx("bufferAttribute",{attach:"attributes-position",args:[r,3]})}),p.jsx("lineBasicMaterial",{color:e,transparent:!0,opacity:s?.23:.48})]})}function Zr({radius:t,reduced:e,active:i}){const s=E.useRef([]),r=E.useRef([]),n=E.useRef(0);return ye((a,l)=>{e||(n.current+=Math.min(l,.05),s.current.forEach((o,h)=>{o&&(o.rotation.z=n.current*(h%2?.065:.085))}),r.current.forEach((o,h)=>{o&&(o.rotation.y=h*.72+n.current*(.22+h%3*.035),o.rotation.z=Math.sin(n.current*.3+h)*.12)}))}),p.jsxs("group",{rotation:[1.05,.12,-.3],children:[p.jsx(je,{radius:t*1.43,color:"#e9bf65",tilt:0,dashed:!0}),Array.from({length:12},(a,l)=>{const o=l*Math.PI*2/12,h=t*(l%2?1.58:1.38),c=t*(l%3===0?.115:.092);return p.jsx("group",{ref:f=>{s.current[l]=f},children:p.jsx("group",{position:[Math.cos(o)*h,Math.sin(o)*h,0],children:p.jsxs("group",{ref:f=>{r.current[l]=f},rotation:[0,l*.72,0],children:[p.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[p.jsx("cylinderGeometry",{args:[c,c,t*.032,32]}),p.jsx("meshStandardMaterial",{color:"#ffd35b",metalness:.72,roughness:.25,emissive:"#c88912",emissiveIntensity:i?.42:.22})]}),[-1,1].map(f=>p.jsxs("mesh",{position:[0,0,f*t*.018],children:[p.jsx("torusGeometry",{args:[c*.78,c*.075,6,28]}),p.jsx("meshStandardMaterial",{color:"#ffe7a0",metalness:.65,roughness:.23,emissive:"#e8b541",emissiveIntensity:.3})]},f))]})})},l)})]})}function Qr({kind:t,radius:e=1,reduced:i,onHover:s,onChoose:r,highlighted:n}){const a=E.useRef(null),l=E.useRef(null),o=E.useRef(!1),[h,c]=E.useState(!1),f=h||n,v=E.useMemo(()=>new $(0,0,1),[]),d=E.useMemo(()=>{const g=document.createElement("canvas");g.width=1024,g.height=512;const b=g.getContext("2d");if(b&&t==="ticker"){b.fillStyle="#000",b.fillRect(0,0,1024,512),b.font="19px monospace",b.fillStyle="#8fe4ef";for(let w=0;w<9;w++)for(let S=0;S<7;S++)b.fillText(`${(w*6+S+.001426).toFixed(6)}`,S*150+3,w*55+30)}return new Ji(g)},[t]),m=E.useMemo(()=>new Qe({vertexShader:Yr,fragmentShader:Kr,uniforms:{uTime:{value:0},uHit:{value:new $(0,0,1)},uHover:{value:0},uKind:{value:t==="neptune"?0:t==="ticker"?1:t==="prototype"?2:t==="feifei"?4:3},uDigits:{value:d}}}),[t,d]);E.useEffect(()=>()=>{m.dispose(),d.dispose()},[m,d]);const x=g=>{g.stopPropagation(),a.current&&(v.copy(g.point),a.current.worldToLocal(v),v.normalize())};ye(({clock:g},b)=>{m.uniforms.uTime.value=i?0:g.elapsedTime,m.uniforms.uHover.value=W.damp(m.uniforms.uHover.value,o.current||n?1:0,7,b),m.uniforms.uHit.value.lerp(v,1-Math.exp(-b*14)),l.current&&l.current.scale.setScalar((t==="feifei"?1.045:1.028)*(1+(i?0:Math.sin(g.elapsedTime*.8)*.005)))});const u=g=>{o.current=g,c(g),s==null||s(g?t:null)};return p.jsxs("group",{children:[p.jsx("mesh",{ref:a,material:m,onPointerMove:x,onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),onClick:g=>{g.stopPropagation(),g.delta<6&&(r==null||r(t))},children:p.jsx("sphereGeometry",{args:[e,i?48:96,i?32:64]})}),t==="neptune"&&p.jsxs("mesh",{ref:l,scale:1.028,children:[p.jsx("sphereGeometry",{args:[e,48,32]}),p.jsx("shaderMaterial",{transparent:!0,depthWrite:!1,side:ti,vertexShader:"varying vec3 vn;varying vec3 vp;void main(){vn=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.);vp=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:"varying vec3 vn;varying vec3 vp;void main(){float r=pow(max(0.,1.-abs(dot(vn,normalize(-vp)))),2.);gl_FragColor=vec4(.1,.37,1.,r*.48);}"})]}),t==="ticker"&&p.jsxs("group",{rotation:[.2,.1,-.4],children:[p.jsxs("mesh",{rotation:[1.12,.1,-.2],children:[p.jsx("ringGeometry",{args:[e*1.28,e*1.83,128]}),p.jsx("meshBasicMaterial",{color:"#c5ae88",transparent:!0,opacity:.22,side:Et,depthWrite:!1})]}),[1.28,1.43,1.6,1.81].map((g,b)=>p.jsx(je,{radius:e*g,color:b===2?"#d2c1a4":"#938774",tilt:1.12},g))]}),t==="feifei"&&p.jsxs(p.Fragment,{children:[p.jsxs("mesh",{ref:l,scale:1.045,children:[p.jsx("sphereGeometry",{args:[e,48,32]}),p.jsx("shaderMaterial",{transparent:!0,depthWrite:!1,side:ti,blending:es,toneMapped:!1,vertexShader:"varying vec3 vn;varying vec3 vp;void main(){vn=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.);vp=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:"varying vec3 vn;varying vec3 vp;void main(){float r=pow(max(0.,1.-abs(dot(vn,normalize(-vp)))),2.5);gl_FragColor=vec4(1.,.76,.32,r*.23);}"})]}),p.jsx(Zr,{radius:e,reduced:i,active:!!f})]}),t==="station"&&p.jsxs("group",{rotation:[.3,.4,.2],children:[p.jsxs("mesh",{children:[p.jsx("icosahedronGeometry",{args:[e*1.25,0]}),p.jsx("meshBasicMaterial",{color:"#9be8e1",wireframe:!0,transparent:!0,opacity:f?.85:.55})]}),p.jsx(je,{radius:e*1.7,tilt:1.2})]}),t==="prototype"&&[0,1,2].map(g=>p.jsxs("mesh",{position:[(g-1)*e*.58,.08,e*.86],children:[p.jsx("boxGeometry",{args:[e*.27,e*.3,e*.16]}),p.jsx("meshStandardMaterial",{color:f?["#bbd9ff","#e8c3c9","#bcdde2"][g]:"#53627b",emissive:"#8298ce",emissiveIntensity:f?.65:.06})]},g))]})}function Jr(t){const e=Ri(Fi,"/assets/earth-night.jpg");e.colorSpace=_i;const i=E.useRef(null),s=E.useRef(null),r=E.useRef(null),n=E.useRef(!1),[a,l]=E.useState(!1),o=a||t.highlighted,h=t.radius??1,c=E.useMemo(()=>Array.from({length:12},(m,x)=>{const u=x*2.399,g=1-(x+.5)/12*2,b=Math.sqrt(1-g*g);return new $(Math.cos(u)*b,g,Math.sin(u)*b).multiplyScalar(h*1.012)}),[h]),f=E.useMemo(()=>{const m=new $(-.4,.38,.85).normalize(),x=new $(.58,.1,.81).normalize(),u=m.clone().add(x).normalize().multiplyScalar(h*1.7);return new Qi(m.multiplyScalar(h),u,x.multiplyScalar(h)).getPoints(48)},[h]),v=E.useMemo(()=>new Float32Array(f.flatMap(m=>[m.x,m.y,m.z])),[f]);ye(({clock:m},x)=>{s.current&&!t.reduced&&!n.current&&!t.highlighted&&(s.current.rotation.y+=x*.055),r.current&&r.current.scale.setScalar(1+(t.reduced?0:Math.sin(m.elapsedTime*4)*.2))});const d=m=>{var x;n.current=m,l(m),(x=t.onHover)==null||x.call(t,m?"travel":null)};return p.jsxs("group",{children:[p.jsxs("group",{ref:s,rotation:[0,2.1,-.2],children:[p.jsxs("mesh",{ref:i,onPointerOver:()=>d(!0),onPointerOut:()=>d(!1),onPointerMove:m=>{if(m.stopPropagation(),i.current&&r.current){const x=i.current.worldToLocal(m.point.clone()).normalize().multiplyScalar(h*1.015);r.current.position.copy(x)}},onClick:m=>{var x;m.stopPropagation(),m.delta<6&&((x=t.onChoose)==null||x.call(t,"travel"))},children:[p.jsx("sphereGeometry",{args:[h,64,48]}),p.jsx("meshStandardMaterial",{map:e,emissiveMap:e,emissive:"#bedff9",emissiveIntensity:o?1.8:1.2,color:"#e0efff",roughness:.8})]}),c.map((m,x)=>p.jsxs("mesh",{position:m,children:[p.jsx("sphereGeometry",{args:[.015,8,8]}),p.jsx("meshBasicMaterial",{color:o?"#fff4cf":"#a4c9d7"})]},x)),p.jsxs("mesh",{ref:r,visible:o,children:[p.jsx("sphereGeometry",{args:[h*.045,16,16]}),p.jsx("meshBasicMaterial",{color:"#83f0ff"})]}),p.jsxs("lineLoop",{children:[p.jsx("bufferGeometry",{children:p.jsx("bufferAttribute",{attach:"attributes-position",args:[v,3]})}),p.jsx("lineBasicMaterial",{color:"#b2e5f5",transparent:!0,opacity:o?.9:.45})]})]}),p.jsx(je,{radius:h*1.2,color:"#45697d",tilt:.45})]})}function en(t){const e=E.useRef(null);return ye(({clock:i})=>{e.current&&!t.reduced&&(e.current.rotation.y=Math.sin(i.elapsedTime*.4)*.1)}),p.jsxs("group",{ref:e,onPointerOver:()=>{var i;return(i=t.onHover)==null?void 0:i.call(t,"probe")},onPointerOut:()=>{var i;return(i=t.onHover)==null?void 0:i.call(t,null)},onClick:i=>{var s;i.stopPropagation(),i.delta<6&&((s=t.onChoose)==null||s.call(t,"probe"))},rotation:[.3,-.3,.2],children:[p.jsxs("mesh",{children:[p.jsx("octahedronGeometry",{args:[.17]}),p.jsx("meshStandardMaterial",{color:"#a9b6d2",metalness:.7,roughness:.4})]}),[-1,1].map(i=>p.jsxs("mesh",{position:[i*.3,0,0],children:[p.jsx("boxGeometry",{args:[.35,.22,.025]}),p.jsx("meshStandardMaterial",{color:"#23497e",metalness:.7,roughness:.3})]},i)),p.jsxs("mesh",{position:[0,.2,0],rotation:[Math.PI/2,0,0],children:[p.jsx("coneGeometry",{args:[.17,.1,24,1,!0]}),p.jsx("meshStandardMaterial",{color:"#839eb8",side:Et})]})]})}function tn({radius:t=1,reduced:e,onHover:i,onChoose:s,highlighted:r}){const n=E.useRef(null),[a,l]=E.useState(!1),o=a||r,h=c=>{l(c),i==null||i(c?"classroom":null)};return ye(({clock:c,pointer:f},v)=>{n.current&&(n.current.rotation.y=e?0:c.elapsedTime*.16,n.current.rotation.x=W.damp(n.current.rotation.x,e?0:f.y*.18,4,v),n.current.scale.setScalar(W.damp(n.current.scale.x,o?1.07:1,6,v)))}),p.jsx("group",{children:p.jsxs("group",{ref:n,onPointerOver:c=>{c.stopPropagation(),h(!0)},onPointerOut:()=>h(!1),onClick:c=>{c.stopPropagation(),c.delta<6&&(s==null||s("classroom"))},children:[p.jsxs("mesh",{children:[p.jsx("sphereGeometry",{args:[t,48,32]}),p.jsx("meshStandardMaterial",{color:"#b66329",emissive:"#d47935",emissiveIntensity:o?.65:.25,metalness:.5,roughness:.52})]}),p.jsxs("mesh",{children:[p.jsx("icosahedronGeometry",{args:[t*1.025,2]}),p.jsx("meshBasicMaterial",{color:"#ffe0a1",wireframe:!0,transparent:!0,opacity:o?.6:.24})]}),p.jsx(je,{radius:t*1.4,color:"#ffc78b",tilt:.85}),[0,1,2,3,4].map(c=>{const f=c*Math.PI*2/5;return p.jsxs("mesh",{position:[Math.cos(f)*t*1.4,Math.sin(f)*t*.93,Math.sin(f)*t*1.04],children:[p.jsx("octahedronGeometry",{args:[t*.1]}),p.jsx("meshBasicMaterial",{color:o?"#fff5d8":"#ffcc8d"})]},c)})]})})}function Ti(t){return t.kind==="neptune"||t.kind==="ticker"?p.jsx($r,{...t,kind:t.kind}):t.kind==="prototype"?p.jsxs("mesh",{onPointerOver:()=>{var e;return(e=t.onHover)==null?void 0:e.call(t,"prototype")},onPointerOut:()=>{var e;return(e=t.onHover)==null?void 0:e.call(t,null)},onClick:e=>{var i;e.stopPropagation(),e.delta<6&&((i=t.onChoose)==null||i.call(t,"prototype"))},children:[p.jsx("sphereGeometry",{args:[t.radius??1,24,16]}),p.jsx("meshBasicMaterial",{transparent:!0,opacity:0,depthWrite:!1})]}):t.kind==="classroom"?p.jsx(tn,{...t}):t.kind==="travel"?p.jsx(Jr,{...t}):t.kind==="probe"?p.jsx(en,{...t}):p.jsx(Qr,{...t})}function sn({reduced:t,waiting:e,entranceAt:i}){const s=E.useRef(null),r=E.useMemo(()=>{let n=3024;const a=()=>(n=n*16807%2147483647,n/2147483647),l=new Float32Array(1600*3);for(let o=0;o<1600;o++)l[o*3]=(a()-.5)*50,l[o*3+1]=(a()-.5)*30,l[o*3+2]=-6-a()*20;return l},[]);return ye(({pointer:n},a)=>{if(!s.current)return;const l=He(e,i,t,300,2100);s.current.material.opacity=.3+l*.55,t||(s.current.rotation.y=W.damp(s.current.rotation.y,n.x*.025+(1-l)*.065,2,a),s.current.rotation.x=W.damp(s.current.rotation.x,-n.y*.02,2,a))}),p.jsxs("points",{ref:s,children:[p.jsx("bufferGeometry",{children:p.jsx("bufferAttribute",{attach:"attributes-position",args:[r,3]})}),p.jsx("pointsMaterial",{size:.023,color:"#c4defe",transparent:!0,opacity:.85,sizeAttenuation:!0})]})}const Ue=[{kind:"classroom",position:[0,3.25,-.3],radius:.43},{kind:"neptune",position:[0,.1,0],radius:1.65,labelOffset:[-1.25,0]},{kind:"travel",position:[-3.65,1.25,.3],radius:.94},{kind:"ticker",position:[3.75,1.35,-.4],radius:.78},{kind:"station",position:[-2.75,-2.1,.7],radius:.49},{kind:"feifei",position:[.35,-2.7,.15],radius:.76,labelOffset:[1.6,.55]},{kind:"prototype",position:[3.05,-1.55,.6],radius:.45},{kind:"probe",position:[-5.1,-.85,-.7],radius:.2}],rn={neptune:[0,6.35],travel:[-1.65,2.65],ticker:[1.65,2.65],station:[-1.65,-.8],feifei:[1.65,-.8],prototype:[-1.65,-4.15],classroom:[1.65,-4.15],probe:[0,-7]};function Le(t,e){return e?[...rn[t.kind],t.position[2]]:t.position}const Ne={x:0,y:0,zoom:1};function He(t,e,i,s,r){if(t)return 0;if(i||e==null)return 1;const n=W.clamp((performance.now()-e-s)/r,0,1);return n*n*(3-2*n)}function nn({reduced:t,onHover:e,onChoose:i,selected:s,single:r,waiting:n,entranceAt:a,rotation:l,zoom:o,labelRefs:h,highlighted:c,crystalRef:f,sceneReady:v}){const d=E.useRef(null),m=E.useRef({}),x=E.useRef(null),{camera:u,size:g}=Yi(),b=E.useMemo(()=>new $,[]),y=E.useMemo(()=>new $,[]),w=E.useMemo(()=>new $,[]),S=E.useMemo(()=>new $,[]),R=()=>{const A=f.current,j=d.current;if(!A||!j)return;const L=Ue.find(I=>I.kind==="prototype");r?w.set(0,0,0):w.set(...Le(L,g.width<=700)),j.localToWorld(w),S.copy(w),S.y+=(r?1.7:L.radius)*j.scale.x,w.project(u),S.project(u);const P=Math.round(Math.hypot((S.x-w.x)*g.width,(S.y-w.y)*g.height)/.7/2)*2;if(!Number.isFinite(P)||w.z<-1||w.z>1){A.style.visibility="hidden";return}const N=`${Math.max(24,Math.min(2048,P))}px`;A.style.width!==N&&(A.style.width=N,A.style.height=N),A.style.left=`${(w.x+1)*g.width/2}px`,A.style.top=`${(1-w.y)*g.height/2}px`,A.style.visibility="visible"};return E.useEffect(()=>{u.position.set(0,0,r?7.8:15),u.lookAt(0,0,0)},[u,r]),ye(({pointer:A,clock:j},L)=>{if(!d.current)return;if(r){d.current.rotation.y=W.damp(d.current.rotation.y,l.current.y+(t?0:A.x*.1),3,L),d.current.rotation.x=W.damp(d.current.rotation.x,l.current.x,3,L),d.current.updateWorldMatrix(!0,!1),u.updateMatrixWorld(),R();return}const P=g.width<=700;if(Ue.forEach((M,T)=>{const U=m.current[M.kind];if(!U)return;if(M.kind==="neptune"){const Fe=He(n,a,t,450,800);U.position.set(...Le(M,P)),U.visible=Fe>0,U.scale.setScalar(.78+Fe*.22);return}const C=He(n,a,t,1150+T*75,1200),[B,_,ae]=Le(M,P),pe=(1-C)*(T%2?-.35:.35),we=.68+C*.32;U.position.set((B*Math.cos(pe)-_*Math.sin(pe))*we,(B*Math.sin(pe)+_*Math.cos(pe))*we,ae),U.scale.setScalar(.15+.85*C),U.visible=C>0}),x.current){const M=He(n,a,t,850,1450);x.current.scale.setScalar(.55+M*.45),x.current.traverse(T=>{T instanceof ts&&(T.material.opacity=.23*M)})}if(d.current.scale.setScalar(P?1:1.12),d.current.rotation.x=W.damp(d.current.rotation.x,l.current.x+(t?0:A.y*.025),4,L),d.current.rotation.y=W.damp(d.current.rotation.y,l.current.y+(t?0:A.x*.035),4,L),s){const M=Ue.find(T=>T.kind===s);b.set(...Le(M,P)),d.current.localToWorld(b),b.z+=M.radius*3+1,u.position.lerp(b,1-Math.exp(-L*3))}else{const M=P?Math.max(18.4,7.4*g.height/g.width)/(2*Math.tan(W.degToRad(20))):13.8;u.position.lerp(b.set(0,0,M*(P?1:o.current)),1-Math.exp(-L*4))}t||(d.current.position.y=Math.sin(j.elapsedTime*.13)*.035),d.current.updateWorldMatrix(!0,!1),u.updateMatrixWorld(),v.current&&(v.current.dataset.ready="true"),R();const N=[];for(const M of Ue){const T=h.current[M.kind];if(!T)continue;const U=He(n,a,t,2780,580);if(s||U===0){T.style.visibility="hidden";continue}T.style.opacity=String(U),y.set(...Le(M,P)),y.y-=M.kind==="probe"?.55:M.radius+.37;const C=P?void 0:M.labelOffset;if(C&&(y.x+=C[0],y.y+=C[1]),d.current.localToWorld(y).project(u),!Number.isFinite(y.x)||!Number.isFinite(y.y)||y.z<-1||y.z>1){T.style.visibility="hidden";continue}const B=T.offsetWidth,_=T.offsetHeight;N.push({node:T,width:B,height:_,left:W.clamp((y.x+1)*g.width/2-B/2,8,Math.max(8,g.width-B-8)),top:W.clamp((1-y.y)*g.height/2-_/2,8,Math.max(8,g.height-_-8))})}const I=[];for(const M of N.sort((T,U)=>T.top-U.top)){const U=[M.top,...I.flatMap(C=>[C.top-M.height-6,C.top+C.height+6])].sort((C,B)=>Math.abs(C-M.top)-Math.abs(B-M.top)).find(C=>C>=8&&C+M.height<=g.height-8&&I.every(B=>M.left+M.width+6<=B.left||M.left>=B.left+B.width+6||C+M.height+6<=B.top||C>=B.top+B.height+6));U!==void 0&&(M.top=U),M.node.style.left=`${M.left+M.width/2}px`,M.node.style.top=`${M.top+M.height/2}px`,M.node.style.visibility="visible",I.push(M)}}),p.jsxs(p.Fragment,{children:[p.jsx("ambientLight",{intensity:1.15}),p.jsx("directionalLight",{position:[-6,5,7],intensity:2.8,color:"#e5f2ff"}),p.jsx("pointLight",{position:[5,-2,4],intensity:12,color:"#7faeff"}),p.jsx(sn,{reduced:t,waiting:n,entranceAt:a}),p.jsx("group",{ref:d,children:r?p.jsx(Ti,{kind:r,radius:1.7,reduced:t}):p.jsxs(p.Fragment,{children:[p.jsx("group",{ref:x,rotation:[.2,.12,-.23],children:[2.45,3.7,5.1].map((A,j)=>p.jsx(je,{radius:A,tilt:1.1,color:j===0?"#7a9ac2":"#49617e",dashed:!0},A))}),Ue.map(A=>p.jsx("group",{ref:j=>{m.current[A.kind]=j},position:Le(A,g.width<=700),children:p.jsx(Ti,{kind:A.kind,radius:A.radius,reduced:t,onHover:e,onChoose:i,highlighted:A.kind===c})},A.kind))]})})]})}class Si extends E.Component{constructor(){super(...arguments);Jt(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}function cn(t){const e=E.useRef(null),i=E.useRef(null),s=E.useRef({}),[r,n]=E.useState(null),a=u=>{var g;n(u),(g=t.onHover)==null||g.call(t,u)},l=E.useRef(null),o=E.useRef(null),h=E.useRef({x:t.single?0:Ne.x,y:t.single?0:Ne.y}),c=E.useRef(t.single?1:Ne.zoom),[f,v]=E.useState(!0),[d,m]=E.useState(!1);E.useEffect(()=>{const u=l.current;if(!u)return;const g=new IntersectionObserver(([y])=>v(y.isIntersecting&&!document.hidden));g.observe(u);const b=()=>{const y=u.getBoundingClientRect();v(!document.hidden&&y.bottom>0&&y.top<innerHeight)};return document.addEventListener("visibilitychange",b),()=>{g.disconnect(),document.removeEventListener("visibilitychange",b),t.single||(Ne.x=h.current.x,Ne.y=h.current.y,Ne.zoom=c.current)}},[t.single]),E.useEffect(()=>{const u=l.current;if(!u||t.single)return;const g=y=>{y.preventDefault(),c.current=W.clamp(c.current+y.deltaY*2e-4,.86,1.15)},b=y=>{u.clientWidth>700&&g(y)};return u.addEventListener("wheel",b,{passive:!1}),()=>u.removeEventListener("wheel",b)},[t.single]);const x=p.jsxs("div",{className:"fallback-universe",children:[p.jsx("div",{className:`fallback-planet ${t.single??"neptune"}`}),!t.single&&p.jsx("div",{className:"fallback-links",children:ei.map(u=>p.jsxs("button",{onClick:()=>{var g;return(g=t.onChoose)==null?void 0:g.call(t,u.id)},children:[u.name,p.jsxs("small",{children:[u.label," ↗"]})]},u.id))})]});return p.jsxs("div",{ref:l,className:`universe ${t.single?"single-universe":""}`,onPointerDown:u=>{u.target.closest("button")||u.pointerType==="touch"&&u.currentTarget.clientWidth<=700||(o.current={x:u.clientX,y:u.clientY})},onPointerMove:u=>{o.current&&(h.current.y=W.clamp(h.current.y+(u.clientX-o.current.x)*.002,t.single?-2:-.3,t.single?2:.3),h.current.x=W.clamp(h.current.x+(u.clientY-o.current.y)*.001,t.single?-.5:-.14,t.single?.5:.14),o.current={x:u.clientX,y:u.clientY})},onPointerCancel:()=>{o.current=null},onPointerUp:()=>{o.current=null},onPointerLeave:()=>{o.current=null},children:[p.jsx(Si,{fallback:x,children:d?x:p.jsx($i,{camera:{position:[0,0,t.single?7.8:15],fov:40,near:.1,far:100},dpr:[1,window.innerWidth<=700?1.25:1.75],frameloop:f?"always":"never",gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},onCreated:({gl:u})=>{u.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault(),m(!0)},{once:!0})},fallback:x,children:p.jsx(E.Suspense,{fallback:null,children:p.jsx(nn,{...t,onHover:a,rotation:h,zoom:c,labelRefs:s,highlighted:r,crystalRef:e,sceneReady:i})})})}),!t.single&&p.jsx("div",{ref:i,className:"scene-ready","aria-hidden":"true"}),(!t.single||t.single==="prototype")&&!d&&p.jsxs("div",{ref:e,className:"crystal-world",children:[p.jsx("div",{className:"crystal-orb-fallback"}),p.jsx(Si,{fallback:null,children:p.jsx(Ur,{preset:"plasma",color:"#424d5d",size:.7,crackle:.85,fill:.5,particleCount:t.single?12e3:3e3,interactive:!t.reduced,hoverStrength:.7,intro:!1,paused:t.reduced||!f})}),!t.single&&p.jsx("button",{type:"button",className:"crystal-world-hitarea","aria-label":"进入早期实验",onMouseEnter:()=>a("prototype"),onMouseLeave:()=>a(null),onFocus:()=>a("prototype"),onBlur:()=>a(null),onClick:()=>{var u;return(u=t.onChoose)==null?void 0:u.call(t,"prototype")}})]}),!t.single&&!d&&ei.map(u=>{var g,b;return p.jsxs("button",{ref:y=>{s.current[u.id]=y},type:"button",className:`world-label ${u.id==="probe"?"compact":""} ${u.id==="classroom"?"public-deploy-label":""} ${r===u.id?"locked":""} ${(g=t.visited)!=null&&g.includes(u.path)?"visited":""}`,style:{position:"absolute",left:0,top:0,visibility:"hidden",transform:"translate(-50%, -50%)",zIndex:16},"aria-label":`探索${u.label}`,onFocus:()=>a(u.id),onBlur:()=>a(null),onMouseEnter:()=>a(u.id),onMouseLeave:()=>a(null),onClick:()=>{var y;return(y=t.onChoose)==null?void 0:y.call(t,u.id)},children:[p.jsxs("span",{className:"label-code",children:[u.code,u.id==="travel"?" / FLAGSHIP":(b=t.visited)!=null&&b.includes(u.path)?" / EXPLORED":""]}),p.jsxs("strong",{children:[u.name," ",p.jsx("span",{children:"↗"})]}),p.jsx("small",{children:u.id==="travel"?"旅行回忆 · 开发中":u.label})]},u.id)})]})}export{cn as default};

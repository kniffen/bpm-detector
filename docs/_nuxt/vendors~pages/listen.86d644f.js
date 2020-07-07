/*! For license information please see ../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{167:function(e,n,t){var r=t(24),o=t(81),f=t(23),l=t(14),c=t(171);e.exports=function(e,n){var t=1==e,h=2==e,y=3==e,m=4==e,d=6==e,v=5==e||d,O=n||c;return function(n,c,w){for(var C,x,A=f(n),E=o(A),j=r(c,w,3),D=l(E.length),R=0,S=t?O(n,D):h?O(n,0):void 0;D>R;R++)if((v||R in E)&&(x=j(C=E[R],R,A),e))if(t)S[R]=x;else if(x)switch(e){case 3:return!0;case 5:return C;case 6:return R;case 2:S.push(C)}else if(m)return!1;return d?-1:y||m?m:S}}},169:function(e,n,t){"use strict";e.exports=function(e){return null!=e&&"number"==typeof e.length&&"number"==typeof e.sampleRate&&"function"==typeof e.getChannelData&&"number"==typeof e.duration}},171:function(e,n,t){var r=t(172);e.exports=function(e,n){return new(r(e))(n)}},172:function(e,n,t){var r=t(10),o=t(110),f=t(2)("species");e.exports=function(e){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[f])&&(n=void 0)),void 0===n?Array:n}},183:function(e,n,t){"use strict";var r=t(6),o=t(167)(6),f="findIndex",l=!0;f in[]&&Array(1)[f]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),t(82)(f)},184:function(e,n,t){"use strict";var r=t(168);function o(e,n){if(!(this instanceof o))return new o(e,n);if(n||(e=(n=e)&&n.context),n||(n={}),void 0===e&&(e=r()),null==n.numberOfChannels&&(n.numberOfChannels=1),null==n.sampleRate&&(n.sampleRate=e&&e.sampleRate||this.sampleRate),null==n.length&&(null!=n.duration?n.length=n.duration*n.sampleRate:n.length=1),e&&e.createBuffer)return e.createBuffer(n.numberOfChannels,Math.ceil(n.length),n.sampleRate);this.length=Math.ceil(n.length),this.numberOfChannels=n.numberOfChannels,this.sampleRate=n.sampleRate,this.duration=this.length/this.sampleRate,this._data=new Float32Array(this.length*this.numberOfChannels),this._channelData=[];for(var t=0;t<this.numberOfChannels;t++)this._channelData.push(this._data.subarray(t*this.length,(t+1)*this.length))}e.exports=o,o.prototype.numberOfChannels=1,o.prototype.sampleRate=44100,o.prototype.getChannelData=function(e){if(e>=this.numberOfChannels||e<0||null==e)throw Error("Cannot getChannelData: channel number ("+e+") exceeds number of channels ("+this.numberOfChannels+")");return this._channelData[e]},o.prototype.copyFromChannel=function(e,n,t){null==t&&(t=0);for(var data=this._channelData[n],i=t,r=0;i<this.length&&r<e.length;i++,r++)e[r]=data[i]},o.prototype.copyToChannel=function(source,e,n){var data=this._channelData[e];n||(n=0);for(var i=n,t=0;i<this.length&&t<source.length;i++,t++)data[i]=source[t]}},185:function(e,n,t){"use strict";var r=Object.prototype.toString;e.exports=function(e){var n;return"[object Object]"===r.call(e)&&(null===(n=Object.getPrototypeOf(e))||n===Object.getPrototypeOf({}))}},186:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},i=0;i<10;i++)n["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,source){for(var n,t,c=l(e),s=1;s<arguments.length;s++){for(var h in n=Object(arguments[s]))o.call(n,h)&&(c[h]=n[h]);if(r){t=r(n);for(var i=0;i<t.length;i++)f.call(n,t[i])&&(c[t[i]]=n[t[i]])}}return c}},187:function(e,n,t){"use strict";var r=t(219),o=t(220),f=t(169),l=t(221),c=t(185),h=t(188);e.exports={parse:w,stringify:function(e,n){n=void 0===n?{endianness:"le"}:null==n?{}:"string"==typeof n?w(n):C(n);c(e)||(e=C(e));var t=[];null!=e.type&&e.type!==n.type&&t.push(e.type||"float32");null!=e.channels&&e.channels!==n.channels&&t.push(v[e.channels]);null!=e.endianness&&e.endianness!==n.endianness&&t.push(e.endianness||"le");null!=e.interleaved&&e.interleaved!==n.interleaved&&"audiobuffer"!==e.type&&t.push(e.interleaved?"interleaved":"planar");null!=e.sampleRate&&e.sampleRate!==n.sampleRate&&t.push(e.sampleRate);return t.join(" ")},detect:C,type:x};for(var y=o.endianness instanceof Function?o.endianness().toLowerCase():"le",m={uint:"uint32",uint8:"uint8",uint8_clamped:"uint8",uint16:"uint16",uint32:"uint32",int:"int32",int8:"int8",int16:"int16",int32:"int32",float:"float32",float32:"float32",float64:"float64",array:"array",arraybuffer:"arraybuffer",buffer:"buffer",audiobuffer:"audiobuffer",ndarray:"ndarray",ndsamples:"ndsamples"},d={mono:1,stereo:2,quad:4,5.1:6,2.1:3,"3-channel":3,"5-channel":5},i=6;i<32;i++)d[i+"-channel"]=i;var v={};for(var O in d)v[d[O]]=O;function w(e){for(var n={},t=e.split(/\s*[,;_]\s*|\s+/),i=0;i<t.length;i++){var o=t[i].toLowerCase();if("planar"===o&&null==n.interleaved)n.interleaved=!1,null==n.channels&&(n.channels=2);else if("interleave"!==o&&"interleaved"!==o||null!=n.interleaved)if(d[o])n.channels=d[o];else if("le"===o||"LE"===o||"littleendian"===o||"bigEndian"===o)n.endianness="le";else if("be"===o||"BE"===o||"bigendian"===o||"bigEndian"===o)n.endianness="be";else if(m[o])n.type=m[o],"audiobuffer"===o&&(n.endianness=y,n.interleaved=!1);else if(r[o])n.sampleRate=r[o];else{if(!/^\d+$/.test(o))throw Error("Cannot identify part `"+o+"`");n.sampleRate=parseInt(o)}else n.interleaved=!0,null==n.channels&&(n.channels=2)}return n}function C(e){if(!e)return{};var n=h(e,{channels:"channel channels numberOfChannels channelCount",sampleRate:"sampleRate rate",interleaved:"interleave interleaved",type:"type dtype",endianness:"endianness"});if(e.format&&(n.type="ndsamples"),null==n.sampleRate&&e.format&&e.format.sampleRate&&(n.sampleRate=e.format.sampleRate),e.planar&&(n.interleaved=!1),null!=n.interleaved&&null==n.channels&&(n.channels=2),null==n.type){var t=x(e);t&&(n.type=t)}return"audiobuffer"===n.type&&(n.endianness=y,n.interleaved=!1),n}function x(e){return f(e)?"audiobuffer":l(e)?"buffer":Array.isArray(e)?"array":e instanceof ArrayBuffer?"arraybuffer":e.shape&&e.dtype?e.format?"ndsamples":"ndarray":e instanceof Float32Array?"float32":e instanceof Float64Array?"float64":e instanceof Uint8Array?"uint8":e instanceof Uint8ClampedArray?"uint8_clamped":e instanceof Int8Array?"int8":e instanceof Int16Array?"int16":e instanceof Uint16Array?"uint16":e instanceof Int32Array?"int32":e instanceof Uint32Array?"uint32":void 0}},188:function(e,n,t){"use strict";e.exports=function(e,n,t){var r,i,f={};if("string"==typeof n&&(n=o(n)),Array.isArray(n)){var l={};for(i=0;i<n.length;i++)l[n[i]]=!0;n=l}for(r in n)n[r]=o(n[r]);var c={};for(r in n){var h=n[r];if(Array.isArray(h))for(i=0;i<h.length;i++){var y=h[i];if(t&&(c[y]=!0),y in e){if(f[r]=e[y],t)for(var m=i;m<h.length;m++)c[h[m]]=!0;break}}else r in e&&(n[r]&&(f[r]=e[r]),t&&(c[r]=!0))}if(t)for(r in e)c[r]||(f[r]=e[r]);return f};var r={};function o(e){return r[e]?r[e]:("string"==typeof e&&(e=r[e]=e.split(/\s*,\s*|\s+/)),e)}},208:function(e,n,t){"use strict";var r,o=t(184),f=t(169),l=t(209),c=t(210),h=t(168),y=(t(211),t(212)),m=function(e,n){return null==e?0:0===(t=e)&&1/t==-1/0?n:e<=-n?0:e<0?n+e%n:Math.min(n,e);var t},d={create:v,copy:O,shallow:C,clone:function(e){return O(e,C(e))},reverse:function(e,n,t,r){w(e),f(n)||null==n||(r=t,t=n,n=null);n?(w(n),O(e,n)):n=e;t=null==t?0:m(t,e.length),r=null==r?e.length:m(r,e.length);for(var i=0,o=n.numberOfChannels;i<o;++i)n.getChannelData(i).subarray(t,r).reverse();return n},invert:function(e,n,t,r){f(n)||null==n||(r=t,t=n,n=null);return x(e,n,(function(e){return-e}),t,r)},zero:function(e,n,t,r){return x(e,n,0,t,r)},noise:function(e,n,t,r){return x(e,n,(function(e){return 2*Math.random()-1}),t,r)},equal:function e(n,t){if(arguments.length>2){for(var i=0,r=arguments.length-1;i<r;i++)if(!e(arguments[i],arguments[i+1]))return!1;return!0}if(w(n),w(t),n.length!==t.length||n.numberOfChannels!==t.numberOfChannels)return!1;for(var o=0;o<n.numberOfChannels;o++){var f=n.getChannelData(o),l=t.getChannelData(o);for(i=0;i<f.length;i++)if(f[i]!==l[i])return!1}return!0},fill:x,slice:A,concat:E,resize:function(e,n){return w(e),n<e.length?A(e,0,n):E(e,v(n-e.length,e.numberOfChannels))},pad:j,padLeft:function(data,e,n){return j(e,data,n)},padRight:function(data,e,n){return j(data,e,n)},rotate:function(e,n){w(e);for(var t=0;t<e.numberOfChannels;t++)for(var r=e.getChannelData(t),o=r.slice(),i=0,f=r.length;i<f;i++)r[(n+(n+i<0?f+i:i))%f]=o[i];return e},shift:function(e,n){w(e);for(var t=0;t<e.numberOfChannels;t++){var r=e.getChannelData(t);if(n>0)for(var i=r.length-n;i--;)r[i+n]=r[i];else{i=-n;for(var o=r.length-n;i<o;i++)r[i+n]=r[i]||0}}return e},normalize:function(e,n,t,r){f(n)||(r=t,t=n,n=null);t=null==t?0:m(t,e.length),r=null==r?e.length:m(r,e.length);for(var o=0,l=0;l<e.numberOfChannels;l++)for(var data=e.getChannelData(l),i=t;i<r;i++)o=Math.max(Math.abs(data[i]),o);var h=Math.max(1/o,1);return x(e,n,(function(e,i,n){return c(e*h,-1,1)}),t,r)},removeStatic:function(e,n,t,r){var o=function(e,n,t){if(w(e),n=null==n?0:m(n,e.length),(t=null==t?e.length:m(t,e.length))-n<1)return[];for(var r=[],o=0;o<e.numberOfChannels;o++){for(var f=0,data=e.getChannelData(o),i=n;i<t;i++)f+=data[i];r.push(f/(t-n))}return r}(e,t,r);return x(e,n,(function(e,i,n){return e-o[n]}),t,r)},trim:function(e,n){return D(e,n,!0,!0)},trimLeft:function(e,n){return D(e,n,!0,!1)},trimRight:function(e,n){return D(e,n,!1,!0)},mix:function(e,n,t,r){w(e),w(n),null==t&&(t=.5);var o=t instanceof Function?t:function(a,b){return a*(1-t)+b*t};null==r?r=0:r<0&&(r+=e.length);for(var f=0;f<e.numberOfChannels;f++)for(var l=e.getChannelData(f),c=n.getChannelData(f),i=r,h=0;i<e.length&&h<n.length;i++,h++)l[i]=o.call(e,l[i],c[h],h,f);return e},size:function(e){return w(e),e.numberOfChannels*e.getChannelData(0).byteLength},data:function(e,data){w(e),data=data||[];for(var n=0;n<e.numberOfChannels;n++)ArrayBuffer.isView(data[n])?data[n].set(e.getChannelData(n)):data[n]=e.getChannelData(n);return data},subbuffer:function(e,n,t,r){w(e),Array.isArray(n)?(r=n,n=0,t=-0):Array.isArray(t)&&(r=t,t=-0);if(!Array.isArray(r)){r=Array(e.numberOfChannels);for(var f=0;f<e.numberOfChannels;f++)r[f]=f}n=null==n?0:m(n,e.length),t=null==t?e.length:m(t,e.length);for(var data=[],i=0;i<r.length;i++){var l=r[i],c=e.getChannelData(l);data.push(c.subarray(n,t))}var h=new o(null,{length:0,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels});return h.length=data[0].length,h._data=null,h._channelData=data,h.duration=h.length/h.sampleRate,h},repeat:function(e,n){if(w(e),!n||n<0)return new o(null,{length:0,numberOfChannels:e.numberOfChannels,sampleRate:e.sampleRate});if(1===n)return e;for(var t=[],i=0;i<n;i++)t.push(e);return E(t)}};function v(e,n,t){return"number"==typeof n?n={channels:n}:"string"==typeof n?n={format:n}:n||(n={}),t&&(n.sampleRate=t),n.context=d.context,y(e,n)}function O(e,n,t){w(e),w(n),t=t||0;for(var r=0,o=Math.min(e.numberOfChannels,n.numberOfChannels);r<o;r++)n.getChannelData(r).set(e.getChannelData(r),t);return n}function w(e){if(!f(e))throw new Error("Argument should be an AudioBuffer instance.")}function C(e){return w(e),l?d.context.createBuffer(e.numberOfChannels,e.length,e.sampleRate):v(e.length,e.numberOfChannels,e.sampleRate)}function x(e,n,t,r,o){if(w(e),f(n)||null==n||("function"==typeof t||(o=r,r=t,t=n),n=null),n?w(n):n=e,r=null==r?0:m(r,e.length),o=null==o?e.length:m(o,e.length),t instanceof Function)for(l=0,c=e.numberOfChannels;l<c;l++){var data=e.getChannelData(l);for(h=n.getChannelData(l),i=r;i<o;i++)h[i]=t.call(e,data[i],i,l,data)}else for(var l=0,c=e.numberOfChannels;l<c;l++)for(var h=n.getChannelData(l),i=r;i<o;i++)h[i]=t;return n}function A(e,n,t){w(e),n=null==n?0:m(n,e.length),t=null==t?e.length:m(t,e.length);for(var data=[],r=0;r<e.numberOfChannels;r++){var o=e.getChannelData(r);data.push(o.slice(n,t))}return v(data,e.numberOfChannels,e.sampleRate)}function E(){for(var e=[],i=0,n=arguments.length;i<n;i++){var t=arguments[i];if(Array.isArray(t))for(var r=0;r<t.length;r++)e.push(t[r]);else e.push(t)}var o=1,f=0,l=0;for(i=0;i<e.length;i++){w(m=e[i]),f+=m.length,o=Math.max(m.numberOfChannels,o),l=Math.max(m.sampleRate,l)}for(var data=[],c=0;c<o;c++){var h=new Float32Array(f),y=0;for(i=0;i<e.length;i++){var m;c<(m=e[i]).numberOfChannels&&h.set(m.getChannelData(c),y),y+=m.length}data.push(h)}return v(data,o,l)}function j(a,b,e){var n,t;return"number"==typeof a?(n=b,t=a):(n=a,t=b),e=e||0,w(n),t<n.length?n:n===b?E(x(v(t-n.length,n.numberOfChannels),e),n):E(n,x(v(t-n.length,n.numberOfChannels),e))}function D(e,n,t,r){var o,f;if(w(e),n=null==n?0:Math.abs(n),t){o=e.length;for(var l=0,c=e.numberOfChannels;l<c;l++)for(var data=e.getChannelData(l),i=0;i<data.length&&!(i>o);i++)if(Math.abs(data[i])>n){o=i;break}}else o=0;if(r){f=0;for(l=0,c=e.numberOfChannels;l<c;l++)for(i=(data=e.getChannelData(l)).length-1;i>=0&&!(i<f);i--)if(Math.abs(data[i])>n){f=i+1;break}}else f=e.length;return A(e,o,f)}Object.defineProperty(d,"context",{get:function(){return r||(r=h()),r}}),e.exports=d},209:function(e,n){e.exports=!0},210:function(e,n){e.exports=function(e,n,t){return n<t?e<n?n:e>t?t:e:e<t?t:e>n?n:e}},211:function(e,n){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},212:function(e,n,t){"use strict";var r=t(184),o=t(169),f=t(185),l=t(168),c=t(213),h=t(187),y=t(181),m=t(188);function d(e){return"string"==typeof e?h.parse(e):h.detect(e)}e.exports=function e(source,n){var t,data,h,v,O,w,C;if("number"==typeof n?n={channels:n}:"string"==typeof n?n={format:n}:void 0===n&&(f(source)?(n=source,source=void 0):n={}),h=(n=m(n,{format:"format type dtype dataType",channels:"channel channels numberOfChannels channelCount",sampleRate:"sampleRate rate",length:"length size",duration:"duration time"})).channels,v=n.sampleRate,n.format&&(O=d(n.format)),O&&(h&&!O.channels?O.channels=h:O.channels&&!h&&(h=O.channels),!v&&O.sampleRate&&(v=O.sampleRate)),null==source)null!=n.duration?(v||(v=44100),t=v*n.duration):t=n.length;else if(o(source))if(t=source.length,null==h&&(h=source.numberOfChannels),null==v&&(v=source.sampleRate),source._channelData)data=source._channelData.slice(0,h);else for(data=[],w=0,C=h;w<C;w++)data[w]=source.getChannelData(w);else if("number"==typeof source)t=source;else if(Array.isArray(source)&&(Array.isArray(source[0])||ArrayBuffer.isView(source[0])))for(t=source[0].length,data=[],h||(h=source.length),w=0;w<h;w++)data[w]=source[w]instanceof Float32Array?source[w]:new Float32Array(source[w]);else{if(source.shape&&source.data)return source.shape&&(h=source.shape[1]),!v&&source.format&&(v=source.format.sampleRate),e(source.data,{channels:h,sampleRate:v});for("string"==typeof source&&(source=y(source)),O||(O=d(source)),h||(h=O.channels||1),source=c(source,O,"float32 planar"),t=Math.floor(source.length/h),data=[],w=0;w<h;w++)data[w]=source.subarray(w*t,(w+1)*t)}var x=new r(null===n.context||0===t?null:n.context||l(),{length:null==t?1:t,numberOfChannels:h||1,sampleRate:v||44100});if(data)for(w=0,C=data.length;w<C;w++)x.getChannelData(w).set(data[w]);return x}},213:function(e,n,t){"use strict";var r=t(214),o=t(218),f=t(187),l=t(186),c=t(169);function h(e){return"string"==typeof e?f.parse(e):f.detect(e)}function y(e){return"string"!=typeof e&&(Array.isArray(e)||ArrayBuffer.isView(e)||e instanceof ArrayBuffer)}e.exports=function(e,n,t,d){if(r(e,"First argument should be data"),r(n,"Second argument should be format string or object"),n===t)return e;if(y(n))d=n,t=f.detect(d),n=f.detect(e);else if(void 0===t&&void 0===d)t=h(n),n=f.detect(e);else if(y(t))d=t,t=h(n),n=f.detect(e);else{var O=h(n),w=f.detect(e);w.dtype="arraybuffer"===O.type?w.type:O.type,n=l(O,w);var C=h(t),x=f.detect(d);C.type&&(x.dtype="arraybuffer"===C.type?x.type||n.dtype:C.type),t=l(C,x)}null==t.channels&&null!=n.channels&&(t.channels=n.channels);null==t.type&&(t.type=n.type,t.dtype=n.dtype);null!=t.interleaved&&null==n.channels&&(n.channels=2);if(n.type===t.type&&n.interleaved===t.interleaved&&n.endianness===t.endianness)return e;v(n),v(t),(e.buffers||e.buffer&&e.buffer.buffers)&&(e.buffer&&(e=e.buffer),e.buffers&&(e=e.join()));var A;if(c(e))if(e._data)A=e._data;else{A=new Float32Array(e.length*e.numberOfChannels);for(var E=0,j=e.numberOfChannels;E<j;E++)A.set(e.getChannelData(E),e.length*E)}else e instanceof ArrayBuffer?A=new m[n.dtype](e):o(e)?(A=null!=e.byteOffset?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):e.buffer,A=new m[n.dtype](A)):A=e;var D="array"===t.type?Array.from(A):new m[t.dtype](A);if(n.max!==t.max){var R=n.max-n.min,S=t.max-t.min,i=0;for(j=A.length;i<j;i++){var k=A[i],B=(k-n.min)/R;k=B*S+t.min,D[i]=Math.max(t.min,Math.min(t.max,k))}}if(n.interleaved!=t.interleaved){var _=n.channels,F=Math.floor(A.length/_);n.interleaved&&!t.interleaved?D=D.map((function(e,n,data){return data[n%F*_+~~(n/F)]})):!n.interleaved&&t.interleaved&&(D=D.map((function(e,n,data){return data[n%_*F+~~(n/_)]})))}if("array"!=t.dtype&&"int8"!=t.dtype&&"uint8"!=t.dtype&&n.endianness&&t.endianness&&n.endianness!==t.endianness){var P="le"===t.endianness,view=new DataView(D.buffer),M=D.BYTES_PER_ELEMENT,z="set"+t.dtype[0].toUpperCase()+t.dtype.slice(1);for(i=0,j=D.length;i<j;i++)view[z](i*M,D[i],P)}t.type;if(d){if(Array.isArray(d))for(i=0;i<D.length;i++)d[i]=D[i];else if(d instanceof ArrayBuffer){var T=new m[t.dtype](d);T.set(D),d=T}else d.set(D);D=d}"arraybuffer"!==t.type&&"buffer"!==t.type||(D=D.buffer);return D};var m={uint8:Uint8Array,uint8_clamped:Uint8ClampedArray,uint16:Uint16Array,uint32:Uint32Array,int8:Int8Array,int16:Int16Array,int32:Int32Array,float32:Float32Array,float64:Float64Array,array:Array,arraybuffer:Uint8Array,buffer:Uint8Array},d={float32:"float32",audiobuffer:"float32",ndsamples:"float32",ndarray:"float32",float64:"float64",buffer:"uint8",arraybuffer:"uint8",uint8:"uint8",uint8_clamped:"uint8",uint16:"uint16",uint32:"uint32",int8:"int8",int16:"int16",int32:"int32",array:"array"};function v(e){switch(e.dtype||(e.dtype=d[e.type]||"array"),e.dtype){case"float32":case"float64":case"audiobuffer":case"ndsamples":case"ndarray":e.min=-1,e.max=1;break;case"uint8":e.min=0,e.max=255;break;case"uint16":e.min=0,e.max=65535;break;case"uint32":e.min=0,e.max=4294967295;break;case"int8":e.min=-128,e.max=127;break;case"int16":e.min=-32768,e.max=32767;break;case"int32":e.min=-2147483648,e.max=2147483647;break;default:e.min=-1,e.max=1}return e}},214:function(e,n,t){"use strict";(function(n){var r=t(186);function o(a,b){if(a===b)return 0;for(var e=a.length,n=b.length,i=0,t=Math.min(e,n);i<t;++i)if(a[i]!==b[i]){e=a[i],n=b[i];break}return e<n?-1:n<e?1:0}function f(b){return n.Buffer&&"function"==typeof n.Buffer.isBuffer?n.Buffer.isBuffer(b):!(null==b||!b._isBuffer)}var l=t(215),c=Object.prototype.hasOwnProperty,h=Array.prototype.slice,y="foo"===function(){}.name;function m(e){return Object.prototype.toString.call(e)}function d(e){return!f(e)&&("function"==typeof n.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var v=e.exports=E,O=/\s*function\s+([^\(\s]*)\s*/;function w(e){if(l.isFunction(e)){if(y)return e.name;var n=e.toString().match(O);return n&&n[1]}}function C(s,e){return"string"==typeof s?s.length<e?s:s.slice(0,e):s}function x(e){if(y||!l.isFunction(e))return l.inspect(e);var n=w(e);return"[Function"+(n?": "+n:"")+"]"}function A(e,n,t,r,o){throw new v.AssertionError({message:t,actual:e,expected:n,operator:r,stackStartFunction:o})}function E(e,n){e||A(e,!0,n,"==",v.ok)}function j(e,n,t,r){if(e===n)return!0;if(f(e)&&f(n))return 0===o(e,n);if(l.isDate(e)&&l.isDate(n))return e.getTime()===n.getTime();if(l.isRegExp(e)&&l.isRegExp(n))return e.source===n.source&&e.global===n.global&&e.multiline===n.multiline&&e.lastIndex===n.lastIndex&&e.ignoreCase===n.ignoreCase;if(null!==e&&"object"==typeof e||null!==n&&"object"==typeof n){if(d(e)&&d(n)&&m(e)===m(n)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===o(new Uint8Array(e.buffer),new Uint8Array(n.buffer));if(f(e)!==f(n))return!1;var c=(r=r||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===r.expected.indexOf(n)||(r.actual.push(e),r.expected.push(n),function(a,b,e,n){if(null==a||null==b)return!1;if(l.isPrimitive(a)||l.isPrimitive(b))return a===b;if(e&&Object.getPrototypeOf(a)!==Object.getPrototypeOf(b))return!1;var t=D(a),r=D(b);if(t&&!r||!t&&r)return!1;if(t)return a=h.call(a),b=h.call(b),j(a,b,e);var o,i,f=k(a),c=k(b);if(f.length!==c.length)return!1;for(f.sort(),c.sort(),i=f.length-1;i>=0;i--)if(f[i]!==c[i])return!1;for(i=f.length-1;i>=0;i--)if(o=f[i],!j(a[o],b[o],e,n))return!1;return!0}(e,n,t,r))}return t?e===n:e==n}function D(object){return"[object Arguments]"==Object.prototype.toString.call(object)}function R(e,n){if(!e||!n)return!1;if("[object RegExp]"==Object.prototype.toString.call(n))return n.test(e);try{if(e instanceof n)return!0}catch(e){}return!Error.isPrototypeOf(n)&&!0===n.call({},e)}function S(e,n,t,r){var o;if("function"!=typeof n)throw new TypeError('"block" argument must be a function');"string"==typeof t&&(r=t,t=null),o=function(e){var n;try{e()}catch(e){n=e}return n}(n),r=(t&&t.name?" ("+t.name+").":".")+(r?" "+r:"."),e&&!o&&A(o,t,"Missing expected exception"+r);var f="string"==typeof r,c=!e&&o&&!t;if((!e&&l.isError(o)&&f&&R(o,t)||c)&&A(o,t,"Got unwanted exception"+r),e&&o&&t&&!R(o,t)||!e&&o)throw o}v.AssertionError=function(e){var n;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=C(x((n=this).actual),128)+" "+n.operator+" "+C(x(n.expected),128),this.generatedMessage=!0);var t=e.stackStartFunction||A;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var r=new Error;if(r.stack){var o=r.stack,f=w(t),l=o.indexOf("\n"+f);if(l>=0){var c=o.indexOf("\n",l+1);o=o.substring(c+1)}this.stack=o}}},l.inherits(v.AssertionError,Error),v.fail=A,v.ok=E,v.equal=function(e,n,t){e!=n&&A(e,n,t,"==",v.equal)},v.notEqual=function(e,n,t){e==n&&A(e,n,t,"!=",v.notEqual)},v.deepEqual=function(e,n,t){j(e,n,!1)||A(e,n,t,"deepEqual",v.deepEqual)},v.deepStrictEqual=function(e,n,t){j(e,n,!0)||A(e,n,t,"deepStrictEqual",v.deepStrictEqual)},v.notDeepEqual=function(e,n,t){j(e,n,!1)&&A(e,n,t,"notDeepEqual",v.notDeepEqual)},v.notDeepStrictEqual=function e(n,t,r){j(n,t,!0)&&A(n,t,r,"notDeepStrictEqual",e)},v.strictEqual=function(e,n,t){e!==n&&A(e,n,t,"===",v.strictEqual)},v.notStrictEqual=function(e,n,t){e===n&&A(e,n,t,"!==",v.notStrictEqual)},v.throws=function(e,n,t){S(!0,e,n,t)},v.doesNotThrow=function(e,n,t){S(!1,e,n,t)},v.ifError=function(e){if(e)throw e},v.strict=r((function e(n,t){n||A(n,!0,t,"==",e)}),v,{equal:v.strictEqual,deepEqual:v.deepStrictEqual,notEqual:v.notStrictEqual,notDeepEqual:v.notDeepStrictEqual}),v.strict.strict=v.strict;var k=Object.keys||function(e){var n=[];for(var t in e)c.call(e,t)&&n.push(t);return n}}).call(this,t(32))},215:function(e,n,t){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var n=Object.keys(e),t={},i=0;i<n.length;i++)t[n[i]]=Object.getOwnPropertyDescriptor(e,n[i]);return t},o=/%[sdj%]/g;n.format=function(e){if(!A(e)){for(var n=[],i=0;i<arguments.length;i++)n.push(c(arguments[i]));return n.join(" ")}i=1;for(var t=arguments,r=t.length,f=String(e).replace(o,(function(e){if("%%"===e)return"%";if(i>=r)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(e){return"[Circular]"}default:return e}})),l=t[i];i<r;l=t[++i])C(l)||!D(l)?f+=" "+l:f+=" "+c(l);return f},n.deprecate=function(t,r){if(void 0!==e&&!0===e.noDeprecation)return t;if(void 0===e)return function(){return n.deprecate(t,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return t.apply(this,arguments)}};var f,l={};function c(e,t){var r={seen:[],stylize:y};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),w(t)?r.showHidden=t:t&&n._extend(r,t),E(r.showHidden)&&(r.showHidden=!1),E(r.depth)&&(r.depth=2),E(r.colors)&&(r.colors=!1),E(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=h),m(r,e,r.depth)}function h(e,n){var style=c.styles[n];return style?"["+c.colors[style][0]+"m"+e+"["+c.colors[style][1]+"m":e}function y(e,n){return e}function m(e,t,r){if(e.customInspect&&t&&k(t.inspect)&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var o=t.inspect(r,e);return A(o)||(o=m(e,o,r)),o}var f=function(e,n){if(E(n))return e.stylize("undefined","undefined");if(A(n)){var t="'"+JSON.stringify(n).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(t,"string")}if(x(n))return e.stylize(""+n,"number");if(w(n))return e.stylize(""+n,"boolean");if(C(n))return e.stylize("null","null")}(e,t);if(f)return f;var l=Object.keys(t),c=function(e){var n={};return e.forEach((function(e,t){n[e]=!0})),n}(l);if(e.showHidden&&(l=Object.getOwnPropertyNames(t)),S(t)&&(l.indexOf("message")>=0||l.indexOf("description")>=0))return d(t);if(0===l.length){if(k(t)){var h=t.name?": "+t.name:"";return e.stylize("[Function"+h+"]","special")}if(j(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(R(t))return e.stylize(Date.prototype.toString.call(t),"date");if(S(t))return d(t)}var output,base="",y=!1,D=["{","}"];(O(t)&&(y=!0,D=["[","]"]),k(t))&&(base=" [Function"+(t.name?": "+t.name:"")+"]");return j(t)&&(base=" "+RegExp.prototype.toString.call(t)),R(t)&&(base=" "+Date.prototype.toUTCString.call(t)),S(t)&&(base=" "+d(t)),0!==l.length||y&&0!=t.length?r<0?j(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),output=y?function(e,n,t,r,o){for(var output=[],i=0,f=n.length;i<f;++i)M(n,String(i))?output.push(v(e,n,t,r,String(i),!0)):output.push("");return o.forEach((function(o){o.match(/^\d+$/)||output.push(v(e,n,t,r,o,!0))})),output}(e,t,r,c,l):l.map((function(n){return v(e,t,r,c,n,y)})),e.seen.pop(),function(output,base,e){if(output.reduce((function(e,n){return n.indexOf("\n")>=0&&0,e+n.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return e[0]+(""===base?"":base+"\n ")+" "+output.join(",\n  ")+" "+e[1];return e[0]+base+" "+output.join(", ")+" "+e[1]}(output,base,D)):D[0]+base+D[1]}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function v(e,n,t,r,o,f){var l,c,desc;if((desc=Object.getOwnPropertyDescriptor(n,o)||{value:n[o]}).get?c=desc.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):desc.set&&(c=e.stylize("[Setter]","special")),M(r,o)||(l="["+o+"]"),c||(e.seen.indexOf(desc.value)<0?(c=C(t)?m(e,desc.value,null):m(e,desc.value,t-1)).indexOf("\n")>-1&&(c=f?c.split("\n").map((function(line){return"  "+line})).join("\n").substr(2):"\n"+c.split("\n").map((function(line){return"   "+line})).join("\n")):c=e.stylize("[Circular]","special")),E(l)){if(f&&o.match(/^\d+$/))return c;(l=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(l=l.substr(1,l.length-2),l=e.stylize(l,"name")):(l=l.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),l=e.stylize(l,"string"))}return l+": "+c}function O(e){return Array.isArray(e)}function w(e){return"boolean"==typeof e}function C(e){return null===e}function x(e){return"number"==typeof e}function A(e){return"string"==typeof e}function E(e){return void 0===e}function j(e){return D(e)&&"[object RegExp]"===B(e)}function D(e){return"object"==typeof e&&null!==e}function R(e){return D(e)&&"[object Date]"===B(e)}function S(e){return D(e)&&("[object Error]"===B(e)||e instanceof Error)}function k(e){return"function"==typeof e}function B(e){return Object.prototype.toString.call(e)}function _(e){return e<10?"0"+e.toString(10):e.toString(10)}n.debuglog=function(t){if(E(f)&&(f=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!l[t])if(new RegExp("\\b"+t+"\\b","i").test(f)){var r=e.pid;l[t]=function(){var e=n.format.apply(n,arguments);console.error("%s %d: %s",t,r,e)}}else l[t]=function(){};return l[t]},n.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=O,n.isBoolean=w,n.isNull=C,n.isNullOrUndefined=function(e){return null==e},n.isNumber=x,n.isString=A,n.isSymbol=function(e){return"symbol"==typeof e},n.isUndefined=E,n.isRegExp=j,n.isObject=D,n.isDate=R,n.isError=S,n.isFunction=k,n.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},n.isBuffer=t(216);var F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function P(){var e=new Date,time=[_(e.getHours()),_(e.getMinutes()),_(e.getSeconds())].join(":");return[e.getDate(),F[e.getMonth()],time].join(" ")}function M(e,n){return Object.prototype.hasOwnProperty.call(e,n)}n.log=function(){console.log("%s - %s",P(),n.format.apply(n,arguments))},n.inherits=t(217),n._extend=function(e,n){if(!n||!D(n))return e;for(var t=Object.keys(n),i=t.length;i--;)e[t[i]]=n[t[i]];return e};var z="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function T(e,n){if(!e){var t=new Error("Promise was rejected with a falsy value");t.reason=e,e=t}return n(e)}n.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(z&&e[z]){var n;if("function"!=typeof(n=e[z]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(n,z,{value:n,enumerable:!1,writable:!1,configurable:!0}),n}function n(){for(var n,t,r=new Promise((function(e,r){n=e,t=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?t(e):n(r)}));try{e.apply(this,o)}catch(e){t(e)}return r}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),z&&Object.defineProperty(n,z,{value:n,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(n,r(e))},n.promisify.custom=z,n.callbackify=function(n){if("function"!=typeof n)throw new TypeError('The "original" argument must be of type Function');function t(){for(var t=[],i=0;i<arguments.length;i++)t.push(arguments[i]);var r=t.pop();if("function"!=typeof r)throw new TypeError("The last argument must be of type Function");var o=this,f=function(){return r.apply(o,arguments)};n.apply(this,t).then((function(n){e.nextTick(f,null,n)}),(function(n){e.nextTick(T,n,f)}))}return Object.setPrototypeOf(t,Object.getPrototypeOf(n)),Object.defineProperties(t,r(n)),t}}).call(this,t(114))},216:function(e,n){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},217:function(e,n){"function"==typeof Object.create?e.exports=function(e,n){e.super_=n,e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,n){e.super_=n;var t=function(){};t.prototype=n.prototype,e.prototype=new t,e.prototype.constructor=e}},218:function(e,n){function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},219:function(e){e.exports=JSON.parse('{"8000":8000,"11025":11025,"16000":16000,"22050":22050,"44100":44100,"48000":48000,"88200":88200,"96000":96000,"176400":176400,"192000":192000,"352800":352800,"384000":384000}')},220:function(e,n){n.endianness=function(){return"LE"},n.hostname=function(){return"undefined"!=typeof location?location.hostname:""},n.loadavg=function(){return[]},n.uptime=function(){return 0},n.freemem=function(){return Number.MAX_VALUE},n.totalmem=function(){return Number.MAX_VALUE},n.cpus=function(){return[]},n.type=function(){return"Browser"},n.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},n.networkInterfaces=n.getNetworkInterfaces=function(){return{}},n.arch=function(){return"javascript"},n.platform=function(){return"browser"},n.tmpdir=n.tmpDir=function(){return"/tmp"},n.EOL="\n",n.homedir=function(){return"/"}},221:function(e,n){function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}}}]);
"use strict";window.g_aIl=class{constructor(c,a){this.g_arr=c,this.g_aIm=a,this.g_aIn=!1,this.g_aIo=()=>this.g_KY()}g_aIp(){}g_aIq(e,a,b,c){this.g_arr.g_aIr(this.g_aIm,e,a,b,c)}g_aIs(e,a,b,c){return this.g_arr.g_aIt(this.g_aIm,e,a,b,c)}g_aIu(d,a,b){this.g_arr.g_aIv()?this.g_aIq(d,a,b):this.g_arr.g_aIw()._OnMessageFromDOM({type:"event",component:this.g_aIm,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aIx(c,a){this.g_arr.g_aIy(this.g_aIm,c,a)}g_aIz(d){for(const[a,b]of d)this.g_aIx(a,b)}g_aIA(){return this.g_arr}g_aIB(){return this.g_aIm}g_aek(){this.g_aIn||(this.g_arr.g_aIC(this.g_aIo),this.g_aIn=!0)}g_adX(){this.g_aIn&&(this.g_arr.g_aID(this.g_aIo),this.g_aIn=!1)}g_KY(){}},window.g_mQ=class{constructor(c,a){this.g_ly=c,this.g_mR=a,this.g_mT=-1,this.g_mU=-Infinity,this.g_mV=()=>this.g_mW(),this.g_mX=!1,this.g_mY=!1}g_m_(b){this.g_mY=!!b}g_nc(){if(-1===this.g_mT){const d=Date.now(),a=d-this.g_mU,b=this.g_mR;a>=b&&this.g_mY?(this.g_mU=d,this.g_nd()):this.g_mT=self.setTimeout(this.g_mV,Math.max(b-a,4))}}g_nd(){this.g_mX=!0,this.g_ly(),this.g_mX=!1}g_lC(){this.g_mX||(this.g_ne(),this.g_mU=Date.now())}g_mW(){this.g_mT=-1,this.g_mU=Date.now(),this.g_nd()}g_ne(){-1!==this.g_mT&&(self.clearTimeout(this.g_mT),this.g_mT=-1)}g_ek(){this.g_ne(),this.g_ly=null,this.g_mV=null}},"use strict",window.g_aIE=class extends g_aIl{constructor(c,a){super(c,a),this.g_aIF=new Map,this.g_aIG=!0,this.g_aIx("create",b=>this.g_aIH(b)),this.g_aIx("destroy",b=>this.g_aII(b)),this.g_aIx("set-visible",b=>this.g_aIJ(b)),this.g_aIx("update-position",b=>this.g_aIK(b)),this.g_aIx("update-state",b=>this.g_aIL(b)),this.g_aIx("focus",b=>this.g_aIM(b)),this.g_aIx("set-css-style",b=>this.g_aIN(b))}g_aIO(b){this.g_aIG=!!b}g_aIP(c,e){this.g_aIx(c,b=>{const a=b.elementId,c=this.g_aIF.get(a);return e(c,b)})}g_aIH(d){const a=d.elementId,b=this.g_aeL(a,d);this.g_aIF.set(a,b),d.isVisible||(b.style.display="none"),this.g_aIG&&document.body.appendChild(b)}g_aeL(){throw new Error("required override")}g_aIQ(){}g_aII(d){const a=d.elementId,b=this.g_aIF.get(a);this.g_aIQ(b),this.g_aIG&&b.parentElement.removeChild(b),this.g_aIF.delete(a)}g_aIR(d,a,b){b||(b={}),b.elementId=a,this.g_aIq(d,b)}g_aIS(d,a,b){b||(b={}),b.elementId=a,this.g_aIu(d,b)}g_aIJ(c){if(this.g_aIG){const a=this.g_aIF.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aIK(d){if(this.g_aIG){const a=this.g_aIF.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aIL(c){const a=this.g_aIF.get(c.elementId);this.g_aIT(a,c)}g_aIT(){throw new Error("required override")}g_aIM(c){const a=this.g_aIF.get(c.elementId);c.focus?a.focus():a.blur()}g_aIN(c){const a=this.g_aIF.get(c.elementId);a.style[c.prop]=c.val}g_aIU(b){return this.g_aIF.get(b)}},"use strict";{function p(e){if(e.g_aIV){const a=document.createElement("script");a.async=!1,a.textContent=e.g_C,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aIW=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aIX=class c{constructor(c){this.g_aIY=c.g_aIZ,this.g_aI_=null,this.g_apm="",this.g_aI$=c.g_aJa,this.g_aJb={},this.g_aJc=null,this.g_aJd=null,this.g_aJe=[],this.g_aJf=null,this.g_ann=null,this.g_arl=null,this.g_anW=-1,this.g_aJg=()=>this.g_aJh(),this.g_aJi=[],this.g_apr=c.g_aJj,b(this.g_apr)&&this.g_aIY&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aIY=!1),this.g_aJk=!1,this.g_aJl=null,this.g_aJm=null,("html5"===this.g_apr||"playable-ad"===this.g_apr)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aIy("runtime","cordova-fetch-local-file",b=>this.g_aJn(b)),this.g_aIy("runtime","create-job-worker",b=>this.g_aJo(b)),"cordova"===this.g_apr?document.addEventListener("deviceready",()=>this.g_ac_(c)):this.g_ac_(c)}g_ek(){this.g_asj(),this.g_aI_&&(this.g_aI_.onmessage=null,this.g_aI_=null),this.g_aJc&&(this.g_aJc.terminate(),this.g_aJc=null),this.g_aJd&&(this.g_aJd.g_ek(),this.g_aJd=null),this.g_ann&&(this.g_ann.parentElement.removeChild(this.g_ann),this.g_ann=null)}g_aJp(){return this.g_ann}g_fe(){return this.g_apm}g_aIv(){return this.g_aIY}g_asY(){return this.g_apr}g_arL(){return a&&"cordova"===this.g_apr}g_asZ(){return a&&b(this.g_apr)}async g_ac_(d){if("playable-ad"===this.g_apr){this.g_aJl=self.c3_base64files,this.g_aJm={},await this.g_aJq();for(let a=0,b=d.g_aJr.length;a<b;++a){const b=d.g_aJr[a].toLowerCase();this.g_aJm.hasOwnProperty(b)?d.g_aJr[a]={g_aIV:!0,g_C:this.g_aJm[b]}:this.g_aJl.hasOwnProperty(b)&&(d.g_aJr[a]=URL.createObjectURL(this.g_aJl[b]))}}if(d.g_aJs)this.g_apm=d.g_aJs;else{const c=location.origin;this.g_apm=("null"===c?"file:///":c)+location.pathname;const a=this.g_apm.lastIndexOf("/");-1!==a&&(this.g_apm=this.g_apm.substr(0,a+1))}if(d.g_aJt)for(const[a,b]of Object.entries(d.g_aJt))this.g_aJb[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aI_=a.port1,this.g_aI_.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aJu(b)),this.g_arl=new self.g_aJv(this),await this.g_arl.g_akv(),this.g_aJw(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aJx(),this.g_aIY?await this.g_aJy(d,a.port2):await this.g_aJz(d,a.port2)}g_aJA(b){return this.g_aJb.hasOwnProperty(b)?this.g_aJb[b]:b.endsWith("/workermain.js")&&this.g_aJb.hasOwnProperty("workermain.js")?this.g_aJb["workermain.js"]:"playable-ad"===this.g_apr&&this.g_aJl.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aJl[b.toLowerCase()]):b}async g_aJB(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_arL()){const a=await this.g_BT(this.g_aI$+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aJw(){if(this.g_asZ()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aJC(b){return{baseUrl:this.g_apm,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_aoz(),projectData:b.g_aJD,previewImageBlobs:window.cr_previewImageBlobs||this.g_aJl,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aJj,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aJE,jobScheduler:this.g_arl.g_aJF(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aI$+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aI$+"opus.wasm.wasm",isiOSCordova:this.g_arL(),isiOSWebView:this.g_asZ(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aJy(e,a){const b=this.g_aJA(e.g_aJG);this.g_aJc=await this.g_aJB(b,this.g_apm,{name:"Runtime"}),this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none";const c=this.g_ann.transferControlToOffscreen();document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aJc.postMessage(Object.assign(this.g_aJC(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aJH||[],engineScripts:e.g_aJr,projectScripts:window.g_aJI,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_arl.g_aJJ()]),this.g_aJe=g.map(b=>new b(this)),this.g_aJK(),self.c3_callFunction=(c,a)=>this.g_aJf.g_Vq(c,a),"preview"===this.g_apr&&(self.goToLastErrorScript=()=>this.g_aIr("runtime","go-to-last-error-script"))}async g_aJz(a,b){this.g_ann=document.createElement("canvas"),this.g_ann.style.display="none",document.body.appendChild(this.g_ann),window.c3canvas=this.g_ann,this.g_aJe=g.map(b=>new b(this)),this.g_aJK();const c=a.g_aJr.map(b=>"string"==typeof b?new URL(b,this.g_apm).toString():b);if(Array.isArray(a.g_aJH)&&c.unshift(...a.g_aJH),await Promise.all(c.map(a=>p(a))),a.g_aJL&&0<a.g_aJL.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aJL.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aJM(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aJM(b),100)}}if("preview"===this.g_apr&&"object"!=typeof self.g_aO.g_aIk)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aJC(a),{isInWorker:!1,messagePort:b,canvas:this.g_ann,runOnStartupFunctions:k});this.g_aJd=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aJd,d)}g_aJM(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aJo(){const b=await this.g_arl.g_aJN();return{outputPort:b,transferables:[b]}}g_aIw(){if(this.g_aIY)throw new Error("not available in worker mode");return this.g_aJd}g_aIr(f,a,b,c,d){this.g_aI_.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aJk?void 0:d)}g_aIt(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aI_.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aJk?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aJO(c);else if("result"===a)this.g_aJP(c);else if("runtime-ready"===a)this.g_aJQ();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aJO(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aJR(c,!1,""+d))}null!==c&&(f&&f.then?f.then(b=>this.g_aJR(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aJR(c,!1,""+d)}):this.g_aJR(c,!0,f))}g_aJR(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aI_.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aJP(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aIy(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aJS(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aJK(){for(const b of this.g_aJe)if("runtime"===b.g_aIB())return void(this.g_aJf=b);throw new Error("cannot find runtime DOM handler")}g_aJu(b){this.g_aIr("debugger","message",b)}g_aJQ(){for(const b of this.g_aJe)b.g_aIp()}static g_aoz(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aJT(){return await this.g_aIt("runtime","get-remote-preview-status-info")}g_aIC(b){this.g_aJi.push(b),this.g_asi()}g_aID(c){const a=this.g_aJi.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aJi.splice(a,1),this.g_aJi.length||this.g_asj()}g_asi(){-1===this.g_anW&&this.g_aJi.length&&(this.g_anW=requestAnimationFrame(this.g_aJg))}g_asj(){-1!==this.g_anW&&(cancelAnimationFrame(this.g_anW),this.g_anW=-1)}g_aJh(){this.g_anW=-1;for(const b of this.g_aJi)b();this.g_asi()}g_aJU(b){this.g_aJf.g_aJU(b)}g_aJV(b){this.g_aJf.g_aJV(b)}g_aJW(){this.g_aJf.g_aJW()}g_aJX(b){this.g_aJf.g_aJX(b)}g_Co(b){return!!d[b]}async g_agk(c){const a=await this.g_aIt("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fZ(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_f_(b){return!this.g_fZ(b)}async g_aJn(c){const a=c.filename;switch(c.as){case"text":return await this.g_BU(a);case"buffer":return await this.g_BT(a);default:throw new Error("unsupported type");}}g_aJY(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aJZ(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aJ_(e){const a=this.g_aJY();return new Promise((b,c)=>a.checkPermission(this.g_aJZ(a,e),c=>b(!!c.hasPermission),c))}g_aze(e){const a=this.g_aJY();return new Promise((b,c)=>a.requestPermission(this.g_aJZ(a,e),c=>b(!!c.hasPermission),c))}async g_aJ$(c){if("cordova"!==this.g_asY())return!0;if(this.g_arL())return!0;for(const d of c){const b=await this.g_aJ_(d);if(b)continue;const a=await this.g_aze(d);if(!1===a)return!1}return!0}async g_aKa(...b){if(!1===(await this.g_aJ$(b)))throw new Error("Permission not granted")}g_aKb(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BU(b){const a=await this.g_aKb(b);return await q(a)}g_aKc(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aKd(b.filename,b.g_aKe,b.g_aKf)}}g_BT(d){return new Promise((g,b)=>{e.push({filename:d,g_aKe:b=>{f--,this.g_aKc(),g(b)},g_aKf:c=>{f--,this.g_aKc(),b(c)}}),this.g_aKc()})}async g_aKd(c,a,b){try{const b=await this.g_aKb(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aJq(){const d=[];for(const[a,b]of Object.entries(this.g_aJl))d.push(this.g_aKg(a,b));await Promise.all(d)}async g_aKg(d,a){if("object"==typeof a)this.g_aJl[d]=new Blob([a.str],{type:a.type}),this.g_aJm[d]=a.str;else{let b=await this.g_aKh(a);b||(b=this.g_aKi(a)),this.g_aJl[d]=b}}async g_aKh(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aKi(c){const a=this.g_aKj(c);return this.g_aKk(a.data,a.g_gq)}g_aKj(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gq:e,data:h}}g_aKk(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aJx(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aJk=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aIl{constructor(d){super(d,"runtime"),this.g_aKl=!0,this.g_aKm=-1,this.g_aKn="any",this.g_aKo=!1,this.g_aKp=!1,this.g_aKq=null,this.g_aKr=null,this.g_aKs=null,d.g_aIy("canvas","update-size",b=>this.g_aKt(b)),d.g_aIy("runtime","invoke-download",b=>this.g_aKu(b)),d.g_aIy("runtime","raster-svg-image",b=>this.g_aKv(b)),d.g_aIy("runtime","get-svg-image-size",b=>this.g_aKw(b)),d.g_aIy("runtime","set-target-orientation",b=>this.g_aKx(b)),d.g_aIy("runtime","register-sw",()=>this.g_aKy()),d.g_aIy("runtime","post-to-debugger",b=>this.g_aKz(b)),d.g_aIy("runtime","go-to-script",b=>this.g_aKz(b)),d.g_aIy("runtime","before-start-ticking",()=>this.g_aKA()),d.g_aIy("runtime","debug-highlight",b=>this.g_aKB(b)),d.g_aIy("runtime","enable-device-orientation",()=>this.g_aKC()),d.g_aIy("runtime","enable-device-motion",()=>this.g_aKD()),d.g_aIy("runtime","add-stylesheet",b=>this.g_aKE(b)),d.g_aIy("runtime","alert",b=>this.g_aKF(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aJp();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aKG=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_aol()),d.g_asZ()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aKH=new Set,this.g_aKI=new WeakSet,this.g_aKJ=!1}g_aKA(){return"cordova"===this.g_arr.g_asY()?(document.addEventListener("pause",()=>this.g_arn(!0)),document.addEventListener("resume",()=>this.g_arn(!1))):document.addEventListener("visibilitychange",()=>this.g_arn(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aIp(){window.addEventListener("focus",()=>this.g_aKK("window-focus")),window.addEventListener("blur",()=>{this.g_aKK("window-blur",{parentHasFocus:b()}),this.g_aKG=0}),window.addEventListener("fullscreenchange",()=>this.g_aom()),window.addEventListener("webkitfullscreenchange",()=>this.g_aom()),window.addEventListener("mozfullscreenchange",()=>this.g_aom()),window.addEventListener("fullscreenerror",b=>this.g_aon(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aon(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aon(b)),window.addEventListener("keydown",b=>this.g_aKL("keydown",b)),window.addEventListener("keyup",b=>this.g_aKL("keyup",b)),window.addEventListener("dblclick",b=>this.g_aKM("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aKN("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aKO("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aKO("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aKO("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aKP("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aKP("pointermove",b)),window.addEventListener("touchend",b=>this.g_aKP("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aKP("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aKQ("pointerdown",b)),this.g_arr.g_aIv()&&"undefined"!=typeof window.onpointerrawupdate&&self===self.top?(this.g_aKr=new g_mQ(()=>this.g_aKR(),5),this.g_aKr.g_m_(!0),window.addEventListener("pointerrawupdate",b=>this.g_aKS(b))):window.addEventListener("pointermove",b=>this.g_aKQ("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aKQ("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aKQ("pointercancel",b)));const c=()=>this.g_aJW();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aKK(c,a){this.g_aIq(c,a||null,k)}g_aKT(){return Math.max(window.innerWidth,1)}g_aKU(){return Math.max(window.innerHeight,1)}g_aol(){const c=this.g_aKT(),a=this.g_aKU();this.g_aKK("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_arr.g_asZ()&&(-1!==this.g_aKm&&clearTimeout(this.g_aKm),this.g_aKV(c,a,0))}g_aKW(d,a,b){-1!==this.g_aKm&&clearTimeout(this.g_aKm),this.g_aKm=setTimeout(()=>this.g_aKV(d,a,b),48)}g_aKV(f,a,b){const c=this.g_aKT(),d=this.g_aKU();this.g_aKm=-1,c!=f||d!=a?this.g_aKK("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aKW(c,d,b+1)}g_aKx(b){this.g_aKn=b.targetOrientation}g_aKX(){const c=this.g_aKn;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aom(){const b=g_aIX.g_aoz();b&&"any"!==this.g_aKn&&this.g_aKX(),this.g_aIq("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aKT(),innerHeight:this.g_aKU()})}g_aon(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aIq("fullscreenerror",{isFullscreen:g_aIX.g_aoz(),innerWidth:this.g_aKT(),innerHeight:this.g_aKU()})}g_arn(b){b?this.g_arr.g_asj():this.g_arr.g_asi(),this.g_aIq("visibilitychange",{hidden:b})}g_aKL(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aIu(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aKN(c,a){this.g_aIq(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aKM(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aIu(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aKO(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aKG;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aIu(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aKG=e.buttons,this.g_aKM(e.type,e,j)}}g_aKQ(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aKr&&"pointermove"!==d&&this.g_aKr.g_lC();let b=0;if("mouse"===a.pointerType&&(b=this.g_aKG),this.g_aIu(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aKM(b,a,j),this.g_aKG=a.buttons}}g_aKS(b){this.g_aKs=b,this.g_aKr.g_nc()}g_aKR(){this.g_aKQ("pointermove",this.g_aKs),this.g_aKs=null}g_aKP(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aIu(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aKC(){this.g_aKo||(this.g_aKo=!0,window.addEventListener("deviceorientation",b=>this.g_azC(b)))}g_aKD(){this.g_aKp||(this.g_aKp=!0,window.addEventListener("devicemotion",b=>this.g_azD(b)))}g_azC(b){this.g_aIq("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_azD(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aIq("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aKt(d){const a=this.g_aIA(),b=a.g_aJp();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aJw(),this.g_aKl&&(b.style.display="",this.g_aKl=!1)}g_aKu(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aKv(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aKw(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aKE(b){await t(b.url)}g_aJW(){const c=[...this.g_aKH];if(this.g_aKH.clear(),!this.g_aKJ)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aKI.has(d)||this.g_aKH.add(d)})}}g_aJU(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aKI.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aKH.add(c)}a&&a.catch(()=>{this.g_aKI.has(c)||this.g_aKH.add(c)})}g_aJV(b){this.g_aKH.delete(b),this.g_aKI.add(b)}g_aJX(b){this.g_aKJ=!!b}g_aKB(d){const a=d.show;if(!a)return void(this.g_aKq&&(this.g_aKq.style.display="none"));this.g_aKq||(this.g_aKq=document.createElement("div"),this.g_aKq.id="inspectOutline",document.body.appendChild(this.g_aKq));const b=this.g_aKq;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aKy(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aKz(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Vq(c,a){return this.g_aIs("js-invoke-function",{name:c,params:a})}g_aKF(b){alert(b.message)}};g_aIX.g_aJS(n)}{const c=document.currentScript.src;self.g_aJv=class{constructor(a){this.g_aKY=a,this.g_apm=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_atF=Math.min(navigator.hardwareConcurrency||2,16),this.g_aKZ=null,this.g_aK_=[],this.g_atD=null,this.g_aK$=null}async g_akv(){if(this.g_aLa)throw new Error("already initialised");this.g_aLa=!0;const c=this.g_aKY.g_aJA("dispatchworker.js");this.g_aKZ=await this.g_aKY.g_aJB(c,this.g_apm,{name:"DispatchWorker"});const a=new MessageChannel;this.g_atD=a.port1,this.g_aKZ.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aK$=await this.g_aJN()}async g_aJN(){const f=this.g_aK_.length,a=this.g_aKY.g_aJA("jobworker.js"),b=await this.g_aKY.g_aJB(a,this.g_apm,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aKZ.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aK_.push(b),d.port1}g_aJF(){return{inputPort:this.g_atD,outputPort:this.g_aK$,maxNumWorkers:this.g_atF}}g_aJJ(){return[this.g_atD,this.g_aK$]}}}if("use strict",window.C3_IsSupported){const a="undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aIX({g_aIZ:a,g_aJG:"workermain.js",g_aJr:["scripts/c3runtime.js"],g_aJa:"scripts/",g_aJH:[],g_aJj:"html5"})}{const b=class extends g_aIl{constructor(b){super(b,"touch"),this.g_aIx("request-permission",b=>this.g_aLb(b))}async g_aLb(d){const a=d.type;let b=!0;0===a?b=await this.g_aLc():1===a&&(b=await this.g_aLd()),this.g_aIq("permission-result",{type:a,result:b})}async g_aLc(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aLd(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aIX.g_aJS(b)}{function e(b){b.stopPropagation()}const a=class extends g_aIE{constructor(b){super(b,"progress-bar")}g_aeL(a,b){const c=document.createElement("progress");return c.style.position="absolute",c.style.userSelect="none",c.style.webkitUserSelect="none",c.addEventListener("touchstart",e),c.addEventListener("touchmove",e),c.addEventListener("touchend",e),c.addEventListener("mousedown",e),c.addEventListener("mouseup",e),c.addEventListener("click",()=>this.g_aIS("click",a)),c.id=b.id,this.g_aIT(c,b),c}g_aIT(e,a){e.title=a.title;const b=a.value,c=a.max;0<c&&0<=b?(e.max=c,e.value=b):(e.removeAttribute("value"),e.removeAttribute("max"))}};g_aIX.g_aJS(a)}{let e=!1;const d={};{function h(e,b){const c=b.slice(0,-1),a=b[b.length-1];return console.log(e,c),[c,a]}const b=(b,a)=>{d[b]=a},c=c=>new Promise(a=>setTimeout(a,c));let i=null,j=null,f=null;b("CreateBannerAdvert",async(...d)=>{const[b,a]=h("CreateBannerAdvert",d);await c(50),i?a("Banner already exists"):(i="ready",a(null,"Created banner"))}),b("ShowBannerAdvert",async(...d)=>{const[b,a]=h("ShowBannerAdvert",d);await c(50),"ready"==i?(i="shown",a(null,"Showed banner")):a("Banner cannot be shown")}),b("HideBannerAdvert",async(...d)=>{const[b,a]=h("HideBannerAdvert",d);await c(50),"shown"==i?(i=null,a(null,"Hid banner")):a("Banner cannot be hidden")}),b("CreateInterstitialAdvert",async(...d)=>{const[b,a]=h("CreateInterstitialAdvert",d);await c(50),j?a("Intersitial already exists"):(j="ready",a(null,"Created interstitial"))}),b("ShowInterstitialAdvert",async(...d)=>{const[b,a]=h("ShowInterstitialAdvert",d);await c(50),"ready"==j?(j=null,a(null,"Interstitial shown")):a("Cannot show interstitial")}),b("CreateVideoAdvert",async(...d)=>{const[b,a]=h("CreateVideoAdvert",d);await c(50),f?a("Video already exists"):(f="ready",a(null,"Created video"))}),b("ShowVideoAdvert",async(...d)=>{const[b,a]=h("ShowVideoAdvert",d);await c(50),"ready"==f?(f=null,a(null,"[\"example type\", 20]")):a("Cannot show video")}),b("Configure",async(...d)=>{const[b,a]=h("Configure",d);await c(50),a(null,"PERSONALIZED_true")}),b("RequestConsent",async(...d)=>{const[b,a]=h("RequestConsent",d);await c(50),a(null,"PERSONALIZED_true")}),b("SetUserPersonalisation",async(...d)=>{const[b,a]=h("SetUserPersonalisation",d);await c(50),a(null,b[0]+"_true")})}const a=class extends g_aIl{constructor(c){super(c,"advert");const a=c=>[c,a=>this.g_aLe(c,a)];this.g_aIz([a("CreateBannerAdvert"),a("ShowBannerAdvert"),a("HideBannerAdvert"),a("CreateInterstitialAdvert"),a("ShowInterstitialAdvert"),a("CreateVideoAdvert"),a("ShowVideoAdvert"),a("Configure"),a("RequestConsent"),a("SetUserPersonalisation"),a("SetMaxAdContentRating"),a("TagForChildDirectedTreatment"),a("TagForUnderAgeOfConsent")])}g_aLf(){if(window.cordova)return window.cordova.plugins.ConstructAd}async g_aLe(f,b){const c=this.g_aLf();if(!c)throw e||(e=!0,console.warn("The Mobile Advert plugin is not loaded. Please note that it only works in Android or iOS exports")),new Error("advert plugin not loaded");return new Promise((d,a)=>{c[f](...b,(e,b)=>{e?a(e):d(b)})})}};g_aIX.g_aJS(a)}
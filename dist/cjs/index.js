"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=(e,r)=>{const t=e?e.length:0,n=r?r.length:0;if(0===t)return n;if(0===n)return t;const i=new Array(n+1);for(let e=0;e<=n;++e){(i[e]=new Array(t+1))[0]=e}const o=i[0];for(let e=1;e<=t;++e)o[e]=e;for(let o=1;o<=n;++o)for(let n=1;n<=t;++n)r.charAt(o-1)===e.charAt(n-1)?i[o][n]=i[o-1][n-1]:i[o][n]=Math.min(i[o-1][n-1],i[o][n-1],i[o-1][n])+1;return i[n][t]},r=(()=>{if("undefined"==typeof window)return{};const{userAgent:e,platform:r,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(e),i="MacIntel"===r&&t>0&&!window.MSStream;return{mobile:/android/i.test(e)||n||i,safari12:/Version\/12.+Safari/.test(e)}})(),t=async(r,t)=>{r=(e=>{let r=e.toLowerCase();return r=r.replace(/angle \((.+)\)*$/,"$1"),r=r.replace(/\s+([0-9]+gb|direct3d.+$)/g,""),r})(r);const n=t?{adreno:()=>Promise.resolve().then((function(){return require("./m-adreno-40d65e7d.js")})),apple:()=>Promise.resolve().then((function(){return require("./m-apple-7658a948.js")})),"mali-t":()=>Promise.resolve().then((function(){return require("./m-mali-t-a2b6b927.js")})),mali:()=>Promise.resolve().then((function(){return require("./m-mali-d689c16e.js")})),nvidia:()=>Promise.resolve().then((function(){return require("./m-nvidia-2ba9dfa1.js")})),powervr:()=>Promise.resolve().then((function(){return require("./m-powervr-bb55f52e.js")}))}:{intel:()=>Promise.resolve().then((function(){return require("./d-intel-a76ee518.js")})),amd:()=>Promise.resolve().then((function(){return require("./d-amd-e0b39fff.js")})),radeon:()=>Promise.resolve().then((function(){return require("./d-radeon-79915385.js")})),nvidia:()=>Promise.resolve().then((function(){return require("./d-nvidia-b5ee5667.js")})),geforce:()=>Promise.resolve().then((function(){return require("./d-geforce-12c5fd28.js")}))},i=Object.keys(n).find(e=>r.includes(e));if(!i)return[];const o=n[i];if(!o)return[];const a=(await o()).default,s=(e=>{let r=(e=e.replace(/\([^\)]+\)/,"")).match(/[\d]+/);return r||(r=e.match(/(\W|^)([a-zA-Z]{1,3})(\W|$)/g)),r?r.join("").replace(/\W|amd/g,""):""})(r);let l=[];for(let e=0;e<a.length;e++){const r=a[e];r[1]===s&&l.push(r)}l.length||(l=a.filter(e=>e[0].includes(r)));const c=l.length;if(0===c)return[];const[u,,f,d]=c>1?l.map(t=>[t,e(r,t[0])]).sort(([,e],[,r])=>e-r)[0][0]:l[0];return[d?-1:f,u]};exports.getGPUTier=async({mobilePercentiles:e=[0,50,30,20],desktopPercentiles:n=[0,50,30,20],renderer:i,mobile:o=!!r.mobile,glContext:a,failIfMajorPerformanceCaveat:s=!0}={})=>{const l=(e,r,t)=>({tier:e,mobile:o,type:r,model:t});if(!i){const e=a||((e,r=!0)=>{const t={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:r,powerPreference:"high-performance",stencil:!1};e&&delete t.powerPreference;const n=document.createElement("canvas"),i=n.getContext("webgl",t)||n.getContext("experimental-webgl",t);return i instanceof WebGLRenderingContext?i:void 0})(r.safari12,s);if(!e)return l(0,"WEBGL_UNSUPPORTED");i=(e=>{const r=e.getExtension("WEBGL_debug_renderer_info");return r?e.getParameter(r.UNMASKED_RENDERER_WEBGL):void 0})(e)}const[c,u]=await t(i,o);if(void 0===c)return l(1,"FALLBACK");if(-1===c)return l(0,"BLACKLISTED");let f=0;return l((o?e:n).findIndex(e=>(f+=e,c<=f)),"BENCHMARK",u)};
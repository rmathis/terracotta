(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],p=0,l=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-09b7f5de":"baf1b5ef","chunk-2d0ba0bb":"8a49dc64","chunk-2d0f07c6":"3b9151e2","chunk-2d207d1a":"104a1c11","chunk-3c70197a":"44519918","chunk-7336609c":"a9fed235"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-09b7f5de":1,"chunk-3c70197a":1,"chunk-7336609c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-09b7f5de":"1cd6d7b6","chunk-2d0ba0bb":"31d6cfe0","chunk-2d0f07c6":"31d6cfe0","chunk-2d207d1a":"31d6cfe0","chunk-3c70197a":"9196ef73","chunk-7336609c":"06d7ac23"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===r||p===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],p=s.getAttribute("data-href");if(p===r||p===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=i(e);var l=new Error;s=function(t){p.onerror=p.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/app/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=p;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view",{key:e.$route.fullPath})],1)],1)},c=[],o={name:"App",data:function(){return{}}},i=o,u=(n("5c0b"),n("2877")),s=n("6544"),p=n.n(s),l=n("7496"),d=n("f6c4"),m=Object(u["a"])(i,a,c,!1,null,null,null),f=m.exports;p()(m,{VApp:l["a"],VMain:d["a"]});n("d3b7"),n("3ca3"),n("ddb0");var h=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"text-center"},[n("v-col",{staticClass:"mt-10",attrs:{cols:"12"}},[n("v-btn",{on:{click:e.createExperiment}},[e._v("Get Started")])],1)],1)},b=[],v=n("5530"),x=n("2f62"),y={name:"Home",components:{},computed:Object(v["a"])({},Object(x["c"])({pageExperiment:"experiment/pageExperiment"})),methods:Object(v["a"])(Object(v["a"])({},Object(x["b"])({createExperiment:"experiment/createExperiment"})),{},{startExperiment:function(){var e=this;this.createExperiment().then((function(t){console.log("createExperiment | then",{response:t}),e.pageExperiment(t.experiment_id).then((function(t){e.$router.push({name:"ExperimentDesignIntro",params:{experiment_id:t.experiment_id}})})).catch((function(e){console.log("pageExperiment | catch",{response:e})}))})).catch((function(e){console.log("createExperiment | catch",{response:e})}))}})},E=y,k=n("8336"),_=n("62ad"),S=n("0fd9"),O=Object(u["a"])(E,g,b,!1,null,null,null),j=O.exports;p()(O,{VBtn:k["a"],VCol:_["a"],VRow:S["a"]}),r["a"].use(h["a"]);var w=[{path:"/",name:"Home",component:j},{path:"/experiment/:experiment_id",component:function(){return n.e("chunk-2d0ba0bb").then(n.bind(null,"3613"))},children:[{path:"",alias:"design",component:function(){return n.e("chunk-09b7f5de").then(n.bind(null,"7f79"))},meta:{currentSection:"design",currentStep:"design"},children:[{path:"",alias:"intro",name:"ExperimentDesignIntro",component:function(){return n.e("chunk-2d207d1a").then(n.bind(null,"a1c7"))},meta:{currentSection:"design",currentStep:"design"}},{path:"title",name:"ExperimentDesignTitle",component:function(){return n.e("chunk-7336609c").then(n.bind(null,"d301"))},meta:{currentSection:"design",currentStep:"design_title"}},{path:"description",name:"ExperimentDesignDescription",component:function(){return n.e("chunk-2d0f07c6").then(n.bind(null,"9d27"))},meta:{currentSection:"design",currentStep:"design_description"}}]},{path:"participation",component:function(){return n.e("chunk-09b7f5de").then(n.bind(null,"7f79"))},meta:{currentSection:"participation"},children:[]},{path:"assignments",component:function(){return n.e("chunk-09b7f5de").then(n.bind(null,"7f79"))},meta:{currentSection:"assignments"},children:[]},{path:"summary",name:"ExperimentSummary",component:function(){return n.e("chunk-3c70197a").then(n.bind(null,"75c7"))}}]}],T=new h["a"]({base:"/app/",routes:w}),C=T,P=(n("5363"),n("f309"));r["a"].use(P["a"]);var A=new P["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#1D9DFF"}}}}),D=n("688f"),L=n.n(D),I=n("0e44"),M={user:null},N={},B={},J={isLoggedIn:function(e){return e.user}},V={namespaced:!0,state:M,actions:N,mutations:B,getters:J},$={type:null,message:null},F={success:function(e,t){var n=e.commit;n("success",t)},error:function(e,t){var n=e.commit;n("error",t)},clear:function(e,t){var n=e.commit;n("success",t)}},G={success:function(e,t){e.type="alert-success",e.message=t},error:function(e,t){e.type="alert-danger",e.message=t},clear:function(e){e.type=null,e.message=null}},H={namespaced:!0,state:$,actions:F,mutations:G};function R(){return ae.state.account&&ae.state.account.user&&ae.state.account.user.api_token?{Authorization:"Bearer "+ae.state.account.user.api_token,"Content-Type":"application/json"}:{}}n("a4d3"),n("e01a");var q={getAll:U,getById:K,createExperiment:z,update:Q,delete:W};function U(){var e={method:"GET",headers:R()};return fetch("/api/experiments}",e).then(X)}function z(e){console.log("createExperiment",{data:e});var t={method:"POST",headers:Object(v["a"])(Object(v["a"])({},R()),{},{"Content-Type":"application/json"}),body:e?JSON.stringify({deployment:e.parameters.deployment?e.parameters.deployment:null,LMSCourseId:e.parameters.LMSCourseId?e.parameters.LMSCourseId:null,title:e.parameters.title?e.parameters.title:null,description:e.parameters.description?e.parameters.description:null,exposure_type:e.parameters.exposure_type?e.parameters.exposure_type:null,participation_type:e.parameters.participation_type?e.parameters.participation_type:null,distributionType:e.parameters.distributionType?e.parameters.distributionType:null,started:e.parameters.started?e.parameters.started:null,created_at:e.parameters.created_at?e.parameters.created_at:null,updated_at:e.parameters.updated_at?e.parameters.updated_at:null,conditions:e.parameters.conditions?e.parameters.conditions:null}):null};return fetch("/api/experiments",t).then(X)}function K(e){var t={method:"GET",headers:R()};return fetch("/api/experiments/".concat(e),t).then(X)}function Q(e){var t={method:"PUT",headers:Object(v["a"])(Object(v["a"])({},R()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("/api/experiments",t).then(X)}function W(e){var t={method:"DELETE",headers:R()};return fetch("/api/experiments/".concat(e),t).then(X)}function X(e){return e.text().then((function(t){var n=t&&JSON.parse(t);if(!e||!e.ok){if(401===e.status||500===e.status)console.log("handleResponse | 401/500",{response:e});else if(404===e.status)return null;var r=n&&n.message||e.statusText;return Promise.reject(r)}return n})).catch((function(e){console.log("handleResponse | catch",{response:e})}))}var Y={experiment:null,experiments:null,newExperiment:null},Z={resetExperiment:function(e){var t=e.commit;t("setExperiment",{})},createExperiment:function(){return q.createExperiment()}},ee={setExperiment:function(e,t){e.experiment=t}},te={pageExperiment:function(e,t){var n=e.commit,r=e.state;t||(t=r.experiment.experiment_id),q.getById(t).then((function(e){n("setExperiment",e)})).catch((function(e){console.log({response:e})}))}},ne={namespaced:!0,state:Y,actions:Z,mutations:ee,getters:te};r["a"].use(x["a"]);var re=new x["a"].Store({plugins:[Object(I["a"])({key:"terracotta"})],modules:{account:V,alert:H,experiment:ne}}),ae=re;r["a"].use(L.a,{router:C}),r["a"].config.productionTip=!1,new r["a"]({store:ae,router:C,vuetify:A,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a7ede5b8.js.map
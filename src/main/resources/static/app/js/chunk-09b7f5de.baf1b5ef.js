(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09b7f5de"],{"132d":function(t,e,n){"use strict";var i,s=n("5530"),r=(n("c96a"),n("caad"),n("2532"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),a=n("a9ad"),o=n("af2b"),c=n("7560"),l=n("80d2"),u=n("2b0e"),p=n("58df");function h(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var f=Object(p["a"])(r["a"],a["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["o"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["l"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(l["d"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(s["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(s["a"])(Object(s["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(s["a"])(Object(s["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),s="material-icons",r=t.indexOf("-"),a=r<=-1;a?n.push(t):(s=t.slice(0,r),h(s)&&(s="")),i.class[s]=!0,i.class[t]=!a;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var s=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:f,functional:!0,render:function(t,e){var n=e.data,i=e.children,s="";return n.domProps&&(s=n.domProps.textContent||n.domProps.innerHTML||s,delete n.domProps.textContent,delete n.domProps.innerHTML),t(f,n,s?[s]:i)}})},"20f6":function(t,e,n){},4804:function(t,e,n){},"782f":function(t,e,n){"use strict";n("8ae2")},"7f79":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"experiment-steps"},[n("aside",{staticClass:"experiment-steps__sidebar"},[n("steps",{attrs:{"current-section":t.currentSection,"current-step":t.currentStep}})],1),n("nav",[t.$routerHistory.hasPrevious()?n("router-link",{attrs:{to:{path:t.$routerHistory.previous().path}}},[n("v-icon",[t._v("mdi-chevron-left")]),t._v(" Back ")],1):t._e()],1),n("article",{staticClass:"experiment-steps__body"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"6"}},[n("router-view",{key:t.$route.fullPath})],1)],1)],1)],1)])},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"component-steps"},t._l(t.sectionList,(function(e){return n("li",{key:e.key},[e.key===t.currentSection?[n("strong",[t._v(t._s(e.name))])]:[n("span",[t._v(t._s(e.name))])],e.key===t.currentSection?n("v-stepper",{attrs:{vertical:""}},t._l(e.steps,(function(i){return n("v-stepper-step",{key:i.key,attrs:{complete:e.steps.findIndex((function(t,e){return t.key===i.key}))<=t.currentStepNum,step:""}},[t._v(" "+t._s(i.name)+" ")])})),1):t._e()],2)})),0)},a=[],o=(n("c740"),n("4de4"),{name:"Steps",props:["currentSection","currentStep"],computed:{currentStepNum:function(){var t=this;return this.sectionList.filter((function(e){return e.key===t.currentSection}))[0].steps.findIndex((function(e){return e.key===t.currentStep}))}},data:function(){return{sectionList:[{key:"design",name:"Section 1: Design",steps:[{key:"design_title",name:"Title"},{key:"design_description",name:"Description"},{key:"design_conditions",name:"Conditions"},{key:"design_experiment",name:"Experiment type"}]},{key:"participation",name:"Section 2: Participation",steps:[{key:"design_title",name:"Title"}]},{key:"assignments",name:"Section 3: Assignments",steps:[{key:"design_title",name:"Title"}]}]}}}),c=o,l=(n("f8b9"),n("2877")),u=n("6544"),p=n.n(u),h=n("5530"),d=(n("a9e3"),n("b0c0"),n("8836"),n("3206")),f=n("a452"),v=n("7560"),m=n("58df"),g=n("d9bd"),b=Object(m["a"])(Object(d["b"])("stepper"),f["a"],v["a"]),y=b.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,vertical:Boolean},data:function(){var t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes:function(){return Object(h["a"])({"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(g["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(e){return e!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(e){return e!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t("div",{staticClass:"v-stepper",class:this.classes},this.$slots.default)}}),S=(n("d3b7"),n("25f0"),n("9d26")),k=n("a9ad"),_=n("5607"),x=Object(m["a"])(k["a"],Object(d["a"])("stepper","v-stepper-step","v-stepper")),C=x.extend().extend({name:"v-stepper-step",directives:{ripple:_["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(S["a"],t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}}),$=Object(l["a"])(c,r,a,!1,null,null,null),L=$.exports;p()($,{VStepper:y,VStepperStep:C});var I={name:"ExperimentSteps",data:function(){return{}},computed:{currentSection:function(){return this.$router.currentRoute.meta.currentSection},currentStep:function(){return this.$router.currentRoute.meta.currentStep}},components:{Steps:L}},j=I,O=(n("782f"),n("62ad")),w=n("a523"),V=n("132d"),z=n("0fd9"),B=Object(l["a"])(j,i,s,!1,null,"6592d711",null);e["default"]=B.exports;p()(B,{VCol:O["a"],VContainer:w["a"],VIcon:V["a"],VRow:z["a"]})},8836:function(t,e,n){},"8ae2":function(t,e,n){},"9d26":function(t,e,n){"use strict";var i=n("132d");e["a"]=i["a"]},a452:function(t,e,n){"use strict";var i=n("ade3"),s=n("2b0e");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return s["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(i["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(i["a"])({},t,(function(t){this.internalLazyValue=t}))})}var a=r();e["a"]=a},a523:function(t,e,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var i=n("2b0e");function s(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,s=n.data,r=n.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var a=s.attrs;if(a){s.attrs={};var o=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,r)}})}var r=n("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,s=e.data,a=e.children,o=s.attrs;return o&&(s.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),a)}})},abaf:function(t,e,n){},c740:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").findIndex,r=n("44d2"),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},f8b9:function(t,e,n){"use strict";n("abaf")}}]);
//# sourceMappingURL=chunk-09b7f5de.baf1b5ef.js.map
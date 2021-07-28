(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216fd2"],{c58b:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Create a title for your consent assignment")]),t._m(0),t.experiment&&t.consent?n("form",{staticClass:"my-5",on:{submit:function(e){return e.preventDefault(),t.saveTitle("ParticipationTypeConsentFile")}}},[n("v-text-field",{attrs:{rules:t.rules,label:"Assignment title",placeholder:"e.g. Lorem ipsum",autofocus:"",outlined:"",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.title||!t.title.trim()||t.title.length>255,elevation:"0",color:"primary",type:"submit"}},[t._v(" Next ")])],1):t._e(),n("v-card",{staticClass:"mt-10 pt-5 px-5 mx-auto blue lighten-5 rounded-lg",attrs:{outlined:""}},[n("p",[n("strong",[t._v("Note:")]),t._v(" Once the assignment is created, you won't be able to change the title.")])])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("This will create an "),n("strong",[t._v("unpublished consent assignment")]),t._v(" in Canvas and will be the way your students will read, review and sign your study’s informed consent. The consent assignment will be a prerequisite for your first study treatment assignments.")])}],r=n("5530"),l=(n("498a"),n("2f62")),o={name:"ParticipationTypeConsentTitle",props:["experiment"],computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])({consent:"consent/consent"})),{},{title:{get:function(){var t,e,n;return""===this.titleProxy?(null===(t=this.experiment)||void 0===t||null===(e=t.consent)||void 0===e?void 0:e.title)||(null===(n=this.consent)||void 0===n?void 0:n.title):this.titleProxy},set:function(t){this.titleProxy=t,this.$store.commit("consent/setConsentTitle",t)}}}),data:function(){return{titleProxy:"",rules:[function(t){return t&&!!t.trim()||"Title is required"},function(t){return(t||"").length<=255||"A maximum of 255 characters is allowed"}]}},methods:{saveTitle:function(t){this.$router.push({name:t,params:{experiment:this.experiment.experimentId}})},saveExit:function(){this.saveTitle("Home")}}},a=o,u=n("2877"),c=n("6544"),m=n.n(c),d=n("8336"),p=n("b0af"),v=n("8654"),h=Object(u["a"])(a,i,s,!1,null,null,null);e["default"]=h.exports;m()(h,{VBtn:d["a"],VCard:p["a"],VTextField:v["a"]})}}]);
//# sourceMappingURL=chunk-2d216fd2.a65ea971.js.map
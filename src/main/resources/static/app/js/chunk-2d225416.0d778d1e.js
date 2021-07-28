(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225416"],{e42c:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.experiment&&e.exposure_id&&e.outcome?r("div",[r("h1",{staticClass:"mb-6"},[e._v(e._s(e.exposure_title))]),r("form",{on:{submit:function(t){return t.preventDefault(),e.saveExit(t)}}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{staticClass:"pb-0 mb-0",attrs:{name:"outcomeTitle",rules:e.rules,label:"Outcome name",autofocus:"",outlined:"",required:""},model:{value:e.outcome.title,callback:function(t){e.$set(e.outcome,"title",t)},expression:"outcome.title"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{type:"number",name:"outcomeMaxPoints",label:"Total Points",outlined:"",required:""},model:{value:e.outcome.maxPoints,callback:function(t){e.$set(e.outcome,"maxPoints",t)},expression:"outcome.maxPoints"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-simple-table",{staticClass:"mb-9 v-data-table--light-header",scopedSlots:e._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[e._v("Student Name")]),r("th",{staticClass:"text-left",attrs:{width:"250"}},[e._v("Numeric Score")])])]),r("tbody",e._l(e.participants,(function(t){return r("tr",{key:t.participantId},[r("td",[e._v(e._s(t.user.displayName))]),e.participantScoreList.length?r("td",[r("v-text-field",{staticStyle:{"max-width":"50px"},attrs:{type:"number",name:t.participantId,placeholder:"---",required:""},model:{value:e.participantScoreList.filter((function(r){return r.participantId===t.participantId&&r.experimentId===e.experiment_id}))[0].scoreNumeric,callback:function(r){e.$set(e.participantScoreList.filter((function(r){return r.participantId===t.participantId&&r.experimentId===e.experiment_id}))[0],"scoreNumeric",r)},expression:"participantScoreList.filter(psl=>psl.participantId===participant.participantId && psl.experimentId===experiment_id)[0].scoreNumeric"}})],1):e._e()])})),0)]},proxy:!0}],null,!1,1225340872)})],1)],1)],1)]):e._e()},o=[],c=r("1da1"),n=r("5530"),a=(r("96cf"),r("4de4"),r("d81d"),r("498a"),r("2f62")),u={name:"OutcomeScoring",computed:Object(n["a"])(Object(n["a"])({},Object(a["c"])({experiment:"experiment/experiment",exposures:"exposures/exposures",outcome:"outcome/outcome",outcomeScores:"outcome/outcomeScores",participants:"participants/participants"})),{},{exposure_id:function(){return parseInt(this.$route.params.exposure_id)},exposure_title:function(){var e=this;return this.exposures.filter((function(t){return t.exposureId===e.exposure_id}))[0].title},experiment_id:function(){return parseInt(this.$route.params.experiment_id)},outcome_id:function(){return parseInt(this.$route.params.outcome_id)},participantScoreList:function(){var e=this,t=[];return this.participants.map((function(r){var i=e.outcomeScores.filter((function(e){return e.participantId===r.participantId}))[0],o={experimentId:e.experiment_id,participantId:r.participantId,scoreNumeric:0};"undefined"!==typeof i&&(o.outcomeScoreId=null===i||void 0===i?void 0:i.outcomeScoreId,o.outcomeId=null===i||void 0===i?void 0:i.outcomeId,o.scoreNumeric=parseInt(null===i||void 0===i?void 0:i.scoreNumeric)),t.push(o)})),t}}),data:function(){return{rules:[function(e){return e&&!!e.trim()||"required"},function(e){return(e||"").length<=255||"A maximum of 255 characters is allowed"}],titleProxy:""}},methods:Object(n["a"])(Object(n["a"])({},Object(a["b"])({fetchParticipants:"participants/fetchParticipants",fetchOutcomeById:"outcome/fetchOutcomeById",fetchOutcomeScores:"outcome/fetchOutcomeScores",updateOutcome:"outcome/updateOutcome",updateOutcomeScores:"outcome/updateOutcomeScores"})),{},{saveExit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateOutcome([e.experiment_id,e.exposure_id,e.outcome]);case 2:return t.next=4,e.updateOutcomeScores([e.experiment_id,e.exposure_id,e.outcome_id,e.participantScoreList]);case 4:e.$router.push({name:e.$router.currentRoute.meta.previousStep});case 5:case"end":return t.stop()}}),t)})))()}}),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchOutcomeById([e.experiment_id,e.exposure_id,e.outcome_id]);case 2:return t.next=4,e.fetchParticipants(e.experiment_id);case 4:return t.next=6,e.fetchOutcomeScores([e.experiment_id,e.exposure_id,e.outcome_id]);case 6:case"end":return t.stop()}}),t)})))()}},s=u,p=r("2877"),m=r("6544"),d=r.n(m),l=r("62ad"),x=r("0fd9"),f=r("1f4f"),h=r("8654"),v=Object(p["a"])(s,i,o,!1,null,null,null);t["default"]=v.exports;d()(v,{VCol:l["a"],VRow:x["a"],VSimpleTable:f["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=chunk-2d225416.0d778d1e.js.map
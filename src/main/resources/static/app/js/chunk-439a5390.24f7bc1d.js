(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-439a5390"],{"0393":function(e,t,n){"use strict";var s=n("5530"),i=(n("0481"),n("210b"),n("604c")),a=n("d9bd");t["a"]=i["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(a["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(a["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),s=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(s)}}})},"210b":function(e,t,n){},"49e2":function(e,t,n){"use strict";var s=n("0789"),i=n("9d65"),a=n("a9ad"),o=n("3206"),r=n("80d2"),c=n("58df"),l=Object(c["a"])(i["a"],a["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=l.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(s["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(r["r"])(t))])]})))}})},"4c59":function(e,t,n){e.exports=n.p+"img/assignments_summary.eabbe194.svg"},"5a4e":function(e,t,n){e.exports=n.p+"img/all_conditions.c4f6b74f.svg"},6062:function(e,t,n){"use strict";var s=n("6d61"),i=n("6566");e.exports=s("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},"6a64":function(e,t,n){},"73dd":function(e,t,n){},"75c7":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.experiment?s("v-container",[s("v-row",{staticClass:"my-1",attrs:{justify:"space-between"}},[s("v-col",{attrs:{cols:"8"}},[s("p",{staticClass:"header ma-0 pa-0"},[s("v-img",{staticClass:"mr-6",attrs:{src:n("9fbd"),alt:"Terracotta Logo","max-height":"30","max-width":"27"}}),s("span",[e._v(e._s(e.experiment.title))])],1)])],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-divider"),s("v-tabs",{attrs:{elevation:"0"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return s("v-tab",{key:t},[e._v(" "+e._s(t)+" ")])})),1),s("v-divider",{staticClass:"mb-6"}),s("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return s("v-tab-item",{key:t,staticClass:"py-3"},["status"===t?[s("experiment-summary-status",{attrs:{experiment:e.experiment}})]:e._e(),"setup"===t?[s("v-card",{staticClass:"pt-5 px-5 mx-auto blue lighten-5 rounded-lg",attrs:{outlined:""}},[s("p",{staticClass:"pb-0"},[s("strong",[e._v("Note:")]),e._v(" You are currently collecting assignment submissions. Some setup functionality may be disabled to not disrupt the experiment. ")])]),s("v-expansion-panels",{staticClass:"mt-5 v-expansion-panels--icon",attrs:{flat:""}},e._l(e.setupPanels,(function(t){return s("v-expansion-panel",{key:t.title},[s("v-expansion-panel-header",[s("div",{staticClass:"panel-overview"},[s("div",{staticClass:"a1"},[s("v-img",{staticClass:"mr-6",attrs:{src:t.image,alt:t.title,"min-height":"55","min-width":"50"}})],1),s("div",{staticClass:"panelInformation"},[s("h2",[e._v(e._s(t.title))]),s("span",[e._v(e._s(t.description))])])])]),s("v-expansion-panel-content",[s("table",e._l(e.sectionValuesMap[t.title],(function(t){return s("tr",{key:t.title,staticClass:"tableRow"},[s("td",{staticClass:"leftData col-4"},[[s("div",{staticClass:"detail"},[s("span",{staticClass:"heading"},[e._v(e._s(t.title))]),s("a",{on:{click:function(n){return e.handleEdit(t.editSection)}}},[e._v("EDIT")])])]],2),s("td",{staticClass:"col-7 rightData"},["string"===t.type?[e._v(" "+e._s(t.description)+" ")]:e._e(),"array"===t.type?e._l(t.description,(function(t,n){return s("label",{key:t.conditionId,staticClass:"text-left conditionLabel",attrs:{for:"condition-"+t.conditionId}},[s("span",{staticClass:"conditionName"},[e._v("Condition "+e._s(n+1))]),s("br"),s("span",[e._v(e._s(t.name))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.defaultCondition,expression:"condition.defaultCondition"}],staticClass:"rounded-pill px-3 py-1 primary ml-3 defaultPill"},[s("v-icon",[e._v("mdi-check")]),s("span",[e._v("Default")])],1)])})):e._e(),"constant"===t.type?["WITHIN"===t.description?[s("img",{staticClass:"constantImage mb-2",attrs:{src:n("5a4e"),alt:"all conditions"}}),s("span",{staticClass:"conditionType mb-2"},[e._v("All conditions")]),s("p",{staticClass:"conditionDetail"},[e._v(" All students are exposed to every condition, in different orders. This way you can compare how the different conditions affected each individual student. This is called a within-subject design. ")])]:e._e(),"BETWEEN"===t.description?[s("img",{staticClass:"constantImage mb-2",attrs:{src:n("9778"),alt:"one conditions"}}),s("span",{staticClass:"conditionType mb-2"},[e._v("Only one condition")]),s("p",{staticClass:"conditionDetail"},[e._v(" Each student is only exposed to one condition, so that you can compare how the different conditions affected different students. This is called a between-subjects design. ")])]:e._e()]:e._e(),"assignments"===t.type?[e._l(e.exposures,(function(t,n){return[s("div",{key:t.exposureId,staticClass:"assignmentExpansion"},[s("span",{staticClass:"exposureSetName"},[e._v(" Exposure Set "+e._s(n+1)+" ")]),s("br"),e._l(e.sortedGroups(t.groupConditionList),(function(n){return s("div",{key:n.groupId,staticClass:"groupNames"},[e._v(" "+e._s(n)+" will receive "),s("v-chip",{key:n.groupName+n.conditionName,staticClass:"ma-2",attrs:{color:"primary",label:""}},[e._v(" "+e._s(e.groupNameConditionMapping(t.groupConditionList)[n]))])],1)})),s("v-expansion-panels",{staticClass:"v-expansion-panels--outlined",attrs:{flat:""}},e._l(e.assignments.filter((function(e){return e.exposureId===t.exposureId})),(function(t){return s("v-expansion-panel",{key:t.assignmentId},[s("v-expansion-panel-header",[e._v(" "+e._s(t.title)+" ("+e._s(t.treatments&&t.treatments.length||0)+"/"+e._s(e.conditions.length||0)+") ")]),s("v-expansion-panel-content",[s("v-list",{staticClass:"pa-0"},e._l(e.conditions,(function(n){return s("v-list-item",{key:n.conditionId,staticClass:"justify-center px-0"},[s("v-list-item-content",[s("p",{staticClass:"ma-0 pa-0 assignmentConditionName"},[e._v(" "+e._s(n.name)+" ")])]),s("v-list-item-action",[e.hasTreatment(n.conditionId,t.assignmentId)?[s("v-btn",{attrs:{icon:"",outlined:"",text:"",tile:""},on:{click:function(s){return e.goToBuilder(n.conditionId,t.assignmentId)}}},[s("v-icon",[e._v("mdi-pencil")])],1)]:[s("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(s){return e.goToBuilder(n.conditionId,t.assignmentId)}}},[e._v("Select ")])]],2)],1)})),1)],1)],1)})),1)],2)]}))]:e._e(),"participation"===t.type?["CONSENT"===t.description?[e._v(" Informed Consent "),s("br"),e._v(" "+e._s(e.experiment.consent.title)+" ")]:"MANUAL"===t.description?[e._v(" Manual "),s("br"),s("span",[e._v(e._s(e.experiment.acceptedParticipants)+" students selected to participate out of "+e._s(e.experiment.potentialParticipants)+" students enrolled ")])]:[e._v(" Include All Students "),s("br"),s("span",[e._v(e._s(e.experiment.potentialParticipants)+" students selected to participate out of "+e._s(e.experiment.potentialParticipants)+" students enrolled ")])]]:e._e()],2)])})),0)])],1)})),1)]:e._e()],2)})),1)],1)],1)],1):s("v-container",[e._v(" no experiment ")])],1)},i=[],a=n("b85c"),o=n("1da1"),r=n("5530"),c=(n("96cf"),n("a4d3"),n("e01a"),n("7db0"),n("d81d"),n("b0c0"),n("4360")),l=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"experiment-summary-status"},[e.experiment?[n("h1",[e._v("Experiment Status")]),n("p",[e._v("Once your experiment is running, you will see status updates below")]),e.experiment.consent?n("v-expansion-panels",{staticClass:"v-expansion-panels--outlined mb-7",attrs:{flat:""}},[n("v-expansion-panel",{staticClass:"py-3"},[n("v-expansion-panel-header",[n("strong",[e._v("Consent")])]),n("v-expansion-panel-content",[n("v-simple-table",{staticClass:"mb-9 v-data-table--no-outline v-data-table--light-header",scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("Assignment Name")]),n("th",{staticClass:"text-left"},[e._v("Status")]),n("th",{staticClass:"text-left"},[e._v("Submissions")])])]),n("tbody",[n("tr",[n("td",[e._v(e._s(e.experiment.consent.title))]),n("td",[n("span",{staticClass:"completion-status",class:{complete:e.experiment.consent.answeredConsentCount>=e.experiment.consent.expectedConsent&&e.experiment.consent.answeredConsentCount>0}},[e._v(e._s(e.experiment.consent.answeredConsentCount>=e.experiment.consent.expectedConsent&&e.experiment.consent.answeredConsentCount>0?"Complete":"In Progress"))])]),n("td",[e._v(e._s(e.experiment.consent.answeredConsentCount)+"/"+e._s(e.experiment.consent.expectedConsent))])])])]},proxy:!0}],null,!1,2022742315)})],1)],1)],1):e._e(),e._l(e.exposures,(function(t,s){return n("v-expansion-panels",{key:s,staticClass:"v-expansion-panels--outlined mb-7",attrs:{flat:""}},[n("v-expansion-panel",{staticClass:"py-3"},[n("v-expansion-panel-header",[n("strong",[e._v(e._s(t.title))])]),n("v-expansion-panel-content",[n("h4",{staticClass:"mb-3"},[n("strong",[e._v("Assignments")])]),n("v-simple-table",{staticClass:"mb-9 v-data-table--no-outline v-data-table--light-header",scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("Assignment Name")]),n("th",{staticClass:"text-left"},[e._v("Status")]),n("th",{staticClass:"text-left"},[e._v("Submissions")])])]),n("tbody",e._l(e.assignments.filter((function(e){return e.exposureId===t.exposureId})),(function(t){return n("tr",{key:t.assignmentId},[n("td",[e._v(e._s(t.title))]),n("td",[n("span",{staticClass:"completion-status",class:{complete:e.assignmentCompletion.find((function(e){return e.assignmentId===t.assignmentId})).complete}},[e._v(" "+e._s(e.assignmentCompletion.find((function(e){return e.assignmentId===t.assignmentId})).complete?"Complete":"In Progress")+" ")])]),n("td",[e._v(" "+e._s(e.assignmentCompletion&&e.assignmentCompletion.find((function(e){return e.assignmentId===t.assignmentId})).submissionsCompleted||0)+" / "+e._s(e.assignmentCompletion&&e.assignmentCompletion.find((function(e){return e.assignmentId===t.assignmentId})).submissionsExpected||0)+" ")])])})),0)]},proxy:!0}],null,!0)}),n("h4",{staticClass:"mb-3"},[n("strong",[e._v("Outcomes")])]),e.experimentOutcomes.length?n("v-simple-table",{staticClass:"mb-9 v-data-table--no-outline v-data-table--light-header",scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("Outcome Name")]),n("th",{staticClass:"text-left"},[e._v("Source")]),n("th",{staticClass:"text-left"},[e._v("Actions")])])]),n("tbody",e._l(e.experimentOutcomes,(function(s){return n("tr",{key:s.outcomeId},[s.title?[n("td",[e._v(e._s(s.title))])]:[n("td",[n("em",[e._v("Outcome with no title")])])],s.external?[n("td",[e._v("Gradebook")])]:[n("td",[e._v("Manual Entry")])],n("td",[n("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[n("v-icon",e._g(e._b({attrs:{color:"black"}},"v-icon",i,!1),s),[e._v(" mdi-dots-horizontal ")])]}}],null,!0)},[n("v-list",{staticClass:"text-left"},[n("v-list-item",{on:{click:function(n){return e.handleDeleteOutcome(t.exposureId,s.outcomeId)}}},[n("v-list-item-title",[e._v("Delete Outcome")])],1)],1)],1)],1)],2)})),0)]},proxy:!0}],null,!0)}):e._e(),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({attrs:{outlined:"",color:"primary"}},"v-btn",i,!1),s),[e._v(" Add Outcome ")])]}}],null,!0)},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.console.log("Select item from gradebook")}}},[n("v-list-item-title",[e._v("Select item from gradebook")])],1),n("v-list-item",{on:{click:function(n){return e.handleCreateOutcome(t.exposureId)}}},[n("v-list-item-title",[e._v("Manually enter scores for each student")])],1)],1)],1)],1)],1)],1)}))]:[e._v(" no experiment ")]],2)},p=[],d=n("2909"),m=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),{name:"ExperimentSummaryStatus",props:["experiment"],computed:Object(r["a"])(Object(r["a"])({experiment_id:function(){return parseInt(this.experiment.experimentId)}},Object(l["c"])({assignments:"assignment/assignments",conditions:"experiment/conditions",exposures:"exposures/exposures",experimentOutcomes:"outcome/experimentOutcomes"})),{},{assignmentCompletion:function(){var e,t=[],n=Object(a["a"])(this.assignments);try{for(n.s();!(e=n.n()).done;){var s,i,o=e.value,r=!1,c={submissionsExpectedCount:0,submissionsCompletedCount:0,submissionsInProgressCount:0};if((null===(s=o.treatments)||void 0===s?void 0:s.length)>1)c=o.treatments.reduce((function(e,t){var n,s,i,a,o,r;return{submissionsExpectedCount:(null===e||void 0===e||null===(n=e.assessmentDto)||void 0===n?void 0:n.submissionsExpected)+(null===t||void 0===t||null===(s=t.assessmentDto)||void 0===s?void 0:s.submissionsExpected)||0,submissionsCompletedCount:(null===e||void 0===e||null===(i=e.assessmentDto)||void 0===i?void 0:i.submissionsCompletedCount)+(null===t||void 0===t||null===(a=t.assessmentDto)||void 0===a?void 0:a.submissionsCompletedCount)||0,submissionsInProgressCount:(null===e||void 0===e||null===(o=e.assessmentDto)||void 0===o?void 0:o.submissionsInProgressCount)+(null===t||void 0===t||null===(r=t.assessmentDto)||void 0===r?void 0:r.submissionsInProgressCount)||0}}));else if(1===(null===(i=o.treatments)||void 0===i?void 0:i.length)){var l,u,p;c={submissionsExpectedCount:(null===(l=o.treatments[0].assessmentDto)||void 0===l?void 0:l.submissionsExpected)||0,submissionsCompletedCount:(null===(u=o.treatments[0].assessmentDto)||void 0===u?void 0:u.submissionsCompletedCount)||0,submissionsInProgressCount:(null===(p=o.treatments[0].assessmentDto)||void 0===p?void 0:p.submissionsInProgressCount)||0}}c.submissionsCompleted>=c.submissionsExpected&&c.submissionsCompleted>0&&(r=!0),t.push({assignmentId:o.assignmentId,submissionsCompleted:c.submissionsCompletedCount,submissionsExpected:c.submissionsExpectedCount,submissionsInProgress:c.submissionsInProgressCount,complete:r})}}catch(d){n.e(d)}finally{n.f()}return t}}),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["d"])({resetAssignments:"assignment/resetAssignments"})),Object(l["b"])({fetchAssignmentsByExposure:"assignment/fetchAssignmentsByExposure",fetchExposures:"exposures/fetchExposures",fetchOutcomesByExperimentId:"outcome/fetchOutcomesByExperimentId",createOutcome:"outcome/createOutcome",deleteOutcome:"outcome/deleteOutcome"})),{},{handleCreateOutcome:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.createOutcome([t.experiment_id,e,"",0,!1]);case 3:s=n.sent,t.$router.push({name:"OutcomeScoring",params:{exposure_id:e,outcome_id:s.outcomeId}}),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.error({error:n.t0});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},handleDeleteOutcome:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,n.deleteOutcome([n.experiment_id,e,t]);case 2:n.fetchOutcomesByExperimentId([n.experiment_id,Object(d["a"])(new Set(n.exposures.map((function(e){return e.exposureId}))))]);case 3:case"end":return s.stop()}}),s)})))()}}),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.resetAssignments();case 2:return t.next=4,e.fetchExposures(e.experiment_id);case 4:n=Object(a["a"])(e.exposures),t.prev=5,n.s();case 7:if((s=n.n()).done){t.next=14;break}return i=s.value,o=!0,t.next=12,e.fetchAssignmentsByExposure([e.experiment_id,i.exposureId,o]);case 12:t.next=7;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](5),n.e(t.t0);case 19:return t.prev=19,n.f(),t.finish(19);case 22:e.fetchOutcomesByExperimentId([e.experiment_id,Object(d["a"])(new Set(e.exposures.map((function(e){return e.exposureId}))))]);case 23:case"end":return t.stop()}}),t,null,[[5,16,19,22]])})))()}}),v=m,x=(n("cda6"),n("2877")),h=n("6544"),f=n.n(h),b=n("8336"),g=n("cd55"),_=n("49e2"),C=n("c865"),y=n("0393"),I=n("132d"),O=n("8860"),w=n("da13"),k=n("5d23"),E=n("e449"),j=n("1f4f"),A=Object(x["a"])(v,u,p,!1,null,"33a56168",null),D=A.exports;f()(A,{VBtn:b["a"],VExpansionPanel:g["a"],VExpansionPanelContent:_["a"],VExpansionPanelHeader:C["a"],VExpansionPanels:y["a"],VIcon:I["a"],VList:O["a"],VListItem:w["a"],VListItemTitle:k["b"],VMenu:E["a"],VSimpleTable:j["a"]});var P={name:"ExperimentSummary",components:{ExperimentSummaryStatus:D},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])({experiment:"experiment/experiment",conditions:"experiment/conditions",exposures:"exposures/exposures",assignments:"assignment/assignments"})),{},{sectionValuesMap:function(){return{Design:this.designDetails,Participants:this.participantDetails,Assignments:this.assignmentDetails}},designDetails:function(){return[{title:"Experiment Title",description:this.experiment.title,editSection:"ExperimentDesignTitle",type:"string"},{title:"Description",description:this.experiment.description,editSection:"ExperimentDesignDescription",type:"string"},{title:"Conditions",description:this.experiment.conditions,editSection:"ExperimentDesignConditions",type:"array"},{title:"Experiment Type",description:this.experiment.exposureType,editSection:"ExperimentDesignType",type:"constant"}]},participantDetails:function(){return[{title:"SelectionMethod",description:this.experiment.participationType,editSection:"ExperimentParticipationSelectionMethod",type:"participation"}]},assignmentDetails:function(){return[{title:"Your Assignments",description:this.getAssignmentDetails(),editSection:"AssignmentExposureSets",type:"assignments"}]}}),data:function(){return{tab:null,items:["status","setup"],setupPanels:[{title:"Design",description:"The basic design of your experiment",image:n("dac9")},{title:"Participants",description:"How students in your class become participants in your experiment",image:n("fe06")},{title:"Assignments",description:"All experiment assignments",image:n("4c59")}],conditionTreatments:{}}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])({fetchExposures:"exposures/fetchExposures",checkTreatment:"treatment/checkTreatment",createTreatment:"treatment/createTreatment",createAssessment:"assessment/createAssessment"})),{},{handleEdit:function(e){this.$router.push({name:e})},getAssignmentDetails:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchExposures(e.experiment.experimentId);case 2:return t.abrupt("return",e.exposures);case 3:case"end":return t.stop()}}),t)})))()},hasTreatment:function(e,t){var n=this.conditionTreatments[+e];return void 0!==(null===n||void 0===n?void 0:n.find((function(e){return e.assignmentId===t})))},handleCreateTreatment:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,n.createTreatment([n.experiment.experimentId,e,t]);case 3:return s.abrupt("return",s.sent);case 6:s.prev=6,s.t0=s["catch"](0),console.error("handleCreateTreatment | catch",{error:s.t0});case 9:case"end":return s.stop()}}),s,null,[[0,6]])})))()},handleCreateAssessment:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,n.createAssessment([n.experiment.experimentId,e,t.treatmentId]);case 3:return s.abrupt("return",s.sent);case 6:s.prev=6,s.t0=s["catch"](0),console.error("handleCreateAssessment | catch",{error:s.t0});case 9:case"end":return s.stop()}}),s,null,[[0,6]])})))()},goToBuilder:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var i,a,o,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,n.handleCreateTreatment(e,t);case 2:return o=s.sent,s.next=5,n.handleCreateAssessment(e,null===o||void 0===o?void 0:o.data);case 5:if(r=s.sent,o&&r){s.next=9;break}return n.$swal("There was a problem creating your assessment"),s.abrupt("return",!1);case 9:n.$router.push({name:"TerracottaBuilder",params:{experiment_id:n.experiment.experimentId,condition_id:e,treatment_id:null===o||void 0===o||null===(i=o.data)||void 0===i?void 0:i.treatmentId,assessment_id:null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.assessmentId}});case 10:case"end":return s.stop()}}),s)})))()},groupNameConditionMapping:function(e){var t={};return null===e||void 0===e||e.map((function(e){return t[e.groupName]=e.conditionName})),t},sortedGroups:function(e){var t=null===e||void 0===e?void 0:e.map((function(e){return e.groupName}));return null===t||void 0===t?void 0:t.sort()}}),created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tab="ExperimentSummary"===e.$router.currentRoute.name?1:0,t.next=3,e.fetchExposures(e.experiment.experimentId);case 3:n=Object(a["a"])(e.conditions),t.prev=4,n.s();case 6:if((s=n.n()).done){t.next=14;break}return i=s.value,t.next=10,e.checkTreatment([e.experiment.experimentId,i.conditionId,e.assignments[0].assignmentId]);case 10:o=t.sent,e.conditionTreatments[i.conditionId]=null===o||void 0===o?void 0:o.data;case 12:t.next=6;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](4),n.e(t.t0);case 19:return t.prev=19,n.f(),t.finish(19);case 22:e.getAssignmentDetails();case 23:case"end":return t.stop()}}),t,null,[[4,16,19,22]])})))()},beforeRouteEnter:function(e,t,n){return c["a"].dispatch("experiment/fetchExperimentById",e.params.experiment_id).then(n,n)},beforeRouteUpdate:function(e,t,n){return c["a"].dispatch("experiment/fetchExperimentById",e.params.experiment_id).then(n,n)}},T=P,S=(n("a479"),n("b0af")),V=n("cc20"),B=n("62ad"),R=n("a523"),N=n("ce7e"),$=n("adda"),M=n("1800"),L=n("0fd9"),H=n("71a3"),G=n("c671"),z=n("fe57"),J=n("aac8"),U=Object(x["a"])(T,s,i,!1,null,"0bbef805",null);t["default"]=U.exports;f()(U,{VBtn:b["a"],VCard:S["a"],VChip:V["a"],VCol:B["a"],VContainer:R["a"],VDivider:N["a"],VExpansionPanel:g["a"],VExpansionPanelContent:_["a"],VExpansionPanelHeader:C["a"],VExpansionPanels:y["a"],VIcon:I["a"],VImg:$["a"],VList:O["a"],VListItem:w["a"],VListItemAction:M["a"],VListItemContent:k["a"],VRow:L["a"],VTab:H["a"],VTabItem:G["a"],VTabs:z["a"],VTabsItems:J["a"]})},9778:function(e,t,n){e.exports=n.p+"img/one_condition.861bd905.svg"},"9fbd":function(e,t,n){e.exports=n.p+"img/terracotta_logo_mark.15bd96f0.svg"},a479:function(e,t,n){"use strict";n("6a64")},c865:function(e,t,n){"use strict";var s=n("5530"),i=n("0789"),a=n("9d26"),o=n("a9ad"),r=n("3206"),c=n("5607"),l=n("80d2"),u=n("58df"),p=Object(u["a"])(o["a"],Object(r["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=p.extend().extend({name:"v-expansion-panel-header",directives:{ripple:c["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(l["r"])(this,"actions")||[this.$createElement(a["a"],this.expandIcon)];return this.$createElement(i["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(s["a"])(Object(s["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(l["r"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,n){"use strict";var s=n("5530"),i=n("4e82"),a=n("3206"),o=n("80d2"),r=n("58df");t["a"]=Object(r["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(a["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(s["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["r"])(this))}})},cda6:function(e,t,n){"use strict";n("73dd")},dac9:function(e,t,n){e.exports=n.p+"img/design_summary.59788b7b.svg"},fe06:function(e,t,n){e.exports=n.p+"img/participants_summary.f68e5632.svg"}}]);
//# sourceMappingURL=chunk-439a5390.24f7bc1d.js.map
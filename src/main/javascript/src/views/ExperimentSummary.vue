<template>
  <div>
    <v-container v-if="experiment">
      <v-row class="my-1" justify="space-between">
        <v-col cols="8">
          <p class="header ma-0 pa-0">
            <v-img
              src="@/assets/terracotta_logo_mark.svg"
              class="mr-6"
              alt="Terracotta Logo"
              max-height="30"
              max-width="27"
            />
            <span>{{ experiment.title }}</span>
          </p>
        </v-col>
        <div class="header ma-0 pa-0">
          <v-btn color="primary" elevation="0" @click="exportData()"
            >Export Data</v-btn
          >
          <v-btn
            color="primary"
            elevation="0"
            class="saveButton ml-4"
            @click="saveExit()"
            >SAVE & CLOSE</v-btn
          >
        </div>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-divider></v-divider>
          <v-tabs v-model="tab" elevation="0">
            <v-tab v-for="item in setupTabs" :key="item.tab">
              {{ item.tab }}
            </v-tab>
          </v-tabs>
          <v-divider class=""></v-divider>
          <v-tabs-items v-model="tab">
            <v-tab-item
              class="tab-section pt-6"
              v-for="item in setupTabs"
              :key="item.tab"
              :class="item.tab"
            >
              <div class="tab-heading">
                <!-- Setup Panel -->
                <v-card
                  class="pt-5 px-5 mx-auto blue lighten-5 rounded-lg"
                  outlined
                  :key="item.title"
                >
                  <p class="pb-0">
                    <strong>Note:</strong> You are currently collecting
                    assignment submissions. Some setup functionality may not be
                    available to avoid disrupting the experiment.
                  </p>
                </v-card>
                <div class="px-5">
                  <div class="panel-overview py-6">
                    <div class="a1">
                      <v-img
                        v-if="item.image"
                        :src="item.image"
                        class="mr-6"
                        :alt="item.title"
                        min-height="55"
                        min-width="50"
                      />
                    </div>
                    <div
                      class="panelInformation d-flex flex-column justify-center"
                    >
                      <h2 class="mb-0">{{ item.title }}</h2>
                      <span v-if="item.description">{{
                        item.description
                      }}</span>
                    </div>
                  </div>
                </div>
                <template v-if="item.tab === 'status'">
                  <experiment-summary-status :experiment="experiment" />
                </template>
                <template v-if="item.tab === 'assignment'">
                  <div class="px-5">
                    <!--<pre>{{ experiment }}</pre>-->
                    <p class="pb-0" v-if="exposures">
                      Because you have <strong>{{ conditionCount }}</strong> (<a
                        @click="handleEdit('ExperimentDesignConditions')"
                        >edit</a
                      >) and would like your students to be
                      <strong>{{
                        exposureText[experiment.exposureType]
                      }}</strong>
                      ({{ exposureType[experiment.exposureType] }}) (<a
                        @click="handleEdit('ExperimentDesignConditions')"
                        >edit</a
                      >), we set you up with {{ exposures.length }} exposure
                      sets.
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <a v-bind="attrs" v-on="on">
                            What is an exposure set?
                          </a>
                        </template>
                        <span>
                          <strong class="d-block"
                            >What is an exposure set?</strong
                          >
                          An "exposure set" exposes a student to a specific
                          condition during a specific time period. Students will
                          change conditions between exposure sets, and the order
                          of conditions across exposure sets will be randomly
                          assigned to different students (<a
                            @click="handleEdit('ExperimentDesignConditions')"
                            >edit</a
                          >). An exposure set contains one or more assignments,
                          and there must be an equal number of assignments in
                          each exposure set in order to balance the experiment.
                          For more details about exposure sets, see our blog
                          post here.</span
                        >
                      </v-tooltip>
                    </p>
                    <div
                      class="panelInformation d-flex flex-column justify-center"
                    >
                      <h3 class="mb-0">Exposure Sets</h3>
                      <span
                        >Your exposure sets are currently:
                        <v-chip label outlined class="mr-2">
                          <span class="red--text" v-if="!balanced"
                            ><v-icon>mdi-scale-unbalanced</v-icon>
                            Unbalanced</span
                          >
                          <span v-if="balanced"
                            ><v-icon>mdi-scale-balance</v-icon>
                            Balanced
                          </span>
                        </v-chip>
                        <v-tooltip top>
                          <template v-slot:activator="{ on, attrs }">
                            <a v-bind="attrs" v-on="on">
                              What does this mean?
                            </a>
                          </template>
                          <span v-if="balanced">
                            <strong class="d-block"
                              >Balanced Exposure Sets</strong
                            >
                            Your exposure sets contain all the same number assignments, and assignments contain the same number of treatments. Great work!</span
                          >
                          <span v-if="!balanced">
                            <strong class="d-block"
                              >Unbalanced Exposure Sets</strong
                            >
                            A balanced experiment needs to have the same number
                            of assignments within each exposure set, and a
                            treatment for each condition within each assignment.
                            This will allow your students to be exposed to every
                            condition, but in different orders, so you can
                            compare how the different conditions affected each
                            individual student.</span
                          >
                        </v-tooltip>
                      </span>
                    </div>
                    <experiment-assignments :experiment="experiment" :balanced="balanced" />
                  </div>
                </template>
                <template
                  v-if="item.tab !== 'status' && item.tab !== 'assignment'"
                >
                  <table class="">
                    <tr
                      v-for="section in sectionValuesMap[item.title]"
                      :key="section.title"
                      class="tableRow"
                    >
                      <td class="leftData col-4">
                        <template>
                          <div class="detail">
                            <span class="heading">{{ section.title }}</span>
                            <a @click="handleEdit(section.editSection)">EDIT</a>
                          </div>
                        </template>
                      </td>
                      <td class="col-7 rightData">
                        <!-- String Data -->
                        <!-- For Experiment Title and Description -->
                        <template v-if="section.type === 'string'">
                          {{ section.description }}
                        </template>
                        <!-- Array data -->
                        <!-- For Experiment Condition Details -->
                        <template
                          v-if="section.type === 'array'"
                          class="arrayData"
                        >
                          <label
                            v-for="(condition, index) in section.description"
                            :key="condition.conditionId"
                            :for="`condition-${condition.conditionId}`"
                            class="text-left conditionLabel"
                          >
                            <span class="conditionName"
                              >Condition {{ index + 1 }}</span
                            >
                            <br />
                            <v-chip
                              label
                              :color="conditionColorMapping[condition.name]"
                              >{{ condition.name }}</v-chip
                            >
                            <v-chip
                              class="px-3 py-1  ml-3 defaultPill"
                              color="primary"
                              v-show="condition.defaultCondition"
                            >
                              <v-icon>mdi-check</v-icon>
                              <span>Default</span>
                            </v-chip>
                          </label>
                        </template>
                        <!-- Constant values -->
                        <!-- For Experiment Type -->
                        <template v-if="section.type === 'constant'">
                          <template v-if="section.description === 'WITHIN'">
                            <img
                              src="@/assets/all_conditions.svg"
                              alt="all conditions"
                              class="constantImage mb-2"
                            />
                            <span class="conditionType mb-2"
                              >All conditions</span
                            >
                            <p class="conditionDetail">
                              All students are exposed to every condition, in
                              different orders. This way you can compare how the
                              different conditions affected each individual
                              student. This is called a within-subject design.
                            </p>
                          </template>
                          <template v-if="section.description === 'BETWEEN'">
                            <img
                              src="@/assets/one_condition.svg"
                              alt="one conditions"
                              class="constantImage mb-2"
                            />
                            <span class="conditionType mb-2"
                              >Only one condition</span
                            >
                            <p class="conditionDetail">
                              Each student is only exposed to one condition, so
                              that you can compare how the different conditions
                              affected different students. This is called a
                              between-subjects design.
                            </p>
                          </template>
                        </template>
                        <!-- Participation data -->
                        <template v-if="section.type === 'participation'">
                          <!-- Consent Participation -->
                          <template v-if="section.description === 'CONSENT'">
                            Informed Consent
                            <button class="pdfButton" @click="openPDF">
                              {{ experiment.consent.title }}
                            </button>
                          </template>
                          <!-- Manual Participation -->
                          <template
                            v-else-if="section.description === 'MANUAL'"
                          >
                            Manual
                            <br />
                            <span
                              >{{ experiment.acceptedParticipants }}
                              students selected to participate out of
                              {{ experiment.potentialParticipants }}
                              students enrolled
                            </span>
                          </template>
                          <!-- All Participation -->
                          <template v-else>
                            Include All Students
                            <br />
                            <span
                              >{{ experiment.potentialParticipants }}
                              students selected to participate out of
                              {{ experiment.potentialParticipants }}
                              students enrolled
                            </span>
                          </template>
                        </template>
                      </td>
                    </tr>
                  </table>
                </template>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      no experiment
    </v-container>
  </div>
</template>

<script>
import store from "@/store";
import { mapGetters, mapActions } from "vuex";
import { saveAs } from "file-saver";
import ExperimentSummaryStatus from "@/views/ExperimentSummaryStatus";
import ExperimentAssignments from "@/views/ExperimentAssignments";

export default {
  name: "ExperimentSummary",
  components: { ExperimentSummaryStatus, ExperimentAssignments },
  computed: {
    ...mapGetters({
      experiment: "experiment/experiment",
      conditions: "experiment/conditions",
      exposures: "exposures/exposures",
      assignments: "assignment/assignments",
      consent: "consent/consent",
      exportdata: "exportdata/exportData",
      conditionColorMapping: "condition/conditionColorMapping",
    }),
    // Higher Level Section Values
    sectionValuesMap() {
      return {
        Design: this.designDetails,
        Participants: this.participantDetails,
        Assignments: this.assignmentDetails,
      };
    },
    exposureType() {
      return {
        WITHIN: "within-subject",
        BETWEEN: "between",
      };
    },
    exposureText() {
      return {
        WITHIN: "exposed to every condition",
        BETWEEN: "exposed to only one condition",
      };
    },
    balanced() {
      return this.exposures
        .map((exp) => {
          return this.assignments.filter((a) => a.exposureId === exp.exposureId)
            .length;
        })
        .every((v, i, arr) => v === arr[0]);
    },
    // Design Expansion View Values
    designDetails() {
      return [
        {
          title: "Experiment Title",
          description: this.experiment.title,
          editSection: "ExperimentDesignTitle",
          type: "string",
        },
        {
          title: "Description",
          description: this.experiment.description,
          editSection: "ExperimentDesignDescription",
          type: "string",
        },
        {
          title: "Conditions",
          description: this.experiment.conditions,
          editSection: "ExperimentDesignConditions",
          type: "array",
        },
        {
          title: "Experiment Type",
          description: this.experiment.exposureType,
          editSection: "ExperimentDesignType",
          type: "constant",
        },
      ];
    },
    conditionCount() {
      return `${this.experiment.conditions.length} condition${
        this.experiment.conditions.length > 1 ? "s" : ""
      }`;
    },
    // Participation Expansion View Values
    participantDetails() {
      return [
        {
          title: "Selection Method",
          description: this.experiment.participationType,
          editSection: "ExperimentParticipationSelectionMethod",
          type: "participation",
        },
      ];
    },
    // Assignment Expansion View Values
    assignmentDetails() {
      return [
        {
          title: "Your Assignments",
          description: this.getAssignmentDetails(),
          editSection: "AssignmentExposureSets",
          type: "assignments",
        },
      ];
    },
  },

  data: () => ({
    tab: null,
    items: ["status", "design", "participant", "assignment"],
    // Expansion Tab Header Values
    setupTabs: [
      {
        title: "Experiment Status",
        tab: "status",
        description:
          "Once your experiment is running, you will see status updates below",
      },
      {
        title: "Design",
        tab: "design",
        description: "The basic design of your experiment",
        image: require("@/assets/design_summary.svg"),
      },
      {
        title: "Participants",
        tab: "participant",
        description:
          "How students in your class become participants in your experiment",
        image: require("@/assets/participants_summary.svg"),
      },
      {
        title: "Assignments",
        tab: "assignment",
        image: require("@/assets/assignments_summary.svg"),
      },
    ],
    conditionTreatments: {},
    conditionColors: [""],
  }),
  methods: {
    ...mapActions({
      fetchExposures: "exposures/fetchExposures",
      fetchAssignmentsByExposure: "assignment/fetchAssignmentsByExposure",
      checkTreatment: "treatment/checkTreatment",
      createTreatment: "treatment/createTreatment",
      createAssessment: "assessment/createAssessment",
      getConsentFile: "consent/getConsentFile",
      getZip: "exportdata/fetchExportData",
    }),
    saveExit() {
      this.$router.push({ name: "Home" });
    },
    async exportData() {
      await this.getZip(this.experiment.experimentId);
      saveAs(
        this.exportdata,
        `Terracotta Experiment ${this.experiment.title} Export.zip`
      );
    },
    // Navigate to EDIT section
    handleEdit(componentName) {
      this.$router.push({ name: componentName });
    },
    openPDF() {
      // Second Parameter intentionally left blank
      let pdfWindow = window.open("", "", "_blank");
      pdfWindow.opener = null;
      pdfWindow.document.write(
        "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
          encodeURI(this.consent.file) +
          "'></iframe>"
      );

      return false;
    },
    async getAssignmentDetails() {
      await this.fetchExposures(this.experiment.experimentId);
      return this.exposures;
    },
    hasTreatment(conditionId, assignmentId) {
      const assignmentBasedOnConditions = this.conditionTreatments[
        +conditionId
      ];

      return (
        assignmentBasedOnConditions?.find(
          (assignment) => assignment.assignmentId === assignmentId
        ) !== undefined
      );
    },
    async handleCreateTreatment(conditionId, assignmentId) {
      // POST TREATMENT
      try {
        return await this.createTreatment([
          this.experiment.experimentId,
          conditionId,
          assignmentId,
        ]);
      } catch (error) {
        console.error("handleCreateTreatment | catch", { error });
      }
    },
    async handleCreateAssessment(conditionId, treatment) {
      // POST ASSESSMENT TITLE & HTML (description)
      try {
        return await this.createAssessment([
          this.experiment.experimentId,
          conditionId,
          treatment.treatmentId,
        ]);
      } catch (error) {
        console.error("handleCreateAssessment | catch", { error });
      }
    },
    async goToBuilder(conditionId, assignmentId) {
      // create the treatment
      const treatment = await this.handleCreateTreatment(
        conditionId,
        assignmentId
      );

      if (![200, 201].includes(treatment.status)) {
        this.$swal(
          `There was a problem creating your treatment: ${treatment.data}`
        );
        return false;
      }

      // create the assessment
      const assessment = await this.handleCreateAssessment(
        conditionId,
        treatment?.data
      );

      if (![200, 201].includes(assessment.status)) {
        this.$swal(
          `There was a problem creating your assessment: ${assessment.data}`
        );
        return false;
      }

      // send user to builder with the treatment and assessment ids
      this.$router.push({
        name: "TerracottaBuilder",
        params: {
          experiment_id: this.experiment.experimentId,
          condition_id: conditionId,
          treatment_id: treatment?.data?.treatmentId,
          assessment_id: assessment?.data?.assessmentId,
        },
      });
    },
    // For Mapping Sorted Group Name with associated Condition
    groupNameConditionMapping(groupConditionList) {
      const groupConditionMap = {};
      groupConditionList?.map(
        (group) => (groupConditionMap[group.groupName] = group.conditionName)
      );
      return groupConditionMap;
    },
    // For Sorting Group Names
    sortedGroups(groupConditionList) {
      const newGroups = groupConditionList?.map((group) => group.groupName);
      return newGroups?.sort();
    },
  },

  async created() {
    this.tab = this.$router.currentRoute.name === "ExperimentSummary" ? 3 : 0;

    await this.fetchExposures(this.experiment.experimentId);
    for (const e of this.exposures) {
      // add submissions to assignments request
      const submissions = true;
      await this.fetchAssignmentsByExposure([
        this.experiment.experimentId,
        e.exposureId,
        submissions,
      ]);
    }
    for (let c of this.conditions) {
      const t = await this.checkTreatment([
        this.experiment.experimentId,
        c.conditionId,
        this.assignments[0].assignmentId,
      ]);
      this.conditionTreatments[c.conditionId] = t?.data;
    }
    this.getAssignmentDetails();
    await this.getZip(this.experiment.experimentId);
    if (this.experiment.participationType === "CONSENT") {
      await this.getConsentFile(this.experiment.experimentId);
    }
    // }
  },
  beforeRouteEnter(to, from, next) {
    return store
      .dispatch("experiment/fetchExperimentById", to.params.experiment_id)
      .then(next, next);
  },
  beforeRouteUpdate(to, from, next) {
    return store
      .dispatch("experiment/fetchExperimentById", to.params.experiment_id)
      .then(next, next);
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.panel-overview {
  display: inline-flex;
}
.saveButton {
  background: none !important;
  border: none;
  padding: 0 !important;
  color: #069 !important;
  cursor: pointer;
}
.assignmentExpansionPanel {
  &:not(:last-child) {
    border-bottom: 2px solid #e0e0e0 !important;
  }
}

.v-application .v-sheet--outlined.blue.lighten-5 {
  border-color: rgba(29, 157, 255, 0.6) !important;
}

.v-tooltip__content {
  max-width: 400px;
  opacity: 1 !important;
  a {
    color: #afdcff;
  }
}

table {
  font-size: 16px;
  color: black;
  border-spacing: 0 25px;
  margin-left: 50px;
  .leftData {
    white-space: nowrap;
    text-align: left;
    vertical-align: top;
    padding: 0 25px;
    width: auto;
    .detail {
      display: inline-flex;
      flex-direction: column;
      .heading {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  .rightData {
    display: flex;
    max-width: max-content;
    flex-direction: column;
    text-align: left;
    border-left: 1px solid #e6e6e6;
    padding: 0 12px !important;
    .conditionLabel:not(:last-child) {
      margin-bottom: 10px;
    }
    .assignmentExpansion:not(:last-child) {
      margin-bottom: 20px;
    }
    .defaultPill {
      color: white;
      .v-icon {
        color: white;
        margin-right: 5px;
        font-size: 18px;
        vertical-align: text-bottom;
      }
    }
    .conditionType,
    .exposureSetName,
    .conditionName {
      font-size: 16px;
      font-weight: 700;
    }
    .constantImage {
      height: 36px;
      width: 36px;
    }
    .conditionDetail {
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .assignmentConditionName {
      text-align: left;
    }
    .pdfButton {
      background: none !important;
      border: none;
      padding: 0 !important;
      color: #069;
      text-decoration: underline;
      cursor: pointer;
      text-align: left;
    }
  }
}
</style>
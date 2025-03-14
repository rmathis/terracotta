<template>
  <ul class="component-steps">
    <li v-for="section in sectionList" :key="section.key">
      <template v-if="section.key === currentSection">
        <strong
          :class="{
            'green--text':
              isSummary && section.key === $route.meta.currentSection,
          }"
          >{{ section.name }}</strong
        >
      </template>
      <template v-else>
        <span
          :class="{
            'green--text':
              (isSummary && section.key === $route.meta.currentSection || completedSections[currentSection].includes(section.key)),
          }"
          >{{ section.name }}</span
        >
      </template>

      <v-stepper
        vertical
        v-if="section.key === currentSection"
        :class="{ finished: isSummary }"
      >
        <v-stepper-step
          v-for="step in section.steps"
          :key="step.key"
          :complete="
            isSummary
              ? isSummary
              : section.steps.findIndex((el) => {
                  return el.key === step.key;
                }) <= currentStepNum
          "
          step=""
        >
          {{ step.name }}
        </v-stepper-step>
      </v-stepper>
    </li>
  </ul>
</template>

<script>
// import store from "@/store";

export default {
  name: "Steps",
  props: ["currentSection", "currentStep", "participationType"],

  computed: {
    isSummary() {
      return (
        this.$route.name === "ExperimentDesignSummary" ||
        this.$route.name === "ParticipationSummary"
      );
    },
    currentStepNum() {
      return this.sectionList
        .filter((obj) => {
          return obj.key === this.currentSection;
        })[0]
        .steps.findIndex((el) => {
          return el.key === this.currentStep;
        });
    },
  },

  methods: {
    generateSteps() {
      const selectionType = this.$route.meta.selectionType
      let steps = [
        {
          key: "participation_selection_method",
          name: "Selection Method",
        },
      ]

      if (selectionType === "consent" || this.participationType === "CONSENT") {
        steps.push({
            key: "participation_selection_consent_title",
            name: "Assignment Title",
          },
          {
            key: "participation_selection_consent_file",
            name: "Informed Consent",
          })
      } else if(selectionType === "manual" || this.participationType === "MANUAL") {
        steps.push({
            key: "select_participants",
            name: "Select Participants",
          })
      } 

      if (
        selectionType === "any" ||
        selectionType === "consent" ||
        selectionType === "manual" ||
        selectionType === "auto"
      ) {
        steps.push({
          key: "participation_distribution",
          name: "Distribution"
        })
      }

      return steps
    },
  },

  data() {
    return {
      sectionList: [
        {
          key: "design",
          name: "Section 1: Design",
          steps: [
            {
              key: "design_title",
              name: "Title",
            },
            {
              key: "design_description",
              name: "Description",
            },
            {
              key: "design_conditions",
              name: "Conditions",
            },
            {
              key: "design_type",
              name: "Experiment type",
            },
          ],
        },
        {
          key: "participation",
          name: "Section 2: Participation",
          steps: this.generateSteps(),
        },
        {
          key: "assignments",
          name: "Section 3: Assignments",
          steps: [
            {
              key: "assignment_intro",
              name: "Introduction",
            },
            {
              key: "your_assignments",
              name: "Your Assignments",
            },
          ],
        },
      ],
      completedSections: {
        'design': [],
        'participation': ['design'],
        'assignments': ['design', 'participation']
      }
    };
  },
};
</script>

<style lang="scss">
@import "~@/styles/variables";

ul.component-steps {
  list-style: none;
  padding: 0 !important;
  font-size: 15px;

  > li {
    text-align: left;
    margin-bottom: 20px;

    .v-stepper {
      background: map-get($grey, "lighten-4");
      padding: 30px 0 30px 0;

      &.finished {
        .v-stepper__step--complete {
          &::before {
            background: map-get($green, "base");
          }
          .primary {
            border-color: map-get($green, "base") !important;
          }
        }
      }
      &--vertical {
        padding-bottom: 0;
        box-shadow: none !important;

        .v-stepper {
          border-radius: 0;
          padding: 0;

          &__label {
            color: black !important;
          }
          &__step {
            padding: 0;

            > span {
              display: block;
              background: white !important;
              width: 14px !important;
              height: 14px !important;
              min-width: 14px !important;
              border: 5px solid #e2e2e2;

              i {
                display: none;
              }
            }
          }
        }
      }
      &__step {
        padding: 0 0 28px 0 !important;

        &--complete {
          z-index: 1;

          &::before {
            content: "";
            display: block;
            position: absolute;
            height: 108%;
            width: 14px;
            background: map-get($blue, "base");
            left: 0;
            bottom: 30px;
            z-index: -1;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 999px;
            border-bottom-right-radius: 999px;
          }
          &:first-child {
            &::before {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <h1>Create your assignment</h1>
    <p>This will create an unpublished assignment shell in Canvas and will be the way Terracotta will deliver treatments
      to students.</p>
    <v-row>
      <div class="col-6">
          <v-text-field
              v-model="assignment.title"
              label="Assignment name"
              :rules="rules"
              outlined
          ></v-text-field>
      </div>
    </v-row>
    <v-divider class=""></v-divider>
    <v-tabs v-model="tab" class="tabs">
      <v-tab>Settings</v-tab>
    </v-tabs>
    <v-divider class=""></v-divider>
    <v-tabs-items v-model="tab">
        <v-tab-item class="my-5">
            <assignment-settings />
        </v-tab-item>
    </v-tabs-items>
    <v-btn
      :disabled="contDisabled"
      elevation="0"
      color="primary"
      class="mr-4"
      @click="handleSaveAssignment('AssignmentTreatmentSelect')"
    >
      Continue
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import AssignmentSettings from './AssignmentSettings.vue';

export default {
  name: "CreateAssignment",
  data() {
    return {
      tab: null,
      rules: [
        v => v && !!v.trim() || 'Assignment Name is required',
        v => (v || '').length <= 255 || 'A maximum of 255 characters is allowed'
      ],
    };
  },
  computed: {
    ...mapGetters({
      assignment: "assignment/assignment",
    }),
    experiment_id() {
      return parseInt(this.$route.params.experiment_id);
    },
    exposure_id() {
      return parseInt(this.$route.params.exposure_id);
    },
    condition_id() {
      return parseInt(this.$route.params.condition_id);
    },
    contDisabled() {
      return (
        !this.assignment.title
      );
    },
  },
  methods: {
    saveExit() {
      this.$router.push({name:'Home'})
    },
    ...mapActions({
      createAssignment: 'assignment/createAssignment'
    }),
    ...mapMutations({
      setAssignment: "assignment/setAssignment",
    }),
    async handleSaveAssignment(path) {
      // POST ASSESSMENT TITLE & HTML (description) & SETTINGS
      try {
        const response = await this.createAssignment([this.experiment_id, this.exposure_id, this.assignment, 1])

        if (response?.status === 201) {
          this.$router.push({name: path, params:{
              experiment_id: this.experiment_id,
              assignment_id: response.data.assignmentId
            }})
        } else {
          this.$swal(`${response}`)
        }
      } catch (error) {
        console.error("createAssignment | catch", {error})
        this.$swal('There was an error creating the assignment.')
      }
    },
  },
  async created () {
    this.setAssignment({
      numOfSubmissions: null
    });
  },
  components: {
    AssignmentSettings,
  },
};
</script>

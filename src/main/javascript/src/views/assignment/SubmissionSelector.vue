<template>
    <v-select
      :items="selectableSubmissions"
      label="Submissions"
      v-model="activeSubmissionId"
      item-text="label"
      item-value="value"
      outlined
      hide-details
    ></v-select>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SubmissionSelector",
  props: ["submissions"],
  emits: ['select'],
  data() {
    return {
      activeSubmissionId: null
    };
  },
  watch: {
    activeSubmissionId (newValue) {
        this.$emit('select', newValue)
    },
  },
  computed: {
    ...mapGetters({
    }),
    activeSubmission() {
        return this.submissions.find(s => s.submissionId === this.activeSubmissionId);
    },
    selectableSubmissions() {
        return this.orderedSubmissions.map((s, idx) => ({value: s.submissionId, label: `Attempt ${this.submissions.length - idx}`}))
    },
    orderedSubmissions() {
      return [...this.submissions].sort((a, b) => a.dateSubmitted - b.dateSubmitted).reverse();
    }
  },
  mounted () {
    const latestSubmission = this.orderedSubmissions[0];
    this.activeSubmissionId = latestSubmission?.submissionId;
  }
}
</script>

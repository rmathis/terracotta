<template>
  <div>
    <template v-for="answer in answers">
      <response-row :key="answer.answerId" :correct="getColor(answer)">
        <div class="d-flex justify-space-between align-center w-100">
          <div class="question-input">
            <template v-if="!readonly">
              <v-radio-group v-model="response" @change="emitValueChanged">
                  <v-radio class="radioButton" :value="answer.answerId"> </v-radio>
              </v-radio-group>
            </template>
            <template v-if="readonly">
              <v-radio-group v-model="answer.studentResponse" :disabled="readonly">
                  <v-radio class="radioButton" :value="answer.answerId"> </v-radio>
              </v-radio-group>
            </template>
            <span v-html="answer.html"></span>
          </div>
          <template v-if="readonly">
            <span class="decorator" :class="getColor(answer) ? 'green--text' : 'red--text'" v-if="answer.studentResponse">Student Response</span>
            <span class="decorator" :class="getColor(answer) ? 'green--text' : 'red--text'" v-if="showAnswers && answer.correct && !answer.studentResponse">Correct Response</span>
          </template>
        </div>
      </response-row>
    </template>
  </div>
</template>

<script>
import ResponseRow from "./ResponseRow.vue";

export default {
  props: ["answers", "value", "responses", "readonly", "showAnswers"],
  components: { ResponseRow },
  data() {
    return {
      response: this.value,
    };
  },
  computed: {
  },
  methods: {
    emitValueChanged() {
      this.$emit("input", this.response);
    },
    getColor(answer) { 
      if (this.readonly) {
        if (answer.correct) {
          if (!this.showAnswers && !answer.studentResponse) {
            return null;
          }
          return true;
        }
        if (!answer.correct && answer.studentResponse) {
          return false;
        }
      }
      return null;
    }
  },
  watch: {
    value() {
      this.response = this.value;
    },
  }
};
</script>

<style lang="scss" scoped>
.question-input {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.radioButton {
  margin-top: 2px;
}
.w-100 {
  width: 100%;
}
.decorator {
  font-weight: 500;
  font-size: 0.9rem;
}
</style>

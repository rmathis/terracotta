<template>
  <div>
    <tiptap-vuetify
      v-model="html"
      placeholder="Question"
      class="mb-6 outlined"
      :extensions="extensions"
      :native-extensions="nativeExtensions"
      :card-props="{ flat: true }"
      :rules="rules"
      required
    />
    <v-text-field
      v-model="points"
      :rules="numberRule"
      label="Points"
      type="number"
      step="any"
      outlined
      required
    ></v-text-field>

    <!-- default slot for answer options or other custom content -->
    <slot></slot>

    <v-row>
      <v-col cols="auto" class="flex-grow-1 py-0">
        <slot name="actions"> </slot>
      </v-col>
      <v-col cols="auto" class="text-right py-0">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="black" v-bind="attrs" v-on="on">
              mdi-dots-horizontal
            </v-icon>
          </template>
          <v-list class="text-left">
            <slot name="actions-overflow"></slot>
            <v-list-item
              v-if="isPageBreakAfter"
              @click="removePageBreakAfter(question)"
            >
              <v-list-item-title>
                <v-icon class="mr-2">mdi-format-page-break</v-icon>
                Remove page break after question</v-list-item-title
              >
            </v-list-item>
            <v-list-item v-else @click="addPageBreakAfter(question)">
              <v-list-item-title>
                <v-icon class="mr-2">mdi-format-page-break</v-icon>
                Add page break after question</v-list-item-title
              >
            </v-list-item>
            <v-list-item @click="handleDeleteQuestion(question)">
              <v-list-item-title>
                <v-icon class="mr-2">mdi-delete-outline</v-icon>
                Delete Question</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from "tiptap-vuetify";
import YoutubeEmbed from "./tiptap/YoutubeEmbed";
import YoutubeEmbedExtension from "./tiptap/YoutubeEmbedExtension";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  props: ["question"],
  data() {
    return {
      rules: [
        (v) => (v && !!v.trim()) || "required",
        (v) =>
          (v || "").length <= 255 || "A maximum of 255 characters is allowed",
      ],
      numberRule: [
        (v) => (v && !isNaN(v)) || "required",
        (v) =>
          (!isNaN(parseFloat(v)) && v >= 0) ||
          "The point value cannot be negative",
      ],
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
        YoutubeEmbedExtension,
      ],
      nativeExtensions: [new YoutubeEmbed()],
    };
  },
  computed: {
    ...mapGetters({
      questions: "assessment/questions",
    }),
    experiment_id() {
      return parseInt(this.$route.params.experiment_id);
    },
    treatment_id() {
      return parseInt(this.$route.params.treatment_id);
    },
    assessment_id() {
      return parseInt(this.$route.params.assessment_id);
    },
    condition_id() {
      return parseInt(this.$route.params.condition_id);
    },
    isPageBreakAfter() {
      const questionIndex = this.question.questionOrder;
      if (questionIndex + 1 < this.questions.length) {
        return this.questions[questionIndex + 1].questionType === "PAGE_BREAK";
      } else {
        return false;
      }
    },
    html: {
      // two-way computed property
      get() {
        return this.question.html;
      },
      set(value) {
        this.updateQuestions({ ...this.question, html: value });
      },
    },
    points: {
      // two-way computed property
      get() {
        return this.question.points;
      },
      set(value) {
        this.updateQuestions({ ...this.question, points: value });
      },
    },
  },
  components: {
    TiptapVuetify,
  },
  methods: {
    ...mapMutations({
      updateQuestions: "assessment/updateQuestions",
    }),
    ...mapActions({
      createQuestionAtIndex: "assessment/createQuestionAtIndex",
      deleteQuestion: "assessment/deleteQuestion",
      updateQuestion: "assessment/updateQuestion",
    }),
    async handleDeleteQuestion(question) {
      // DELETE QUESTION
      const reallyDelete = await this.$swal({
        icon: "question",
        text: `Are you sure you want to delete the question?`,
        showCancelButton: true,
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "No, cancel",
      });
      if (reallyDelete?.isConfirmed) {
        try {
          return await this.deleteQuestion([
            this.experiment_id,
            this.condition_id,
            this.treatment_id,
            this.assessment_id,
            question.questionId,
          ]);
        } catch (error) {
          console.error("handleDeleteQuestion | catch", { error });
          this.$swal("there was a problem deleting the question");
        }
      }
    },
    async addPageBreakAfter(question) {
      try {
        const questionIndex = this.questions.findIndex(
          (que) => que.questionId === question.questionId
        );
        await this.createQuestionAtIndex({
          payload: [
            this.experiment_id,
            this.condition_id,
            this.treatment_id,
            this.assessment_id,
            questionIndex + 1,
            "PAGE_BREAK",
            0,
            "",
          ],
          // Put the PAGE_BREAK just after this question
          questionIndex: questionIndex + 1,
        });

        const list = [...this.questions.map(q => ({...q}))];
        list.forEach((q, idx) => {
          q.questionOrder = idx;
        });

        this.handleSaveQuestions(list);

      } catch (error) {
        console.error("addPageBreakAfter | catch", { error });
        this.$swal("there was a problem adding a page break");
      }
    },
    async removePageBreakAfter(question) {
      try {
        const questionIndex = this.questions.findIndex(
          (que) => que.questionId === question.questionId
        );
        // find the PAGE_BREAK question after this question
        const pageBreakQuestion = this.questions[questionIndex + 1];
        await this.deleteQuestion([
          this.experiment_id,
          this.condition_id,
          this.treatment_id,
          this.assessment_id,
          pageBreakQuestion.questionId,
        ]);

        const list = [...this.questions.map(q => ({...q}))];
        list.forEach((q, idx) => {
          q.questionOrder = idx;
        });

        this.handleSaveQuestions(list);

      } catch (error) {
        console.error("removePageBreakAfter | catch", { error });
        this.$swal("there was a problem removing a page break");
      }
    },
    async handleSaveQuestions(questions) {
      // LOOP AND PUT QUESTIONS
      return Promise.all(
        questions.map(async (question, index) => {
          // save question
          try {
            this.updateQuestions(question);
            const q = await this.updateQuestion([
              this.experiment_id,
              this.condition_id,
              this.treatment_id,
              this.assessment_id,
              question.questionId,
              question.html,
              question.points,
              index,
              question.questionType,
              question.randomizeAnswers,
              question.answers
            ]);
            return Promise.resolve(q);
          } catch (error) {
            return Promise.reject(error);
          }
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.tiptap-vuetify-editor::v-deep {
  box-shadow: none;
  border-radius: 4px;
  border: 1px solid map-get($grey, "base");
  overflow: hidden;

  .ProseMirror {
    margin: 20px 5px !important;

    .is-editor-empty::before {
      color: map-get($grey, "darken-1");
      font-style: normal;
    }
  }
  .tiptap-vuetify-editor__toolbar {
    border-top: 1px solid map-get($grey, "base");
    border-radius: 0 !important;
  }
  .v-card {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>

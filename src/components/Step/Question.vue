<script lang="ts" setup>
import HeadingLarge from "@/components/Heading/HeadingLarge.vue"
import ButtonItem from "@/components/Button/ButtonItem.vue"
import SingleOptionQuestion from "@/components/Question/SingleOptionQuestion.vue"
import MultiplesOptionsQuestion from "@/components/Question/MultiplesOptionsQuestion.vue"
import TextQuestion from "@/components/Question/TextQuestion.vue"
import {useAnswersStore} from "@/stores/answers.store"
import type {QuestionModel} from "@/models/question.model"
import {ref} from "vue";
import {AnswerModel} from "@/models/answer.model"

const props = defineProps<{
  question: QuestionModel
}>()

const emit = defineEmits(['nextStep'])

const useAnswer = useAnswersStore()

const answer = ref('')
const multipleAnswer = ref([])

function nextStep() {
  const model = new AnswerModel({question_id: props.question.id})

  if (props.question.type === 'single-option') {
    model.option_id = answer.value
  } else if (props.question.type === 'multiple-options') {
    model.multiple_option_ids = multipleAnswer.value.join(',')
  } else {
    model.text = answer.value
  }

  useAnswer.addAnswer(props.question.id, model)

  emit('nextStep')
}
</script>

<template>
  <div class="flex flex-col gap-24">
    <div class=" flex flex-col gap-3">
      <HeadingLarge>Agenday</HeadingLarge>
    </div>

    <SingleOptionQuestion
        v-if="question.type === 'single-option'"
        v-model="answer"
        :question="question"
    />

    <MultiplesOptionsQuestion
        v-if="question.type === 'multiple-options'"
        v-model="multipleAnswer"
        :question="question"
    />

    <TextQuestion
        v-if="question.type === 'text'"
        v-model="answer"
        :question="question"
    />

    <div class="flex justify-between">
      <ButtonItem
          color="light"
          @click="$emit('previousStep')"
      >Voltar
      </ButtonItem>
      <ButtonItem
          color="dark"
          @click="nextStep"
      >Continuar
      </ButtonItem>
    </div>
  </div>
</template>

<style scoped>

</style>
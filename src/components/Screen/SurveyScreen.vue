<script setup lang="ts">
import Home from "@/components/Step/Home.vue"
import ProgressBar from "@/components/Step/ProgressBar.vue"
import Thanks from "@/components/Step/Thanks.vue"
import Question from "@/components/Step/Question.vue"
import {computed, ref} from "vue"
import {useSurveyStore} from "@/stores/survey.store"
import {storeToRefs} from "pinia"
import {useAnswersStore} from "@/stores/answers.store";

const useAnswer = useAnswersStore()
const useSurvey = useSurveyStore()
const {survey, numberQuestions} = storeToRefs(useSurvey)

const step = ref(1)

const numberSteps = computed(() => {
  return numberQuestions.value + 2
})

function previousStep() {
  step.value--
}

function nextStep() {
  step.value++

  if (step.value === numberSteps.value) {
    useAnswer.sendAnswers()
  }
}
</script>

<template>
  <div class="w-full min-h-screen flex flex-col px-8">
    <ProgressBar :steps="numberSteps" :in="step" class="my-16" />

    <Home
        v-if="step === 1"
        @previousStep="previousStep"
        @nextStep="nextStep"
    ></Home>

    <template
        :key="question.id"
        v-for="(question, index) in survey.data?.questions"
    >
      <Question
          :question="question"
          v-if="step === (index + 2)"
          @previousStep="previousStep"
          @nextStep="nextStep"
      ></Question>
    </template>

    <Thanks
        v-if="step === numberSteps"
    ></Thanks>
  </div>
</template>

<style scoped>

</style>
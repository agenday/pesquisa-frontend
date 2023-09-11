<script setup lang="ts">
import Home from "@/components/Step/Home.vue"
import Question from "@/components/Step/Question.vue"
import {computed, onMounted, ref} from "vue"
import Thanks from "@/components/Step/Thanks.vue"
import ProgressBar from "@/components/Step/ProgressBar.vue"
import {useSurveyStore} from "@/stores/survey";
import {storeToRefs} from "pinia";
import HeadingLarge from "@/components/Heading/HeadingLarge.vue";
import ParagraphItem from "@/components/Paragraph/ParagraphItem.vue";
import LoadingView from "@/components/Loading/LoadingView.vue";

const props = defineProps<{
  token: string
}>()

const useSurvey = useSurveyStore()
const {survey, numberQuestions} = storeToRefs(useSurvey)

const loading = ref(false)
const step = ref(1)

const numberSteps = computed(() => {
  return numberQuestions.value + 2
})

function previousStep() {
  step.value--
}

function nextStep() {
  step.value++
}

onMounted(async () => {
  loading.value = true

  await useSurvey.loadSurvey(props.token)

  loading.value = false
})
</script>

<template>
  <LoadingView v-if="loading" />

  <div
      class="w-full min-h-screen flex flex-col px-8"
      v-else
  >
    <ProgressBar :steps="numberSteps" :in="step" class="my-16" />

    <Home
        v-if="step === 1"
        @previousStep="previousStep"
        @nextStep="nextStep"
    ></Home>

    <template
        :key="question.id"
        v-for="(question, index) in survey.data.questions"
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

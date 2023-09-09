<script setup lang="ts">
import Home from "@/components/Step/Home.vue"
import Question from "@/components/Step/Question.vue"
import {computed, ref} from "vue"
import Thanks from "@/components/Step/Thanks.vue"
import ProgressBar from "@/components/Step/ProgressBar.vue"

const step = ref(1)

const numberSteps = computed(() => {
  return survey.questions.length + 2
})

function previousStep() {
  step.value--
}

function nextStep() {
  step.value++
}

const survey = {
  "id": 1,
  "title": "Nossa Pesquisa",
  "description": "Estamos desenvolvendo um produto onde seus clientes poderão realizar um agendamento online e gostaríamos de ouvir as sugestões de quem está no dia a dia desse mercado.",
  "created_at": "2023-09-07T11:36:50.000Z",
  "updated_at": "2023-09-07T11:36:51.000Z",
  "questions": [
    {
      "id": 1,
      "survey_id": 1,
      "title": "Qual sua maior dificuldade em gerenciar sua agenda?",
      "created_at": "2023-09-07T11:38:43.000Z",
      "updated_at": "2023-09-07T11:38:43.000Z",
      "options": [
        {
          "id": 8,
          "question_id": 1,
          "description": "Falta de tempo",
          "created_at": "2023-09-07T13:24:02.000Z",
          "updated_at": "2023-09-07T13:24:02.000Z"
        },
        {
          "id": 9,
          "question_id": 1,
          "description": "Muitos encaixes entre os agendamentos",
          "created_at": "2023-09-07T13:24:18.000Z",
          "updated_at": "2023-09-07T13:24:18.000Z"
        },
        {
          "id": 10,
          "question_id": 1,
          "description": "Muitos cancelamentos",
          "created_at": "2023-09-07T13:24:35.000Z",
          "updated_at": "2023-09-07T13:24:35.000Z"
        }
      ]
    },
    {
      "id": 4,
      "survey_id": 1,
      "title": "Qual a frequência de cancelamentos sem aviso?",
      "created_at": "2023-09-07T13:05:39.000Z",
      "updated_at": "2023-09-07T13:05:40.000Z",
      "options": [
        {
          "id": 13,
          "question_id": 4,
          "description": "Pouco",
          "created_at": "2023-09-07T13:26:02.000Z",
          "updated_at": "2023-09-07T13:26:03.000Z"
        },
        {
          "id": 14,
          "question_id": 4,
          "description": "Médio",
          "created_at": "2023-09-07T13:26:43.000Z",
          "updated_at": "2023-09-07T13:26:43.000Z"
        },
        {
          "id": 15,
          "question_id": 4,
          "description": "Muitos",
          "created_at": "2023-09-07T13:26:50.000Z",
          "updated_at": "2023-09-07T13:26:50.000Z"
        }
      ]
    }
  ]
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
        v-for="(question, index) in survey.questions"
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

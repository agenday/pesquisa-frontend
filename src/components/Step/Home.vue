<script setup lang="ts">
import HeadingLarge from "@/components/Heading/HeadingLarge.vue"
import ParagraphItem from "@/components/Paragraph/ParagraphItem.vue"
import HeadingSmall from "@/components/Heading/HeadingSmall.vue"
import ButtonItem from "@/components/Button/ButtonItem.vue"
import {computed} from "vue"

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

const numberQuestions = computed(() => {
  return survey.questions.length
})
</script>

<template>
  <div class="flex flex-col gap-24">
    <div class="flex flex-col gap-3">
      <HeadingLarge>Agenday</HeadingLarge>
      <ParagraphItem>
        Agenday é uma startup que desenvolve soluções para o
        mercado de beleza, melhorando a experiência dos
        clientes e a eficiência dos negócios.
      </ParagraphItem>
    </div>

    <div class="flex flex-col gap-3">
      <HeadingSmall>{{ survey.title }}</HeadingSmall>
      <ParagraphItem>{{ survey.description }}</ParagraphItem>
    </div>

    <div class="flex">
      <HeadingSmall>
        Serão apenas {{ numberQuestions }} questões, vamos começar?
      </HeadingSmall>
      <ButtonItem 
          color="dark"
          @click="$emit('nextStep')"
      >Iniciar</ButtonItem>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import HeadingLarge from "@/components/Heading/HeadingLarge.vue"
import ParagraphItem from "@/components/Paragraph/ParagraphItem.vue"
import HeadingSmall from "@/components/Heading/HeadingSmall.vue"
import ButtonItem from "@/components/Button/ButtonItem.vue"
import {computed} from "vue"
import {useSurveyStore} from "@/stores/survey.store";
import {storeToRefs} from "pinia";

const useSurvey = useSurveyStore()
const {survey, numberQuestions} = storeToRefs(useSurvey)
</script>

<template>
  <div class="flex flex-col gap-24">
    <div class="flex flex-col gap-3">
      <HeadingLarge class="font-lufga">Agenday</HeadingLarge>
      <ParagraphItem>
        Somos startup que desenvolve soluções para
        agendamentos online, melhorando a experiência dos
        clientes e a eficiência dos negócios.
      </ParagraphItem>
    </div>

    <div class="flex flex-col gap-3">
      <HeadingSmall>{{ survey.data?.title }}</HeadingSmall>
      <ParagraphItem>{{ survey.data?.description }}</ParagraphItem>
    </div>

    <div class="flex justify-between">
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
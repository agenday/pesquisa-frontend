<script setup lang="ts">
import HeadingLarge from "@/components/Heading/HeadingLarge.vue"
import ButtonItem from "@/components/Button/ButtonItem.vue"
import ProgressBar from "@/components/Step/ProgressBar.vue"
import SingleOptionQuestion from "@/components/Question/SingleOptionQuestion.vue"

const props = defineProps<{
  question: object
}>()
</script>

<template>
  <div class="flex flex-col gap-24">
    <div class=" flex flex-col gap-3">
      <HeadingLarge>Agenday</HeadingLarge>
    </div>

    <SingleOptionQuestion :question="question"/>

    <div class="flex justify-between">
      <ButtonItem
          color="light"
          @click="$emit('previousStep')"
      >Voltar</ButtonItem>
      <ButtonItem
          color="dark"
          @click="$emit('nextStep')"
      >Continuar</ButtonItem>
    </div>
  </div>
</template>

<style scoped>

</style>
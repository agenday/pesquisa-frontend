<script setup lang="ts">
import InputRadio from "@/components/Input/InputRadio.vue"
import BaseQuestion from "@/components/Question/BaseQuestion.vue"

const props = defineProps<{
  question: object
}>()
</script>

<template>
  <BaseQuestion :title="question.title">
    <InputRadio
        :id="`option_${option.id}`"
        :name="`question_${question.id}`"
        v-for="option in question.options"
        :key="option.id"
    >
      {{ option.description }}
    </InputRadio>
  </BaseQuestion>
</template>

<style scoped>

</style>
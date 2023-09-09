<script setup lang="ts">
import BaseQuestion from "@/components/Question/BaseQuestion.vue"
import InputCheckbox from "@/components/Input/InputCheckbox.vue"

const props = defineProps<{
  question: object
}>()
</script>

<template>
  <BaseQuestion :title="question.title">
    <InputCheckbox
        :id="`option_${option.id}`"
        :name="`question_${question.id}`"
        v-for="option in question.options"
        :key="option.id"
    >
      {{ option.description }}
    </InputCheckbox>
  </BaseQuestion>
</template>

<style scoped>

</style>
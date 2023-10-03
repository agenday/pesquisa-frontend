<script setup lang="ts">
import InputRadio from "@/components/Input/InputRadio.vue"
import BaseQuestion from "@/components/Question/BaseQuestion.vue"
import type {QuestionModel} from "@/models/question.model";

const props = defineProps<{
  question: QuestionModel,
  modelValue: any
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <BaseQuestion :title="question.title">
    <InputRadio
        :id="`option_${option.id}`"
        :name="`question_${question.id}`"
        :key="option.id"
        v-for="option in question.options"
        :model-value="option.id"
        @input="$emit('update:modelValue', $event.target.value)"
    >
      {{ option.description }}
    </InputRadio>
  </BaseQuestion>
</template>

<style scoped>

</style>
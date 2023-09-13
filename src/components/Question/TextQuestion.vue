<script setup lang="ts">
import BaseQuestion from "@/components/Question/BaseQuestion.vue"
import InputText from "@/components/Input/InputText.vue"
import {computed} from "vue"
import type {QuestionModel} from "@/models/question.model";

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  question: QuestionModel,
  modelValue: any
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <BaseQuestion :title="question.title">
    <InputText
        :id="`text_${question.id}`"
        v-model="value"
    />
  </BaseQuestion>
</template>

<style scoped>

</style>
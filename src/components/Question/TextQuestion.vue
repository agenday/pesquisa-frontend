<script setup lang="ts">
import BaseQuestion from "@/components/Question/BaseQuestion.vue"
import InputText from "@/components/Input/InputText.vue"
import {computed} from "vue"

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  question: object,
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
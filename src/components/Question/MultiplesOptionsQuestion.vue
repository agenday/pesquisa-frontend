<script lang="ts" setup>
import BaseQuestion from "@/components/Question/BaseQuestion.vue"
import InputCheckbox from "@/components/Input/InputCheckbox.vue"
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
    <InputCheckbox
        v-for="option in question.options"
        :id="option.id"
        :key="option.id"
        v-model="value"
    >
      {{ option.description }}
    </InputCheckbox>
  </BaseQuestion>
</template>

<style scoped>

</style>
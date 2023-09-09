<script setup lang="ts">
import BaseQuestion from "@/components/Question/BaseQuestion.vue"
import InputCheckbox from "@/components/Input/InputCheckbox.vue"
import InputText from "@/components/Input/InputText.vue";

const props = defineProps<{
  question: object
}>()
</script>

<template>
  <BaseQuestion :title="question.title">
    <InputText></InputText>
  </BaseQuestion>
</template>

<style scoped>

</style>
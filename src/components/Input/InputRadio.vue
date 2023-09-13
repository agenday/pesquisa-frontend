<script setup lang="ts">
const props = defineProps<{
  id: string|number,
  name: string,
  modelValue: any
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex items-center gap-x-3">
    <input
        type="radio"
        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        :id="id"
        :name="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <label
        :for="id"
        class="block text-sm font-medium leading-6 text-gray-600"
    >
      <slot></slot>
    </label>
  </div>
</template>

<style scoped>

</style>
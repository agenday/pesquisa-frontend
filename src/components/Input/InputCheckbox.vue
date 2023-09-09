<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
</script>

<template>
  <div class="flex h-6 items-center">
    <input
        :id="id"
        :name="id"
        type="checkbox"
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    >
  </div>
  <div class="text-sm leading-6">
    <label
        :for="id"
        class="font-medium text-gray-900"
    >
      <slot></slot>
    </label>
<!--    <p class="text-gray-500"></p>-->
  </div>
</template>

<style scoped>

</style>
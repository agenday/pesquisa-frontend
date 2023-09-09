<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
</script>

<template>
  <div class="flex items-center gap-x-3">
    <input
        :id="id"
        :name="id"
        type="checkbox"
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    >
    <label
        :for="id"
        class="block text-sm font-medium leading-6 text-gray-600"
    >
      <slot></slot>
    </label>
<!--    <p class="text-gray-500"></p>-->
  </div>
</template>

<style scoped>

</style>
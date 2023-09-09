<script setup lang="ts">
import {computed} from "vue"

const props = defineProps<{
  color: 'light'|'dark'
}>()

const getColorClassComputed = computed(() => {
  return {
    'bg-charleston-green text-white': props.color === 'dark',
    'bg-white text-charleston-green border border-charleston-green': props.color === 'light'
  }
})
</script>

<template>
  <button
      class="flex justify-center items-center py-2 px-6 gap-2 rounded-lg"
      :class="getColorClassComputed"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>
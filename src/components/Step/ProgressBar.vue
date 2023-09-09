<script setup lang="ts">
import {computed} from "vue"

const props = defineProps<{
  steps: number,
  in: number
}>()

const widthProgressBar = computed(() => {
  const percentage = (props.in - 1) * 100 / (props.steps - 1)
  return {
    '--width-complete-progress-bar': `${percentage}%`,
    '--width-incomplete-progress-bar': `${100 - percentage}%`
  }
})

function stepComplete(n) {
  return n <= props.in ? 'step-complete' : 'step-incomplete'
}
</script>

<template>
  <div class="flex justify-center">
    <div
        class="box-progress flex gap-8 relative border-charleston-green"
        :style="widthProgressBar"
    >
      <div
          class="rounded-full w-2 h-2 border-2 border-inherit"
          :class="stepComplete(n)"
          v-for="n in steps"
          :key="n"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.step-complete {
  @apply bg-charleston-green
}

.step-incomplete {
  @apply bg-white border-gray-400
}

.box-progress::before {
  content: '';
  width: var(--width-complete-progress-bar);
  height: 1px;
  border-width: 1px;
  border-color: inherit;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.box-progress::after {
  content: '';
  width: var(--width-incomplete-progress-bar);
  height: 1px;
  border-width: 1px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: -1;
  @apply border-gray-400
}
</style>
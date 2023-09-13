<script lang="ts" setup>
import {computed} from "vue"

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  id: string | number,
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

const nameComputed = computed(() => {
  return `option_${props.id}`
})
</script>

<template>
  <div class="flex items-center gap-x-3">
    <input
        :id="nameComputed"
        :name="nameComputed"
        :value="id"
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        type="checkbox"
        v-model="value"
    >
    <label
        :for="nameComputed"
        class="block text-sm font-medium leading-6 text-gray-600"
    >
      <slot></slot>
    </label>
  </div>
</template>

<style scoped>

</style>
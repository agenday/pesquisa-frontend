<script lang="ts" setup>
import {computed} from "vue";

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
</script>

<template>
  <div>
    <div class="mt-2">
      <textarea
          :id="id"
          v-model="value"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          rows="3"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>

</style>
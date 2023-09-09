<script setup lang="ts">
import HeadingSmall from "@/components/Heading/HeadingSmall.vue"

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex-1 flex flex-col gap-3 justify-center">
    <HeadingSmall>{{ title }}</HeadingSmall>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
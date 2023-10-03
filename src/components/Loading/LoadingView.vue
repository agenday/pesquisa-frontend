<script setup lang="ts">
import HeadingLarge from "@/components/Heading/HeadingLarge.vue"
import ParagraphItem from "@/components/Paragraph/ParagraphItem.vue"
</script>

<template>
  <div
      class="w-full min-h-screen flex flex-col px-8 items-center justify-center"
  >
    <HeadingLarge class="loading relative flex flex-col justify-center items-center">
      <span class="font-lufga">Agenday</span>
      <img src="../../assets/logo.svg" width="80"  alt="logo"/>
    </HeadingLarge>
  </div>
</template>

<style lang="scss" scoped>
.loading::after {
  //content: '';
  width: 15px;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: -5px;
  animation: slide-left-right 0.8s linear infinite alternate backwards;
  @apply bg-charleston-green
}

@keyframes slide-left-right {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
</style>
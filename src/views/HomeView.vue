<script setup lang="ts">
import {onMounted, ref} from "vue"
import {useSurveyStore} from "@/stores/survey"
import {storeToRefs} from "pinia"
import LoadingView from "@/components/Loading/LoadingView.vue"
import SurveyScreen from "@/components/Screen/SurveyScreen.vue"
import NotFoundScreen from "@/components/Screen/NotFoundScreen.vue"
import AnsweredScreen from "@/components/Screen/AnsweredScreen.vue";

const props = defineProps<{
  token: string
}>()

const useSurvey = useSurveyStore()
const {status} = storeToRefs(useSurvey)

const loading = ref(false)

onMounted(async () => {
  loading.value = true
  await useSurvey.loadSurvey(props.token)
  loading.value = false
})
</script>

<template>
  <LoadingView v-if="loading" />

  <template v-else>
    <div class="w-full min-h-screen flex flex-col px-8">
      <SurveyScreen v-if="status === 200" />
      <AnsweredScreen v-else-if="status === 419" />
      <NotFoundScreen v-else />
    </div>
  </template>

</template>

<style scoped>
</style>

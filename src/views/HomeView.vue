<script lang="ts" setup>
import {onMounted, ref} from "vue"
import {useSurveyStore} from "@/stores/survey.store"
import {storeToRefs} from "pinia"
import LoadingView from "@/components/Loading/LoadingView.vue"
import SurveyScreen from "@/components/Screen/SurveyScreen.vue"
import NotFoundScreen from "@/components/Screen/NotFoundScreen.vue"
import AnsweredScreen from "@/components/Screen/AnsweredScreen.vue";
import ServerErrorScreen from "@/components/Screen/ServerErrorScreen.vue";

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
  <LoadingView v-if="loading"/>

  <template v-else>
    <SurveyScreen v-if="status === 200"/>
    <AnsweredScreen v-else-if="status === 419"/>
    <NotFoundScreen v-else-if="status === 404"/>
    <ServerErrorScreen v-else/>
  </template>

</template>

<style scoped>
</style>

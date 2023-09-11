import {defineStore} from "pinia"
import {computed, reactive, ref} from "vue"
import {SurveyModel} from "@/models/survey.model"
import {loadSurvey as _loadSurvey} from "@/services/api"

export const useSurveyStore = defineStore('survey', () => {
  const survey = reactive<{data: SurveyModel}>({
    data: new SurveyModel()
  })

  const status = ref<number>(0)

  const numberQuestions = computed(() => {
    return survey.data?.questions?.length ?? 0
  })

  async function loadSurvey(token) {
    const response = await _loadSurvey(token)
    const content = await response.json()

    status.value = response.status

    if (response.status === 200)  {
      survey.data = new SurveyModel(content.survey)
    } else {
      survey.data = null
    }
  }

  return { survey, status, numberQuestions, loadSurvey }
})
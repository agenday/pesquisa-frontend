import {defineStore} from "pinia"
import {computed, reactive, ref} from "vue"
import {SurveyModel} from "@/models/survey.model"
import {loadSurvey as _loadSurvey} from "@/services/api"

export const useSurveyStore = defineStore('survey', () => {
  const survey = reactive<{data: SurveyModel}>({
    data: new SurveyModel()
  })

  const token = ref('')

  const status = ref<number>(0)

  const numberQuestions = computed(() => {
    return survey.data?.questions?.length ?? 0
  })

  async function loadSurvey(_token) {
    token.value = _token

    const response = await _loadSurvey(_token)

    if (response === null) {
      status.value = 500
      return
    }

    const content = await response.json()

    status.value = response.status
    survey.data = response.status === 200 ? new SurveyModel(content.survey) : null;
  }

  return { survey, status, token, numberQuestions, loadSurvey }
})
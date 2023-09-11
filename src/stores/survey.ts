import {defineStore} from "pinia"
import {computed, reactive} from "vue"
import {SurveyModel} from "@/models/survey.model"
import {loadSurvey as _loadSurvey} from "@/services/api"

export const useSurveyStore = defineStore('survey', () => {
  const survey = reactive<{data: SurveyModel}>({
    data: new SurveyModel()
  })

  const numberQuestions = computed(() => {
    return survey.data?.questions?.length ?? 0
  })

  async function loadSurvey(token) {
    const response = await _loadSurvey(token)

    if (!response)  {
      // ToDo // lançar erro na tela
    }

    survey.data = new SurveyModel(response.survey)
  }

  return { survey, numberQuestions, loadSurvey }
})
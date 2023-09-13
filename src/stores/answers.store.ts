import {defineStore, storeToRefs} from "pinia"
import {reactive, toRaw} from "vue"
import type {AnswerModel} from "@/models/answer.model"
import {sendAnswers as _sendAnswers} from "@/services/api"
import {useSurveyStore} from "@/stores/survey.store";

export const useAnswersStore = defineStore('answers', () => {
  const useSurvey = useSurveyStore()
  const {token, survey} = storeToRefs(useSurvey)

  const answers = reactive<AnswerModel[]>([])

  function addAnswer(question_id: number, answer: AnswerModel) {
    const index = answers.findIndex(item => item.question_id === question_id)

    if (index > -1) {
      answers[index] = answer
    } else {
      answers.push(answer)
    }
  }

  async function sendAnswers() {
    const content = {
      survey_id: survey.value.data.id,
      answers: toRaw(answers)
    }

    console.log(content)

    const response = await _sendAnswers(token.value, content)
  }

  return { answers, addAnswer, sendAnswers }
})
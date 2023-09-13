import {QuestionModel} from "@/models/question.model"

export class SurveyModel {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
  questions: QuestionModel[]

  constructor(data: any) {
    this.questions = []
    if (data) {
      Object.assign(this, data)

      if (data.questions) {
        this.questions = data.questions.map((item: QuestionModel) => new QuestionModel(item))
      }
    }
  }
}
export class AnswerModel {
  question_id: number
  option_id: number
  text: string
  multiple_option_ids: string

  constructor(data: any) {
    Object.assign(this, data)
  }
}
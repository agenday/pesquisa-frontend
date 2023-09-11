export class OptionModel {
  id: number
  question_id: number
  description: string
  created_at: string
  updated_at: string

  constructor(data) {
    Object.assign(this, data)
  }
}
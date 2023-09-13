import {OptionModel} from "@/models/option.model"

export class QuestionModel {
  id: number
  survey_id: number
  title: string
  type: string
  created_at: string
  updated_at: string
  options: OptionModel[]

  constructor(data: any) {
    this.options = []
    if (data) {
      Object.assign(this, data)

      if (data.options) {
        this.options = data.options.map((item: OptionModel) => new OptionModel(item))
      }
    }
  }
}
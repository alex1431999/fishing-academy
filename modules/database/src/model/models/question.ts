import {Model} from "../model";
import type {Question} from 'fishing-academy-types'

export class QuestionModel extends Model<Question> {
    tableName = 'questions'
}

export const questionModel = new QuestionModel()
import type {Question} from 'fishing-academy-types'
import {DatabaseModel} from "../model.database";

export class QuestionModel extends DatabaseModel<Question> {
    tableName = 'questions'
}

export const questionModel = new QuestionModel()
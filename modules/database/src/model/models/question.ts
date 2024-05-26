import type {DatabaseId, Question} from 'fishing-academy-types'
import {DatabaseModel} from "../model.database";
import {supabase} from "../../../client";

export class QuestionModel extends DatabaseModel<Question> {
    tableName = 'questions'

    public async getAllByState(stateId: DatabaseId) {
        const {data} = await supabase.from(this.tableName).select('*').eq('stateId', stateId)
        return data || []
    }
}

export const questionModel = new QuestionModel()
import type {Choice, DatabaseId} from 'fishing-academy-types'
import {DatabaseModel} from "../model.database";
import {supabase} from "../../../client";

export class ChoiceModel extends DatabaseModel<Choice> {
    tableName = 'choices'

    public async getAllByQuestions(questionIds: DatabaseId[]) {
        const {data} = await supabase.from(this.tableName).select('*').in('questionId', questionIds)
        return data || []
    }
}

export const choiceModel = new ChoiceModel()
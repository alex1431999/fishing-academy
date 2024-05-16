import type {Choice} from 'fishing-academy-types'
import {DatabaseModel} from "../model.database";

export class ChoiceModel extends DatabaseModel<Choice> {
    tableName = 'choices'
}

export const choiceModel = new ChoiceModel()
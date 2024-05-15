import {Model} from "../model";
import type {Choice} from 'fishing-academy-types'

export class ChoiceModel extends Model<Choice> {
    tableName = 'choices'
}

export const choiceModel = new ChoiceModel()
import {Model} from "../model";
import type {State} from 'fishing-academy-types'

export class StateModel extends Model<State> {
    tableName = 'states'
}

export const stateModel = new StateModel()
import type {State} from 'fishing-academy-types'
import {DatabaseModel} from "../model.database";

export class StateModel extends DatabaseModel<State> {
    tableName = 'states'
}

export const stateModel = new StateModel()
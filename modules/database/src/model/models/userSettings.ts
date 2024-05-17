import {DatabaseModel} from "../model.database";
import type {UserSettings} from 'fishing-academy-types'

export class UserSettingsModel extends DatabaseModel<UserSettings> {
    tableName = 'userSettings'
}

export const userSettingsModel = new UserSettingsModel()
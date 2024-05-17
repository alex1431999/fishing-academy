import {DatabaseModel} from "../model.database";
import type {UserSettings} from 'fishing-academy-types'
import {supabase} from "../../../client";

export class UserSettingsModel extends DatabaseModel<UserSettings> {
    tableName = 'userSettings'

    public async createIfDoesntExist(data: Omit<UserSettings, "id">): Promise<UserSettings> {
        const existingRecords = await this.getAll()
        const [existingUserSettings] = existingRecords

        if (existingUserSettings) {
            return existingUserSettings
        }

        return this.create(data)
    }
}

export const userSettingsModel = new UserSettingsModel()
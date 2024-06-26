import {DatabaseModel} from "../model.database";
import type {UserSettings} from 'fishing-academy-types'
import {supabase} from "../../../client";
import {auth} from "../../auth";

export class UserSettingsModel extends DatabaseModel<UserSettings> {
    tableName = 'userSettings'

    public async get(): Promise<UserSettings> {
        const userId = await auth.getUserIdSafe()
        const {data} = await supabase.from(this.tableName).select('*').eq('userId', userId).single()
        return data
    }

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
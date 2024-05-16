import type {StorageData} from 'fishing-academy-types'
import {Model} from "./model";
import {supabase} from "../../client";

export abstract class StorageModel extends Model<StorageData> {
    abstract bucketName: string

    async get(id: string): Promise<StorageData> {
        const response = await supabase.storage.from(this.bucketName).download(id)
        return response.data
    }

    async getAll(): Promise<StorageData[]> {
        const {data} = await supabase.storage.from(this.bucketName).list()
        return Promise.all(data.map(fileObject => this.get(fileObject.id)))
    }
}
import type {StorageData} from 'fishing-academy-types'
import {Model} from "./model";
import {supabase} from "../../client";

export abstract class StorageModel extends Model<StorageData> {
    abstract bucketName: string

    public async get(id: string): Promise<StorageData> {
        const response = await supabase.storage.from(this.bucketName).download(id)
        return response.data
    }

    public async getAll(): Promise<StorageData[]> {
        const {data} = await supabase.storage.from(this.bucketName).list()
        return Promise.all((data || []).map(fileObject => this.get(fileObject.id)))
    }

    public async getUrl(id: string): Promise<string> {
        return supabase.storage.from(this.bucketName).getPublicUrl(id).data.publicUrl
    }

    public create(data: Omit<StorageData, "id">): Promise<StorageData> {
        throw new Error('not implemented yet')
    }

    public update(data: Partial<StorageData>): Promise<void> {
        throw new Error('not implemented yet')
    }
}
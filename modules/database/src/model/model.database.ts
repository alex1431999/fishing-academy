import {supabase} from "../../client";
import {Model} from "./model";

export abstract class DatabaseModel<ModelType> extends Model<ModelType> {
    abstract tableName: string

    public async get(id: string): Promise<ModelType> {
        const {data} = await supabase.from(this.tableName).select('*').eq('id', id).single()
        return data
    }

    public async getAll(): Promise<ModelType[]> {
        const {data} = await supabase.from(this.tableName).select('*')
        return data || []
    }
}
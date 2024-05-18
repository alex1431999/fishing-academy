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

    public async create(data: Omit<ModelType, "id">): Promise<ModelType> {
        const {data: dataCreated} = await supabase.from(this.tableName).insert(data).select()
        const [rowInserted] = dataCreated || []
        return rowInserted
    }

    public async update(userId: string, data: Partial<Omit<ModelType, "id">>): Promise<void> {
        await supabase.from(this.tableName).update(data).eq('userId', userId)
    }
}

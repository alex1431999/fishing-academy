export abstract class Model<ModelType> {
    abstract tableName: string

    public abstract get(id: string): Promise<ModelType>

    public abstract getAll(): Promise<ModelType[]>
}
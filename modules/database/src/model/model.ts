export abstract class Model<ModelType> {
    public abstract get(id: string): Promise<ModelType>

    public abstract getAll(): Promise<ModelType[]>
}
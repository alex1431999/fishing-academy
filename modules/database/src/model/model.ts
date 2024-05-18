export abstract class Model<ModelType> {
    public abstract get(id: string): Promise<ModelType>

    public abstract getAll(): Promise<ModelType[]>

    public abstract create(data: Omit<ModelType, 'id'>): Promise<ModelType>

    public abstract update(data: Partial<ModelType>): Promise<void>
}
export abstract class Workflow<InputType = void, ReturnType = void> {
    public abstract execute(input?: InputType): Promise<ReturnType> | ReturnType
}
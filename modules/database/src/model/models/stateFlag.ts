import {StorageModel} from "../model.storage";

export class StateFlagModel extends StorageModel {
    bucketName = 'stateFlags'
}

export const stateFlagModel = new StateFlagModel()
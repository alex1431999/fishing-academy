import {DatabaseModel} from "../model.database";
import type {Category} from 'fishing-academy-types'

export class CategoryModel extends DatabaseModel<Category> {
    tableName = 'categories'
}

export const categoryModel = new CategoryModel()
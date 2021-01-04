import { Item } from './models/item.models';

export interface AppState {
    readonly items : Item[];
}
import { Item } from './models/item.models';
import { List } from './models/list.model';

export interface AppState {
    readonly items : Item[];
    readonly lists : List[];
}
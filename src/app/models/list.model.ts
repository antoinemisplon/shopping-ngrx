import { Item } from "./item.models";

export interface List {
    id: string;
    name: string;
    items: Item[]; 
    selected: boolean;
}
import { Action } from '@ngrx/store';
import { Item } from '../models/item.models';
import { List } from './../models/list.model';

export const ADD_LIST = '[LIST] add';
export const REMOVE_LIST = '[LIST] remove';
export const SELECT_LIST = '[LIST] select';
export const ADD_ITEM_LIST = '[LIST] add item';

export class AddList implements Action {
    readonly type = ADD_LIST;

    constructor(public payload: List) {}
}

export class RemoveList implements Action {
    readonly type = REMOVE_LIST;

    constructor(public payload: string) {}
}

export class SelectList implements Action {
    readonly type = SELECT_LIST;

    constructor(public payload: string) {}
}

export class AddItemList implements Action {
    readonly type = ADD_ITEM_LIST;

    constructor(public payload: Item) {}
}

export type Actions = AddList | RemoveList | SelectList | AddItemList;
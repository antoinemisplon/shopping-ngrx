import { Action } from '@ngrx/store';
import { Item } from './../models/item.models';

export const ADD_ITEM = '[ITEM] Add';
export const REMOVE_ITEM = '[ITEM] Remove';
export const EDIT_ITEM = '[ITEM] Edit';

export class AddItem implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: Item) {}
}

export class RemoveItem implements Action {
    readonly type = REMOVE_ITEM;

    constructor(public payload: string) {}
}

export class EditItem implements Action {
    readonly type = EDIT_ITEM;

    constructor(public payload: any) {}
}

export type Actions = AddItem | RemoveItem | EditItem;
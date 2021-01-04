import { Item } from './../models/item.models';
import * as ItemActions from './../actions/item.actions';

const initialState: Item = {
    id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
    name: 'Beurre'
};

export function reducer(state: Item[] = [initialState], action : ItemActions.Actions){
    switch(action.type){
        case ItemActions.ADD_ITEM:
            return [...state, action.payload];
        case ItemActions.REMOVE_ITEM:
            return state.filter(item => item.id != action.payload );
        case ItemActions.EDIT_ITEM:
            return state.map(item => (item.id === action.payload.id)?{id : action.payload.id, name : action.payload.name }: item);
        default:
            return state;
    }
}
import { List } from './../models/list.model';
import * as ListAction from '../actions/list.actions';

const initialState: List = {
    id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc001',
    name: 'Liste de course du 7 janvier 2021',
    items: [],
    selected: true
}

export function reducerList(state: List[] = [initialState], action: ListAction.Actions){
    switch(action.type){
        case ListAction.ADD_LIST:
            return [...state, action.payload];
        case ListAction.REMOVE_LIST:
            return state.filter(list => list.id != action.payload);
        case ListAction.SELECT_LIST:
            return state.map(list => {
                return {
                    id: list.id,
                    name: list.name,
                    items : list.items,
                    selected : (list.id === action.payload)
                }
            });
        case ListAction.ADD_ITEM_LIST:
            return state.map(list => (list.selected)?{  ...list, items : [...list.items, action.payload] }: list)
        default:
            return state;
    }
}
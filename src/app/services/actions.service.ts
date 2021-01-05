import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Item } from '../models/item.models';
import { List } from '../models/list.model';

import * as ItemAction from '../actions/item.actions';
import * as ListAction from '../actions/list.actions';

import { AppState } from '../app.state';
import { Observable } from 'rxjs';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  items: Observable<Item[]>;
  lists: Observable<List[]>;

  constructor(private store : Store<AppState>) { 
    this.items = store.select('items');
    this.lists = store.select('lists');
  }

  addItem(name){
    if(name.trim().length != 0){
      this.store.dispatch(new ItemAction.AddItem({
        id: uuidv4(),
        name: name
      }));
    }
  }

  editItem(id: string, name: string){
    this.store.dispatch(new ItemAction.EditItem({
      id: id, 
      name: name
    }));
  }

  removeItem(id){
    this.store.dispatch(new ItemAction.RemoveItem(id));
  }

  addList(name){
      let id = uuidv4();
      this.store.dispatch(new ListAction.AddList({
        id: id,
        name: name,
        items: [],
        selected: false
      }));
  
      this.selectList(id);
  }

  selectList(id: string){
    this.store.dispatch(new ListAction.SelectList(id));
  }

  addItemList(item: Item){
    this.store.dispatch(new ListAction.AddItemList(item))
  }
}

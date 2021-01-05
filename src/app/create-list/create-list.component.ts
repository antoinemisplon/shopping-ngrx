import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { List } from './../models/list.model';
import * as ListAction from './../actions/list.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addList(name){
    let id = uuidv4();
    
    this.store.dispatch(new ListAction.AddList({
      id: id,
      name: name,
      items: [],
      selected: false
    }));

    this.store.dispatch(new ListAction.SelectList(id));
  }
}

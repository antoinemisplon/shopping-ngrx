import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Item } from '../models/item.models';
import { AppState } from '../app.state';
import * as ItemActions from './../actions/item.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addItem(name){
    if(name.trim().length != 0){
      this.store.dispatch(new ItemActions.AddItem({
        id: uuidv4(),
        name: name
      }))
    }
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ListAction from '../actions/list.actions';
import { Item } from '../models/item.models';

@Component({
  selector: 'app-add-item-list',
  templateUrl: './add-item-list.component.html',
  styleUrls: ['./add-item-list.component.scss']
})

export class AddItemListComponent implements OnInit {

  @Input() item: Item;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addItemList(){
    this.store.dispatch(new ListAction.AddItemList(this.item))
  }

}

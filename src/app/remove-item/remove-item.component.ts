import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ItemActions from '../actions/item.actions';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})
export class RemoveItemComponent implements OnInit {

  @Input() id: string;

  constructor(private store: Store) { }

  removeItem(){
    this.store.dispatch(new ItemActions.RemoveItem(this.id));
  }

  ngOnInit(): void {
  }

}

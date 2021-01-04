import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.models';
import { Store } from '@ngrx/store';
import * as ItemActions from '../actions/item.actions';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  @Input() item: Item;
  expanded: boolean = false;

  constructor(private store: Store) { }

  expandedToggle(){
    this.expanded = (this.expanded)?false:true;
  }

  editItem(id, name){
    if(this.item){
      this.store.dispatch(new ItemActions.EditItem({ id: id, name: name }));
    }
  }

  ngOnInit(): void {
    
  }

}

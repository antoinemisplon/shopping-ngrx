import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.models';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  @Input() item: Item;
  expanded: boolean = false;

  constructor(public actionsService: ActionsService) { }

  expandedToggle(){
    this.expanded = (this.expanded)?false:true;
  }

  editItem(id, name){
    if(this.item){
      this.actionsService.editItem(id, name);
    }
  }

  ngOnInit(): void {
    
  }

}

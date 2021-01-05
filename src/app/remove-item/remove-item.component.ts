import { Component, Input, OnInit } from '@angular/core';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})

export class RemoveItemComponent implements OnInit {

  @Input() id: string;

  constructor(public actionsService: ActionsService) { }

  removeItem(){
    this.actionsService.removeItem(this.id);
  }

  ngOnInit(): void {
  }

}

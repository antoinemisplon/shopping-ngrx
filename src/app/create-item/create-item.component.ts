import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor(public actionsService: ActionsService) { }

  addItem(name){
    this.actionsService.addItem(name);
  }

  ngOnInit(): void {
  }

}

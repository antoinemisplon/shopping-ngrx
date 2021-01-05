import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  constructor(public actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  addList(name){
    this.actionsService.addList(name);
  }
}

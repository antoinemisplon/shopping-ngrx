import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-read-list',  
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.scss']
})
export class ReadListComponent implements OnInit {

  lists: Observable<List[]>;

  constructor(public actionsService: ActionsService) {
    this.lists = this.actionsService.lists;
  }

  ngOnInit(): void {
  }

  selectList(id){
    this.actionsService.selectList(id);
  }
}

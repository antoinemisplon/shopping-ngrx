import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.models';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-read-item',
  templateUrl: './read-item.component.html',
  styleUrls: ['./read-item.component.scss']
})
export class ReadItemComponent implements OnInit {

  items: Observable<Item[]>;
  lists: Observable<Item[]>;

  constructor(public actionsService: ActionsService) { 
    this.items = this.actionsService.items;
  }

  ngOnInit(): void {
  }

}

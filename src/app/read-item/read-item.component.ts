import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Item } from '../models/item.models';
import { AppState } from '../app.state';

@Component({
  selector: 'app-read-item',
  templateUrl: './read-item.component.html',
  styleUrls: ['./read-item.component.scss']
})
export class ReadItemComponent implements OnInit {

  items: Observable<Item[]>;
  constructor(private store: Store<AppState>) { 
    this.items = store.select('items');
  }

  ngOnInit(): void {
  }

}

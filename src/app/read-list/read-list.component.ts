import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { List } from '../models/list.model';
import * as ListAction from '../actions/list.actions';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.scss']
})
export class ReadListComponent implements OnInit {

  lists: Observable<List[]>;

  constructor(private store: Store<AppState>) {
    this.lists = store.select('lists');
  }

  ngOnInit(): void {
  }

  selectList(id){
    this.store.dispatch(new ListAction.SelectList(id));
  }
}

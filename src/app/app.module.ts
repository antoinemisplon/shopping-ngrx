import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducerItem } from './reducers/item.reducer';
import { reducerList } from './reducers/list.reducer';
import { CreateItemComponent } from './create-item/create-item.component';
import { ReadItemComponent } from './read-item/read-item.component';
import { RemoveItemComponent } from './remove-item/remove-item.component';
import { environment } from '../environments/environment';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ReadListComponent } from './read-list/read-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { AddItemListComponent } from './add-item-list/add-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    ReadItemComponent,
    RemoveItemComponent,
    EditItemComponent,
    ReadListComponent,
    CreateListComponent,
    AddItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      items: reducerItem,
      lists: reducerList
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';

import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { routes } from '../routes';
import {RoomService} from '../app/_services/room.service';
import {MessageService} from '../app/_services/message.service';
import { WebService } from './_services/web.service';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [MessageService, RoomService, WebService],//ajouter les services, sinon ça marche pas
  bootstrap: [AppComponent]
})
export class AppModule { }

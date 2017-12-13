import {Routes, RouterModule} from '@angular/router';
import{RoomsComponent} from './app/rooms/rooms.component';
import{RoomComponent} from './app/room/room.component';
import{MessageComponent} from './app/message/message.component';

export const routes : Routes = [
    {path : 'room', component : RoomComponent},
   
    {path : '', redirectTo : 'rooms', pathMatch : 'full'},
    {path : 'room/:id', component : RoomComponent}, // écriture à retenir 'room/:id', :x veut dire que x  est un paramètre
    {path : 'rooms', component : RoomsComponent},
]
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../_services/room.service';
import { Room } from '../_models/room'


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  newRoom: boolean;
  room : Room;
  rooms: Room[];
  //on est obligé de le mettre dans constructeur le roomservice, pour faire l'injection
  constructor(private roomService: RoomService) {
    this.updateRooms();
    this.newRoom = false;
    this.room = new Room();

  }

  updateRooms(){
    this.roomService.getAll().subscribe(reponse => this.rooms = reponse._embedded.room);
  }

  toggleNew(){
    this.newRoom = !this.newRoom;
  }
 save(){
  this.roomService.create(this.room).subscribe(a => this.updateRooms());
  
  this.newRoom = !this.newRoom;
 }
  ngOnInit() {
  }

}

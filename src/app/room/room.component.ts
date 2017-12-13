import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../_services/room.service';
import { Room } from '../_models/room';
import { Message } from '../_models/message';




@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  edit: Boolean;
  room: Room;
  message : Message;

  constructor(private route: ActivatedRoute, private roomService: RoomService) {
    this.roomService.get(+this.route.snapshot.paramMap.get('id')).subscribe(room => this.room = room);

    this.edit = false;
  }

  toggleEdit() {


    // if (this.edit == false){
    //   this.edit = true;
    // }else {
    //   this.edit = false;
    // }

    //identique à ci dessus
    this.edit = !this.edit;

  }




  save() {
    this.roomService.update(this.room, this.room.id).subscribe();
    this.edit = false;

  }

  ngOnInit() {
  }

}

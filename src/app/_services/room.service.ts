import { Injectable } from '@angular/core';
import {Room} from'../_models/room';
import { WebService } from './web.service';

@Injectable()
export class RoomService {

  //appel des services
  constructor(private webService : WebService) { 

   }

  getAll() {
    return this.webService.getAll('room');
  }
  
  update(room : Room, id : number) {
    return this.webService.update('room',room,id);
  }

  create(room : Room){
    return this.webService.create('room',room);
  }

  get(id : number) {
    return this.webService.get('room',id);
  }
  post() :void {

  }
  delete(id : number) : void {

  }

  

}

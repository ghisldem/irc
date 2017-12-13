import { Injectable } from '@angular/core';
import { Message } from '../_models/message';
import { WebService } from './web.service';


@Injectable()
export class MessageService {

  messages: Array<Message>; //mock (fausses données  pour test)

  constructor(private webService: WebService) {

  }

  getAllRoom(id: number) {
    return this.webService.getAllByElement('message', id, 'room');
  }

  getAll() {
    return this.webService.getAll('message');
  }

  get(id: number) {
    return this.webService.get('message', id); //observable
  }


  create(message: Message) {
    return this.webService.create('message', message);
  }

  delete(): void { }

  update(message: Message, id: number) {
    return this.webService.update('message', message, id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../_services/message.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() roomId: number;
  message: Message;
  messages: Message[];

  constructor( private messageService: MessageService) {

  }

  save() {
    this.message.roomId = this.roomId;
    this.message.date = new Date();
    this.messageService.create(this.message).subscribe(a =>{
      this.updateMessages();
      this.message.text = '';
    });
  }

  updateMessages() {
    this.messageService.getAllRoom(this.roomId).subscribe(reponse => this.messages = reponse._embedded.message);
  }

  ngOnInit() {
    this.message = new Message();
    this.updateMessages();
    this.message.userId = 1;
  }

}

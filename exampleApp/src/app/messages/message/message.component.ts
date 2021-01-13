import { Component } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'nx-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  lastMessage: Message;

  constructor(messageService: MessageService) {
        messageService.registerMessageHandler(m => this.lastMessage = m);
   }


}
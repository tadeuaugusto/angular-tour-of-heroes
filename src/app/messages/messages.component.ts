import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./../messages/messages.component.output.min.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}

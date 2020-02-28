import {Component, OnInit} from '@angular/core';
import {WebSocketAPI} from "./web-socket-api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'webSocketClient';
  webSocketAPI: WebSocketAPI;

  ngOnInit(): void {
    this.webSocketAPI = new WebSocketAPI();
    this.webSocketAPI._connect();
  }

}

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

export class WebSocketAPI {
  webSocketEndPoint: string = 'http://localhost:8080/ws';
	topic: string = "/topic/notification";
	stompClient: any;
	constructor(){
    			}
	_connect() {
    				let ws = new SockJS(this.webSocketEndPoint);
    				this.stompClient = Stomp.over(ws);
    				const _this = this;
    		        // this.stompClient.debug = null;
      				_this.stompClient.connect({}, (frame) => {
        						this.stompClient.subscribe(this.topic, (message) => {
          								_this.onMessageReceived(message)
          							});
        					});
    			};

	_disconnect() {
    				if (this.stompClient !== null) {
      						this.stompClient.disconnect();
      					}
    			}

	onMessageReceived(message) {
    				console.log('jjjjj', message);
    			}
}

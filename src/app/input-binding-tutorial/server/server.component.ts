import { Component } from "@angular/core";

@Component({ //we pass a javascript object inside the annotation 
    selector : 'app-server',
    templateUrl : './server.component.html'  
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}
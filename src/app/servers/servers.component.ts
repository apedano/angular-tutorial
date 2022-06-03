import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private static EMPTY_STRING: string = '';

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server has been created";
  clickCounter: number = 0;
  serverName: string = "Test server";
  username: string = ServersComponent.EMPTY_STRING;
  randomizedColor: string = "white";
  sex: string = "unknown";
  serverNames: string[] = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; //action triggered after 2 secs
    }, 2000);

  }


  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.clickCounter++;
  }

  onChangeServerName(event: InputEvent) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  addServerNameToList() {
    if (this.serverName.length > 0) {
      this.serverNames.push(this.serverName);
      this.serverName = '';
    }

  }

  onUsernameReset() {
    this.username = ServersComponent.EMPTY_STRING;
  }

  retrieveUsername() {
    return 'usernameFromMethod';
  }

  randomColor() {
    this.randomizedColor = Math.random() > 0.5 ? "red" : "green";
    console.log("New randomized color:" + this.randomizedColor);
  }

  getRandomizedColor() {
    return this.randomizedColor;
  }

  determineSex() {
    this.sex = Math.random() > 0.5 ? "male" : "female";
  }



}

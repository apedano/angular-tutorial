import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-nested',
  templateUrl: './server-nested.component.html',
  styleUrls: ['./server-nested.component.css']
})
export class ServerNestedComponent implements OnInit {

  servers = [
    { id: 1, status: 'active' },
    { id: 2, status: 'inactive' },
    { id: 3, status: 'active' },
    { id: 4, status: 'inactive' },
    { id: 5, status: 'active' },
    { id: 6, status: 'inactive' },
  ];


  constructor() { }



  ngOnInit(): void {
    console.log(this.servers);  
  }

}

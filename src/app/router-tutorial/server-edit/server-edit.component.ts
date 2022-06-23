import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit {

  @Input() id: string;
  queryParams: Params;
  fragment: string;

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('params' + this.currentRoute.snapshot.queryParams);
    console.log('fragment' + this.currentRoute.snapshot.fragment);
    this.currentRoute.queryParams
    .subscribe(
      (qParams: Params) => {
        this.queryParams = qParams;
      }
    );
    this.currentRoute.fragment
    .subscribe(
      (frag: string) => {
        this.fragment = frag;
      }
    );
    this.currentRoute.params
      .subscribe(
        (updatedParams: Params) => {
          if (updatedParams['id']) {
            this.id = updatedParams['id']
          }
        }
      );
  }

}

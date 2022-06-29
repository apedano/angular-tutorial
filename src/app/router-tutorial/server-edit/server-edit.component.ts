import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit, CanComponentDeactivate {

  @Input() id: string;
  queryParams: Params;
  fragment: string;
  changedSaved: boolean = false;

  constructor(private currentRoute: ActivatedRoute, private router: Router) { }

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

  applyChanges() {
    this.changedSaved = true;
    this.router.navigate(['../', {relativeTo: this.currentRoute}]);
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    if(this.changedSaved) {
      return true; 
    } else {
      return confirm('Do you want to confirm the changes?');
    }
  }

}

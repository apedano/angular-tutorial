import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;


  constructor(private accountService: AccountService, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.currentRoute.snapshot.params['id'];
    // this.account = {
    //   name: this.currentRoute.snapshot.params['name'],
    //   status: this.currentRoute.snapshot.params['status']
    // }
    //reactive update of data from parameters
    this.currentRoute.params
      .subscribe(
        (updatedParams: Params) => {
          if(updatedParams['id'] && updatedParams['name'] && updatedParams['status']) {
            this.id = updatedParams['id'];
            this.account = {
              name: updatedParams['name'],
              status: updatedParams['status']
            }
          }

        }
      );
  }

  onSetTo(status: string) {
    this.accountService.updateAccountStatus({ id: this.id, newStatus: status })
  }



}

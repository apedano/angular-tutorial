import { Component, OnInit } from '@angular/core';
import { Account } from './account.model';
import { AccountService } from './account.service';
import { LoggingService } from './loggin.service';

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) {
    //this is an assignement by ref and not by value
    this.accounts = accountService.accounts;
  }

  ngOnInit(): void {
    this.accountService.updateStatusEE.subscribe((updated: Account) =>
      alert("The account " + updated.name + " has been updated with status: " + updated.status)
    );
  }


  onAccountAdded(newAccount: Account) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountService.updateAccountStatus(updateInfo);
  }

  


}

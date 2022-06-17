import { EventEmitter, Injectable } from "@angular/core";

import { Account } from "./account.model";
import { LoggingService } from "./loggin.service";

@Injectable({providedIn: 'root'})
export class AccountService {

    accounts: Account[] = [
        new Account(
          'Master Account',
          'active'
        ),
        new Account(
          'Testaccount',
          'inactive'
        ),
        new Account(
          'Hidden Account',
          'unknown'
        )
      ];

      constructor(private logginService: LoggingService) {};
    
      updateStatusEE: EventEmitter<Account> = new EventEmitter<Account>();


      addAccount(newAccount: Account) {
        this.accounts.push(newAccount);
      }
    
      updateAccountStatus(updateInfo: {id: number, newStatus: string}) {
        const updatedAccount = this.accounts[updateInfo.id];
        updatedAccount.status = updateInfo.newStatus;
        this.logginService.logStatusChange(updateInfo.newStatus);
        this.updateStatusEE.emit(updatedAccount);
      }
}
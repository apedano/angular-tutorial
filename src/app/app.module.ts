import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlertsComponent } from './alerts/alerts.component';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { GameControlComponent } from './game-control/game-control.component';
import { GeneratedNumberComponent } from './game-control/generated-number/generated-number.component';
import { GameConsoleComponent } from './game-console/game-console.component';
import { CustomAttrDirectiveComponent } from './custom-attr-directive/custom-attr-directive.component';
import { BasicHighlightDirective } from './custom-attr-directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './custom-attr-directive/better-highlight/better-highlight.directive';
import { CustomStructDirectiveComponent } from './custom-struct-directive/custom-struct-directive.component';
import { UnlessDirective } from './custom-struct-directive/unless/unless.directive';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { AccountComponent } from './account-manager/account/account.component';
import { NewAccountComponent } from './account-manager/new-account/new-account.component';
import { LoggingService } from './account-manager/loggin.service';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, ServersComponent, 
    WarningComponent, SuccessComponent, 
    AlertsComponent, GameControlComponent, GeneratedNumberComponent, GameConsoleComponent, 
    CustomAttrDirectiveComponent,
    AccountManagerComponent, AccountComponent, NewAccountComponent, 
    BasicHighlightDirective,
    BetterHighlightDirective,
    CustomStructDirectiveComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

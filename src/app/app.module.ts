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

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, ServersComponent, 
    WarningComponent, SuccessComponent, 
    AlertsComponent, GameControlComponent, GeneratedNumberComponent, GameConsoleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-tutorial',
  templateUrl: './router-tutorial.component.html',
  styleUrls: ['./router-tutorial.component.css']
})
export class RouterTutorialComponent implements OnInit {

  snippet1: string = `
  const appRoutes: Routes = [
    { path: '', component: AppComponent},
    { path: 'input-binding', component: InputBindingTutorialComponent},
    { path: 'game', component: GameConsoleComponent},
    { path: 'directive', component: DirectiveTutorialComponent},
    { path: 'services', component: AccountManagerComponent},
    { path: 'routing', component: RouterTutorialComponent}
  ];
  `;

  snippet2: string = `
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  `;

  snippet3: string = `
  <a href="/game">Game</a>
  `;

  snippet4 = `
  <a routerLink="/input-binding">Input binding</a>
  <a [routerLink]="['/game']">Game</a>`;

  snippet5 = `<li role="presentation" routerLinkActive="active"><a routerLink="/input-binding">Input binding</a></li>`;

  snippet6 = `<li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"><a routerLink="/">Input binding</a></li>"`;


  constructor() { }

  ngOnInit(): void {
  }

}

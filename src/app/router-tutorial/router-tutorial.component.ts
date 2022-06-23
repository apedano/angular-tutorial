import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    { path: 'routing', component: RouterTutorialComponent},
    { path: 'account/:id/:name/:status', component: AccountComponent}
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

  snippet7 = `ngOnInit(): void {
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
  } `;

  snippet8 = `<a [routerLink]="['/account', 20, 'b_name', 'b_status']" href="">Call account route with parameters via RouterLink</a>`;

  snippet9 = `<a [routerLink]="['/servers', 5, 'edit']" 
  [queryParams]="{allowEdit:1}"
  fragment="loading"
  href="#"
  >Test link</a>`;

  snippet10 = `goToServers(id: number) {
    this.router.navigate(['/servers', id, 'edit'],
      { queryParams: { allowEdit: '1' } , 
      fragment: 'loading'});
  }`;

  snippet11 = `
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
  `;

  snippet12 = `
  { path: 'server-nested', component: ServerNestedComponent, children: [
    { path: ':id', component: ServerEditComponent}
]},
  `;

  snippet13 = ` 
  <a [routerLink]="['/server-nested', server.id]" href="#">Open server {{server.id}}</a>`;

snippet14 = `
{ path: 'not-found', component: PageNotFoundComponent },
{ path: '**', redirectTo: './not-found' }
`;

  constructor(private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToGame() {
    //array of elements of the new path
    this.router.navigate(['../game'], { relativeTo: this.currentRoute });
  }

  goToAccount() {
    this.router.navigate(['../account', '1', 'account_name', 'account_status'], { relativeTo: this.currentRoute });
  }

  goToServers(id: number) {
    this.router.navigate(['/servers', id, 'edit'],
      { queryParams: { allowEdit: '1' } , 
      fragment: 'loading'});
  }



}

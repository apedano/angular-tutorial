import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountManagerComponent } from "./account-manager/account-manager.component";
import { AccountComponent } from "./account-manager/account/account.component";
import { DirectiveTutorialComponent } from "./directive-tutorial/directive-tutorial.component";
import { GameConsoleComponent } from "./game-console/game-console.component";
import { InputBindingTutorialComponent } from "./input-binding-tutorial/input-binding-tutorial.component";
import { PageNotFoundComponent } from "./router-tutorial/page-not-found/page-not-found.component";
import { RouterTutorialComponent } from "./router-tutorial/router-tutorial.component";
import { ServerEditComponent } from "./router-tutorial/server-edit/server-edit.component";
import { ServerNestedComponent } from "./router-tutorial/server-nested/server-nested.component";

const appRoutes: Routes = [
    { path: '', component: GameConsoleComponent },
    { path: 'input-binding', component: InputBindingTutorialComponent },
    { path: 'game', component: GameConsoleComponent },
    { path: 'directive', component: DirectiveTutorialComponent },
    { path: 'services', component: AccountManagerComponent },
    { path: 'routing', component: RouterTutorialComponent },
    { path: 'account/:id/:name/:status', component: AccountComponent },
    // { path: 'servers', component: ServerEditComponent, children: [
    //   { path: ':id/edit', component: ServerEditComponent}
    // ]},
    {
        path: 'server-nested', component: ServerNestedComponent, children: [
            { path: ':id', component: ServerEditComponent }
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {


}
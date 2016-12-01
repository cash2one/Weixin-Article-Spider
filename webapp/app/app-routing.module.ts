import {Routes, RouterModule} from "@angular/router";
import {ArticlesComponent} from "./articles.component";
import {NgModule} from "@angular/core";
import {StatusComponent} from "./status.component";
import {SettingsComponent} from "./settings.component";
import {LogsComponent} from "./logs.component";
import {IFrameComponent} from "./iframe.component";
import {formatDate} from "./utils";
/**
 * Created by yuriel on 11/23/16.
 */
let todayString: String = formatDate();
const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full'},
  { path: 'articles', redirectTo: 'articles/created_at/' + todayString, pathMatch: 'full'},
  { path: 'articles/created_at/:date', component: ArticlesComponent },
  { path: 'articles/written/:date', component: ArticlesComponent },
  { path: 'articles/author/:author', component: ArticlesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'status', component: StatusComponent },
  { path: 'proxy/:url_encoded', component: IFrameComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

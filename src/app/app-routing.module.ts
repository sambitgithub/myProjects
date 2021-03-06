import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {Test01Component} from './test01/test01.component';
import {Test02Component} from './test02/test02.component';
import {SwitchComponent} from './switch/switch.component';
import {DesktoppageComponent} from './desktoppage/desktoppage.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'test1', component: Test01Component},
  {path: 'test2', component: Test02Component},
  {path: 'switch', component: SwitchComponent},
  {path: 'desktoppage', component: DesktoppageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

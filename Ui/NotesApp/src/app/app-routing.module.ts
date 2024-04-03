import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path:'', component:LandingPageComponent},
  { path: 'newNote', component:HomePageComponent } ,
  { path: 'list', component:ListPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents=[HomePageComponent,LandingPageComponent]
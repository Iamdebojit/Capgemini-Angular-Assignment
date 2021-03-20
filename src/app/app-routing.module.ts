import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"" , pathMatch:"full" , redirectTo:"/home"},
  {path:"home", component: HomeComponent},
  {path: "apply", component: ApplyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

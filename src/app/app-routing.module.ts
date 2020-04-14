import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AblesungenComponent } from './ablesungen/ablesungen.component';
import { StatistikenComponent } from './statistiken/statistiken.component';
import { AblesungComponent } from './ablesung/ablesung.component';


const routes: Routes = [
  {
    path: 'ablesungen',
    component: AblesungenComponent
  },
  {
    path: 'ablesungen/:id',
    component: AblesungComponent
  },
  {
    path: 'statistiken',
    component: StatistikenComponent
  },
  {
    path: '',
    redirectTo: '/ablesungen',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

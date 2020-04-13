import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AblesungenComponent } from './ablesungen/ablesungen.component';


const routes: Routes = [
  {
    path: 'ablesungen',
    component: AblesungenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

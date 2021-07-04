import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCreaturePage } from './add-creature.page';

const routes: Routes = [
  {
    path: '',
    component: AddCreaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCreaturePageRoutingModule {}

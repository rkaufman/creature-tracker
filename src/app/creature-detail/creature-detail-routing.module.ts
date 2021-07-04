import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavParams } from '@ionic/angular';

import { CreatureDetailPage } from './creature-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CreatureDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatureDetailPageRoutingModule {}

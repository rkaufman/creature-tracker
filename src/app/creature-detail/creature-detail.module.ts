import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatureDetailPageRoutingModule } from './creature-detail-routing.module';

import { CreatureDetailPage } from './creature-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatureDetailPageRoutingModule
  ],
  declarations: [CreatureDetailPage]
})
export class CreatureDetailPageModule {}

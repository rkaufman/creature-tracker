import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCreaturePageRoutingModule } from './add-creature-routing.module';

import { AddCreaturePage } from './add-creature.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddCreaturePageRoutingModule
  ],
  declarations: [AddCreaturePage]
})
export class AddCreaturePageModule {}

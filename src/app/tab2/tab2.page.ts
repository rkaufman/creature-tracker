import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public creatures: any;
  constructor(private creatureSvc: CreatureService,
    private nav: NavController) {
    this.creatureSvc.getCreatures().then(data=> this.creatures = data);
  }
  itemTapped($event, creature){
    let navigationExtras: NavigationExtras = {
      state: {
        creature
      }
    };
    this.nav.navigateForward(['creature-detail'],navigationExtras);
  }
  addCreature(){
    this.nav.navigateForward('add-creature');
  }
}

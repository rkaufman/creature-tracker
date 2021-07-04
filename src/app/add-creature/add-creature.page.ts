import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'app-add-creature',
  templateUrl: './add-creature.page.html',
  styleUrls: ['./add-creature.page.scss'],
})
export class AddCreaturePage implements OnInit {
  public creature: any;
  constructor(private nav: NavController,
    private formBuilder: FormBuilder,
    private creatureService: CreatureService) { }
    creatureForm = this.formBuilder.group({
      commonName: [''],
      class: [''],
      family: [''],
      kingdom: [''],
      description: [''],
      img: ['Picture_Not_Yet_Available.png']
    });
  ngOnInit() {
  }
  cancel(){
    this.nav.pop();
  }
  public submitForm(){
    //add code to service to add this to firebase db then navigate back to creatures
    this.creatureForm.value.id = this.createId();
    this.creatureService.addCreature(this.creatureForm.value);
    console.log(this.creatureForm.value);
    this.nav.navigateForward('tabs/tab2');
  }
  createId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=> {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

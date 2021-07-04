import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-creature-detail',
  templateUrl: './creature-detail.page.html',
  styleUrls: ['./creature-detail.page.scss'],
})
export class CreatureDetailPage implements OnInit {
  public creature: any = {};
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private nav: NavController) {
    this.route.queryParams.subscribe(p=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.creature = this.router.getCurrentNavigation().extras.state.creature;
        console.log(this.creature);
      }
    });
   }

  ngOnInit() {
  }
  backToCreatures(){
    this.nav.pop();
  }
}

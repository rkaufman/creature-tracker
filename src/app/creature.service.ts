import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Creature } from './creature';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {
  private baseUrl = 'https://animalcollector-1ae74-default-rtdb.firebaseio.com/'
  constructor(public http: HttpClient) { }

  getCreatures(){
    return new Promise(resolve => {this.http.get(`${this.baseUrl}/creatures.json`)
    .subscribe(res=>{
      let data = [];
      Object.entries(res).forEach(([key, value])=>{
        data.push(value);
      });
      return resolve(data);})});
  }

  addCreature(creature){
    return new Promise(resolve=>{
      this.http.post(`${this.baseUrl}/creatures.json`,creature)
      .subscribe(res=>resolve(res));
    });
  }
}

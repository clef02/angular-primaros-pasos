import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name:string ='ironman';
  age:number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`  
  }

  chageHero():void{
    this.name = 'Spiderman';
  }
  chageAge():void{
    this.age = 24;

  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(elemento =>{
    //   elemento.innerHTML = '<h1>ironman</h1>';
    // });
  
  }


}

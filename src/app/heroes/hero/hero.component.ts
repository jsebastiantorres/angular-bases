import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = 'Spiderman';
  public age: number = 25;
  // public metodo: string = '';
  // public capitalizado: string = '';


  getHeroeDescription(): string {
    return `${this.name} ${this.age}`
  }

  get capitalizado(): string {
    return this.name.toUpperCase();
  }

  changeName(): void {
    this.name = 'Batman';
  }

  changeAge(): void {
    this.age = 35
  }

  reset(): void {
    this.name = 'Spiderman';
    this.age = 25;

    document.querySelector('h1')!.innerHTML = 'Desde Angular';

  }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Batman', 'Thor', 'Ironman'];
  public heroeDeleted?: string;

  deleteHeroe(): void {
    this.heroeDeleted = this.heroesNames.pop();
    console.log(this.heroeDeleted);
  }


}   

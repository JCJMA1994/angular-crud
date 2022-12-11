import { Component } from '@angular/core';
import {PersonModel} from "./person.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List Person';
  persons: PersonModel[] = [new PersonModel('Joao', 'Moreno'),
    new PersonModel('Isabel', 'Perez')];
  personAdd(person: PersonModel){
    this.persons.push(person)
  }
}

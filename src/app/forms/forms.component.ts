import {Component, EventEmitter, Output} from '@angular/core';
import {PersonModel} from "../person.model";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @Output() personCreate = new EventEmitter<PersonModel>();
  nameInput: string = '';
  lastnameInput: string = '';

  addPerson(){
    let person = new PersonModel(this.nameInput, this.lastnameInput);
    this.personCreate.emit(person);
  }
}

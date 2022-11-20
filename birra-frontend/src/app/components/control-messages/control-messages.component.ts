import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ValidatorsExtend } from 'src/app/helpers/validators-extend';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent {

  @Input() control: AbstractControl = new FormControl();
  @Input() notContainer = false;
    constructor() {}

    get errorMessage() {
      for (const propertyName in this.control.errors) {
          if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
              return ValidatorsExtend.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
          }
      }
      return null;
    }

}

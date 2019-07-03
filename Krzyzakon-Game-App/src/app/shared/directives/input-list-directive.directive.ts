import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[inputCorrectList]',
  providers: [{provide: NG_VALIDATORS, useExisting: InputListDirectiveDirective, multi:true}]
})
export class InputListDirectiveDirective implements Validator{

  @Input('playersList') playersList: any;

  constructor() {}

  notSelected(name) {
    let check:boolean;
    check = false;
    for (let players of this.playersList) {
      if (players.name === name){
        check = true;
        break;
      }
    }
      return check;
  }
  validate(control: AbstractControl): ValidationErrors | null {
    if (this.notSelected(control.value) || control.value == null || control.value == '') {
      return null;
    } else {
      return {'inputCorrectList': true};
    }
  }

  registerOnValidatorChange(fn: () => void): void {
  }
}

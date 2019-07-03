import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[uniquePlayer]',
  providers: [{provide: NG_VALIDATORS, useExisting: UniquePlayerDirectiveDirective, multi:true}]
})
export class UniquePlayerDirectiveDirective implements Validator {

  @Input('playersList') playersList: any;

  constructor() { }

  checkIfPlayerHaveUniqueName(name:string){
    let check: boolean;
    check = true;

    for (let player of this.playersList) {
      if (name === player.name) {
        check = false;
        break;
      }
    }

    return check;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.checkIfPlayerHaveUniqueName(control.value) || control.value == null || control.value == '') {
      return null;
    } else {
      return {'uniquePlayer': true};
    }
  }

}

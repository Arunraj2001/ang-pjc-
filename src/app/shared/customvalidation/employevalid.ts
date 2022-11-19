import { AbstractControl, ValidationErrors } from "@angular/forms";

 export function gtr10(cntrl:AbstractControl):ValidationErrors|null{
    let frmctrval = cntrl.value;

    if(frmctrval<=10){
        return{'gtr10':false,'msg':'value should be greater then 10'}
    }
    else{
        return null;
    }
}
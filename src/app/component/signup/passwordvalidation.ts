import {AbstractControl} from '@angular/forms';
export class PasswordConfirm {
    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('re_password').value; // to get value in input tag
        if(password != confirmPassword) {
            AC.get('re_password').setErrors( {MatchPassword: true} )
        } else {
            return null
        }
    }
}
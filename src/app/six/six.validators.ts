import { AbstractControl, ValidationErrors } from '@angular/forms';

export class OldPasswordValidators {
    static incorrectPassword(control: AbstractControl) : Promise <ValidationErrors | null > {
        return new Promise((resolve) => {
            setTimeout(() => {
                if(control.value !== '1234') {
                    resolve({incorrectPassword: true})
                }else {
                    resolve(null)
                }
            }, 1000)
        })
    }

    static notMatching(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value) {
            return { notMatching: true };
        }else {
            return null;
        }
    }
}
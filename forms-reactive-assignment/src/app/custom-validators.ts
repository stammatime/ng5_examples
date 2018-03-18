import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators {

  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    // synchronus
    if (control.value === 'test') {
      return { 'projNameForbidden': true };
    }
    return null;
  }

  static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'testing') {
          resolve({ 'projNameForbidden': true });
        }
        resolve(null);
      }, 1500);
    });
    return promise;
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // gets local variables from template
  submitted = false;
  defaultQuestion = 'pet';
  @ViewChild('f') signupForm: NgForm;
  answer = '';
  genders = ['male', 'female', 'other'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
    // resets all values to values you specify
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
  }

  //  onSubmit(form: NgForm) {
  //    console.log('submitted!');
  //    console.log(form);
  //  }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.username;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    // resets form to default values, even classes get reset
    this.signupForm.reset();
  }
}

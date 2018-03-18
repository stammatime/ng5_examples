import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reactiveForm = new FormGroup({
    projectName: new FormControl('', [Validators.required, CustomValidators.invalidProjectName],
    CustomValidators.asyncInvalidProjectName),
    email: new FormControl('', [Validators.required, Validators.email]),
    status: new FormControl('')
  });

  statusOptions = ['Stable', 'Critical', 'Finished'];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.reactiveForm.valid);
    console.log(this.reactiveForm);
  }

}

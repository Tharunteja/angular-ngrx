import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.signUpForm = this.formBuilder.group({
      firstName: ['TT', [Validators.minLength(4)]],
      lastName: ['G', []],
      email: ['t@g.com',[]],
      age: [23, []],
      dob: [null, []]
    })
  }

  onSubmitForm(){
    console.log('form submitted');
    console.log(this.signUpForm.value)
  }
}

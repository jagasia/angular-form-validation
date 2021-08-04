import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() title:string='';
  signupForm:any;

  constructor(private fb:FormBuilder) { 
    this.signupForm=this.fb.group({
      username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      cpassword:['',[Validators.required]],
      firstName:[],
      lastName:[],
      phone:[''],
      email:[]
    },
    {
      validator: this.confirmedValidator('password','cpassword')
    });
  }

  ngOnInit(): void {
  }


  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  get f()
  {
    return this.signupForm.controls;
  }

  fn1()
  {
    console.log(this.signupForm.value);
  }
}

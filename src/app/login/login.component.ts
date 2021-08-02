import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
//   template:`<form class="container-fluid">
//   <!-- User Name: <input type="text" name="" id="" class="form-control" [value]="uid"> -->
//   User Name: <input type="text" name="x" id="" class="form-control" [(ngModel)]="uid">
//   Password: <input type="password" name="y" id="" class="form-control" [(ngModel)]="pwd"><br>
//   <input type="button" value="Login" class="btn btn-success" (click)="fn1()">
//   &nbsp;<input type="reset" value="Reset" class="btn btn-warning">
// </form>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uid:string='rama';
  pwd:string='';
  message:string='';
  constructor() { }

  ngOnInit(): void {
  }
  fn1()
  {
    alert(this.uid+" : "+this.pwd)
    if(this.uid==this.pwd)
    {
      this.message='Login Failed';   
    }
    else{
      this.message='Login is successful';
    }
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';     //wrong

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
  @Input() title:string='This is title';
  @Output() loginEvent=new EventEmitter();
  uid:string='rama';
  pwd:string='';
  message:string='';
  constructor() { }

  ngOnInit(): void {
  }
  fn1()
  {
    // alert(this.uid+" : "+this.pwd)
    this.loginEvent.emit(this.uid+","+this.pwd);    
  }
}

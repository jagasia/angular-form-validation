import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-demo';

  fnLogin(str:string)
  {
    alert('Parent received output from child component as '+str);
    var arr=str.split(',');
    alert(arr[0]);
    alert(arr[1]);
  }
}

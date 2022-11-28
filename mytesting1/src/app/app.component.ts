import { Component } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytesting1';

  myfunction(){
    console.log("data")
  }

ngOnInit(){
  this.myfunction()

}

myfunction$ = new Observable((x)=>{
  console.log("apidata")
  
})

}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsassgn',
  templateUrl: './formsassgn.component.html',
  styleUrls: ['./formsassgn.component.css']
})
export class FormsassgnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
 }
 userdetails={
  FirstName:"",
  LastName:"",
  Age:"",
  Email:"",
  Password:"",
  ConfirmPassword:""

}
submit(received:any){
  console.log(received)
}
 }


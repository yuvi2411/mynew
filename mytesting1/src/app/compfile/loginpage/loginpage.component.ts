import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,  Validators } from '@angular/forms';
import { ApiserveService } from 'src/app/services/apiserve.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
[x: string]: any;

  constructor(public servicedata:ApiserveService) { }

  ngOnInit(): void {
    
  }
  

 mylogin=new FormGroup({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})

//    public loginForm = new FormGroup({
//     username: new FormControl('', Validators.required),
//     password: new FormControl('', Validators.required)
//   });
// login(){
//  this.servicedata.authorization(true)
// }
// logout() {
//   this.servicedata.authorization(false)
  
// }
  }

import { Component, OnInit } from '@angular/core';
import { ApiserveService } from 'src/app/services/apiserve.service';

@Component({
  selector: 'app-book-assgn',
  templateUrl: './book-assgn.component.html',
  styleUrls: ['./book-assgn.component.css']
})
export class BookAssgnComponent implements OnInit {

  constructor(private servicedata:ApiserveService) { }
   data:any
  ngOnInit(): void {
  this.servicedata.getbook().subscribe(receivedata=>{
  this.data=receivedata
  // console.log(receivedata)
  this.servicedata.getdata().subscribe()
  
 
})

  }
  bookdetails:boolean=true
  childdata:any

  edit(data:any){
  console.log(data)
  this.bookdetails=false

  this.childdata=data
  }
  save(){
//  console.log(this.childdata)
  // this.servicedata.postdata(this.data).subscribe()
  this.bookdetails=true
  }

}

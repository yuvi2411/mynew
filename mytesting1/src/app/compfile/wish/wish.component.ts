import { Component, OnInit } from '@angular/core';
import { ApiserveService } from 'src/app/services/apiserve.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  constructor(private servicedata:ApiserveService) { }

  ngOnInit(): void {
   
  this.servicedata.getdata().subscribe()
  
 

  
  }
  removefromwishlist(){
    this.servicedata.remove().subscribe()
     }
    
}

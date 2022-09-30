import { Component, OnInit } from '@angular/core';
import { ObseerveserviceService } from 'src/app/services/obseerveservice.service';

@Component({
  selector: 'app-obscomp',
  templateUrl: './obscomp.component.html',
  styleUrls: ['./obscomp.component.css']
})
export class ObscompComponent implements OnInit {

Subscription:any
message=0
  constructor(private receive:ObseerveserviceService) { }

  ngOnInit(): void {
   this.Subscription=this.receive.observablemsg.subscribe((data)=> {
    this.message=data
   })
  }
sendvalue(){
  this.receive.getdat(1)
}
}

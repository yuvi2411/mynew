import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ObseerveserviceService {

  constructor() { }
  shareddata=new BehaviorSubject(0)
  observablemsg=this.shareddata.asObservable()
  value=0
  getdat(data:number){
    
    this.shareddata.next(data +this.value++)
  }
}

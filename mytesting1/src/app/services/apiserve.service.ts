import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserveService {

  constructor(private http:HttpClient) { }

  getdata(url:string){
    const data=this.http.get(url)
    return data
  }
}

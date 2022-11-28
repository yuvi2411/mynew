import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserveService {

  constructor(private http:HttpClient) { }

  getdata(){
    const data=this.http.post<any>("https://bookcart.azurewebsites.net/api/login",{username:"yuvarajs123",password:"Tamil_2411"})
    .pipe(map((response: { token: string; }) => { 
        localStorage.setItem('authToken', response.token);
       }));
      return data
  }
  remove(){
    const data= this.http.post<any>(`https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/1258/2`, {},)
     return data
    

  }
  getbook(){
    const  data=this.http.get("https://bookcart.azurewebsites.net/api/Book")
    return data
  }
 postdata(postdadata:any){

  const  data=this.http.put("https://bookcart.azurewebsites.net/api/Book",postdadata)
  return data
 }

 public loggedin:boolean=false

 authorization(value:any){
   this.loggedin=value
 }
 isUserlogggedin(){
    return this.loggedin
 }


}

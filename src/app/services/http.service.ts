import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactWithUs } from '../models/contact-us';

let formData = new FormData();
formData.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private httpClient : HttpClient) { }

  post(url : string)
  {
    return this.httpClient.post(url,formData);
  }

  posttesting(url : string,place_id : string)
  {

    debugger;
    formData.append("place_id",place_id);
    let data = this.httpClient.post(url,formData);
     return data;
  }


  contactDetails(url:string,data : contactWithUs)
  {
  formData.append("full_name",data.fullName);
    formData.append("email",data.email);
    formData.append("number",data.number);
    formData.append("message",data.description);
     return this.httpClient.post(url,formData);
  }

  // get(url?:  string) : number
  // {
    //url send kari saki nd na kari to pn chale
  //   return 123;
  // }



}



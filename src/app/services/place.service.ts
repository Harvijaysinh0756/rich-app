
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private httpservice : HttpService) { }

  private baseurl = "https://unesco.notionprojects.tech/api";

  getplace(url : string)
  {
    return this.httpservice.post(this.baseurl+url);
  }

  // getPlaceDetail(url : string, data : object){
  //   return this.httpservice.postWithData(this.baseurl+url,);
  // }


  getplaceDetail(place_id : string){
      
    let a = this.httpservice.posttesting(this.baseurl+"/get_place_detail",place_id);
    return a;
  }

 

}

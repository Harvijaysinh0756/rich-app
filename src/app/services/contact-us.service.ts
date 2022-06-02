import { Injectable } from '@angular/core';
import { contactWithUs } from '../models/contact-us';

import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
 

  constructor(private httpservice : HttpService) { }

  private baseurl = "https://unesco.notionprojects.tech/api";


  savecontactDetail(data : contactWithUs)
  {
    return this.httpservice.contactDetails(this.baseurl+"/contact_us",data);
  }
}

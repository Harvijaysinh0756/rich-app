import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SiteSettingService {

  constructor(private httpService : HttpService) { }

  private baseurl = "https://unesco.notionprojects.tech/api";

  social(url : string)
  {
      return this.httpService.post(this.baseurl+url);
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpService : HttpService ) { }

  private baseurl = "https://unesco.notionprojects.tech/api";

  getblog(url : string)
  {
    let blog = this.httpService.post(this.baseurl+url);
    return blog;
  }
}

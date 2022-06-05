import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ResponseSingle } from './models/response';
import { SiteSettingService } from './services/site-setting.service';
// import { ApiService } from './services/api.service';

let siteSetting : ResponseSingle = {
  status : false,
  message : "",
  data : {}

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  title = 'rich-app';  
  siteSetting : ResponseSingle= siteSetting;
  // constructor(private apiService : ApiService){}

  constructor(private siteSettingService : SiteSettingService) {}

  ngOnInit(): void {
    // this.apiService.getTodos("/todos").subscribe( res => {
      // console.log(res);
    // });


     this.siteSettingService.social("/get_site_setting").subscribe((result) => { 

      let jsonstring = JSON.stringify(result);
      this.siteSetting = JSON.parse(jsonstring);
     })

  
  }
}

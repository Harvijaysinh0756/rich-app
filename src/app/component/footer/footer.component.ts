import { Component, Input, OnInit } from '@angular/core';
import { siteSetting } from 'src/app/models/siteSetting';
import {  ResponseSingle } from 'src/app/models/response';


let siteSetting : ResponseSingle = {
  status : false,
  message : "",
  data : {}
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  @Input() siteSetting : ResponseSingle = siteSetting;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { siteSetting } from 'src/app/models/siteSetting';
import { Response, ResponseSingle } from 'src/app/models/response';

let siteSetting : ResponseSingle = {
  status : false,
  message : "",
  data : {}
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() siteSetting : ResponseSingle = siteSetting;

  hash : string = "" ;

  constructor(private router: ActivatedRoute ) { }

  ngOnInit(): void {

    this.router.fragment.subscribe( (fragment) =>{

    this.hash = (fragment) ? fragment : "";

    });

  } 
}

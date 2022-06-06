import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; 
import {  contactWithUs } from 'src/app/models/contact-us';
import { Response,  } from 'src/app/models/response';
import { ContactUsService } from 'src/app/services/contact-us.service';


let  resContact : Response = {
  status : false,
  message : "",
  data : []
} 

// let contact : contactWithUs = {

// }
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // @Input()  fullname!: number | string; 
  contact : contactWithUs = {
    fullName : "",
    email : "",
    number : "",
    description : ""
  }

  contactUS : Response = resContact;

  constructor(private contactusservice : ContactUsService) { }

  // this.contactUS.message = 

  ngOnInit(): void {
  
  }

    onSubmit()
    {
      
      this.contactusservice.savecontactDetail(this.contact).subscribe((result) => {
        // console.log(result.message);

        resContact = JSON.parse(JSON.stringify(result));
        alert(resContact.message);
        // console.log(resContact.message);
      })
   
      // console.log(this.contact);

    }

}

  let sum = (a: number,b : number) => {
    return a+b;
  }

  function suma(){

  }

  () => {


  }
import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Response } from 'src/app/models/response';
import { place } from 'src/app/models/place';

let place : Response = {
    status : false,
    message : "",
    data : []
}

@Component({
  selector: 'app-heritage-image-gallery',
  templateUrl: './heritage-image-gallery.component.html',
  styleUrls: ['./heritage-image-gallery.component.css']
})
export class HeritageImageGalleryComponent implements OnInit {

  
  places : Response = place;
  constructor(private placeservice : PlaceService) { }

  ngOnInit(): void {

    this.placeservice.getplace("/get_places").subscribe((placess) => {
      
      let jsonstring = JSON.stringify(placess);
      //  console.log(jsonstring);
      this.places =  JSON.parse(jsonstring);
      // console.log(this.places);
    });
  }

}

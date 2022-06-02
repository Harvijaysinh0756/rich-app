import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Response } from 'src/app/models/response';


let places : Response = {
  status : false,
  message : "",
  data : []
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  places : Response = places;

  constructor(private placeService : PlaceService) { }

  ngOnInit(): void {

  this.placeService.getplace("/get_places").subscribe((result) => {
    
    let jsonstring = JSON.stringify(result);
    // console.log(jsonstring);
    this.places = JSON.parse(jsonstring);
    console.log(this.places);

  });

  }

}

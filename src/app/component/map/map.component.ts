import { Component,  OnInit } from '@angular/core';
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

  lat : number = 18.0603947;
  lng : number = -63.0511808;
  // zoom : number = 12 ;
  // icanurl : string = "";3.06627299999999
  iconn : string = "assets/images/map-loc.png ";

  places : Response = places;

  constructor(private placeService : PlaceService) { }

  ngOnInit(): void {

  this.placeService.getplace("/get_places").subscribe((result) => {
    
    // let jsonstring = JSON.stringify(result);
    // console.log(jsonstring);
    this.places = JSON.parse(JSON.stringify(result));
    console.log(this.places);
    // if()

  });

  }

}

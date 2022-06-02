import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseSingle } from 'src/app/models/response';
import { PlaceService } from 'src/app/services/place.service';

let default_place_data : ResponseSingle = {
  status : false,
  message : "",
  data : {}
}

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  place_id : string = "";

  place_data : ResponseSingle = default_place_data;

  constructor(private placeService : PlaceService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.place_id = this.router.snapshot.paramMap.get("place_id") || "";

    this.placeService.getplaceDetail(this.place_id).subscribe((res) => {

      this.place_data = JSON.parse(JSON.stringify(res));
      console.log(res);
    });


    // let data : any = { place_id : this.place_id }

    // for(let key in data){
    //   formData.append(key,data[key])
    // }

      // this.placeService.getPlaceDetail("/get_place_detail",formData).subscribe((result) => {
        
      //   console.log(result);
      
      // });

  }

}

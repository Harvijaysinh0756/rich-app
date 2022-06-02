import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';
import { PlaceDetailsComponent } from './component/place-details/place-details.component';

const routes: Routes = [
  // {path:'', redirectTo:"home"},
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  {path:'home',component:HomeComponent},
  {path:'map',component:MapComponent},
  {path:'place-details/:place_id',component:PlaceDetailsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
                                        {
                                        scrollPositionRestoration : 'enabled',
                                        anchorScrolling : 'enabled',
                                        scrollOffset: [0, 180] // [x, y]
                                        }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

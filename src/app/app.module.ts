import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SliderComponent } from './component/home/slider/slider.component';
import { HeritageComponent } from './component/home/heritage/heritage.component';
import { HeritageDetailsComponent } from './component/home/heritage-details/heritage-details.component';
import { HeritageImageGalleryComponent } from './component/home/heritage-image-gallery/heritage-image-gallery.component';
import { GridGalleryComponent } from './component/home/grid-gallery/grid-gallery.component';
import { VideoTagComponent } from './component/home/video-tag/video-tag.component';
import { ContactUsComponent } from './component/home/contact-us/contact-us.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';
import { HttpClientModule } from  '@angular/common/http';
import { HttpService, } from './services/http.service';
import { BlogService } from './services/blog.service';
import { BlogComponent } from './component/blog/blog.component';
import { PlaceService } from './services/place.service';
import { SiteSettingService } from './services/site-setting.service';
import { PlaceDetailsComponent } from './component/place-details/place-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HeritageComponent,
    HeritageDetailsComponent,
    HeritageImageGalleryComponent,
    GridGalleryComponent,
    VideoTagComponent,
    ContactUsComponent,
    FooterComponent,
    HomeComponent,
    MapComponent,
    BlogComponent,
    PlaceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService,BlogService,PlaceService,SiteSettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

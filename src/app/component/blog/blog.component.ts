import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { Response } from 'src/app/models/response';
import { BlogService } from 'src/app/services/blog.service';

let blog : Response = {
  status : false,
  message : "",
  data : []
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  blogs : Response = blog;

  // ress : number = 0;

  constructor(private blogService : BlogService) {

  }

  ngOnInit(): void {

    this.blogService.getblog("/get_blogs_for_home").subscribe( (result) => {
      // console.log(result);
      let jsonstring = JSON.stringify(result);
      this.blogs = JSON.parse(jsonstring);
      // console.log(this.blogs);
    });
  
   //this.blogService.getblog("/get_blogs_for_home").subscribe( result => { console.log(result);})
  }
}

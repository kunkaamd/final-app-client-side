import { TitleService } from './../../service/title.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css'],
  providers: [FetchdataService]
})
export class AllPostComponent implements OnInit {

  posts:any;
  constructor(private fetchService:FetchdataService,private titleservice:TitleService) { 
    this.titleservice.changeTitle("Bài viết");
  }

  ngOnInit() {
    this.fetchService.fetchDataMethodGet('post').subscribe(
      data => {
        this.posts = data['data'];
      },
      error => {}
    );
  }

}

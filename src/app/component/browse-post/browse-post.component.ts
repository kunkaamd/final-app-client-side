import { TitleService } from 'app/service/title.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-post',
  templateUrl: './browse-post.component.html',
  styleUrls: ['./browse-post.component.css'],
  providers: [FetchdataService]
})
export class BrowsePostComponent implements OnInit {

  posts:any;
  constructor(private fetchService:FetchdataService,private titleservice:TitleService) { 
    this.titleservice.changeTitle("Duyệt bài viết");
  }

  ngOnInit() {
    this.fetchService.fetchDataMethodGet('post-not-published').subscribe(
      data => {
        this.posts = data['data'];
      },
      error => {}
    );
  }

}

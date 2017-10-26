import { TitleService } from './../../service/title.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [FetchdataService]
})
export class PostDetailComponent implements OnInit {
  postId:string;
  post:any;
  constructor(private route: ActivatedRoute,private fetchService:FetchdataService,private titleService:TitleService) { }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.fetchService.fetchDataMethodGet('post/'+param['id']).subscribe(
          data => {
            this.postId = param['id'];
            this.post = data['data'][0];
            this.titleService.changeTitle(this.post.title);
          },
          error => {}
        );
      }
    )
  }

}

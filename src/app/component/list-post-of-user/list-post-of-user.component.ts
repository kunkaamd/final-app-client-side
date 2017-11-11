import { ActivatedRoute } from '@angular/router';
import {FetchdataService} from '../../service/fetchdata.service';
import {TitleService} from '../../service/title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post-of-user',
  templateUrl: './list-post-of-user.component.html',
  styleUrls: ['./list-post-of-user.component.css'],
  providers: [FetchdataService]
})
export class ListPostOfUserComponent implements OnInit {
  post:any;
  series:any;
  user:any;
  constructor(private titleservice:TitleService,private fetchData:FetchdataService,private router: ActivatedRoute) { 
  }

  ngOnInit() {
    this.router.params.subscribe(
      param => {
        this.fetchData.fetchDataMethodGet('information-of-user/'+param['id']).subscribe(
          data => {
            this.post = data['data'].post;
            this.series = data['data'].series;
            this.user = data['data'].user;
            this.titleservice.changeTitle('Bài viết của '+ this.user.name);
          },
          error => {}
        );
      }
    )
  }
}

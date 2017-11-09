import { GlobalVariable } from 'app/service/global.service';
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

  list:any;
  avatarURL:string;
  constructor(private titleservice:TitleService,private fetchData:FetchdataService,private router: ActivatedRoute) { 
  }

  ngOnInit() {
    this.router.params.subscribe(
      param => {
        this.fetchData.fetchDataMethodGet('post-of-user/'+param['id']).subscribe(
          data => {
            this.list = data['data'];
            this.avatarURL = GlobalVariable.BASE_IMAGE_URL + this.list[0].user.avatar;
            this.titleservice.changeTitle('Bài viết của '+ this.list[0].user.name);
          },
          error => {}
        );
      }
    )
  }
}

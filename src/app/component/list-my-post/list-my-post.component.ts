import { FetchdataService } from './../../service/fetchdata.service';
import { UserService } from './../../service/user.service';
import { TitleService } from './../../service/title.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'app/service/global.service';
@Component({
  selector: 'app-list-my-post',
  templateUrl: './list-my-post.component.html',
  styleUrls: ['./list-my-post.component.css'],
  providers: [FetchdataService]
})
export class ListMyPostComponent implements OnInit {
  list:any;
  avatarURL:string;
  constructor(route: ActivatedRoute,private titleservice:TitleService,private userService:UserService,
  private fetchData:FetchdataService) { 
    this.titleservice.changeTitle("Bài viết của "+this.userService.name);
  }

  ngOnInit() {
    this.fetchData.fetchDataMethodGet('post-of-user/'+this.userService.id).subscribe(
      data => {
        this.list = data['data'];
        this.avatarURL = GlobalVariable.BASE_IMAGE_URL + this.list[0].user.avatar;
      },
      error => {}
    );
  }

}

import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from './../../service/fetchdata.service';
import { TitleService } from 'app/service/title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-user',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.css'],
  providers: [FetchdataService]
})
export class InformationUserComponent implements OnInit {

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
            console.log(data);
            this.post = data['data'].post;
            this.series = data['data'].series;
            this.user = data['data'].user;
            this.addUserToData();
            console.log(this.series);
            this.titleservice.changeTitle('Bài viết của '+ this.user.name);
          },
          error => {}
        );
      }
    )
  }
  addUserToData(){
    this.series = this.series.map(item => {
      item.user = this.user;
      return item;
    });
    this.post = this.post.map(item => {
      item.user = this.user;
      return item;
    });
  }

}

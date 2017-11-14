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

  post:any = {};
  series:any = {};
  user:any = {};
  constructor(private titleservice:TitleService,private fetchData:FetchdataService,private router: ActivatedRoute) { 
  }

  ngOnInit() {
    this.router.params.subscribe(
      param => {
        this.getPost('');
        this.getSeries('');
      }
    )
  }
  getPost(page:string){
    this.fetchData.fetchDataMethodGet('post-of-user/'+this.router.snapshot.params['id']+page).subscribe(
      data => {
        console.log(data['data']);
        this.post = data['data'].post;
        this.user = data['data'].user;
        this.addUserToData(this.post.data);
        this.titleservice.changeTitle('Bài viết của '+ this.user.name);
      },
      error => {}
    );
  }
  getSeries(page:string){
    this.fetchData.fetchDataMethodGet('series-of-user/'+this.router.snapshot.params['id']+page).subscribe(
      data => {
        this.series = data['data'].series;
        this.addUserToData(this.series.data);
      },
      error => {}
    );
  }

  addUserToData(data:any){
    data = data.map(item => {
      item.user = this.user;
      return item;
    });
    return data;
  }
  pageChangePost(event:any){
    this.getPost('?page='+(event.pageIndex+1));
  }
  pageChangeSeries(event:any){
    this.getSeries('?page='+(event.pageIndex+1));
  }
}

import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/service/title.service';

@Component({
  selector: 'app-post-of-series',
  templateUrl: './post-of-series.component.html',
  styleUrls: ['./post-of-series.component.css'],
  providers: [FetchdataService],
})
export class PostOfSeriesComponent implements OnInit {

  posts:any = {};
  constructor(private fetchService:FetchdataService,private titleservice:TitleService,private route:ActivatedRoute) { 
  }
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.fetchService.fetchDataMethodGet('post-of-series/'+params['id']).subscribe(
          data => {
            this.posts = data['data'];
            this.titleservice.changeTitle("Series " + params['title']);
          },
          error => {}
        );
      }
    );
  }
  getdata(page:string){
    this.fetchService.fetchDataMethodGet('post-of-series/'+this.route.snapshot.params['id']+page).subscribe(
      data => {
        this.posts = data['data'];
      },
      error => {}
    );
  }
  pageChange(event:any){
    this.getdata('?page='+(event.pageIndex+1));
  }
}

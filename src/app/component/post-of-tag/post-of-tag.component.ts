import { ActivatedRoute } from '@angular/router';
import { TitleService } from './../../service/title.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-of-tag',
  templateUrl: './post-of-tag.component.html',
  styleUrls: ['./post-of-tag.component.css'],
  providers: [FetchdataService]
})
export class PostOfTagComponent implements OnInit {

  data:any = {};
  constructor(private fetchService:FetchdataService,private titleservice:TitleService,private route:ActivatedRoute) { 
  }
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.fetchService.fetchDataMethodGet('post-of-tag/'+params['id']).subscribe(
          data => {
            this.data = data['data'];
            this.titleservice.changeTitle("Tag "+this.data.tag.name);
          },
          error => {}
        );
      }
    );
  }
  pageChange(event:any){
    this.getdata('?page='+(event.pageIndex+1));
  }
  getdata(page:string){
    this.fetchService.fetchDataMethodGet('post-of-tag/'+this.route.snapshot.params['id']+page).subscribe(
      data => {
        this.data = data['data'];
      },
      error => {}
    );
  }

}

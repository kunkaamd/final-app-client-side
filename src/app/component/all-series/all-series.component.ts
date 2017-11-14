import { TitleService } from './../../service/title.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-series',
  templateUrl: './all-series.component.html',
  styleUrls: ['./all-series.component.css'],
  providers: [FetchdataService]
})
export class AllSeriesComponent implements OnInit {
  series:any = {};
  constructor(private titleservice:TitleService,private fetchData:FetchdataService) { 
    this.titleservice.changeTitle("Series");
  }
  ngOnInit() {
    this.getdata('');
  }
  getdata(page:string){
    this.fetchData.fetchDataMethodGet('series'+page).subscribe(
      data => {
        this.series = data['data'];
        console.log(this.series);
      },
      error => {}
    );
  }
  pageChange(event:any){
    this.getdata('?page='+(event.pageIndex+1));
  }
}

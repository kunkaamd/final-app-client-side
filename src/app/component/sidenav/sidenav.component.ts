import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [FetchdataService]
})
export class SidenavComponent implements OnInit {
  
  list:any;
  constructor(private fetchData:FetchdataService) { }

  ngOnInit() {
    this.fetchData.fetchDataMethodGet('series-with-posts').subscribe(
      data => {this.list = data['data']}
    )
  }

}

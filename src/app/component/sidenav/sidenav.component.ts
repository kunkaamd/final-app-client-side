import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [FetchdataService]
})
export class SidenavComponent implements OnInit {
  
  author:any;
  tags:any;
  constructor(private fetchData:FetchdataService) { }

  ngOnInit() {
    this.fetchData.fetchDataMethodGet('user-hot').subscribe(
      data => {this.author = data['data']}
    )
    this.fetchData.fetchDataMethodGet('tag-popular').subscribe(
      data => {this.tags = data['data']}
    )
  }

}

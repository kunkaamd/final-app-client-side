import {TitleService} from '../../service/title.service';

import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tag',
  templateUrl: './all-tag.component.html',
  styleUrls: ['./all-tag.component.css'],
  providers: [FetchdataService]
})
export class AllTagComponent implements OnInit {
  data:any;
  constructor(private fetchData:FetchdataService,private titleService:TitleService) { 
    this.titleService.changeTitle('Tags');
  }

  ngOnInit() {
    this.fetchData.fetchDataMethodGet('tag').subscribe(
      data => {
        this.data = data["data"];
      }
    );
  }

}

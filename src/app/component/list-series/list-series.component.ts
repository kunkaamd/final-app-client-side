import {GlobalVariable} from '../../service/global.service';
import { FetchdataService } from './../../service/fetchdata.service';
import {UserService} from '../../service/user.service';
import {TitleService} from '../../service/title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.css'],
  providers: [FetchdataService]
})
export class ListSeriesComponent implements OnInit {

  list:any;
  avatarURL:string = GlobalVariable.BASE_IMAGE_URL;
  constructor(private titleservice:TitleService,private fetchData:FetchdataService) { 
    this.titleservice.changeTitle("Series");
  }

  ngOnInit() {
    this.fetchData.fetchDataMethodGet('series/').subscribe(
      data => {
        this.list = data['data'];
      },
      error => {}
    );
  }

}

import {GlobalVariable} from '../../service/global.service';
import { FetchdataService } from './../../service/fetchdata.service';
import {UserService} from '../../service/user.service';
import {TitleService} from '../../service/title.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrls: ['./list-series.component.css']
})
export class ListSeriesComponent implements OnInit {

  @Input()series:any;
  avatarURL:string = GlobalVariable.BASE_IMAGE_URL;
  constructor() { 
  }

  ngOnInit() {
    
  }

}

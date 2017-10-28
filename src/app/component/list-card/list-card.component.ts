import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
  providers: [FetchdataService]
})
export class ListCardComponent implements OnInit {
  @Input() posts:any;
  @Input() isbrowse:boolean;
  constructor() { 
  }

  ngOnInit() {

  }

}

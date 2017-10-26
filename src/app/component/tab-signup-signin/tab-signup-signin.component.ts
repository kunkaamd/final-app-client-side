import { TitleService } from './../../service/title.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-signup-signin',
  templateUrl: './tab-signup-signin.component.html',
  styleUrls: ['./tab-signup-signin.component.css']
})
export class TabSignupSigninComponent implements OnInit {

  constructor(route: ActivatedRoute,private titleservice:TitleService) { 
    this.titleservice.changeTitle(route.snapshot.data["title"]);
  }

  ngOnInit() {
  }

}

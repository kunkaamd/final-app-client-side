import { GlobalVariable } from 'app/service/global.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @Input()users:any;
  avatarURL:string = GlobalVariable.BASE_IMAGE_URL;
  constructor() { }

  ngOnInit() {
  }

}

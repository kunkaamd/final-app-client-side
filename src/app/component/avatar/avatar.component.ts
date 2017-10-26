import { UserService } from 'app/service/user.service';
import { GlobalVariable } from 'app/service/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  imgUrlbase:string;
  constructor(public user:UserService) { 
    this.imgUrlbase = GlobalVariable.BASE_IMAGE_URL;
  }

  ngOnInit() {
  }

}

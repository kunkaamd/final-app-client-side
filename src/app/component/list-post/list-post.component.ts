import { Component, OnInit, Input } from '@angular/core';
import { GlobalVariable } from 'app/service/global.service';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  @Input() posts:any;
  avatarURL:string = GlobalVariable.BASE_IMAGE_URL;
  constructor() { }

  ngOnInit() {
  }

}

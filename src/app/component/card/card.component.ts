import { Component, OnInit, Input } from '@angular/core';
import { GlobalVariable } from 'app/service/global.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item:any;
  urlBaseImage:string;
  postImage:string;
  constructor() {
    
  }

  ngOnInit() {
    this.urlBaseImage = GlobalVariable.BASE_IMAGE_URL;
    if(!this.item.image){
      this.postImage = this.urlBaseImage+"code.png";
    }
    else{
      this.postImage = this.urlBaseImage+this.item.image;
    }
  }

}

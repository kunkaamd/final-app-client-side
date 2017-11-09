import { FetchdataService } from './../../service/fetchdata.service';
import { Component, OnInit, Input } from '@angular/core';
import { GlobalVariable } from 'app/service/global.service';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [FetchdataService]
})
export class CardComponent implements OnInit {
  @Input() item:any;
  @Input() isbrowse:boolean;
  urlBaseImage:string;
  postImage:string;
  constructor(private fetchdata:FetchdataService,private user:UserService) {
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
  onPublishedPost(id){
    let publishedconfirm = confirm("Bạn muốn published bài viết này:");
    if(publishedconfirm){
      this.fetchdata.methodPatchWithAuth('post-published/'+id,{},this.user.token).subscribe(
        data => {
          this.item = null;
        },
        error => {}
      );
    }
  }
  onDeletePost(id){
    let deleteconfirm = confirm("Bạn có muốn xóa bài viết này:");
    if(deleteconfirm){
      this.fetchdata.methodDeleteWithAuth('post-delete/'+id,this.user.token).subscribe(
        data => {
          this.item = null;
        },
        error => {
          alert('bạn không đủ quyền');
        }
      );
    }
  }

}

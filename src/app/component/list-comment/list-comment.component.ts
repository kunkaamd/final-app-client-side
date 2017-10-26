import { FetchdataService } from './../../service/fetchdata.service';
import { UserService } from 'app/service/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { GlobalVariable } from 'app/service/global.service';
@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css'],
  providers: [FetchdataService]
})
export class ListCommentComponent implements OnInit {
  @Input()comments:any;
  @Input()postId:string;
  commendsend:string="";
  imgUrlbase:string;
  constructor(public user:UserService,private fetchData:FetchdataService) { 
    this.imgUrlbase = GlobalVariable.BASE_IMAGE_URL;
  }

  ngOnInit() {
  }
  onSendComment(){
    this.fetchData.fetchDataMethodPostWithAuth('create-comment/'+this.postId,{comment : this.commendsend},this.user.token).subscribe(
      data => {
        this.comments.push({user:{email:this.user.email,name:this.user.name,avatar:this.user.avatar},comment:this.commendsend});
        this.commendsend = "";
      },
      error => {},
    );
  }

}

import { DialogNotificationComponent } from './../dialog-notification/dialog-notification.component';
import { MatDialog } from '@angular/material';
import { UserService } from './../../service/user.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { TitleService } from './../../service/title.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  providers: [FetchdataService]
})
export class CreatePostComponent implements OnInit {
  namePost:string = "";
  source:string = "";
  post:string = "";
  buttonPost:boolean = false;
  error:string = "";
  @ViewChild("fileInput") fileInput;
  constructor(private http: HttpClient,private titleservice:TitleService,
    private fetdataService:FetchdataService,private user:UserService,public dialog: MatDialog) { 
    this.titleservice.changeTitle("Tạo bài viết");
  }

  ngOnInit() {
  }
  onCreatePost():void{
    if(this.namePost=="" || this.post==""){
      this.error = "Tên bài viết và bài viết không được rỗng";
      return;
    }
    this.buttonPost = true;
    let fi = this.fileInput.nativeElement;
    let formData = new FormData();
    formData.append("title",this.namePost);
    formData.append("content",this.post);
    formData.append("source",this.source);
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        formData.append("image", fileToUpload);
    }
    this.fetdataService.fetchDataMethodPostWithAuth('create-post',formData,this.user.token).subscribe(
      data => {
        this.buttonPost = false;
        this.openDialog('Đăng bài thành công.Bài viết của bạn cần được duyệt trước khi đăng lên','/')
      },
      error => {console.log(error)},
      () =>{console.log('success')}
    );
  }
  openDialog(message:string,urlClose:string): void {
    let dialogRef = this.dialog.open(DialogNotificationComponent, {
      width: '250px',
      data: { message: message,urlClose: urlClose }
    });
  }
}

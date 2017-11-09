import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { DialogNotificationComponent } from './../dialog-notification/dialog-notification.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [FetchdataService]
})
export class SigninComponent implements OnInit {
  formSignIn: FormGroup;
  disableButton : boolean = false;
  constructor(private fb: FormBuilder,public dialog: MatDialog,private fetchdataService: FetchdataService,
              private userService:UserService,private router:Router) {
  }
  
  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: ['', [Validators.pattern(EMAIL_REGEX)]],
      password: ['', [Validators.pattern(PASS_REGEX)]],
    });
  }
  onSubmit(){
    let flat_errors = false;
    Object.keys(this.formSignIn.controls).map(key => {
      if(this.formSignIn.get(key).errors){
        flat_errors = true;
      }
    });
    if(!flat_errors){
      this.disableButton=true;
      this.fetchdataService.fetchDataMethodPost('auth/login',this.formSignIn.value).subscribe(
        data => {
          if(data['user'].confirm == 0){
            this.openDialog('Bạn chưa xác thực email','/',data['token']);
          }else{
            this.userService.email = data['user'].email;
            this.userService.name = data['user'].name;
            this.userService.id = data['user'].id;
            this.userService.token = data['token'];
            this.userService.setPermission(data['permission']);
            this.userService.avatar = data['user'].avatar;
            this.userService.isLoggedIn = true;
            this.openDialog('Đăng nhập thành công','/',null);
          }
        },
        error => {
          this.openDialog(error.error,null,null);
          this.disableButton=false;
        }
      );
      
    }else{
      
    }
  }
  openDialog(message:string,urlClose:string,token:any): void {
    let dialogRef = this.dialog.open(DialogNotificationComponent, {
      width: '250px',
      data: { message: message,urlClose: urlClose,confirmuser:token }
    });
    if(urlClose){
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/'])
      });
    }
  }
  
}

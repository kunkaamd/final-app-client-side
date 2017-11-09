import { UserService } from './../../service/user.service';
import { Router } from '@angular/router';
import { DialogNotificationComponent } from './../dialog-notification/dialog-notification.component';
import { MatDialog } from '@angular/material';
import { FetchdataService } from './../../service/fetchdata.service';
import { PasswordConfirm } from './passwordvalidation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [FetchdataService],
})
export class SignupComponent implements OnInit {

  formSignUp: FormGroup;
  disableButton : boolean = false;
  constructor(private fb: FormBuilder,private fetchdataService: FetchdataService,
    private userService:UserService,private dialog: MatDialog,private router:Router) {}
  
  ngOnInit() {
    this.formSignUp = this.fb.group({
      name : ['',[Validators.minLength(6),Validators.maxLength(25)]],
      email: ['', [Validators.pattern(EMAIL_REGEX)]],
      password: ['', [Validators.pattern(PASS_REGEX)]],
      re_password : ['', [Validators.required]],
    },{
      validator: PasswordConfirm.MatchPassword
    });
  }
  onSubmit(){
    let flat_errors = false;
    Object.keys(this.formSignUp.controls).map(key => {
      if(this.formSignUp.get(key).errors){
        flat_errors = true;
        return null;
      }
    });
    if(!flat_errors){
      this.disableButton=true;
      this.fetchdataService.fetchDataMethodPost('auth/register',this.formSignUp.value).subscribe(
        data => {
          this.openDialog('Đăng ký thành công,Hãy vào email để xác thực trước khi sử dụng','/');
        },
        error => {
          for(let key in error.error.errors) {
            this.openDialog(error.error.errors[key][0],null);
            break;
          }
          this.disableButton=false;
        }
      );
    }else{
      
    }
  }
  openDialog(message:string,urlClose:string): void {
    let dialogRef = this.dialog.open(DialogNotificationComponent, {
      width: '250px',
      data: { message: message,urlClose: urlClose }
    });
    if(urlClose){
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/'])
      });
    }
  }
}

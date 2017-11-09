import { FetchdataService } from './../../service/fetchdata.service';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.css'],
  providers: [FetchdataService]
})
export class DialogNotificationComponent implements OnInit {
  disableButton:boolean = false;
  mode:string='determinate';
  message:string;
  constructor(public dialogRef: MatDialogRef<DialogNotificationComponent>,private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: any,private fetchData: FetchdataService ) { 
  }
  reSendEmail(){
    this.mode = 'indeterminate';
    this.disableButton = true;
    this.fetchData.fetchDataMethodGetWithAuth('resendmail/',this.data.confirmuser).subscribe(
      data => {
        this.mode = 'determinate';
        this.message = 'Hãy kiểm tra lại email của bạn';
      }
    );
  }

  ngOnInit() {
  }
  close():void{
    if(this.data.urlClose){
      this.router.navigate([this.data.urlClose])
    }
    this.dialogRef.close();
  }
  

}

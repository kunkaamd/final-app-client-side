import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.css']
})
export class DialogNotificationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogNotificationComponent>,private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close():void{
    if(this.data.urlClose){
      this.router.navigate([this.data.urlClose])
    }
    this.dialogRef.close();
  }
  

}

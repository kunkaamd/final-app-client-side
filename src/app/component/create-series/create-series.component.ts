import { UserService } from 'app/service/user.service';
import { FetchdataService } from './../../service/fetchdata.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-create-series',
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.css'],
  providers: [FetchdataService]
})
export class CreateSeriesComponent implements OnInit {
  series:string;
  constructor(public dialogRef: MatDialogRef<CreateSeriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fetchdata:FetchdataService,private user:UserService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddNew(): void {
    this.fetchdata.fetchDataMethodPostWithAuth('create-series',{name:this.series},this.user.token).subscribe(
      data => {
        this.dialogRef.close();
      },
      error => {
        alert("lỗi,hãy thử đăng nhập lại!");
      }
    );
  }

}

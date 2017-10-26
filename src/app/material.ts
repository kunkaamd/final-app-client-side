import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule ,MatToolbarModule , 
    MatMenuModule ,MatIconModule,MatSidenavModule,MatCardModule,
    MatListModule,MatProgressSpinnerModule,MatInputModule,MatFormFieldModule,MatTabsModule,
    MatDialogModule],
    //export
  exports: [MatButtonModule, MatCheckboxModule ,MatToolbarModule , MatMenuModule ,
    MatIconModule,MatSidenavModule,MatCardModule,MatListModule,MatProgressSpinnerModule,
    MatInputModule,MatFormFieldModule,MatTabsModule,MatDialogModule],
})
export class MyOwnCustomMaterialModule { }
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatDialogModule, MatSelectModule, MatChipsModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule ,MatToolbarModule , 
    MatMenuModule ,MatIconModule,MatSidenavModule,MatCardModule,
    MatListModule,MatProgressSpinnerModule,MatInputModule,MatFormFieldModule,MatTabsModule,
    MatDialogModule,MatSelectModule,MatChipsModule,MatTooltipModule],
    //export
  exports: [MatButtonModule, MatCheckboxModule ,MatToolbarModule , MatMenuModule ,
    MatIconModule,MatSidenavModule,MatCardModule,MatListModule,MatProgressSpinnerModule,
    MatInputModule,MatFormFieldModule,MatTabsModule,MatDialogModule,MatSelectModule,
    MatChipsModule,MatTooltipModule],
})
export class MyOwnCustomMaterialModule { }
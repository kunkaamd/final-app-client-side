import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatDialogModule, MatSelectModule, MatChipsModule, MatTooltipModule, MatPaginatorModule } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule ,MatToolbarModule , 
    MatMenuModule ,MatIconModule,MatSidenavModule,MatCardModule,
    MatListModule,MatProgressSpinnerModule,MatInputModule,MatFormFieldModule,MatTabsModule,
    MatDialogModule,MatSelectModule,MatChipsModule,MatTooltipModule,MatPaginatorModule],
    //export
  exports: [MatButtonModule, MatCheckboxModule ,MatToolbarModule , MatMenuModule ,
    MatIconModule,MatSidenavModule,MatCardModule,MatListModule,MatProgressSpinnerModule,
    MatInputModule,MatFormFieldModule,MatTabsModule,MatDialogModule,MatSelectModule,
    MatChipsModule,MatTooltipModule,MatPaginatorModule],
})
export class MyOwnCustomMaterialModule { }
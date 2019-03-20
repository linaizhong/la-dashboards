import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatTabsModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatTabsModule
  ]
})
export class MaterialModule {
  static forRoot() {
    return {
      ngModule: MaterialModule,
      providers: [MatIconRegistry]
    };
  }
}

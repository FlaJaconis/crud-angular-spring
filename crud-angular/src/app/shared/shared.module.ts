
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { CategoriaPipe } from './pipes/categoria.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoriaPipe
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoriaPipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule 
  ]
})
export class ScannerModule { }

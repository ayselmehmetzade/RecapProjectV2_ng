import { NgModule } from '@angular/core';
import { RecapComponent } from './recap.component';
import { RecapFormComponent } from './components/recap-form/recap-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [RecapComponent, RecapFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [RecapComponent, RecapFormComponent]
})
export class RecapModule { }

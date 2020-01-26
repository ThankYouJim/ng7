import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import {
  MatButtonModule,
  MatButtonToggleModule,
  // MatIconModule,
  // MatProgressSpinnerModule,
  MatToolbarModule,
  MatSliderModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  // MatIconModule,
  // MatProgressSpinnerModule,
  MatToolbarModule,
  MatSliderModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    material
  ],
  exports: [
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

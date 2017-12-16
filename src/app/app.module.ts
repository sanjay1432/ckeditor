import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { CkeditorService } from './ckeditor/ckeditor.service';

@NgModule({
  declarations: [
    AppComponent,
    CkeditorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    CKEditorModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [CkeditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/**
 * Angular 2 bootstrap
 */
platformBrowserDynamic().bootstrapModule(AppModule);
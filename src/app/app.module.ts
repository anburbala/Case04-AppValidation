import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import {MustMatchDirective} from './must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenComponent,
    MustMatchDirective
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import {MustMatchDirective} from './must-match.directive';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CustomerrorComponent } from './customerror/customerror.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { ProductService } from './services/product.service';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenComponent,
    MustMatchDirective,
    ReactiveformComponent,
    CustomerrorComponent,
    LoginComponent,
    ProductComponent,
    LogoutComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [AuthGuardService,AuthService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

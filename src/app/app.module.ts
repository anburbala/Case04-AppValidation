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
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './product/product.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenComponent,
    MustMatchDirective,
    ReactiveformComponent,
    CustomerrorComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ProductComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

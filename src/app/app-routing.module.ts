import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import {CustomerrorComponent} from './customerror/customerror.component';
import {ProductComponent} from './product/product.component';
import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
  { path: '', component: TemplatedrivenComponent },
  { path: 'templatedriven-component', component: TemplatedrivenComponent },
  { path: 'reactiveform-component', component: ReactiveformComponent },
  { path: 'product-component', component: ProductComponent, canActivate : [AuthGuard] },
  { path: '**',component : CustomerrorComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

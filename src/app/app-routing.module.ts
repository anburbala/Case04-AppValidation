import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CustomerrorComponent} from './customerror/customerror.component';
import { ProductComponent} from './product/product.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  { path: '', component: TemplatedrivenComponent },
  { path: 'templatedriven-component', component: TemplatedrivenComponent },
  { path: 'reactiveform-component', component: ReactiveformComponent },
  { path: 'product-component', 
    component: ProductComponent, 
    children: [{ path: 'product-create-component' ,component : ProductCreateComponent}],
    canActivate : [AuthGuardService] },
  { path: 'login-component', component: LoginComponent},
  {path: 'logout-component', component : LogoutComponent},
  {path: 'aboutus-component', loadChildren: () => import('./aboutus/aboutus.module')
  .then(m => m.AboutUsModule)},
  { path: '**',component : CustomerrorComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {

 }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  { path: 'templatedriven-component', component: TemplatedrivenComponent },
  { path: 'reactiveform-component', component: ReactiveformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

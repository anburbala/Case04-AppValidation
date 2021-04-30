import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  AboutusComponent} from './aboutus.component';


const routes: Routes = [
    { path: "", component: AboutusComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class AboutUsRouteModule { }
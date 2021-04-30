import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from "./aboutus.component";
import {AboutUsRouteModule} from "./aboutus-routing.module";


@NgModule({
  imports: [CommonModule, AboutUsRouteModule],
  declarations : [AboutusComponent]
})
export class AboutUsModule {}
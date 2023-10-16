import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NgFor } from '@angular/common';

@NgModule({
  imports: [HomepageRoutingModule, NgFor],
  declarations: [HomepageComponent],
})
export class HomepageModule {}

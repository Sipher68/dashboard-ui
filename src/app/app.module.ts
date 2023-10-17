import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './views/pages/profile/profile.component';
import { BlacklistComponent } from './views/pages/blacklist/blacklist.component';

@NgModule({
  declarations: [
    AppComponent,
    BlacklistComponent,
    ProfileComponent,
    BlacklistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

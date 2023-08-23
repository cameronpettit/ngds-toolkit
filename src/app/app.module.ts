import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgdsNavCardModule, NgdsTabsModule } from 'projects/ngds-common-components/src/public-api';
import { NgdsFormsModule } from 'projects/ngds-forms/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { PicklistsComponent } from './forms/picklists/picklists.component';

@NgModule({
  declarations: [AppComponent, FormsComponent, PicklistsComponent],
  imports: [NgdsFormsModule, BrowserModule, NgdsTabsModule, NgdsNavCardModule, AppRoutingModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

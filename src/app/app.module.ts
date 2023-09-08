import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgdsNavCardModule, NgdsTabsModule } from 'projects/ngds-common-components/src/public-api';
import { NgdsFormsModule } from 'projects/ngds-forms/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from './forms/forms.module';
import { CommonComponentsComponent } from './common-components/common-components/common-components.component';
import { HomeComponent } from './home/home.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [AppComponent, CommonComponentsComponent, HomeComponent],
  imports: [NgdsFormsModule, BrowserModule, NgdsFormsModule, FormsModule, NgdsTabsModule, NgdsNavCardModule, AppRoutingModule, RouterModule.forRoot([])],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

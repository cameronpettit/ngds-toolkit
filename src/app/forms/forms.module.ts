import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormsComponent } from './forms.component';
import { PicklistsComponent } from './picklists/picklists.component';
import { TypeaheadsComponent } from './typeaheads/typeaheads.component';
import { NgdsFormsModule } from 'projects/ngds-forms/src/public-api';
import { DemonstratorModule } from '../home/demonstrator/demonstrator.module';
import { NgdsTabsModule } from 'projects/ngds-common-components/src/public-api';
import { TextInputComponent } from './text-input/text-input.component';


@NgModule({
  declarations: [
    FormsComponent,
    PicklistsComponent,
    TypeaheadsComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgdsFormsModule,
    DemonstratorModule,
    NgdsTabsModule
  ],
  providers: [
    HttpClient
  ],
  exports: [
    FormsComponent,
    PicklistsComponent,
    TypeaheadsComponent,
    TextInputComponent
  ]
})
export class FormsModule { }

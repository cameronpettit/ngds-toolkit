import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgdsInput } from './components/input-types/ngds-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgdsTextInput } from './components/input-types/text-input/text-input.component';
import { NgdsPicklistInput} from './components/input-types/picklist-input/picklist-input.component';
import { NgdsInputHeaderComponent } from './components/input-addons/ngds-input-header/ngds-input-header.component';
import { NgdsInputFooterComponent } from './components/input-addons/ngds-input-footer/ngds-input-footer.component';
import { NgdsInputOverlayComponent } from './components/input-addons/ngds-input-overlay/ngds-input-overlay.component';
import { BsDropdownDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgdsTypeaheadInput } from './components/input-types/typeahead-input/typeahead-input.component';

export { NgdsInput } from './components/input-types/ngds-input.component';
export { NgdsTextInput } from './components/input-types/text-input/text-input.component';
export { NgdsForm } from './components/base-form/base-form.component';
export { NgdsInputHeaderComponent} from './components/input-addons/ngds-input-header/ngds-input-header.component';
export { NgdsInputFooterComponent} from './components/input-addons/ngds-input-footer/ngds-input-footer.component';

@NgModule({
  declarations: [
    NgdsInput,
    NgdsTextInput,
    NgdsPicklistInput,
    NgdsInputHeaderComponent,
    NgdsInputFooterComponent,
    NgdsInputOverlayComponent,
    NgdsTypeaheadInput
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [
    BsDropdownDirective
  ],
  exports: [
    NgdsInput,
    NgdsInputHeaderComponent,
    NgdsInputFooterComponent,
    NgdsTextInput,
    NgdsPicklistInput,
    NgdsTypeaheadInput
  ]
})
export class NgdsForms { }

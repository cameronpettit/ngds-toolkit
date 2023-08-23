import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgdsInput } from './components/input-types/ngds-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseInputComponent } from './components//input-types/base-input/base-input.component';
import { NgdsTextInput } from './components/input-types/text-input/text-input.component';
import { NgdsPicklistInput} from './components/input-types/picklist-input/picklist-input.component';
import { NgdsInputHeaderComponent } from './components/input-addons/ngds-input-header/ngds-input-header.component';
import { NgdsInputFooterComponent } from './components/input-addons/ngds-input-footer/ngds-input-footer.component';
import { NgdsInputOverlayComponent } from './components/input-addons/ngds-input-overlay/ngds-input-overlay.component';
import { NgdsInputPrepend } from './components/input-addons/ngds-input-prepend/ngds-input-prepend.component';
import { NgdsInputAppend } from './components/input-addons/ngds-input-append/ngds-input-append.component';
import { NgdsDropdown } from './components/input-addons/ngds-dropdown/ngds-dropdown.component';

export { NgdsInput } from './components/input-types/ngds-input.component';
export { NgdsTextInput } from './components/input-types/text-input/text-input.component';
export { NgdsForm } from './components/base-form/base-form.component';
export { NgdsInputHeaderComponent} from './components/input-addons/ngds-input-header/ngds-input-header.component';
export { NgdsInputFooterComponent} from './components/input-addons/ngds-input-footer/ngds-input-footer.component';

@NgModule({
  declarations: [
    NgdsInput,
    BaseInputComponent,
    NgdsTextInput,
    NgdsPicklistInput,
    NgdsInputHeaderComponent,
    NgdsInputFooterComponent,
    NgdsInputOverlayComponent,
    NgdsInputPrepend,
    NgdsInputAppend,
    NgdsDropdown,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [
  //   NgdsForm
  // ],
  exports: [
    NgdsInput,
    NgdsInputHeaderComponent,
    NgdsInputFooterComponent,
    NgdsTextInput,
    NgdsPicklistInput,
    NgdsInputPrepend,
    NgdsInputAppend,
    NgdsDropdown,
    BaseInputComponent
  ]
})
export class NgdsForms { }

import { Component } from '@angular/core';
import { NgdsInput } from '../ngds-input.component';

@Component({
  selector: 'ngds-picklist-input',
  templateUrl: './picklist-input.component.html',
  styleUrls: ['./picklist-input.component.scss', '../ngds-input.component.scss']
})
export class NgdsPicklistInput extends NgdsInput {

  setValue(option) {
    this.control.setValue(option?.value)
  }

  getDisplayValue() {
    const item = this.selectionListItems.find((i) => i.value === this.control.value || i === this.control.value);
    if (item) {
      return item?.display || item?.value;
    }
    return this.placeholder || '';
  }

  onOpenChange(e) {
    if (e) {
      this.onFocus();
      return;
    }
    this.onBlur();
  }
}

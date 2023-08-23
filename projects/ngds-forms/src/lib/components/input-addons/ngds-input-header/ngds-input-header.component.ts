import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ngds-input-header',
  templateUrl: './ngds-input-header.component.html',
  styleUrls: ['./ngds-input-header.component.scss']
})
export class NgdsInputHeaderComponent {
  @Input() control: any;
  @Input() label: string;
  @Input() subLabel: string;
  @Input() tooltip: string;

  isShowRequiredAsterisk() {
    if (this.control.hasValidator(Validators.required) && this.control.config?.showRequiredAsterisk === true) {
      return true;
    }
    return false;
  }

  isRequired() {
    return this.control.hasValidator(Validators.required);
  }

}

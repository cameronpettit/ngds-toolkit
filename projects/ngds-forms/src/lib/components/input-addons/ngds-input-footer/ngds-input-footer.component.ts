import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngds-input-footer',
  templateUrl: './ngds-input-footer.component.html',
  styleUrls: ['./ngds-input-footer.component.scss', '../../input-types/ngds-input.component.scss']
})
export class NgdsInputFooterComponent {
  @Input() control: any;
  @Input() invalid: boolean = false;
  @Input() invalidFieldMsgDefault: string = 'This field requires attention.';
  @Input() invalidFieldMsgRequired: string = 'This field is required.';
  @Input() invalidFieldMsgRequiredTrue: string = 'This field is required to be &quot;true&quot;.';
  @Input() invalidFieldMsgMin: string = '';
  @Input() invalidFieldMsgMax: string = '';
  @Input() invalidFieldMsgMinLength: string = '';
  @Input() invalidFieldMsgMaxLength: string = '';
  @Input() showMsgWhenInvalid: boolean = true;

  constructor() { }

  isShowInvalid() {
    if (this.showMsgWhenInvalid) {
      return this.control?.invalid && this.control?.touched;
    }
    return false;
  }

  getInvalidMsg() {
    // To avoid a crowded UI, only return the first error if there are multiple.
    if (this.control?.errors) {
      console.log('this.control.errors:', this.control.errors);
      let firstErrorKey = Object.keys(this.control.errors)[0];
      switch (firstErrorKey) {
        case 'required':
          return this.invalidFieldMsgRequired;
        case 'requiredTrue':
          return this.invalidFieldMsgRequiredTrue;
        case 'min':
          if (this.invalidFieldMsgMin) {
            return this.invalidFieldMsgMin
          } else { 
            if (this.control.errors[firstErrorKey].min) {
              return `The minimum value of this field can be no less than ${this.control.errors[firstErrorKey].min}.`
            }
          }
          break;
        default:
          if (this.control.errors[firstErrorKey]){
            return this.control.errors[firstErrorKey]
          }
          return this.invalidFieldMsgDefault
      }
    }
    return;
  }

}

import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, UntypedFormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgdsForm } from 'projects/ngds-forms/src/public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-picklists',
  templateUrl: './picklists.component.html',
  styleUrls: ['./picklists.component.scss']
})
export class PicklistsComponent implements OnInit, AfterViewInit {

  @ViewChild('customOption') customOption: TemplateRef<any>;

  public form;
  public fields: any = {};
  public subscriptions = new Subscription();

  public basicSelectionItems = [{value: 'opt1'}, {value: 'opt2'}, {value: 'opt3'}];
  public invalidSelectionItems = [{value: 'valid option 1'}, {value: 'valid option 2'}, {value: 'invalid option'}];
  public customSelectionItems = [];


  ngOnInit() {
    // create picklist form
    this.form = new NgdsForm(
      {
        basicPicklist: new UntypedFormControl(''),
        customPicklist: new UntypedFormControl(''),
        invalidPicklist: new UntypedFormControl('', [this.customValidator()])
      }
    )
    for (const control of Object.keys(this.form.controls)) {
      this.fields[control] = this.form.controls[control];
    }
  }

  ngAfterViewInit() {
    console.log('customOption:', this.customOption);
    this.customSelectionItems = [{value: 'option 1', display: 'Option 1 with custom text'}, {value: 'option 2', display: 'Option 2 value will still be "option 2" but the display is different'}, {value: 'option 3', display: 'Custom HTML option selected', template: this.customOption}];
    setTimeout(() => {
      this.fields.invalidPicklist.setValue('valid option 2');
    }, 2000)
  }

  clearSelection() {
    this.fields.basicPicklist.setValue(null);
  }

  customValidator(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if (value === 'invalid option') {
        return {customValidator: `You can't pick this option.`}
      }
      return null
    }
  }

  printForm() {
    console.log('this.form.value:', this.form.value);
  }

}

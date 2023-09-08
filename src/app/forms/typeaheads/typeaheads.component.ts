import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgdsForm } from 'projects/ngds-forms/src/public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-typeaheads',
  templateUrl: './typeaheads.component.html',
  styleUrls: ['./typeaheads.component.scss']
})
export class TypeaheadsComponent implements OnInit {
  public form;
  public fields: any = {};
  public subscriptions = new Subscription();

  basicList1 = [
    {
      value: '0001',
      display: 'British Columbia'
    },
    {
      value: '0055',
      display: 'Option with, delimiter'
    },
    {
      value: '0002',
      display: 'Alberta'
    },
    {
      value: '0003',
      display: 'Saskatchewan'
    },
    {
      value: '0004',
      display: 'Manitoba'
    },
    {
      value: '0005',
      display: 'Ontario'
    },
    {
      value: '0006',
      display: 'Quebec'
    },
    {
      value: '0007',
      display: 'Nova Scotia'
    },
    {
      value: '0008',
      display: 'Newfoundland and Labrador'
    },
    {
      value: '0009',
      display: 'New Brunswick'
    },
    {
      value: '0010',
      display: 'Prince Edward Island'
    },
    {
      value: '0011',
      display: 'Yukon'
    },
    {
      value: '0012',
      display: 'Northwest Territories'
    },
    {
      value: '0013',
      display: 'Nunavut'
    },
  ]

  ngOnInit(): void {
    // create typeahead form
    this.form = new NgdsForm(
      {
        basicTypeahead: new UntypedFormControl(''),
        minLength: new UntypedFormControl(''),
        invalidTypeahead: new UntypedFormControl('', [this.customValidator()]),
        multiselectTypeahead: new UntypedFormControl('')
      }
    )
    for (const control of Object.keys(this.form.controls)) {
      this.fields[control] = this.form.controls[control];
    }
  }

  customValidator(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
      const value = String(control.value);
      console.log('value:', value);
      if (value === '0011' || value === '0012' || value === '0013') {
        console.log('fucking uh oh');
        return {customValidator: `This is not a province.`}
      }
      return null
    }
  }

  printForm() {
    console.log('this.form.value:', this.form.value);
  }
}

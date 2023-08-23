import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { NgdsForm } from 'projects/ngds-forms/src/public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-picklists',
  templateUrl: './picklists.component.html',
  styleUrls: ['./picklists.component.scss']
})
export class PicklistsComponent implements OnInit {
  public form;
  public fields: any = {};
  public subscriptions = new Subscription();

  public basicSelectionItems = [{value: 'option 1'}, {value: 'option 2'}, {value: 'option 3'}];
  public customSelectionItems = [{value: 'option 1', display: 'Option 1 with custom text'}, {value: 'option 2', display: 'Option 2 value will still be "option 2" but the display is different'}, {value: 'option 3', display: '<div class="badge bg-success">Option with inline HTML<div>'}];

  ngOnInit() {
    // create picklist form
    this.form = new NgdsForm(
      {
        basicPicklist: new UntypedFormControl(''),
        customPicklist: new UntypedFormControl('')
      }
    )
    for (const control of Object.keys(this.form.controls)) {
      this.fields[control] = this.form.controls[control];
    }
  }

}

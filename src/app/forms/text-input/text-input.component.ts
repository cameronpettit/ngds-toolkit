import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'text-input-demos',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  public form;

  public basicTextInputTemplate = `
  <ngds-text-input
    [control]="form?.controls?.['basicText']"
    [label]="'Basic text entry'"
    [subLabel]="'[control] is your Angular FormControl and is mandatory. [label] and [subLabel] are optional parameters.'">
  </ngds-text-input>
`

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      basicText: new UntypedFormControl(null)
    })
  }
}

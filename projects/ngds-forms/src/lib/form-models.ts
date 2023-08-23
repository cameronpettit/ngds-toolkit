import { Injectable, TemplateRef } from "@angular/core";
import { Validators } from "@angular/forms";
import { NgdsTextInput } from "./components/input-types/text-input/text-input.component";
import { NgdsPicklistInput } from "./components/input-types/picklist-input/picklist-input.component";

export const defaultFormConfig: NgdsFormConfig = {
  submitOnEnter: true
}

export const defaultControlConfig: NgdsControlConfig = {
  key: '',
  type: 'text',
  invalidClasses: 'invalid',
  showInvalidMsgs: true,
  showRequiredAsterisk: true,
  behaviourOptions: {
    emitValueChangeWhenNull: false,
    emitStatusOnValueChange: false
  }
  // labelOptions?: NgdsInputLabelOptions,
  // tooltipOptions?: NgdsInputTooltipOptions,
  // behaviourOptions?: NgdsInputBehaviourOptions,
  // ariaOptions?: NgdsInputAriaOptions,
  // styleOptions?: NgdsInputStyleOptions,
  // placeholder?: string,
  // htmlId?: string,
}

export const ngdsInputTypes: NgdsInputType[] = [
  { type: 'text', component: NgdsTextInput},
  { type: 'picklist', component: NgdsPicklistInput}
]

@Injectable()
export class NgdsFormConfig {
  controls?: any;
  customInputTypes?: NgdsInputType[];
  submitOnEnter?: boolean;
}

export interface NgdsInputType {
  type: string,
  component: any;
}

export interface NgdsControlConfig {
  key: string; // name of the control
  type?: string; // type of the control - defaults to text
  inputType?: string; // type of the control input - defaults to text
  label?: string; // label of the control
  initialValue?: any; // initial value of the control
  showInvalidMsgs?: true,
  showRequiredAsterisk?: true,
  controls?: NgdsControlConfig[]; // nested controls
  invalidClasses?: string; // invalid classes
  labelOptions?: NgdsInputLabelOptions,
  validators?: Validators,
  tooltipOptions?: NgdsInputTooltipOptions,
  behaviourOptions?: NgdsInputBehaviourOptions,
  ariaOptions?: NgdsInputAriaOptions,
  styleOptions?: NgdsInputStyleOptions,
  placeholder?: string,
  htmlId?: string,
}

export interface NgdsFormTextInputConfig extends NgdsControlConfig {
  characterLimit?: number;
}


// export interface NgdsFormInputOptions {
//   label?: string,
//   invalidClasses?: string,
//   showInvalidMsgs?: boolean;
//   labelOptions?: NgdsInputLabelOptions,
//   tooltipOptions?: NgdsInputTooltipOptions,
//   behaviourOptions?: NgdsInputBehaviourOptions,
//   ariaOptions?: NgdsInputAriaOptions,
//   styleOptions?: NgdsInputStyleOptions,
//   placeholder?: string,
//   htmlId?: string,
// }

export interface NgdsInputLabelOptions {
  label?: string,
  subLabel?: string,
}

interface NgdsInputTooltipOptions {
  title?: string,
  body?: string
}

interface NgdsInputBehaviourOptions {
  emitValueChangeWhenNull?: boolean;
  emitStatusOnValueChange?: boolean;
}

interface NgdsInputAriaOptions {
  ariaLabel: string,
  ariaDescribedBy: string,
}

interface NgdsInputStyleOptions {

}
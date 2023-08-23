import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidatorFn, } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgdsControlConfig, NgdsFormConfig, defaultControlConfig, defaultFormConfig, ngdsInputTypes } from '../../form-models';
import { NgdsForms } from '../../forms.module';
import { Inject, Injectable } from '@angular/core';

export class NgdsForm extends UntypedFormGroup {
  constructor(
    protected ngdsControls: {[key: string]: any},
    protected ngdsValidatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
    protected ngdsAsyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
  ) {
    super(
      ngdsControls,
      ngdsValidatorOrOpts,
      ngdsAsyncValidator
    )
  }
}
// export class NgdsForm extends UntypedFormGroup {
//   constructor(
//     protected formConfig: any
//   ) {
//     console.log('formConfig:', formConfig);
//     let ngdsControls: { [key: string]: any } = {};
//     let ngdsValidatorOrOpts = [];
//     let ngdsAsyncValidator = [];
//     for (const config of formConfig.controls) {
//       ngdsControls[config.key] = new UntypedFormControl(config.defaultValue || null);
//       ngdsValidatorOrOpts.push({
//         [config.key]: config.validators
//       })
//     }
//     super(
//       ngdsControls,
//       ngdsValidatorOrOpts,
//       ngdsAsyncValidator
//     )
//   }
// }

// @Component({
//   selector: 'ngds-form',
//   templateUrl: './base-form.component.html',
//   styleUrls: ['./base-form.component.scss']
// })
// export class NgdsForm extends UntypedFormGroup {
//   public ngForm: any; // the underlying Angular form object
//   // public results: any = {}; // key:value pairs for every control in the form
//   // public controls: any = {}; // key:control pairs for every control in the form
//   // public controlsList: UntypedFormControl[] = []; // Flattened list of controls.
//   public subscriptions = new Subscription(); // subscriptions
//   // public disabledControls: UntypedFormControl[] = [];
//   // public isInitialized: boolean = false;
//   private _ngdsFormBuilder = new UntypedFormBuilder();
//   // private inputTypes = ngdsInputTypes;

//   constructor(
//     protected ngdsControls: {[key:string]: any},
//     protected ngdsValidatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
//     protected ngdsAsyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
//   ) {
//     super(
//       ngdsControls,
//       ngdsValidatorOrOpts,
//       ngdsAsyncValidator,
//     );
//   }

//   // Takes a control config and returns the correct control structure
//   setUpControls(formConfigControls: NgdsControlConfig[]) {
//     let controlList = [];
//     for (const controlConfig of formConfigControls) {
//       controlList.push(new UntypedFormControl(controlConfig.key, controlConfig.initialValue))
//     }
//     return controlList;
//   }

//   // addFormControl(config: NgdsControlConfig, parent: UntypedFormGroup = this) {
//   //   let controlConfig = { ...defaultControlConfig, ...config };
//   //   if (controlConfig.hasOwnProperty('controls')) {
//   //     let newFormGroup = this._ngdsFormBuilder.group({});
//   //     for (const subConfig of controlConfig.controls) {
//   //       parent.addControl(controlConfig.key, this.addFormControl(subConfig, newFormGroup));
//   //     }
//   //   } else {
//   //     parent.addControl(controlConfig.key, new UntypedFormControl(controlConfig?.initialValue || undefined));

//   //     // add the config object to the control 
//   //     parent.controls[controlConfig.key]['config'] = controlConfig;


//   //     if (config?.validators) {
//   //       this.addControlValidators(controlConfig.key, controlConfig.validators);
//   //     }
//   //   }
//   //   return parent;
//   // }

//   removeFormControl(key, parent = this.ngForm) {
//     parent.removeControl(key);
//   }

//   addControlValidators(key, validators, parent = this.ngForm) {
//     parent.controls[key].setValidators(validators);
//     parent.updateValueAndValidity();
//   }

//   removeControlValidators(key, validators, parent = this.ngForm) {
//     parent.controls[key].removeValidators(validators);
//     parent.updateValueAndValidity();
//   }

//   buildControls(controlConfig) {
//     for (const config of controlConfig) {
//       if (config.hasOwnProperty('controls')) {
//         this.ngForm.addControl(config.key, this.buildControls(config.controls));
//       } else {
//         this.ngForm.addControl(config.key, new UntypedFormControl(config?.initialValue || undefined));
//         if (config?.validators) {
//           this.ngForm.controls[config.key].setValidators(config.validators);
//         }
//       }
//     }
//     this.ngForm.updateValueAndValidity();
//   }

//   // /**
//   //  * Establishes the `fields` object.
//   //  */
//   // setInitFormValues() {
//   //   this.results = this.getResults(this.ngForm.controls);
//   //   this.controls = this.setControls(this.ngForm.controls);
//   // }

//   // /**
//   // * Recursively constructs the `fields` object. Which is a object containing the key:control pairs  of the form controls. The `fields` object links the name of each form control to the control itself,  as the controls do not know what their own instance is named. 
//   // * @param controls The form control object to be processed.
//   // * @returns An object with key:value pairs of the form controls (respects nesting) and the form controls
//   // * themselves.
//   // */
//   // getResults(controls) {
//   //   let list: any = {};
//   //   for (const control of Object.keys(controls)) {
//   //     if (controls[control].hasOwnProperty('controls')) {
//   //       list[control] = this.getResults(controls[control].controls);
//   //     } else {
//   //       list[control] = controls[control].value;
//   //     }
//   //   }
//   //   return list;
//   // }

//   // setControls(controls) {
//   //   let list: any = {};
//   //   for (const control of Object.keys(controls)) {
//   //     if (controls[control].hasOwnProperty('controls')) {
//   //       list[control] = this.setControls(controls[control].controls);
//   //     } else {
//   //       list[control] = controls[control];
//   //     }
//   //   }
//   //   return list;
//   // }

//   // getControlsArray(controls, list: any[] = []) {
//   //   for (const control of Object.keys(controls)) {
//   //     if (controls[control].hasOwnProperty('controls')) {
//   //       this.getControlsArray(controls[control].controls, list);
//   //     } else {
//   //       list.push(controls[control]);
//   //     }
//   //   }
//   //   return list;
//   // }

//   // reset() {
//   //   for (const controlConfig of this.formConfig.controls) {
//   //     this.ngForm.controls[controlConfig.key].setValue(controlConfig.initialValue);
//   //   }
//   // }

//   // clear() {
//   //   this.ngForm.reset();
//   // }

//   // testButtonClick() {
//   //   this.getInvalidControls();
//   // }

//   // getInvalidControls() {
//   //   let list: any[] = [];
//   //   for (const control in this.ngForm.controls) {
//   //     if (this.ngForm.controls[control].invalid) {
//   //       list.push(this.ngForm.controls[control]);
//   //     }
//   //   }
//   //   return list;
//   // }

//   // getDisabledControls() {
//   //   return [new UntypedFormControl('piss')];
//   // }

//   // getState() {
//   //   const state: NgdsFormState = {
//   //     rawForm: this.ngForm,
//   //     isValid: this.ngForm.valid,
//   //     controls: this.ngForm.controls,
//   //     results: this.getResults(this.ngForm.controls),
//   //     invalidControls: this.getInvalidControls(),
//   //     disabledControls: this.getDisabledControls(),
//   //     formConfig: this.formConfig
//   //   }
//   //   return state;
//   // }

//   ngOnDestroy() {
//     this.subscriptions.unsubscribe();
//   }

// }

import { AfterContentInit, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgdsInputLabelOptions } from '../../form-models';
import { BehaviorSubject, Subscription, combineLatest, first } from 'rxjs';
import { Validators } from '@angular/forms';

export interface resetControlArgs {
  value?: any,
  setPristine?: boolean,
  setUntouched?: boolean
}

export interface selectionItemSchema {
  value?: any,
  display?: any,
}

@Component({
  selector: 'ngds-input',
  templateUrl: './ngds-input.component.html',
  styleUrls: ['./ngds-input.component.scss']
})
export class NgdsInput implements OnInit, OnDestroy {
  @Input() control: any;
  @Input() label: string;
  @Input() subLabel: string;
  @Input() placeholder: string;
  @Input() inputClasses: string = '';
  @Input() noValidationIfFocused: boolean = false;
  // @Input() selectionListItems;
  @Input() set selectionListItems(items: selectionItemSchema[]) {
    if (items) {
      this.updateSelectionListItems(items);
    }
  };
  get selectionListItems() {
    return this._selectionListItems.value;
  }
  @Input() set disabled(value: boolean) {
    this._disabled.next(value);
  }

  // show loading spinner while true
  @Input() set loadWhile(isLoading: boolean) {
    this._loading.next(isLoading);
  }

  @Input() autoSelectFirstItem: boolean = false; // auto select first item in select list

  @Output() valueChange = new EventEmitter<any>();
  @Output() statusChange = new EventEmitter<any>();
  @Output() focus = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();

  @Output() selectionListUpdated = new EventEmitter<any>();

  @ViewChild('inputGroup', { static: true }) inputGroup: ElementRef;
  @ViewChild('inputPrepend') inputPrepend: TemplateRef<any>;
  @ViewChild('inputAppend') inputAppend: TemplateRef<any>;

  public _disabled = new BehaviorSubject<boolean>(false);
  public isDisabled: boolean = false;
  public _loading = new BehaviorSubject<boolean>(false);
  public isLoading: boolean = false;
  public _invalid = new BehaviorSubject<boolean>(false);
  public isInvalid: boolean = false;
  public _isFocused = new BehaviorSubject<boolean>(false);
  public _currentStatus = new BehaviorSubject(null);
  public _controlInitialized = new BehaviorSubject<boolean>(false);
  public isControlInitialized: boolean = false;

  public _isInputReady = new BehaviorSubject(false);

  public inputComponent: any;

  public _selectionListItems = new BehaviorSubject<any>([]);

  public subscriptions = new Subscription();

  public labelOptions: NgdsInputLabelOptions;

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef,
    private vcr: ViewContainerRef
  ) {
    // every time the value of one of these changes, we have to check the control state.
    combineLatest([this._disabled, this._loading, this._controlInitialized]).subscribe((
      []
    ) => {
      this.updateControlState();
    });
  }

  ngOnInit(): void {
    console.log('this.selectionListItems:', this.selectionListItems);
    if (this.inputClasses) {
      console.log('this.inputClasses:', this.inputClasses);
    }
    // set _currentStatus to current control status - otherwise the initialization will count as a status change.
    this._currentStatus.next(this.control?.status);

    // get initial control value. Some input types (eg. picklists) require options to be built before the control can properly display the value.
    const initControlValue = this.control?.value;

    // establish observable to re-set the control to its initial value once the options are ready
    this.subscriptions.add(
      this._isInputReady.pipe(first()).subscribe((res) => {
        // input is ready, reset control to initial value
        this.control?.setValue(initControlValue);
        this.control.markAsUntouched();
        this.control.markAsPristine();
        this.control.updateValueAndValidity();
        this._isInputReady.next(null);
        this._isInputReady.complete();
      })
    )

    // add subscriptions to emit status and value changes
    this.subscriptions.add(this.control.valueChanges.subscribe((res) => {
      if (this.control.config?.behaviourOptions?.emitValueChangeWhenNull) {
        this.valueChange.emit(res);
      } else {
        if (res !== null && res !== undefined) {
          this.valueChange.emit(res);
        }
      }
      this.checkValidity();
    }));
    this.subscriptions.add(this.control.statusChanges.subscribe((res) => {
      if (this.control.config?.behaviourOptions?.emitStatusOnValueChange) {
        this.statusChange.emit(res);
      } else {
        if (res !== this._currentStatus.value) {
          this.statusChange.emit(res);
        }
      }
      this.checkValidity();
      this._currentStatus.next(res);
    }));

    // declare control initialized
    setTimeout(() => {
      this._controlInitialized.next(true);
    }, 2000)
  }

  getInputElement() {
    return this.el;
  }

  updateSelectionListItems(items: any[]) {
    const controlValue = this.control?.value;
    this._selectionListItems.next(items);
    this.selectionListUpdated.emit(items);
    if (controlValue != undefined) {
      this.control?.setValue(controlValue);
    } else {
      if (this.autoSelectFirstItem) {
        this.control?.setValue(this.selectionListItems[0]);
      } else {
        this.control?.setValue(null);
      }
    }
  }

  updateDisabledState(state) {
    this.isDisabled = state;
    if (state === true) {
      setTimeout(() => {
        this.control?.disable();
      }, 0);
      return;
    }
    setTimeout(() => {
      this.control?.enable();
    }, 0);
  }

  updateControlState() {
    // is control disabled?
    if (
      this._disabled.value === true ||
      this._loading.value === true ||
      this._controlInitialized.value === false
    ) {
      this.updateDisabledState(true);
    } else {
      this.updateDisabledState(false);
    }
    // is control loading?
    if (
      this._loading.value === true ||
      this._controlInitialized.value === false
    ) {
      this.isLoading = true;
    } else {
      this.isLoading = false;
    }
    // is control initialized?
    if (this._controlInitialized.value === false) {
      this.isControlInitialized = false;
    } else {
      this.isControlInitialized = true;
    }
  }

  checkValidity() {
    if (this.noValidationIfFocused && this._isFocused.value) {
      this._invalid.next(false);
      this.isInvalid = this._invalid.value;
      return this.isInvalid;
    }
    if (this.control && this.control.invalid && this.control.touched) {
      this._invalid.next(true);
    } else {
      this._invalid.next(false);
    }
    this.isInvalid = this._invalid.value;
    return this.isInvalid;
  }

  getInputClasses() {
    let classes = '';
    if (this.isInvalid) {
      classes += ' invalid-input';
    }
    classes += this.inputClasses;
    return classes;
  }

  checkInputGroup() {
    const input = this.inputGroup;
    console.log('input:', input);
    let classlist = [];
    if (!this.inputGroup.nativeElement.firstChild.toString().startsWith('input') ||
      !this.inputGroup.nativeElement.firstChild.toString().startsWith('select')) {
      classlist.push('input-group-before');
    }
    if (!this.inputGroup.nativeElement.lastChild.toString().startsWith('input') ||
      !this.inputGroup.nativeElement.lastChild.toString().startsWith('select')) {
      classlist.push('input-group-after');
    }
    return classlist;
  }

  isRequired() {
    return this.control.hasValidator(Validators.required);
  }

  onFocus() {
    this._isFocused.next(true);
    this.checkValidity();
    this.focus.emit();
  }

  onBlur() {
    this._isFocused.next(false);
    this.checkValidity();
    this.blur.emit();
  }

  resetControl(args?: resetControlArgs) {
    this.control.setValue(args?.value || null);
    if (!args.hasOwnProperty('setPristine') || args?.setPristine === true) {
      this.control.markAsPristine();
    }
    if (!args.hasOwnProperty('setUntouched') || args?.setUntouched === true) {
      this.control.markAsUntouched();
    }
  }

  ngOnDestroy() {
    // unsubscribe from all subscriptions when component is destroyed.
    this.subscriptions.unsubscribe();
  }

}

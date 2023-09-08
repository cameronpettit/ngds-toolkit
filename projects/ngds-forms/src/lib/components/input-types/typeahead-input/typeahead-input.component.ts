import { Component, Input } from '@angular/core';
import { NgdsInput } from '../ngds-input.component';

@Component({
  selector: 'ngds-typeahead-input',
  templateUrl: './typeahead-input.component.html',
  styleUrls: ['./typeahead-input.component.scss']
})
export class NgdsTypeaheadInput extends NgdsInput{
  @Input() typeaheadMinLength: number = 0; // Typeahead opens on select by default.
  @Input() typeaheadMultipleSearch: boolean = false;
  @Input() typeaheadMultipleSearchDelimiters: string = ';'
  
  setValue(event){
    if (this.typeaheadMultipleSearch) {
      if (!this.control.value.length) {
        this.control.setValue([event?.item?.value]);
      } else {
        this.control.setValue([event?.item?.value, ...this.control.value])
      }
    } else {
      this.control.setValue(event?.item?.value)
    }
  }

  get currentDisplayValue () {
    if (this.control.value && this.selectionListItems.length > 0) {
      if (this.typeaheadMultipleSearch && this.control.value.length) {
        let displayList = [];
        for (const value of this.control.value) {
          const item = this.selectionListItems.find((e) => e.value === value);
          displayList.push(item.display);
        }
        return displayList.reverse().join(this.typeaheadMultipleSearchDelimiters + " ");
      } else {
        const item = this.selectionListItems.find((e) => e.value === this.control.value);
        return item.display;
      }
    } else {
      return ''
    }
  }

  get currentOptionField () {
    console.log('called');
    if (this.selectionListItems.length > 0) {
      console.log('this.selectionListItems[0]:', this.selectionListItems[0]);
      if (this.selectionListItems[0].display) {
        return 'display';
      } 
    }
    return 'value'
  }

  getHighlightedMatch(item, query) {
    query = query.join(' ');
    let display = item.value;
    if (display.toLocaleLowerCase().indexOf(query) > -1) {
      const left_str = display.substring(0, display.toLocaleLowerCase().indexOf(query));
      const highlight_str = display.substring(display.toLocaleLowerCase().indexOf(query),display.toLocaleLowerCase().indexOf(query) + query.length)
      const right_str = display.substring(display.toLocaleLowerCase().indexOf(query) + query.length);
      return '<div>' + left_str + '<strong>' + highlight_str + '</strong>' + right_str + '</div>';
    }
    else
      return '<div>'+display+'</div>';

  }

}

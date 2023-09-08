import { Component, Input } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent {
  @Input() control;

  getStatusClass() {
    if (this.control?.status === 'DISABLED') {
      return 'text-secondary'
    }
    if (this.control?.status === 'INVALID') {
      return 'text-danger'
    }
    return ''
  }

  getValueClass() {
    if (this.control?.value === '') {
      return 'text-primary'
    }
    if (this.control?.value === null || this.control?.value === undefined) {
      return 'text-danger'
    }
    return ''
  }

  getValue() {
    if (this.control?.value === '') {
      return '<empty string>'
    }
    if (this.control?.value === null) {
      return '<null>'
    }
    if (this.control?.value === undefined) {
      return '<undefined>'
    }
    return this.control?.value || null;
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngds-input-overlay',
  templateUrl: './ngds-input-overlay.component.html',
  styleUrls: ['./ngds-input-overlay.component.scss']
})
export class NgdsInputOverlayComponent {
  @Input() loading: boolean = false;
  @Input() invalid: boolean = false;
}

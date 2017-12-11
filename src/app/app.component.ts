import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="example-wrapper">
      <p>T-shirt size:</p>
      <kendo-dropdownlist [data]="listItems">
      </kendo-dropdownlist>
    </div>
  `
})
export class AppComponent {
    public listItems: Array<string> = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="example-config">
      Current value: {{value | json}}
    </div>
    <div class="example-wrapper">
      <p>Favorite sport:</p>
      <kendo-multiselect 
      [data]="listItems" 
      [autoClose]="false" 
      [(ngModel)]="value">
      <ng-template kendoMultiSelectItemTemplate let-dataItem>
        <label id="{{dataItem}}"><input type="checkbox">{{dataItem}}
  			<span class="checkmark"></span>
		</label>
      </ng-template>
      </kendo-multiselect>
    </div>
  `
})
export class AppComponent {
    public listItems: Array<string> = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
    public value: any = ['Baseball']
}

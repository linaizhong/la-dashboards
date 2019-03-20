import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-chart',
  template: '<ng-content></ng-content>'
})
export class BaseChartComponent implements OnInit {
  @Input() title = 'Chart Title';
  @Input() width = 600;
  @Input() height = 400;
  @Input() selector;
  @Input() data: any;
  @Input() view: any[] = undefined;
  @Input() showXAxis = true;
  @Input() showYAxis = true;
  @Input() gradient = false;
  @Input() showLegend = false;
  @Input() showXAxisLabel = true;
  @Input() showYAxisLabel = true;
  @Input() xAxisLabel = 'X';
  @Input() yAxisLabel = 'Y';
  @Input() autoScale = true;
  @Input() labelTrimSize = 10;
  @Input() trimYAxisTicks = true;	
  @Input() labelTrim = true;
  @Input() timeline = true;
  @Input() animations = true;
  @Input() colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  visible$: Observable<boolean>;
  result: any;

  constructor(public store: Store) {}

  onSelect(event) {}

  ngOnInit() {
    this.result = this.data;
    this.visible$ = this.store.select(this.selector);
  }
}

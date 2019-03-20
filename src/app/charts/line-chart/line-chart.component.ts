import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent extends BaseChartComponent {
  constructor(public store: Store) {
    super(store);
  }
}

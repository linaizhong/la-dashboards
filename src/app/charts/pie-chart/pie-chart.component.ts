import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  //styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent extends BaseChartComponent {
  constructor(public store: Store) {
    super(store);
  }
}

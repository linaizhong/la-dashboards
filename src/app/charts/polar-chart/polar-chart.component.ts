import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  //styleUrls: ['./polar-chart.component.scss']
})

export class PolarChartComponent extends BaseChartComponent {
	constructor(public store: Store) {
		super(store);
  }
}

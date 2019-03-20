import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import * as moment from 'moment';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-stacked-vertical-bar',
  templateUrl: './stacked-vertical-bar.component.html',
  styleUrls: ['./stacked-vertical-bar.component.scss']
})
export class StackedVerticalBarComponent extends BaseChartComponent {
  constructor(public store: Store) {
    super(store);
  }
  /*
  format(x) {
    return moment(x).format('DD-MMM-YYYY');
  }
  */
}

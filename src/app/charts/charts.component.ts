import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'apollo-client/util/Observable';
import { ChartsService } from './services/charts.service';
import { OptionsAction } from './state/charts.actions';
import { ChartsState } from './state/charts.state';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Select(ChartsState)
  charts$: Observable<ChartsState>;
  options: { key: string; value: boolean }[];
  chartsState = ChartsState;
  constructor(public store: Store, private chartsService: ChartsService) {}

  ngOnInit() {
    this.charts$.subscribe(x => {
      this.options = Object.entries(x).map(([key, value]) => ({ key, value }));
    });
  }
  toggle(event, name) {
    this.store.dispatch(new OptionsAction({ key: name, value: event.checked }));
  }
  getSentimentByUser() {
    return this.chartsService.getSentimentByUser();
  }
  getSocialDataByPlatform() {
    return this.chartsService.getSocialDataByPlatform();
  }
}

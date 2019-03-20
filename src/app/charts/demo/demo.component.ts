import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'apollo-client/util/Observable';
import { OptionsAction } from './../state/charts.actions';
import { ChartsDemoService } from './services/charts.service';
import { ChartsDemoState } from './state/charts.state';

@Component({
  selector: 'app-charts',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})


export class DemoComponent implements OnInit {
  @Select(ChartsDemoState)
  charts$: Observable<ChartsDemoState>;
  options: { key: string; value: boolean }[];
  chartsState = ChartsDemoState;
  constructor(public store: Store, private chartsService: ChartsDemoService) {}

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
  getQuizByVerb() {
	  return this.chartsService.getQuizByVerb();
  }
  getQuizByVerbForTest1() {
	  return this.chartsService.getQuizByVerbForTest1();
  }
  getQuizByVerbForTest2() {
	  return this.chartsService.getQuizByVerbForTest2();
  }
  getQuizByVerbForTest3() {
	  return this.chartsService.getQuizByVerbForTest3();
  }
  getQuizByVerbForTest4() {
	  return this.chartsService.getQuizByVerbForTest4();
  }
  getSentimentByPlatform1() {
	  return this.chartsService.getSentimentByPlatform1();
  }
  getSentimentByPlatform2() {
	  return this.chartsService.getSentimentByPlatform2();
  }
  getQuizScore() {
	  return this.chartsService.getQuizScore();
  }
}



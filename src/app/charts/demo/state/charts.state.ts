import { Action, createSelector, State, StateContext } from '@ngxs/store';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { OptionsAction } from './charts.actions';

export class ChartOptionsDemoStateModel {
  public line_chart__getSocialDataByPlatform1: boolean;
  public line_chart__getSocialDataByPlatform2: boolean;
  public line_chart__getSocialDataByPlatform3: boolean;
  public stacked_vertical_bar__getSentimentByUser1: boolean;
  public stacked_vertical_bar__getSentimentByUser2: boolean;
  public polar_chart__getQuizByVerb1: boolean;
  //public pie_chart__getQuizScore: boolean;
  public line_chart__getQuizByVerb2: boolean;
  public stacked_vertical_bar__getQuizByVerb3: boolean;
  public stacked_vertical_bar__getQuizByVerb4: boolean;
  public stacked_vertical_bar__getQuizByVerb5: boolean;
  public stacked_vertical_bar__getSentimentByPlatform1: boolean;
  public stacked_vertical_bar__getSentimentByPlatform2: boolean;
}

@State<ChartOptionsDemoStateModel>({
  name: 'demoCharts',
  defaults: {
    line_chart__getSocialDataByPlatform1: false,
    line_chart__getSocialDataByPlatform2: false,
    line_chart__getSocialDataByPlatform3: false,
    stacked_vertical_bar__getSentimentByUser1: false,
    stacked_vertical_bar__getSentimentByUser2: false,
	polar_chart__getQuizByVerb1: true,
	line_chart__getQuizByVerb2: true,
	stacked_vertical_bar__getQuizByVerb3: true,
	stacked_vertical_bar__getQuizByVerb4: true,
	stacked_vertical_bar__getQuizByVerb5: true,
	stacked_vertical_bar__getSentimentByPlatform1: true,
	stacked_vertical_bar__getSentimentByPlatform2: true,
	//pie_chart__getQuizScore: false	
  }
})
export class ChartsDemoState {
  static select(type: string) {
    return createSelector(
      [ChartsDemoState],
      (state: string[]) => {
        return state[type];
      }
    );
  }
  constructor(private analyticsService: AnalyticsService) {}
  @Action(OptionsAction)
  setOptionsAction(
    ctx: StateContext<ChartOptionsDemoStateModel>,
    action: { payload: { key: string; value: boolean } }
  ) {
    ctx.patchState({ [action.payload.key]: action.payload.value });
    this.analyticsService.logUserAction(`${action.payload.key}: ${action.payload.value}`);
  }
}

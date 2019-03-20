import { Action, createSelector, State, StateContext } from '@ngxs/store';
import { AnalyticsService } from '../../core/services/analytics.service';
import { OptionsAction } from './charts.actions';

export class ChartOptionsStateModel {
  public line_chart__getSocialDataByPlatform: boolean;
  public stacked_vertical_bar__getSentimentByUser: boolean;
}

@State<ChartOptionsStateModel>({
  name: 'charts',
  defaults: {
    line_chart__getSocialDataByPlatform: true,
    stacked_vertical_bar__getSentimentByUser: true
  }
})
export class ChartsState {
  static select(type: string) {
    return createSelector(
      [ChartsState],
      (state: string[]) => {
        return state[type];
      }
    );
  }
  constructor(private analyticsService: AnalyticsService) {}
  @Action(OptionsAction)
  setOptionsAction(
    ctx: StateContext<ChartOptionsStateModel>,
    action: { payload: { key: string; value: boolean } }
  ) {
    ctx.patchState({ [action.payload.key]: action.payload.value });
    this.analyticsService.logUserAction(`${action.payload.key}: ${action.payload.value}`);
  }
}

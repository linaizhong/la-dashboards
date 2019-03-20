export class OptionsAction {
  static readonly type = '[Options] hide/show';
  constructor(public payload: { key: string; value: boolean }) {}
}

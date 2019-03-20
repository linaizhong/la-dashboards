import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor() {}

  logUserAction(params: string) {
    console.log(params);
  }
}

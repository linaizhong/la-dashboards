import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '../shared/material.module';
import { BaseChartComponent } from './base-chart/base-chart.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { DemoComponent } from './demo/demo.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { StackedVerticalBarComponent } from './stacked-vertical-bar/stacked-vertical-bar.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { CanvasCourseComponent } from './canvas-course/canvas-course.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    MaterialModule.forRoot(),
    FormsModule,
    ChartsRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    StackedVerticalBarComponent,
    LineChartComponent,
    ChartsComponent,
    BaseChartComponent,
    DemoComponent,
    PolarChartComponent,
    PieChartComponent,
    CanvasCourseComponent
  ],
  providers: [ChartsModule]
})
export class ChartsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { DemoComponent } from './demo/demo.component';
import {CanvasCourseComponent} from "./canvas-course/canvas-course.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ChartsComponent
      }
    ]
  },
  {
    path: 'demo',
    children: [
      {
        path: '',
        component: DemoComponent
      }
    ]
  },
  {
    path: 'canvas',
    children: [
      {
        path: '',
        component: CanvasCourseComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule {}

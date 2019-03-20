import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCourseComponent } from './canvas-course.component';

describe('CanvasCourseComponent', () => {
  let component: CanvasCourseComponent;
  let fixture: ComponentFixture<CanvasCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

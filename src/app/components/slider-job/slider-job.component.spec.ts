/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderJobComponent } from './slider-job.component';

describe('SliderJobComponent', () => {
  let component: SliderJobComponent;
  let fixture: ComponentFixture<SliderJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

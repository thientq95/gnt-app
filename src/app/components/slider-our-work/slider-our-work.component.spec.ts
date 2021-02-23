/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderOurWorkComponent } from './slider-our-work.component';

describe('SliderOurWorkComponent', () => {
  let component: SliderOurWorkComponent;
  let fixture: ComponentFixture<SliderOurWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderOurWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderOurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

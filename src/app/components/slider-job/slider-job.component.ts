import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { slider } from 'src/app/animations/slider.animation';

@Component({
  selector: 'app-slider-job',
  templateUrl: './slider-job.component.html',
  styleUrls: ['./slider-job.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderJobComponent implements OnInit {

  imgags = [
    'https://s3.ap-southeast-1.amazonaws.com/gambaru.io/prod/img/Frontend1282px.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210221T135308Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIAZ3PVRA52FB4D3W7N%2F20210221%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=7b0732515b43984345b52d4af59013d1c77c60a729c74a05cd615b088185601a',
    'https://s3.ap-southeast-1.amazonaws.com/gambaru.io/prod/img/Backend1282px.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210221T135308Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIAZ3PVRA52FB4D3W7N%2F20210221%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=3764433ff12d2774f053a0389e0e5596a883ca711fadb061ea066502d01ec1b3',
  ];
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 2, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 15000 },
    animation: 'lazy',
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  tempData: any[];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(30),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }

}

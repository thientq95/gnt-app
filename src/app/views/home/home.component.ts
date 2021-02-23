import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { slider } from 'src/app/animations/slider.animation';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [slider],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    imgags = [
        'https://www.gnt.com.vn/_nuxt/img/newphoria.8df199c.png',
        'https://www.gnt.com.vn/_nuxt/img/valunex.329b80f.png',
        'https://www.gnt.com.vn/_nuxt/img/dena.a1e0366.png',
        'https://www.gnt.com.vn/_nuxt/img/napster.6365bad.png',
        'https://www.gnt.com.vn/_nuxt/img/digital-heart.e032f85.png',
        'https://www.gnt.com.vn/_nuxt/img/forvaltel.75995a6.png',
        'https://www.gnt.com.vn/_nuxt/img/gianty.a3ac665.png'
    ];
    public carouselTileItems$: Observable<number[]>;
    public carouselTileConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
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

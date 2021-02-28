import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScroll = false;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isScroll = false;

        const scrollToTop = window.setInterval(() => {
          const pos = window.pageYOffset;
          if (pos > 0) {
            window.scrollTo(0, pos - 20);
          } else {
            window.clearInterval(scrollToTop);
          }
        }, 0);
      }

      if (event instanceof NavigationEnd) {

      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }

  ngOnInit(): void {
  }

}

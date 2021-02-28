import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) {
    this.seoService.updateTitle('GNT | Contact');
  }

  ngOnInit() {
  }

}

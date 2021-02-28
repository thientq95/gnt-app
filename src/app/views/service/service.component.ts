import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private seoService: SeoService) {
    this.seoService.updateTitle('GNT | Service');
  }
  ngOnInit(): void {
  }

}

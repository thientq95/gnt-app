import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  leaders = [
    {
      name: 'Ho Tung Lam',
      job: 'CEO and Chairman',
      link: 'https://www.gnt.com.vn/_nuxt/img/img_1.6cc0a90.jpg',
      description: 'In 1994, he co-founded Alpha Group Inc. and worked as a director. In August 2001, he founded GIANTY Inc. in Japan. At the dawn of mobile internet, he engaged in mobile content, mobile media, mobile EC, etc. Since 2006, he has constructed offshore development system in Vietnam, and made GNT offshore software development services have a stronger presence on the global tech market.'
    },
    {
      name: 'Shingo Honda',
      job: 'COO',
      link: 'https://www.gnt.com.vn/_nuxt/img/img_1.6cc0a90.jpg',
      description: 'After managing mobile network services for Epicturez Co., Ltd. (currently a business division of Art Vivant Co., Ltd.), he engaged in mobile content as a company founding member in 2000. In 2004, at Zappallas Inc., he was in charge of mobile services including mobile EC, solutions, games, divination, etc. In 2008, he joined GNT, and took charge of mobile content, social games for Japanese market. He currently manages offshore software development services.'
    },
    {
      name: 'Nobuyasu Kondo',
      job: 'BOARD MEMBER',
      link: 'https://www.gnt.com.vn/_nuxt/img/img_3.43ae61d.jpg',
      description: 'In 1997, he joined Alpha Group Inc., in charge of project development and became representative of the group company. After that, he engaged in mobile platforms. In 2001, he joined GNT. After working in EC business and public relation, he took charge of marketing for foreign markets. Since 2012, he has worked as the manager of the US branch in San Francisco.'
    },
    {
      name: 'Tamehisa Shikishima',
      job: 'BOARD MEMBER',
      link: 'https://www.gnt.com.vn/_nuxt/img/img_4.be864c1.jpg',
      description: `
      In 1993, he founded Inter Deco Co., Ltd., and became the company CEO. In 2007, he transferred Inter Deco Co., Ltd. to ICJ Co., Ltd (currently GIANTY Inc.), and worked as a board member. Since 2010, he has been based in Vietnam, in charge of offshore software development services.
      `
    },
    {
      name: 'Nguyen Anh Bang',
      job: 'CTO',
      link: 'https://www.gnt.com.vn/_nuxt/img/img_5.f6bfe52.jpg',
      description: `
      In 2003, he graduated from Vietnam National University - University of Science, Ho Chi Minh City, and joined Sang Tao Inc. Vietnam, working in software development. In 2005, he joined Hitachi Information and Technology, Ltd. (currently, Hitachi Information & Telecommunication Engineering, Ltd.) as a software engineer. In 2006, he joined GNT Vietnam and has constructed Vietnam offshore development system in both business and technical areas for more than 10 years. In 2011, he became a board member and CTO of GNT Vietnam.
      `
    }
  ];

  constructor(private seoService: SeoService) {
    this.seoService.updateTitle('GNT | About us');
  }

  ngOnInit(): void {
  }

}

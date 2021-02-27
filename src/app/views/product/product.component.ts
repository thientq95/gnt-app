import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = [
    {
      title: 'Goken',
      description: 'GOKEN seeks to bring back everything that was right about gaming in an action-packed open world environment in the form of the good old Action RPG genre and have old school gamers tremble in nostalgia. Combining the classic style of Japanese role-playing games with the innovation and intuition of Vietnamese artists and developers, GOKEN brings nothing to gamers but pure joy and exhilaration.',
      link: 'https://www.gnt.com.vn/_nuxt/img/GOKEN.4b887b1.jpg',
      tag: 'Games'
    },
    {
      title: 'MONSTER DRIVE REVOLUTION',
      description: 'In this RPG, players will participate in combat with easy Roulette Control. Besides, players can team up with friends to battle against each other. Great Monsters in PvP mode allow up to maximum 6 players to join the combat online and in real-time, using their own collection of monsters.',
      link: 'https://www.gnt.com.vn/_nuxt/img/mondra.5aa8e41.jpg',
      tag: 'Games'
    },
    {
      title: 'AYAKASHI HYAKKIYAKO KIWAMI',
      description: 'Following the hit Ayakashi, the RPG Ayakashi Kiwami released on June 20th 2017 has players facing the end of the world. After joining force with Lady Okou, players will travel the world and catch yokai. The more you battle and win, the stronger you get. Good luck!',
      link: 'https://www.gnt.com.vn/_nuxt/img/Ayakashi-Kiwami.a93b3c5.jpg',
      tag: 'Games'
    },
    {
      title: 'AYAKASHI HYAKKIYAKO TAMASHII',
      description: 'As fate brings you to meet Succubus to achieve the goal of becoming Youkai Ou (the King of Evil), it’s time to start to create a rise of Yokai Clan. On the journey you will take part in many interactions and encounter multiple personalities in a variety of settings. It has since embroidered a story of heroics and romance which unfolds as the player gets deeper into the game.',
      link: 'https://www.gnt.com.vn/_nuxt/img/Ayakashi.2437ab9.jpg',
      tag: 'Games'
    },
    {
      title: 'FARMI',
      description: 'FARMI’s mission is to bring fresh, safe and quality food to your family. You can easily place order anytime through the app and receive everything at your doorstep after just 1 hour! Never before has food shopping in Vietnam been this convenient and safe.',
      link: 'https://www.gnt.com.vn/_nuxt/img/Farmi.0de15c7.jpg',
      tag: 'Applications'
    },
    {
      title: 'STIXY',
      description: 'Stixy allows you to generate a vast amount of animated stickers by using camera, photo library or Internet search functions. With hundreds of stickers on Stixy, you can make funnier, crazier contents to share the same experience with your friends and family anywhere in the world.',
      link: 'https://www.gnt.com.vn/_nuxt/img/Stixy.f22acef.jpg',
      tag: 'Applications'
    },
    {
      title: 'WORLD OF CRYPTIA',
      description: 'GNT officially released World of Cryptia, a blockchain game in 2019, tapping into the potential blockchain gaming industry.',
      link: 'https://www.gnt.com.vn/_nuxt/img/Blockchain.788dc36.jpg',
      tag: 'Others'
    },
    {
      title: 'GNT ANALYTICS SYSTEM',
      description: 'This is surely another GNT innovative, user-friendly product when one needs a tool providing remarkable insight and statistical analysis on games and applications.',
      link: 'https://www.gnt.com.vn/_nuxt/img/GNT-Analytics-System.46fa916.jpg',
      tag: 'Others'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

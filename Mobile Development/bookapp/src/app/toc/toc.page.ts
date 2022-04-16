import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
public chapters = [
{
  title: 'Home Page',
  url: '/home'
},
  {title: 'Chapter 1',
  url: '/chapter1'
},
  {title: 'Chapter 2',
  url: '/chapter2'
}
];
  constructor() { }

  ngOnInit() {
  }

}

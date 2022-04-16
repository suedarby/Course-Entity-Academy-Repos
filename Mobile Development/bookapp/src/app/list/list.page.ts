import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public items: Array<{ title: string; note: string; icon: string }> = [];
  private selectedItem: any;
private icons = [
  'wifi',
  'home',
  'back',
  'forward',
  'chat',
  'email',
  'phone'
];

  constructor() {
    for (let i = 1; i < 7; i++){
      this.items.push({
        title: 'Item (list pages)' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
   }

  ngOnInit() {
  }

}

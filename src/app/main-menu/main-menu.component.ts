import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: [
  ]
})
export class MainMenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      href: 'auctions',
      label: 'Aukcje'
    },
    {
      href: 'promotions',
      label: 'Promocje'
    },
    {
      href: 'advices',
      label: 'Podpowiadamy'
    }
  ];

  showNavbar = false;

  constructor() { }

  ngOnInit(): void {
  }

}

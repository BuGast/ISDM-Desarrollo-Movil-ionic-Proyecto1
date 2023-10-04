import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  public appPages = [
    { title: 'Perro', url: '/perro', icon: 'paw' },
    { title: 'Tab1', url: '/tab1', icon: 'document' },
    { title: 'Tab2', url: '/tab2', icon: 'document' },
    { title: 'Tab3', url: '/tab3', icon: 'document' },
  ];

  constructor() { }
}

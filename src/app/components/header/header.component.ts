import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() color: string | undefined;
  @Input() titulo: string | undefined;
  saludo = "buenas tardes"
  comision = " A"

  constructor(private menu: MenuController) { }

  toggleMenu() {
    this.menu.toggle();
  }
  ngOnInit() {}

  miEvento()
  {
    console.log(this.saludo + this.comision)
  }
}

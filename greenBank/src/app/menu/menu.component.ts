import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  links!: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.links = new Array();
    this.links.push({
      rota: 'adminDashbord',
      textContent: 'Admin Dashbord',
      cor: 'far fa-circle nav-icon text-pink',
      hexa: 'text-pink',
    });
  }
}

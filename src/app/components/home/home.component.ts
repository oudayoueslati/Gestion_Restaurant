import { Component, OnInit } from '@angular/core';
import { MenuService, Menu } from './../../service/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  approvedMenus: Menu[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getApprovedMenus().subscribe({
      next: (menus) => {
        this.approvedMenus = menus.filter(menu => menu.approved === true);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des menus :', err);
      }
    });
  }
}

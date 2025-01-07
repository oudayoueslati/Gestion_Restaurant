import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent {
  menu: any;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    const menuId = this.route.snapshot.paramMap.get('id');
    if (menuId) {
      this.menuService.getMenuById(menuId).subscribe((data) => {
        this.menu = data; 
      });
    }
  }

}

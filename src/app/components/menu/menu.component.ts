import { Component , Input} from '@angular/core';
import { Menu } from '../../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() menu!: Menu;
  viewDetails() {
    alert(`Détails du menu: ${this.menu.titre}`);
   
  }

  reserveMenu() {
    alert(`Réservation pour le menu: ${this.menu.titre}`);
  
  }
}

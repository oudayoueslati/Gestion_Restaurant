import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  titre: string = '';
  description: string = '';
  isSubmitting: boolean = false;

  constructor(private menuService: MenuService) {}

  addMenu() {
    if (!this.titre || this.description.length < 10) {
      alert('Veuillez remplir les champs correctement.');
      return;
    }

    const newMenu = {
      titre: this.titre,
      description: this.description,
      approved: false,
      mark: 0
    };

    this.isSubmitting = true;
    this.menuService.addMenu(newMenu).subscribe({
      next: () => {
        alert('Menu ajouté avec succès !');
        this.titre = '';
        this.description = '';
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout du menu :', err);
        this.isSubmitting = false;
      }
    });
  }
}

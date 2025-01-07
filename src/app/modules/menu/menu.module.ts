import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { AddMenuComponent } from '../../components/add-menu/add-menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MenuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ListReservationsComponent } from '../../components/list-reservations/list-reservations.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    HttpClientModule
  ]
})
export class ReservationModule { }

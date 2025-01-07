import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent} from './components/not-found/not-found.component' ;
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';

const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path : "",redirectTo : '/home',pathMatch :'full'},
  {path : 'reservations', loadChildren: () => import('./modules/reservation/reservation.module').then ((m) => m.ReservationModule)},
  {path : 'propsition', loadChildren: () => import('./modules/menu/menu.module').then ((m) => m.MenuModule)},
  { path: 'details/:id', component: MenuDetailsComponent },
  {path : "**", component :NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


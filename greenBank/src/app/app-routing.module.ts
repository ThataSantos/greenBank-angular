import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdiminDashboardComponent } from './adimin-dashboard/adimin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SegurancaService } from './seguranca.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'adminDashbord',
    component: AdiminDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

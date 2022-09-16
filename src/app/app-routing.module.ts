import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './Shared/not-found404/not-found404.component';
import { MaintenanceComponent } from './Shared/maintenance/maintenance.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

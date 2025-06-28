import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'micro-frontend1',
    loadChildren: () => import('midro-frontend1/Module').then(m => m.MicroFrontend1Module)
  },
  {
    path: 'micro-frontend2',
    loadChildren: () => import('midro-frontend2/Module').then(m => m.MicroFrontend2Module)
  },
  { path: '', redirectTo: '/micro-frontend1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1ShareModule } from '../../../app1/src/app/app.module';
import { App2ShareModule } from '../../../app2/src/app/app.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app1/home'
  },
  {
    path: 'app1',
    loadChildren: ()=> import('../../../app1/src/app/app.module').then(m => m.App1ShareModule)
  },
  {
    path: 'app2',
    loadChildren: ()=> import('../../../app2/src/app/app.module').then(m => m.App2ShareModule)
  },
  {
    path: '**',
    redirectTo: 'app1/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    // * Importamos los módulos para poder importar y usar sus rutas desde app0
  App1ShareModule.forRoot(),
  App2ShareModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

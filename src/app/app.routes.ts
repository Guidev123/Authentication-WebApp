import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
      { path: '', redirectTo: 'catalog', pathMatch: 'full'},
      { path: 'catalog', component: CatalogComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent}
  ]}
];

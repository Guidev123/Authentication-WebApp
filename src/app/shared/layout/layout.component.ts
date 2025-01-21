import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private authService: AuthService){}

  logout(){
    this.authService.logout();
  }

  isAuthenticated():boolean{
    return this.authService.isLoggedIn();
  }
}

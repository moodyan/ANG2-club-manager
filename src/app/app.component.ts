import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['members']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate(['admin']);
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}

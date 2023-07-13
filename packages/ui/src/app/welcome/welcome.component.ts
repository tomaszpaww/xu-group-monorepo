import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'xu-group-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  userEmail: string | undefined;

  constructor(private authService: AuthService) {
    this.userEmail = this.authService.currentUser?.emailAddresses?.[0].emailAddress;
  }
}

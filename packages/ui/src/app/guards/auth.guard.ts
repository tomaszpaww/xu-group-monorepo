import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate() {
    await this.authService.load();

    if (!this.authService.isAuthenthicated) {
      this.authService.signIn();
      return false;
    }

    return true;
  }
}

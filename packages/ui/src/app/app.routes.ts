import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
  { path: '', component: WelcomeComponent, canActivate: [AuthGuard] }
];

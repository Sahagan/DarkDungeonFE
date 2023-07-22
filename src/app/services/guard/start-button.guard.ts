import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StartButtonGuard implements CanActivate {
  private hasPressedStartButton = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.hasPressedStartButton) {
      return true; // Allow navigation to /start
    } else {
      this.router.navigate(['/']); // Redirect back to the homepage
      return false;
    }
  }

  setStartButtonPressed() {
    this.hasPressedStartButton = true;
  }
}

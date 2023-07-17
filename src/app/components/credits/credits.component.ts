import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { playButtonSound } from 'src/app/services/common/utility.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent {
  constructor(private router: Router) {}
  onBack(): void {
    //back to homepage
    playButtonSound();
    this.router.navigate(['/home']);
  }
}

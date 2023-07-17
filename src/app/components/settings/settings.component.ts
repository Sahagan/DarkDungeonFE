import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { playButtonSound, setVolumeBackgroundMusic, setVolumeEffect } from 'src/app/services/common/utility.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private router: Router) {}
  BGVolume : any;
  EffectVolume : any;
  onBack(): void {
    //back to homepage
    playButtonSound();
    this.router.navigate(['/home']);
  }

  onBGVolumeChange(): void {
    setVolumeBackgroundMusic(this.BGVolume);
  }

  onEffectVolumeChange(): void {
    setVolumeEffect(this.EffectVolume);
  }
}

import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { playBackgroundMusic, playButtonSound, stopBackgroundMusic} from 'src/app/services/common/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(
    private router: Router,
  ) {}
  public isStartButtonClicked: boolean = false;
  ngOnInit(): void {
      playBackgroundMusic(); // Start playing background music
  };

  onStartNewGame(): void {
    this.isStartButtonClicked = true;
    // Play the button sound effect
    stopBackgroundMusic();
    setTimeout(() => {
      this.isStartButtonClicked = false;
      this.router.navigate(['/start']);
    }, 3000);
  }

  onLoadGame(): void {
    // Logic to load a saved game
    // Logic for starting a new game
    playButtonSound();
  }

  onSettings(): void {
    // Logic to navigate to the settings page
    playButtonSound();
    this.router.navigate(['/settings']);
  }

  onCredits(): void {
    // Logic to navigate to the Credits page
    playButtonSound();
    this.router.navigate(['/credits']);
  }
}

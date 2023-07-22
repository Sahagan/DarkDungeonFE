import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { playBackgroundMusic, playButtonSound, playbgMusicEnd, stopAllMusic} from 'src/app/services/common/utility.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { StartButtonGuard } from 'src/app/services/guard/start-button.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('3000ms ease-in')),
    ]),
  ]
})
export class HomeComponent{
  constructor(
    private router: Router,
    private startButtonGuard: StartButtonGuard
  ) {}
  public state = 'visible';
  public isStartButtonClicked: boolean = false;
  async ngOnInit(): Promise<void> {
    await stopAllMusic();
    await playBackgroundMusic(); // Start playing background music
  };

  async onStartNewGame(): Promise<void> {
    this.startButtonGuard.setStartButtonPressed();
    this.isStartButtonClicked = true; // Play the button sound effect
    this.state = 'hidden';
    await stopAllMusic();
    playbgMusicEnd();
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

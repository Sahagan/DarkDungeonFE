import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { playBackgroundMusic, playButtonSound, stopBackgroundMusic} from 'src/app/services/common/utility.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


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
  ) {}
  public state = 'visible';
  public isStartButtonClicked: boolean = false;
  ngOnInit(): void {
      playBackgroundMusic(); // Start playing background music
  };

  onStartNewGame(): void {
    this.isStartButtonClicked = true; // Play the button sound effect
    this.state = 'hidden';
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

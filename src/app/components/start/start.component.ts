import { Component, HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { generateDialog, getUrl, playButtonSound, playDialogEffect, playInputPlayerName, playPrologue, playrainEffect, playสวัสดดีค้าบEffect, setVolumeBackgroundMusic, setVolumeEffect, stopAllMusic, stopAllMusicPlus, stopDialogEffect } from '../../services/common/utility.service';
import { RequestService } from 'src/app/services/common/request.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('1000ms ease-in')),
    ]),
  ]
})
export class StartComponent {
  constructor(
    private router: Router,
    private RequestService: RequestService
  ) { }
  public state = 'hidden';
  public isConfirmClicked: boolean = false;
  playerName: any;
  EffectVolume: any;
  MusicVolume: any;
  animatedText: any;
  WaningMessage: boolean = false;
  //Input 
  showNameInput: boolean = true;
  NameConfirm: boolean = false;
  //typingText
  TypingText: boolean = false;

  async ngOnInit(): Promise<void> {
    playInputPlayerName();
    await setTimeout(() => {
      this.state = 'visible';
    }, 1000);
  };

  showWaningMessage() {
    this.WaningMessage = true;
  }

  hideWaningMessage() {
    this.WaningMessage = false;
  }

  onEffectVolumeChange(): void {
    setVolumeEffect(this.EffectVolume);
  };

  onMusicVolumeChange(): void {
    setVolumeBackgroundMusic(this.MusicVolume);
  };

  async onBack(): Promise<void> {
    await stopAllMusicPlus();
    //back to homepage
    playButtonSound();
    this.router.navigate(['/home']);
  };

  async onEnterClicked() {
    playButtonSound();
    try {
      if (!this.playerName) {
        throw `Player name cannot be empty!`
      } else if (this.playerName) {
        if (/^[A-Za-z0-9]{1,10}$/.test(this.playerName) === false) {
          throw `Invalid PlayerName \n please enter only Character[English] or Number without Spacebar \n The name should be less than 10 characters`
        }
      };
      this.showNameInput = false;
      this.NameConfirm = true;
    } catch (error) {
      alert(error);
    }
  };


  async animateText(text: string, duration?: any) { //for animated text
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000);
    playDialogEffect(2000);
    this.TypingText = true;
    this.animatedText = text;
    if(duration){
      await delay(duration);
      this.TypingText = false;
    }else{
      //this.TypingText = false;
    }
  };

  async getDialog(stage: number,map?: string){
    let data:any = await generateDialog(this.playerName, stage, map);
    if(data.message.length > 1){
      for(let i = 0 ; i < data.message.length ; i++){
        if(i == data.message.length - 1){
          await this.animateText(data.message[i]);
        }else{
          await this.animateText(data.message[i],5000);
        }
      }
    }else{

    }
  };

  async onConfirmClicked() {
    await stopAllMusic();
    playสวัสดดีค้าบEffect();
    this.NameConfirm = false;
    this.isConfirmClicked = true;
    let response: any;
    let url: any;
    try {
      url = await getUrl('username');
      response = await this.RequestService.postData(url, { "playerName": this.playerName });
      if (response.body.resultCode === '20000') {
        this.showNameInput = false;
        url = await getUrl('map');
        response = await this.RequestService.getData(url);
        if (response.body.resultCode === '20000' && response.body.data) {
          await this.animateText('...', 5000);
          await this.animateText(`sorry I've pick the wrong sound effect!!`, 5000);
          await this.animateText(`btw.. shall we begin?`, 5000);
          playPrologue();
          await this.getDialog(0);
          //await this.animateText(await generateDialog(this.playerName, 0), 3000)

        } else {
          throw `err`
        }
        //response = 
      } else {
        throw `err`
      }
    } catch (error) {
      alert(`An Error Occurred please contact our support`);
    }
  }

  async onNoClicked() {
    playButtonSound();
    this.NameConfirm = false;
    this.showNameInput = true;
  }

}

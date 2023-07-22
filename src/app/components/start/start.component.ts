import { Component, HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getUrl, playButtonSound, playInputPlayerName, playrainEffect, setVolumeBackgroundMusic, setVolumeEffect, stopInputPlayerName, stoprainEffect } from '../../services/common/utility.service';
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
  ) {}
  public state = 'hidden';
  playerName : any;
  EffectVolume : any;
  MusicVolume: any;
  //Input
  showNameInput: boolean = true;
  async ngOnInit(): Promise<void> {
    await setTimeout(()=>{
      this.state = 'visible';
      setTimeout(() => {
        playInputPlayerName();
      },1000);
    },1000);
  };

  onEffectVolumeChange(): void {
    setVolumeEffect(this.EffectVolume);
  };

  onMusicVolumeChange(): void {
    setVolumeBackgroundMusic(this.MusicVolume);
  };

  onBack(): void {
    stopInputPlayerName();
    //back to homepage
    playButtonSound();
    this.router.navigate(['/home']);
  };

  async onEnterClicked(){
    playButtonSound();
    let response:any;
    let url:any;
    try{
      if(!this.playerName){
        throw `Player name cannot be empty!`
      }else if(this.playerName){
        if(/^[A-Za-z0-9]{1,10}$/.test(this.playerName) === false){
          throw `Invalid PlayerName \n please enter only Character or Number without Spacebar`
        }
      };
      url = await getUrl('username');
      response = await this.RequestService.postData(url,{"playerName" : this.playerName});
      if(response.resultCode === '20000'){
        this.showNameInput = false;
        url = await getUrl('map');
        response = await this.RequestService.getData(url);
        //response = 
      }else{
        throw `Service Unavailable`
      }
    }catch(error){
      alert(error);
    }
  };

}

import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getUrl, playButtonSound, playrainEffect, setVolumeEffect, stoprainEffect } from '../../services/common/utility.service';
import { RequestService } from 'src/app/services/common/request.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(
    private router: Router,
    private RequestService: RequestService
  ) {}
  playerName : any;
  EffectVolume : any;
  
  ngOnInit(): void {
    playrainEffect();
  };

  onEffectVolumeChange(): void {
    setVolumeEffect(this.EffectVolume);
  };

  onBack(): void {
    stoprainEffect();
    //back to homepage
    playButtonSound();
    this.router.navigate(['/home']);
  };

  async onEnterClicked(){
    playButtonSound();
    let response:any;
    try{
      if(!this.playerName){
        throw `Player name cannot be empty!`
      };
      let url = getUrl('username');
      response = await this.RequestService.postData(url,{"username" : this.playerName});
      if(response && response.resultCode === '20000'){

      }else{
        throw `Service Unavailable`
      }
    }catch(error){
      alert(error);
    }
  };
}

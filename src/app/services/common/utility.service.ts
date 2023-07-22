import { environment } from "@environments/environment";
//volume control
let MusicVolume: number = 0.1;
let EffectVolume: number = 0.1;

//bg music status
let isPlaying = false;
let wasPlayingBefore = false;

//effect sound
let buttonSound = new Audio('../../../assets/sound/pop.mp3');
let rainEffect = new Audio('../../../assets/sound/soft-rain-ambient-111154.mp3');
rainEffect.loop = true;
buttonSound.volume = EffectVolume;
buttonSound.volume = EffectVolume;
//music
let bgMusic = new Audio('../../../assets/sound/Title Theme/xDeviruchi - Title Theme (Loop).wav');
let bgMusicEnd = new Audio('../../../assets/sound/Title Theme/xDeviruchi - Title Theme (End).wav');
let NameInputMusic = new Audio('../../../assets/sound/WhatsYourName_David Fesliyan.mp3');
bgMusic.volume = MusicVolume;
bgMusicEnd.volume = MusicVolume;
NameInputMusic.volume = MusicVolume;
bgMusic.loop = true; // Set the music to loop
NameInputMusic.loop = true;

export function getDomain(){
    try{
        return `${environment.backend}`
    }catch(error){
        return `Can not get endpoint error : ${error}`;
    }
};

export function getUrl(endpoint:string){
    try{
        switch(endpoint){
            case 'username':
                return `${environment.backend}${environment.url.username}`;
            case 'items':
                return `${environment.backend}${environment.url.items}`;
            case 'map':
                return `${environment.backend}${environment.url.username}`;
            default :
                throw 'url does not exist'
        };
    }catch(error){
        return `Can not get url : ${error}`;
    }
};

export function  playButtonSound(): void {
    // Play the button sound effect
    buttonSound.play();
};

export function playrainEffect(): void {
    rainEffect.play();
};

export function playBackgroundMusic(): void {
    // Play the background music
    if(wasPlayingBefore === true){
        if(MusicVolume){
            bgMusic.volume = MusicVolume;
            bgMusic.currentTime = 0;
            bgMusic.play();
            isPlaying = true;
            wasPlayingBefore = false;
        }else{
            bgMusic.currentTime = 0;
            bgMusic.play();
            isPlaying = true;
            wasPlayingBefore = false;
        }
    }else{
        isPlaying = true;
        if(MusicVolume){
            bgMusic.volume = MusicVolume;
            bgMusic.play();
        }else{
            bgMusic.play();
        }
    }
};

export function playInputPlayerName(): void {
    NameInputMusic.currentTime = 0;
    NameInputMusic.play();
};

export function playbgMusicEnd(): void {
    bgMusicEnd.play();
}

export async function stopAllMusic(){
    await bgMusic.pause();
    await bgMusicEnd.pause();
}

export async function stopAllMusicPlus() {
    await NameInputMusic.pause();
    wasPlayingBefore = true;
}

export function setVolumeBackgroundMusic(volume: number): void {
    MusicVolume = volume;
    //adjust Volume of bg music
    if (volume >= 0 && volume <= 1) {
        bgMusic.volume = volume;
        bgMusicEnd.volume = volume;
        NameInputMusic.volume = volume;
    };
};

export function setVolumeEffect(volume: number): void {
    EffectVolume = volume;
    //adjust Volume of bg music
    if (volume >= 0 && volume <= 1) {
        buttonSound.volume = volume;
        rainEffect.volume = volume;
    };
};



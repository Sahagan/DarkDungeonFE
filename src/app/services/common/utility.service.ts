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
let dingEffect = new Audio('../../../asset/sound/ding.mp3');
rainEffect.loop = true;
//music
let bgMusic = new Audio('../../../assets/sound/Title Theme/xDeviruchi - Title Theme (Loop).wav');
let bgMusicEnd = new Audio('../../../assets/sound/Title Theme/xDeviruchi - Title Theme (End).wav');
let NameInputMusic = new Audio('../../../assets/sound/WhatsYourName_David Fesliyan.mp3');
bgMusic.volume = 0.1;
bgMusicEnd.volume = 0.1;
NameInputMusic.volume = 0.1;
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

export function playDingEffect(): void {
    dingEffect.play();
};

export function stoprainEffect(): void {
    // Play the rainEffect
    rainEffect.pause();
};

export function playBackgroundMusic(): void {
    // Play the background music
    if(isPlaying === false){
        if(MusicVolume){
            bgMusic.volume = MusicVolume;
            bgMusic.play();
        }else{
            bgMusic.play();
        }
        isPlaying = true;
        wasPlayingBefore = true;
    }
};


export function stopBackgroundMusic(): void {
    // Stop the background music
    let i = 1;
    do{
        i = i-1;
        bgMusic.volume = i;
    }while(bgMusic.volume > 0);
    bgMusic.pause();
    isPlaying = false;
    bgMusicEnd.play();
};

export function playInputPlayerName(): void {
    NameInputMusic.play();
};

export async function stopInputPlayerName() {
    // Stop the background music
    NameInputMusic.pause();
};

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
        dingEffect.volume = volume;
    };
};



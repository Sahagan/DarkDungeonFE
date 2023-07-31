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

export function getDomain() {
    try {
        return `${environment.backend}`
    } catch (error) {
        return `Can not get endpoint error : ${error}`;
    }
};

export function getUrl(endpoint: string) {
    try {
        switch (endpoint) {
            case 'username':
                return `${environment.backend}${environment.url.username}`;
            case 'items':
                return `${environment.backend}${environment.url.items}`;
            case 'map':
                return `${environment.backend}${environment.url.map}`;
            default:
                throw 'url does not exist'
        };
    } catch (error) {
        return `Can not get url : ${error}`;
    }
};

export function playButtonSound(): void {
    // Play the button sound effect
    buttonSound.play();
};

export function playrainEffect(): void {
    rainEffect.play();
};

export function playBackgroundMusic(): void {
    // Play the background music
    if (wasPlayingBefore === true) {
        if (MusicVolume) {
            bgMusic.volume = MusicVolume;
            bgMusic.currentTime = 0;
            bgMusic.play();
            isPlaying = true;
            wasPlayingBefore = false;
        } else {
            bgMusic.currentTime = 0;
            bgMusic.play();
            isPlaying = true;
            wasPlayingBefore = false;
        }
    } else {
        isPlaying = true;
        if (MusicVolume) {
            bgMusic.volume = MusicVolume;
            bgMusic.play();
        } else {
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

export async function stopAllMusic() {
    await bgMusic.pause();
    await bgMusicEnd.pause();
    await NameInputMusic.pause();
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

export function DecodeStage(state:number, seed: string, lastEvent:string) {
    let event:object;
    for (let number of seed) {

    }
    /*
    23
    215342
    //
    21
    534222
    2351
    //
    12
    23
    52
    2222212153422223511223522222212222411222422233211242222353233253231222332242212123212222232221212123212153422223511223522222212222411222422233211242222353233253231222332242212123212222232221212123212122335123522133215251212313224311215223422112212153235321214221522342211223525121221322512351233153213342233153233322121321321123532241211251225321312123225241212113213121311123432223222153522323232321212323212321212123212123212222222121232221222323222121232321222223232123222122222321232321215342222351122352222221222241122242223321124222235323325323122233224221212321222223222121212321212233512352213321525121231322431121522342211221215323532121422152234221122352512122132251235123315321334223315323332212132132112353224121125122532131212322524121211321312131112343222322215352232323232121232321232121212321212321222222212123222122232322212123232122222323212322212222232123232122225252214123312332522122422113312331231121332123522313222331233223322341215351212233233322132111522333312232112141224212223343225322312312532141211323212231112123432331221231223323222121535323212343234333222133412152222353112222312323211232223242234121414121222352213112214122215323232111412132422152412223234222221322421222422223322153422132222121332343412342212352322321535121235241222112422352223151222311512142432241332142231322525323224322234253231112211121222233232241235143222323223111234321432223222131112121222123214153224343211323125122532223531322532252312133432113122251332221215133224213222312522123232253532222213141212341231222522123235231221323215321513322115221122123231232214241212151231121321322324321211131214223213121432251312323411221535323212122212322222222232323232321222122212221222222222323232223212323222321222222212321222222222223212222212321222123232122232221212221222223232122222322222223222122232123212321212121212123232321212121232321222222222122212323212323232323232123212221232323232121222323222123222322212121232121232222212322232122222223222123222323222121222221232322232321212321232123212223232121212221
    */
}


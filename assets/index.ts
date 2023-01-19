import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video')

const playButton: HTMLElement = document.querySelector('#play-btn')!;
playButton.onclick = () => player.togglePlay();

const unmuteButton: HTMLElement = document.querySelector('#unmute-btn')!;
unmuteButton.onclick = () => player.toggleVolume();

const player = new MediaPlayer({ 
    el: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
};
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array< any >;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    togglePlay() {
        if (this.media.paused) {
            this.media.play();
        } else if (!this.media.paused) {
            this.media.pause();
        }
    }
    toggleVolume() {
        if (this.media.muted) {
            this.unmute();
        } else {
            this.mute();
        }
    }
}








export default MediaPlayer;
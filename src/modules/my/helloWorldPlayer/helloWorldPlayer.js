import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    playerRef = null;

    renderedCallback() {
        this.playerRef = this.template.querySelector('my-player');
    }

    handlePauseClick() {
        this.playerRef.pause();
    }

    handlePlayClick() {
        this.playerRef.play();
    }
}

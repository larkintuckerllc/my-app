import { track, LightningElement } from 'lwc';

export default class HelloWorldRefactoredPlayer extends LightningElement {
    @track playing = false;

    handlePauseClick() {
        this.playing = false;
    }

    handlePlayClick() {
        this.playing = true;
    }
}

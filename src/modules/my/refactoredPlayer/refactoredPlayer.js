import { api, LightningElement } from 'lwc';

export default class RefactoredPlayer extends LightningElement {
    @api playing = false;

    renderedCallback() {
        if (this.playing) {
            // DO SOME SIDE EFFECT
            window.console.log('PLAYING');
        } else {
            // DO SOME SIDE EFFECT
            window.console.log('PAUSED');
        }
    }
}

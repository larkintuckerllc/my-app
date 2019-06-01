import { api, track, LightningElement } from 'lwc';

export default class Player extends LightningElement {
    @track playing = false;

    @api play() {
        // DO SOME SIDE EFFECT
        this.playing = true;
    }

    @api pause() {
        // DO SOME SIDE EFFECT
        this.playing = false;
    }
}

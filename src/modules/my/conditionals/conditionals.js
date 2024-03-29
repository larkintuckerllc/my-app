import { LightningElement, track } from 'lwc';

export default class Conditionals extends LightningElement {
    @track showing = true;

    handleShowChange() {
        this.showing = !this.showing;
    }
}

import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track showing = true;

    handleShowChange() {
        this.showing = !this.showing;
    }
}

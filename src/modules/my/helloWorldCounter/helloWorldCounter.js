import { LightningElement, track } from 'lwc';

export default class HelloWorldCounter extends LightningElement {
    @track value = 1;

    handleDecrement() {
        this.value -= 1;
    }

    handleIncrement() {
        this.value += 1;
    }
}

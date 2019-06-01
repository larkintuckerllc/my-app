import { api, LightningElement } from 'lwc';

export default class Counter extends LightningElement {
    @api value;

    get valueString() {
        return this.value.toString();
    }

    handleDecrementClick() {
        this.dispatchEvent(new CustomEvent('decrement'));
    }

    handleIncrementClick() {
        this.dispatchEvent(new CustomEvent('increment'));
    }
}

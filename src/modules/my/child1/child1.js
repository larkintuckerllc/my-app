import { track, LightningElement } from 'lwc';
import { getStore, setOne, getValue } from 'my/store';

export default class Child1 extends LightningElement {
    @track value = '';
    store = getStore();

    connectedCallback() {
        this.store.subscribe(this.handleSubscribe);
        this.handleSubscribe();
    }

    disconnectedCallback() {
        this.store.unsubscribe(this.handleSubscribe);
    }

    handleSubscribe = () => {
        const state = this.store.getState();
        const value = getValue(state);
        this.value = value;
    };

    handleClick() {
        const action = setOne();
        this.store.dispatch(action);
    }
}

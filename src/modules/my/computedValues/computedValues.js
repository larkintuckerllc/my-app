import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting = 'World';

    get greetingUpper() {
        return this.greeting.toUpperCase();
    }

    changeHandler(event) {
        this.greeting = event.target.value;
    }
}

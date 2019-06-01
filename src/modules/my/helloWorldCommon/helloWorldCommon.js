import { LightningElement, track } from 'lwc';
import { getValue, incrementValue } from 'my/common';

export default class HelloWorldCommon extends LightningElement {
    @track greeting = 'World';

    changeHandler(event) {
        this.greeting = event.target.value;
        incrementValue();
        const value = getValue();
        window.console.log('HelloWorldCommon');
        window.console.log(value);
    }
}

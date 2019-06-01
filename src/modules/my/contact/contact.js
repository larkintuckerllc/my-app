import { api, LightningElement } from 'lwc';

export default class Contact extends LightningElement {
    @api name;
    @api title;
}

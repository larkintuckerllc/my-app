import { LightningElement, track } from 'lwc';

export default class IterationTracking extends LightningElement {
    @track contacts = [
        {
            id: 1,
            name: 'Amy Taylor',
            title: 'VP of Engineering'
        },
        {
            id: 2,
            name: 'Michael Jones',
            title: 'VP of Sales'
        },
        {
            id: 3,
            name: 'Jennifer Wu',
            title: 'CEO'
        }
    ];
    lastId = 3;

    handleClick() {
        const id = this.lastId + 1;
        const contact = {
            id,
            name: 'New Name',
            title: 'New Title'
        };
        this.lastId = id;
        this.contacts = [...this.contacts, contact];
    }
}

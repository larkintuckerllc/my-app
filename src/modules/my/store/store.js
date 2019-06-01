import { createStore } from 'redux';

let store = null;

// ACTIONS
const ONE = 'ONE';
const TWO = 'TWO';

// ACTION CREATORS
export const setOne = () => ({ type: ONE });
export const setTwo = () => ({ type: TWO });

// REDUCER
const value = (state = 'one', action) => {
    switch (action.type) {
        case 'ONE':
            return 'one';
        case 'TWO':
            return 'two';
        default:
            return state;
    }
};

// SELECTORS
export const getValue = state => {
    return state;
};

// STORE
export const getStore = () => {
    if (store !== null) {
        return store;
    }
    store = createStore(value);
    return store;
};

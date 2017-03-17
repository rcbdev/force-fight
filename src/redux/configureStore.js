import { createStore, compose } from 'redux';
import reducer from './reducer';

let devTools = f => f;
if (typeof window === 'object'
    && typeof window.devToolsExtension !== 'undefined') {
    devTools = window.devToolsExtension();
}

export default function configureStore(initialState) {
    const enhancer = compose(
        devTools
    )(createStore);
    const store = enhancer(reducer, initialState);

    return store;
};

'use strict';

// Wege um JavaScript Dateien auszuführen nach dem Laden des <scripts>
// Weg 1: IIFE (Immediately Invoked Function Expression)
// (() => {})();

// Weg 2: window.addEventListener('DOMContentLoaded', function)
// window.addEventListener('DOMContentLoaded', init);
// const init = () => {};

// Weg 3: Funktion definieren und ausführen
const init = () => {
  // ===== DOM =====
  const myDOM = {
    counter: document.querySelector('#counter'),
    increment: document.querySelector('#increment'),
  };

  myDOM.counter = document.querySelector('#counter');
  myDOM.increment = document.querySelector('#increment');
  myDOM.reset = document.querySelector('#reset');
  myDOM.decrement = document.querySelector('#decrement');

  console.log(myDOM);

  // ===== STORE & INITIAL STATE (getState(), dispatch(), Proxy) =====
  function createStore(initialState, reducer) {
    const targetObject = {
      value: initialState,
    };

    // Der handler ist ein Objekt, dass Methoden/Funktionen beinhaltet, die aufgerufen werden, wenn das Proxy-Objekt sich ändert
    const handler = {
      set(object, key, value) {
        object[key] = value;
        updateUI();
        return true;
      },
    };

    // Proxy erlaubt uns auf Veränderungen in Echtzeit zu reagieren
    const state = new Proxy(targetObject, handler);
    console.log(state);

    // Eine Kopie vom "state" wird erstellt
    function getState() {
      return { ...state.value };
    }

    // Dispatch ist eine Funktion, die eine "Aktion" annimmt und den "state" aktualisiert
    function dispatch(action) {
      const prevState = getState();
      state.value = reducer(prevState, action);
    }

    return {
      getState,
      dispatch,
    };
  }

  const initialState = {
    counter: 0,
  };

  const store = createStore(initialState, reducer);

  // ===== REDUCER =====
  function reducer(state, action) {
    if (action === 'INCREMENT') state.counter = state.counter + 1;

    if (action === 'DECREMENT') state.counter = state.counter - 1;

    if (action === 'RESET') state.counter = 0;

    return state;
  }

  // ===== FUNCTIONS =====
  function updateUI() {
    const currentState = store.getState();
    myDOM.counter.textContent = currentState.counter;
  }

  // ===== EVENT HANDLERS & DISPATCH =====

  // Increment (+)
  myDOM.increment.addEventListener('click', () => {
    store.dispatch('INCREMENT');
  });

  // Decrement (-)
  myDOM.decrement.addEventListener('click', () => {
    store.dispatch('DECREMENT');
  });

  // Reset
  myDOM.reset.addEventListener('click', () => {
    store.dispatch('RESET');
  });
};

init();

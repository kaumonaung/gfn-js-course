// ============== DOM HELPER FUNCTIONS ==============
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

// ============== IIFE ==============
(() => {
  // ===== DOM =====
  const DOM = {};
  DOM.button = $('button');
  DOM.category = $('#category');
  DOM.activity = $('#activity');

  console.log(DOM);

  // ===== INIT =====
  const init = () => {
    DOM.button.addEventListener('click', handleActivity);
  };

  // ===== EVENT HANDLER =====
  const handleActivity = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity');
    console.log(response);
    const data = await response.json();
    console.log(data);
    DOM.category.textContent = data.type;
    DOM.activity.textContent = data.activity;
    return;
  };

  // ===== INITIALIZATION =====
  init();
})();

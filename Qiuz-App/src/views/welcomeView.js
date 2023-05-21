import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = Object.assign(document.createElement('div'), {
    className: 'welcome-page',
  });

  element.innerHTML = String.raw`


    <h1 class='welcome-heading'>Want to know more about the Netherlands? Have fun with our quiz🚀</h1>
    <button class='welcome-button'  id="${START_QUIZ_BUTTON_ID}">start quiz</button>

  `;

  return element;
};

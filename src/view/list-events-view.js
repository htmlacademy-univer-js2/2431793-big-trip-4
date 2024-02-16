import { createElement } from '../render.js';

function createNewTaskButtonTemplate(...args) {
  return `<ul class="trip-events__list">${args[0]
    .map((arg) => `<li class="trip-events__item">${arg}</li>`)
    .join('')}</ul>`;
}

export default class ListEventsView {
  constructor(...args) {
    this.args = args;
  }

  getTemplate() {
    return createNewTaskButtonTemplate(this.args);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

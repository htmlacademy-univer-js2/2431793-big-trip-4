import { render, replace } from '../framework/render';
import SortView from '../view/sort-view';
import ListEventsView from '../view/list-events-view';
import PointEditingFormView from '../view/point-editing-form-view';
import PointView from '../view/point-view';
import EmptyListView from '../view/empty-list-view';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #points = null;
  #pointsListComponent = null;


  constructor({ tripContainer, pointsModel }) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#renderList();
  }

  #renderList() {
    if (!this.#points.length) {
      render(new EmptyListView(), this.#tripContainer);
      return;
    }

    this.#pointsListComponent = new ListEventsView();

    render(new SortView(), this.#tripContainer);
    render(this.#pointsListComponent, this.#tripContainer);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new PointEditingFormView({
      point,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToCard() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#pointsListComponent.element);
  }
}


import { render } from '../render';
import SortView from '../view/sort-view';
import ListEventsView from '../view/list-events-view';
import PointEditingFormView from '../view/point-editing-form-view';
import PointView from '../view/point-view';

export default class TripPresenter {
  constructor({ tripContainer, pointsModel }) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.itemsOfList = [new PointEditingFormView({ point: this.points[0], offersOfThisType: this.pointsModel.offersModel.getOffersByType(this.points[0].type) }).getTemplate()];

    for (let i = 1; i < this.points.length; i++) {
      this.itemsOfList.push(new PointView({ point: this.points[i] }).getTemplate());
    }

    render(new SortView(), this.tripContainer);
    render(
      new ListEventsView({ items: this.itemsOfList }),
      this.tripContainer
    );
  }
}

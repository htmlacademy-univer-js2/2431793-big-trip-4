import { render } from "../render";
import SortView from "../view/sort-view";
import ListEventsView from "../view/list-events-view";
import PointEditingFormView from "../view/point-editing-form-view";
import PointView from "../view/point-view";

export default class MapPresenter {
  constructor({ mapContainer }) {
    this.mapContainer = mapContainer;
  }

  init() {
    render(new SortView(), this.mapContainer);
    render(
      new ListEventsView(
        new PointEditingFormView().getTemplate(),
        new PointView().getTemplate(),
        new PointView().getTemplate(),
        new PointView().getTemplate()
      ),
      this.mapContainer
    );
  }
}

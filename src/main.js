import { render, RenderPosition } from './render.js';
import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import MapPresenter from './presenter/map-presenter.js';

const headerInfoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const mapContainer = document.querySelector('.trip-events');

const mapPresenter = new MapPresenter({ mapContainer });

render(new TripInfoView(), headerInfoContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterContainer);

mapPresenter.init();

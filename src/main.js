import { render, RenderPosition } from './render.js';
import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';

const headerInfoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const tripContainer = document.querySelector('.trip-events');

const destinationModel = new DestinationModel();
const offersModel = new OffersModel();
const pointsModel = new PointsModel({ destinationModel, offersModel });
const tripPresenter = new TripPresenter({ tripContainer, pointsModel });

render(new TripInfoView(), headerInfoContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterContainer);

tripPresenter.init();

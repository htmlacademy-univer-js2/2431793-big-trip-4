import { getRandomArrayElement } from '../utils/common';

const OFFER_TYPES_FLIGHT = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'];
const PRICES_FLIGHT = [50, 80, 15, 5, 40];

function generateoffersFlight() {
  return OFFER_TYPES_FLIGHT.map((offer, index) => ({
    id: `b4c3e4e6-9053-42ce-b747-e281314baa3${index}`,
    title: offer,
    price: PRICES_FLIGHT[index]
  }));
}

const offers = [{ type: 'flight', offers: generateoffersFlight() }];

function getRandomOffer() {
  return getRandomArrayElement(offers);
}

function getAllOffers() {
  return offers;
}

export { getAllOffers, getRandomOffer };

import Ember from 'ember';

export default Ember.Controller.extend({
    foods: [
      {name: 'Tacos', isAvailable: true},
      {name: 'Salad', isAvailable: true},
      {name: 'Pizza', isAvailable: false},
      {name: 'Vegetables', isAvailable: true},
      {name: 'Fruit Smoothies', isAvailable: false}
  ],
    restaurant: {name: 'I don\'t know, the place your girlfriend is always talking about', yearsOpen: 3}
});

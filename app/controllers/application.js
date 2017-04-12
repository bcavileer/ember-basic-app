import Ember from 'ember';

export default Ember.Controller.extend({
    foods: ['Tacos', 'Salad', 'Pizza', 'Vegetables', 'Fruit Smoothies'],
    restaurant: {name: 'I don\'t know, the place your girlfriend is always talking about', yearsOpen: 3}
});

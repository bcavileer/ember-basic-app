import Ember from 'ember';

export default Ember.Controller.extend({
    restaurant: {name: 'I don\'t know, the place your girlfriend is always talking about', yearsOpen: 3},
    actions: {
      makeUnavailable(food){
        Ember.set(food, 'isAvailable', false)
      },
      makeAvailable(food){
        Ember.set(food, 'isAvailable', true)
      }
    }
});

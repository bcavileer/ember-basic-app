import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {name: 'Tacos', isAvailable: true},
      {name: 'Salad', isAvailable: true},
      {name: 'Pizza', isAvailable: false},
      {name: 'Vegetables', isAvailable: true},
      {name: 'Fruit Smoothies', isAvailable: false}
    ]
  }
});

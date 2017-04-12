import Ember from 'ember';

export default Ember.Controller.extend({
  chefs: [
    {name: 'Anthony', isAvailable: true},
    {name: 'Gordon', isAvailable: false},
    {name: 'Smacky', isAvailable: true},
    {name: 'McFinney', isAvailable: false}
  ],

  actions: {
    makeUnavailable(chef){
      Ember.set(chef, 'isAvailable', false)
    },

    makeAvailable(chef){
      Ember.set(chef, 'isAvailable', true)
    }
  }









  //   foods: [
  //     {name: 'Tacos', isAvailable: true},
  //     {name: 'Salad', isAvailable: true},
  //     {name: 'Pizza', isAvailable: false},
  //     {name: 'Vegetables', isAvailable: true},
  //     {name: 'Fruit Smoothies', isAvailable: false}
  // ],
  //   restaurant: {name: 'I don\'t know, the place your girlfriend is always talking about', yearsOpen: 3},
  //   actions: {
  //     makeUnavailable(food){
  //       Ember.set(food, 'isAvailable', false)
  //     },
  //     makeAvailable(food){
  //       Ember.set(food, 'isAvailable', true)
  //     }
  //   }
});

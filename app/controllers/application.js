import Ember from 'ember';

export default Ember.Controller.extend({
      chefs: [
        {name: 'Anothony', isAvailable: true},
        {name: 'Gordon', isAvailable: true},
        {name: 'Kim', isAvailable: false},
        {name: 'Jeff', isAvailable: false},
        {name: 'Gnarzack', isAvailable: true}
      ]


//     foods: [
//       {name: 'Tacos', isAvailable: true},
//       {name: 'Salad', isAvailable: true},
//       {name: 'Pizza', isAvailable: false},
//       {name: 'Vegetables', isAvailable: true},
//       {name: 'Fruit Smoothies', isAvailable: false}
//   ],
//     restaurant: {name: 'I don\'t know, the place your girlfriend is always talking about', yearsOpen: 3}
});

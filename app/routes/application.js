import Ember from 'ember';

export default Ember.Route.extend({
    model(){
      return [
        {name: 'Anothon', isAvailable: true},
        {name: 'Gordon', isAvailable: true},
        {name: 'Oryx', isAvailable: false},
        {name: 'Aetheon', isAvailable: false},
        {name: 'Crota', isAvailable: true}
      ]
    }

  // model(){
  //   return [
  //     {name: 'Tacos', isAvailable: true},
  //     {name: 'Salad', isAvailable: true},
  //     {name: 'Pizza', isAvailable: false},
  //     {name: 'Vegetables', isAvailable: true},
  //     {name: 'Fruit Smoothies', isAvailable: false}
  //   ]
  // }
});

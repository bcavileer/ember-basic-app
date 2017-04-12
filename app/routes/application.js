import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {name: 'Anthony', isAvailable: true},
      {name: 'Gordon', isAvailable: true},
      {name: 'Crots', isAvailable: false},
      {name: 'Oryx', isAvailable: true},
      {name: 'Aetheon', isAvailable: false}
    ]
  }
});

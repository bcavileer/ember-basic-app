import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        makeUnavailable(chef){
          Ember.set(chef, 'isAvailable', false)
        },
        makeAvailable(chef){
          Ember.set(chef, 'isAvailable', true)
        }
    }







    // restaurant: {name: 'I don\'t know, the place your girlfriend is always talking about', yearsOpen: 3},
    // actions: {
    //   makeUnavailable(food){
    //     Ember.set(food, 'isAvailable', false)
    //   },
    //   makeAvailable(food){
    //     Ember.set(food, 'isAvailable', true)
    //   }
    // }
});

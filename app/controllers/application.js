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
});

import './home-officers.html';
import './home-officers.css';

import { Meteor } from 'meteor/meteor';

import { Officers } from '/imports/api/officers/officers.js';

Template.home_officers.helpers({
  officers() {
    return Officers.find({});
  }
});

Template.officer_card.helpers({
  imageURL() {
    return '/images/officers/' + this.url;
  }
});

Template.officer_card.onRendered(() => {
  $('.special.cards .image').dimmer({
    on: 'hover'
  });
});

Template.home_officers.onCreated(function officersOnCreated() {
  Meteor.subscribe('officers.public');
});

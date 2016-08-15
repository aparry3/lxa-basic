import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Officers } from '/imports/api/officers/officers.js';

Meteor.startup(() => {
  if (Officers.find().count() === 0) {
    const data = [
      {
        name: 'Rohan Mundkur',
        position: 'President',
        class: 'Fall 2013',
        hometown: 'Roswell, GA',
        url: 'alpha.jpg',
        email: 'alpha@gtlambdachi.org'
      },
      {
        name: 'Pranit Mallela',
        position: 'Internal Vice President',
        class: 'Fall 2013',
        hometown: 'Johns Creek, GA',
        url: 'beta.jpg',
        email: 'beta@gtlambdachi.org'
      },
      {
        name: 'Chris Cappa',
        position: 'External Vice President',
        class: 'Fall 2014',
        hometown: 'Yorktown Hts, NY',
        url: 'theta.jpg',
        email: 'theta@gtlambdachi.org'
      },
      {
        name: 'Brian Healy',
        position: 'Secretary',
        class: 'Fall 2015',
        hometown: 'Holmdel, NJ',
        url: 'gamma.jpg',
        email: 'gamma@gtlambdachi.org'
      },
      {
        name: 'Aaron Parry',
        position: 'Social Chair',
        class: 'Fall 2014',
        hometown: 'Hanover, MA',
        url: 'epsilon.jpg',
        email: 'epsilon@gtlambdachi.org'
      },
      {
        name: 'Drew Middleton',
        position: 'Ritualist',
        class: 'Fall 2013',
        hometown: 'Atlanta, GA',
        url: 'phi.jpg',
        email: 'phi@gtlambdachi.org'
      },
      {
        name: 'Aaron Stansell',
        position: 'Rush Chair',
        class: 'Fall 2014',
        hometown: 'Birmingham, AL',
        url: 'delta.jpg',
        email: 'delta@gtlambdachi.org'
      },
      {
        name: 'Gordon Nail',
        position: 'Fraternity Educator',
        class: 'Fall 2012',
        hometown: 'Swainsboro, GA',
        url: 'kappa.jpg',
        email: 'kappa@gtlambdachi.org'
      },
      {
        name: 'William \'Cash\' Economy',
        position: 'Treasurer',
        class: 'Fall 2013',
        hometown: 'Atlanta, GA',
        url: 'tau.png',
        email: 'tau@gtlambdachi.org'
      },
      {
        name: 'Alex Berrey',
        position: 'House Manager',
        class: 'Spring 2013',
        hometown: 'Atlanta, GA',
        url: 'hm.jpg',
        email: 'housemanager@gtlambdachi.org'
      },
      {
        name: 'Matt Shriver',
        position: 'Alumni Coordinator',
        class: 'Fall 2012',
        hometown: 'Acworth, GA',
        url: 'rho.jpg',
        email: 'rho@gtlambdachi.org'
      },
      {
        name: 'Ryan Knipe',
        position: 'Risk Manager',
        class: 'Fall 2014',
        hometown: 'Orlando, FL',
        url: 'iota.jpg',
        email: 'iota@gtlambdachi.org'
      },
      {
        name: 'Josh Cherry',
        position: 'Scholarship Chair',
        class: 'Fall 2015',
        hometown: 'Exton, PA',
        url: 'sigma.jpg',
        email: 'sigma@gtlambdachi.org'
      },
      {
        name: 'Alex Wandrick',
        position: 'Standards Chair',
        class: 'Fall 2013',
        hometown: 'Alpharetta, Ga',
        url: 'standards.jpg',
        email: 'standards@gtlambdachi.org'
      }
    ];


    data.forEach((officer) => {
      Officers.insert(officer);
    });
  }
});

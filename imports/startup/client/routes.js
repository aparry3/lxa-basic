// Psuedoglobal import statements
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Template imports
import '/imports/ui/layouts/app-body.js';
import '/imports/ui/home/home.js';
import '/imports/ui/pages/not-found.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render("app_body", {main: "home"});
  }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('app_body', { main: 'not_found' });
  },
};

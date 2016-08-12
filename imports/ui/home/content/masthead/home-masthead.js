import './home-masthead.html';
import './home-masthead.css';

Template.home_masthead.onRendered(() => {
  $('.masthead')
  .visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  });
});

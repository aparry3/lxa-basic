import './home-quote.html';
import './home-quote.css';

Template.home_quote.onRendered(() => {
  $('.overlay').visibility({
    type: 'fixed',
    offset: 100
  });
});

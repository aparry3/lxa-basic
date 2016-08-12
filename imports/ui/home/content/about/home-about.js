import './home-about.html';
import './home-about.css';

Template.home_about.onRendered(() => {
  $('.image').visibility({
    type: 'image',
    transition: 'vertical flip in',
    duration: 1000
  });
});

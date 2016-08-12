import './app-body.html';
import './app-body.css';

Template.app_body.onRendered(() => {
  $('.ui.sidebar').sidebar('attach events', '.toc.item');
});

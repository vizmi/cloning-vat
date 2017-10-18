import Vue from 'vue';
import app from './app.vue';
import bulma from 'bulma/css/bulma.css';
import charsheetcss from './charsheet.css';
import fontAwesome from 'font-awesome/css/font-awesome.css';

new Vue({
  el: '#app',
  render: function(h) { return h(app); }
})

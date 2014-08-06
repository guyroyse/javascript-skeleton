var App = App || {};

App.makeAwesome = function() {
  $('#awesome').text("Awesome App is Awesome");
};

App.awesome = function() {
  return $('#awesome').text() === "Awesome App is Awesome";
};

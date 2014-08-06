describe("Application", function() {

  beforeEach(function() {
    setFixtures('<div id="awesome"></div>');
  });

  when("made awesome", function() {

    beforeEach(function() {
      App.makeAwesome();
    });

    it("is awesome", function() {
      expect(App.awesome()).toBe(true);
    });

    it("contains awesomeness", function() {
      expect($('#awesome')).toContainText("Awesome App is Awesome");
    });

  });

  when("not made awesome", function() {

    it("is not awesome", function() {
      expect(App.awesome()).toBe(false);
    });

    it("does not contain awesomeness", function() {
      expect($('#awesome')).not.toContainText("Awesome App is Awesome");
    });

  });

});

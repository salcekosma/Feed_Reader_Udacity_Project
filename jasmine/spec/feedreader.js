/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('has a URL defined and IS NOT empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('all feeds names are defined', function() {
      allFeeds.forEach(function(feed) {
        //checking that the feed name is defined
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }); // endforeach
    }); // end it

  }) // end describe





  /* TODO: Write a new test suite named "The menu" */

  describe('The menu', function() {

    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    it('men element hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    })

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('disappears when clicked', function() {
      $('.menu-icon-link').trigger('click');
      expect($('.menu-hidden').is(':visible')).toBe(false);
    })

    it('appears when clicked', function() {
      $('.menu-icon-link').trigger('click');
      expect($('.menu-hidden').is(':visible')).toBe(true);
    })
  })

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Inintial Entries', function() {
            beforeEach(function(done) {
              loadFeed(0,done);
            })
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
     it('There is an entry', function(done) {
         var feedLength = $('.feed .entry').length;
         expect(feedLength).toBeGreaterThan(0);
         done();
    })
  })


  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
      var oldFeed;
      beforeEach(function(done) {
          loadFeed(0, function() {
              oldFeed = $('.feed').html();
              console.log(oldFeed);
              done();
          });
      });

      it('has new content', function(done) {
          loadFeed(1, function() {
              console.log(oldFeed);
              expect($('.feed').html()).not.toEqual(oldFeed);
              done();
          })
      });
  });
}());

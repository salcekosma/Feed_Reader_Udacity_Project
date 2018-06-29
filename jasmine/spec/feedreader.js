$(function() {
  describe('RSS Feeds', function() {


    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('has a URL defined and IS NOT empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });


    it('all feeds names are defined', function() {
      allFeeds.forEach(function(feed) {
        //checking that the feed name is defined
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }); // endforeach
    }); // end it

  }); // end describe

  describe('The menu', function() {

    it('menu element hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    })

    it('menu changes visibility', function() {

      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toEqual(false);

      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toEqual(true);
    });
  });


  describe('Inintial Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, done);
    })

    it('There is an entry', function(done) {
      var feedLength = $('.feed .entry').length;
      expect(feedLength).toBeGreaterThan(0);
    })
  })

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


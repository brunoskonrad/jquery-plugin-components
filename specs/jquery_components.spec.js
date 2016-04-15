describe('initialize jQuery plugins as components', function() {
  beforeEach(function() {
    $.fn.somePlugin = jasmine.createSpy('some plugin');
    $.fn.plugin = jasmine.createSpy('plugin');
    $.fn.carousel = jasmine.createSpy('carousel');
  });

  afterEach(function() {
    $('[data-component]').remove();
  });

  describe('initialize components', function() {
    it('initializes the element with hyphen named component', function() {
      var fixture = '<div data-component="some-plugin"></div>';

      $('body')
        .append(fixture)
        .startComponents();

      expect($.fn.somePlugin).toHaveBeenCalled();
    });

    it('initializes both plugins', function() {
      var fixture = '<div data-component="somePlugin"></div>' +
        '<div data-component="plugin"></div>';

      $('body')
        .append(fixture)
        .startComponents();

      expect($.fn.plugin).toHaveBeenCalled();
      expect($.fn.somePlugin).toHaveBeenCalled();
    });

    it('initializes getting data attributes options', function() {
      var fixture = '<div data-component="carousel" ' +
        'data-itens="3" data-infinite="true" data-name="selly">' +
        '</div>';

      $('body')
        .append(fixture)
        .startComponents();

      expect($.fn.carousel).toHaveBeenCalledWith(jasmine.objectContaining({
        itens: 3,
        infinite: true,
        name: 'selly'
      }));
    });

    it('checks if the initialized component has started flag', function() {
      var fixture = '<div data-component="some-plugin"></div>';

      $('body')
        .append(fixture)
        .startComponents();

      var wasStarted = $('[data-component]')
        .attr('data-component-started');

      expect(wasStarted).toBeTruthy();
    });
  });

  describe('when a component is already started', function() {
    it("don't try to start again", function() {
      var fixture = '<div data-component="carousel" ' +
        'data-component-started="true"></div>';

      $('body')
        .append(fixture)
        .startComponents();

      expect($.fn.carousel).not.toHaveBeenCalled();
    });

    it('mark a flag to start anyway', function() {
      var fixture = '<div data-component="carousel" ' +
        'data-component-started="true"></div>';

      $('body')
        .append(fixture)
        .startComponents({restart: true});

      expect($.fn.carousel).toHaveBeenCalled();
    });
  });
});

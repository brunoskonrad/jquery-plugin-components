describe('initialize jQuery plugins as components', function() {
  beforeEach(function() {
    $.fn.somePlugin = jasmine.createSpy('some plugin');
    $.fn.plugin = jasmine.createSpy('plugin');
  });

  afterEach(function() {
    $('[data-component]').remove();
  });

  describe('convert function', function() {
    it('converts from hyphen separated to camelCase', function() {
      expect(convert('foo-bar')).toBe('fooBar');
    });

    it("doesn't change the input value", function() {
      expect(convert('fooBar')).toBe('fooBar');
    });
  });

  describe('initialize function', function() {
    it('initializes the element with hyphen named component', function() {
      var fixture = '<div data-component="some-plugin"></div>';
      $('body').append(fixture);

      initialize(jQuery);

      expect($.fn.somePlugin).toHaveBeenCalled();
    });

    it('initializes both plugins', function() {
      var fixture = '<div data-component="somePlugin"></div>' +
        '<div data-component="plugin"></div>';
      $('body').append(fixture);

      initialize(jQuery);

      expect($.fn.plugin).toHaveBeenCalled();
      expect($.fn.somePlugin).toHaveBeenCalled();
    });
  });
});

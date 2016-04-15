(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = function(root, jQuery) {
      if (jQuery === undefined) {
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    factory(jQuery);
  }
}(function ($) {
  function convert(str) {
    return str.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }

  function startComponents($components) {
    $components.each(function() {
      var component, options;
      var $this = $(this);
      var plugin = $this.data('component');

      if (!plugin) {
        return;
      }

      component = convert(plugin);
      options = $this.data();

      if (component in $this) {
        $this.attr('data-component-started', true);
        $this[component](options);
      }
    });
  }

  function initialize($) {
    $.fn.startComponents = function(options) {
      options = options || {};

      var $root = $(this);
      var restart = options.restart || false;

      if (restart) {
        startComponents($root.find('[data-component]'));
        return this;
      }

      startComponents($root
        .find('[data-component]')
        .not('[data-component-started]')
      );
      return this;
    }
  }
  
  initialize($);
}));

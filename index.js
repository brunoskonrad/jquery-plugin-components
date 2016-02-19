function convert(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

function initialize($) {
  $('[data-component]').each(function() {
    var component, options;
    var $this = $(this);
    var plugin = $this.data('component');

    if (!plugin) {
      return;
    }

    component = convert(plugin);
    options = $this.data();

    if (component in $this) {
      $this[component](options);
    }
  });
}

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
  initialize($);
}));

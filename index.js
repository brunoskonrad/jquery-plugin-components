(function($) {
  function convert(str) {
    return str.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }

  $('[data-component]').each(function() {
    var component;
    var $this = $(this);
    var plugin = $this.attr('[data-component]');

    if (!plugin) {
      return;
    }

    component = convert(plugin);

    if (component in $this) {
      $this[component]();
    }
  });
})(jQuery);

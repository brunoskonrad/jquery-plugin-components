# jQuery Plugin as Components

[![npm version](https://badge.fury.io/js/jquery-plugin-components.svg)](https://badge.fury.io/js/jquery-plugin-components)
[![Bower version](https://badge.fury.io/bo/jquery-plugin-components.svg)](https://badge.fury.io/bo/jquery-plugin-components)

Initialize your jQuery plugins via data attributes.

```html
<div data-component="date-picker"></div>
<!-- is the same as -->
<div data-component="datePicker"></div>
```

This element will be initialized as a `date-picker` jQuery plugin.

## Install

Via bower:
```
bower install --save jquery-plugin-components
```

Via npm:
```
npm install --save jquery-plugin-components
```

Or get the minified file inside `dist/index.min.js`.

## Usage

Call the jQuery plugin `startComponents` on any element, e.g.

```html
<body>
  <div data-component="date-picker" data-date="01/01/2016"
    data-format="dd/MM/yyyy"></div>

  <script src="vendor/date_picker.min.js"></script>
  <script src="vendor/jquery-plugin-components.min.js"></script>
  <script>
    $('body').startComponents();
  </script>
</body>
```

You can pass options by using any `data-parameters`, as in the example above. Note that the `data-date` and `data-format` will be passed to `datePicker`'s  plugin inside an object, like:

```javascript
$('div').datePicker({date: '01/01/2016', format: 'dd/MM/yyyy'});
```

You can check an example inside `example` folder.

## Contributing

Install the dependencies with `npm install`.

1. Fork the repository;
1. Create a branch and write your code;
1. Open a pull request;
1. Let's talk about!

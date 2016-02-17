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

Or get the minified file at: [https://raw.githubusercontent.com/brunoskonrad/jquery-plugin-components/master/dist/index.min.js](https://raw.githubusercontent.com/brunoskonrad/jquery-plugin-components/master/dist/index.min.js)

## Usage

Simply import the `jquery-plugin-components` script after the DOM's rendering, e.g.

```html
<body>
  <div data-component="date-picker"></div>

  <script src="vendor/date_picker.min.js"></script>
  <script src="vendor/jquery-plugin-components.min.js"></script>
</body>
```

## Contributing

Install the dependencies with `npm install`.

1. Fork the repository;
1. Create a branch and write your code;
1. Open a pull request;
1. Let's talk about!

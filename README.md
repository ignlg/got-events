# got-events
Simple events for simple objects. Three methods to rule'em all: `.on`, `.off`, `.trigger`. Lots of fun.

## Install _(coming soon)_
```bash
npm install --save got-events
```

## Examples
```js
var gotEvents = require('gotEvents');
var needEvents = {};

// The magic trick
gotEvents.extend(needEvents);

/* Simple events */
needEvents.on('hello', function() {
  return console.log('world!');
});
needEvents.trigger('hello');
// Console says 'world!'
needEvents.off('hello');
needEvents.trigger('hello');
// Nothing happens

/* More events */
needEvents.on('hello', 'world', function() {
  return console.log('world!');
});
needEvents.on('hello', 'planet', function() {
  return console.log('planet!');
});
needEvents.trigger('hello');
// Console says 'world!' and then 'planet!'
needEvents.off('hello', 'world');
needEvents.trigger('hello');
// Console says 'planet!'
```

## Usage
Three options:

1. **Function:**

  ```js
  var evHandler = require('got-events')();
  ```

2. **Extend object:**

  ```js
  require('got-events').extend(simpleObject);
  ```
  
  Optionally preserving old attributes:

  ```js
  require('got-events').extend(simpleObject, true);
  ```

3. **Singleton:**
  
  ```js
  var evHandler = require('got-events').singleton;
  ```

## Object methods

* `.on(eventName, callback)`
  
  Adds a callback to an event.
  
  1. `eventName`: String or Array of strings.
  2. `callback`: Function.

* `.on(eventName, callbackId, callback)`
  
  Adds a callback to an event, identified.
  
  1. `eventName`: String or Array of strings.
  2. `callbackId`: String.
  3. `callback`: Function.

* `.off(eventName)`
  
  Clears the event's callback list.
  
  1. `eventName`: String or Array of strings.

* `.off(eventName, callback)`
  
  Removes a callback from an event.
  
  1. `eventName`: String or Array of strings.
  2. `callback`: Function.

* `.off(eventName, callbackId)`
  
  Removes an identified callback from an event.
  
  1. `eventName`: String or Array of strings.
  2. `callbackId`: String or Array of strings.

* `.trigger(eventName, data)`
  
  Triggers an event with `err = null`.
  
  1. `eventName`: String or Array of strings.
  2. `data`: Anything.

* `.trigger(eventName, err, data...)`
  
  Triggers an event.
  
  1. `eventName`: String or Array of strings.
  2. `err`: Error or Boolean.
  3. `data...`: Anything. Every argument from here will be passed to callback.

## Other features

* Wildcard event `'*'` fired on every trigger.

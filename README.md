# simple-events
Simple events for simple objects. Three methods: `.on`, `.off`, `.trigger`. Lots of fun.

## Install _(coming soon)_
```bash
npm install --save simple-events
```

## Usage
Three options:

1. **Function:**

  ```js
  var evHandler = require('simple-events')();
  ```

2. **Extend object:**

  ```js
  require('simple-events').extend(simpleObject);
  ```
  
  Optionally preserving old attributes:

  ```js
  require('simple-events').extend(simpleObject, true);
  ```

3. **Singleton:**
  
  ```js
  var evHandler = require('simple-events').singleton;
  ```

## Object methods

* `.on(eventName, callback)`
  
  `eventName` can be an array.

* `.on(eventName, callbackId, callback)`
  
  `eventName` can be an array.

* `.off(eventName)`
  
  where `eventName` can be an array.
  
  Clears the event callbacklist.

* `.off(eventName, callback)`
  
  where `eventName`, `callback` can be an arrays.

* `.off(eventName, callbackId)`
  
  where `eventName`, `callbackId` can be an arrays.

* `.trigger(eventName, data)`
  
  where `eventName` can be an Array.

* `.trigger(eventName, err, data...)`
  
  where `eventName` can be an Array.

## Other features

* Wildcard event `'*'` fired on every trigger.

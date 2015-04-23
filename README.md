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
  
  `eventName` can be an Array.

* `.on(eventName, callbackId, callback)`
  
  `eventName` can be an Array.

* `.off(eventName)`
  
  where `eventName` can be an Array.
  
  Clears the event callbacklist.

* `.off(eventName, callback)`
  
  where `eventName` can be an Array.
  where `callback` can be an Array.

* `.off(eventName, callbackId)`
  
  where `eventName` can be an Array.
  where `callbackId` can be an Array.

* `.trigger(eventName, data)`
  
  where `eventName` can be an Array.

* `.trigger(eventName, err, data...)`
  
  where `eventName` can be an Array.

## Other features

* Wildcard event `'*'` fired on every trigger.

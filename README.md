# simple-events
Simple events for simple objects. Three methods: on, off, trigger.

## Install _(coming soon)_
```bash
npm install simple-events
```

## Usage
Three methods:

1. *Function:*

  ```js
  var evHandler = require('simple-events')();
  ```

2. *Extend object:*

	```js
	require('simple-events').extend(simpleObject);
	```
  
	Preserving old attributes:

	```js
	require('simple-events').extend(simpleObject, true);
	```

3. *Singleton:*
  
	```js
	var evHandler = require('simple-events').singleton;
	```

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

// Better optimisations in V8 than
// the Array.prototype.slice method.
var argumentsToArray = function(args) {
	_args = [];
	for(var i = 0, l = args.length; i <l; ++i) {
		_args.push(args[i]);
	}
	return _args;
};

// Iteration or single execution
var oneOrMore = function(value, callback) {
	var _ret = null;
	// Accepts an array of values
	if ('object' === typeof value) {
		_ret = [];
		for (var i = 0, l = value.length; i < l; ++i) {
			_ret.push(callback.call(this, value[i]));
		}
	}
	else {
		_ret = callback.call(this, value);
	}
	return _ret;
};

var gotEvents = function() {
	// Init object
	var se = {};
	// Events and callbacks
	se._events = {};
	// Add callback to event
	se.on = function(evt, id, callback) {
		if (id && !callback) {
			callback = id;
		}
		if (callback && 'function' === typeof callback) {
			return oneOrMore.call(this, evt, function(ev){
				if (!se._events[ev]) {
					se._events[ev] = {};
				}
				se._events[ev][id] = callback;
			});
		}
		return false;
	};
	// Remove an event
	se.off = function(evt, id) {
		return oneOrMore.call(this, evt, function(ev) {
			if (se._events[ev]) {
				if (id) {
					var _ev = se._events[ev];
					oneOrMore.call(this, id, function(_id){
						_ev[_id] = undefined;
						delete _ev[_id];
					});
				}
				else {
					se._events[ev] = undefined;
					delete se._events[ev];
				}
			}
		});
	};
	// Trigger an event with some data
	se.trigger = function(evt, err, data) {
		args = argumentsToArray(arguments).slice(1);
		return oneOrMore.call(this, evt, function(ev) {
			var keys, k, i, l;
			// Fire this event's callbacks
			var _ev = se._events[ev];
			if (_ev) {
				keys = Object.keys(_ev);
				for (i = 0, l = keys.length; i < l; ++i) {
					k = keys[i];
					if ('function' === typeof _ev[k]) {
						_ev[k].apply(this, args);
					}
				}
			}
			// Wildcard event fired on every event
			_ev = se._events['*'];
			if (_ev) {
				keys = Object.keys(_ev);
				args.unshift(ev);
				for (i = 0, l = keys.length; i < l; ++i) {
					k = keys[i];
					if ('function' === typeof _ev[k]) {
						_ev[k].apply(this, args);
					}
				}
			}
		});
	};

	return se;
};

gotEvents.extend = function(obj, keep) {
	// Keep old values?
	keep = keep || false;
	var se = gotEvents();
	var keys = ['on', 'off', 'trigger'];
	var _old = {};
	// Extend with new keys
	for (var i = 0, l = keys.length; i < l; ++i) {
		key = keys[i];
		if (keep && obj[key]) {
			_old[key] = obj[key];
		}
		obj[key] = se[key];
	}
	// Save old values, even the old _old value
	if (keep && _old) {
		if (obj._old) {
			_old._old = obj._old;
		}
		obj._old = _old;
	}
	return obj;
};

gotEvents.singleton = gotEvents();

module.exports = exports = gotEvents;
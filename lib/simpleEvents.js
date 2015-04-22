var simpleEvents = function() {
	// Init object
	var se = {};
	// Events and callbacks
	se._events = {};
	// Add callback to event
	se.on = function(ev, callback) {
		if (callback && 'function' === typeof callback) {
			if ('object' === typeof ev) {
				for (var i = 0, l = ev.length; i < l; ++i) {
					se._events[ev[i]] = callback;
				}
				return true;
			}
			else {
				se._events[ev] = callback;
			}
		}
		return se._events[ev];
	};
	// Remove event
	se.off = function(ev) {
		if (se._events[ev]) {
			se._events[ev] = undefined;
			delete se._events[ev];
			return true;
		}
		return false;
	};
	// Trigger an event with some data
	se.trigger = function(ev, data) {
		_this = this;
		if (se._events[ev] && 'function' === typeof _events[ev]) {
			se._events[ev].call(_this, data);
		}
	};
	return se;
};

simpleEvents.extend = function(obj, keep) {
	// Keep old values?
	keep = keep || false;
	var se = simpleEvents();
	var keys = Object.keys(se);
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

simpleEvents.singleton = simpleEvents();

module.exports = exports = simpleEvents;
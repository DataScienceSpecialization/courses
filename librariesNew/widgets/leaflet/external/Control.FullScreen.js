L.Control.FullScreen = L.Control.extend({
	options: {
		position: 'topleft',
		title: 'Full Screen',
		forceSeparateButton: false
	},
	
	onAdd: function (map) {
		// Do nothing if we can't
		if (!fullScreenApi.supportsFullScreen)
			return map.zoomControl._container;
		
		var containerClass = 'leaflet-control-zoom', className, container;
		
		if(map.zoomControl && !this.options.forceSeparateButton) {
			container = map.zoomControl._container;
			className = '-fullscreen leaflet-bar-part leaflet-bar-part-bottom last';
			// Update class of the zoom out button (Leaflet v0.5)
			if (map.zoomControl._zoomOutButton) {
				L.DomUtil.removeClass(map.zoomControl._zoomOutButton, 'leaflet-bar-part-bottom');
			}
		} else {
			container = L.DomUtil.create('div', containerClass);
			className = '-fullscreen leaflet-bar leaflet-bar-part last';
		}
		
		this._createButton(this.options.title, containerClass + className, container, this.toogleFullScreen, map);

		return container;
	},
	
	_createButton: function (title, className, container, fn, context) {
		var link = L.DomUtil.create('a', className, container);
		link.href = '#';
		link.title = title;

		L.DomEvent
			.addListener(link, 'click', L.DomEvent.stopPropagation)
			.addListener(link, 'click', L.DomEvent.preventDefault)
			.addListener(link, 'click', fn, context);
		
		L.DomEvent
			.addListener(container, fullScreenApi.fullScreenEventName, L.DomEvent.stopPropagation)
			.addListener(container, fullScreenApi.fullScreenEventName, L.DomEvent.preventDefault)
			.addListener(container, fullScreenApi.fullScreenEventName, this._handleEscKey, context);
		
		L.DomEvent
			.addListener(document, fullScreenApi.fullScreenEventName, L.DomEvent.stopPropagation)
			.addListener(document, fullScreenApi.fullScreenEventName, L.DomEvent.preventDefault)
			.addListener(document, fullScreenApi.fullScreenEventName, this._handleEscKey, context);

		return link;
	},
	
	toogleFullScreen: function () {
		this._exitFired = false;
		if (fullScreenApi.supportsFullScreen){
			var container = this._container;
			if(fullScreenApi.isFullScreen(container)){
				fullScreenApi.cancelFullScreen(container);
				this.invalidateSize();
				this.fire('exitFullscreen');
				this._exitFired = true;
			}
			else {
				fullScreenApi.requestFullScreen(container);
				this.invalidateSize();
				this.fire('enterFullscreen');
			}
		}
	},
	
	_handleEscKey: function () {
		if(!fullScreenApi.isFullScreen(this) && !this._exitFired){
			this.fire('exitFullscreen');
			this._exitFired = true;
		}
	}
});

L.Map.addInitHook(function () {
	if (this.options.fullscreenControl) {
		this.fullscreenControl = L.control.fullscreen(this.options.fullscreenControlOptions);
		this.addControl(this.fullscreenControl);
	}
});

L.control.fullscreen = function (options) {
	return new L.Control.FullScreen(options);
};

/* 
Native FullScreen JavaScript API
-------------
Assumes Mozilla naming conventions instead of W3C for now

source : http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/

*/

(function() {
	var 
		fullScreenApi = { 
			supportsFullScreen: false,
			isFullScreen: function() { return false; }, 
			requestFullScreen: function() {}, 
			cancelFullScreen: function() {},
			fullScreenEventName: '',
			prefix: ''
		},
		browserPrefixes = 'webkit moz o ms khtml'.split(' ');
	
	// check for native support
	if (typeof document.exitFullscreen != 'undefined') {
		fullScreenApi.supportsFullScreen = true;
	} else {	 
		// check for fullscreen support by vendor prefix
		for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
			fullScreenApi.prefix = browserPrefixes[i];
			
			if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' ) {
				fullScreenApi.supportsFullScreen = true;
				
				break;
			}
		}
	}
	
	// update methods to do something useful
	if (fullScreenApi.supportsFullScreen) {
		fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
		
		fullScreenApi.isFullScreen = function() {
			switch (this.prefix) {	
				case '':
					return document.fullScreen;
				case 'webkit':
					return document.webkitIsFullScreen;
				default:
					return document[this.prefix + 'FullScreen'];
			}
		}
		fullScreenApi.requestFullScreen = function(el) {
			return (this.prefix === '') ? el.requestFullscreen() : el[this.prefix + 'RequestFullScreen']();
		}
		fullScreenApi.cancelFullScreen = function(el) {
			return (this.prefix === '') ? document.exitFullscreen() : document[this.prefix + 'CancelFullScreen']();
		}		
	}

	// jQuery plugin
	if (typeof jQuery != 'undefined') {
		jQuery.fn.requestFullScreen = function() {
	
			return this.each(function() {
				var el = jQuery(this);
				if (fullScreenApi.supportsFullScreen) {
					fullScreenApi.requestFullScreen(el);
				}
			});
		};
	}

	// export api
	window.fullScreenApi = fullScreenApi;	
})();

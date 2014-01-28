/*
  Google HTML5 slides template

  Authors: Luke Mahé (code)
           Marcin Wichary (code and design)

           Dominic Mazzoni (browser compatibility)
           Charles Chen (ChromeVox support)
           
  URL: http://code.google.com/p/html5slides/

  Contributors:
           Benjamin Erb (presenter mode, notes, structuring) 

  URL: https://github.com/berb/html5slides-uulm
 */

var SLIDE_CLASSES = [ 'far-past', 'past', 'current', 'next', 'far-next' ];

var PM_TOUCH_SENSITIVITY = 15;

var curSlide;

var showPresenterNotes = false;
var isPresenterSlave = false;
var presenterSlaveWindow = null;
var doTransitions = true;

/* ---------------------------------------------------------------------- */
/*
 * classList polyfill by Eli Grey
 * (http://purl.eligrey.com/github/classList.js/blob/master/classList.js)
 */

if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

	(function(view) {

		var classListProp = "classList", protoProp = "prototype", elemCtrProto = (view.HTMLElement || view.Element)[protoProp], objCtr = Object
		strTrim = String[protoProp].trim || function() {
			return this.replace(/^\s+|\s+$/g, "");
		}, arrIndexOf = Array[protoProp].indexOf || function(item) {
			for ( var i = 0, len = this.length; i < len; i++) {
				if (i in this && this[i] === item) {
					return i;
				}
			}
			return -1;
		}
		// Vendors: please allow content code to instantiate DOMExceptions
		, DOMEx = function(type, message) {
			this.name = type;
			this.code = DOMException[type];
			this.message = message;
		}, checkTokenAndGetIndex = function(classList, token) {
			if (token === "") {
				throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
			}
			if (/\s/.test(token)) {
				throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
			}
			return arrIndexOf.call(classList, token);
		}, ClassList = function(elem) {
			var trimmedClasses = strTrim.call(elem.className), classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [];
			for ( var i = 0, len = classes.length; i < len; i++) {
				this.push(classes[i]);
			}
			this._updateClassName = function() {
				elem.className = this.toString();
			};
		}, classListProto = ClassList[protoProp] = [], classListGetter = function() {
			return new ClassList(this);
		};
		// Most DOMException implementations don't allow calling DOMException's
		// toString()
		// on non-DOMExceptions. Error's toString() is sufficient here.
		DOMEx[protoProp] = Error[protoProp];
		classListProto.item = function(i) {
			return this[i] || null;
		};
		classListProto.contains = function(token) {
			token += "";
			return checkTokenAndGetIndex(this, token) !== -1;
		};
		classListProto.add = function(token) {
			token += "";
			if (checkTokenAndGetIndex(this, token) === -1) {
				this.push(token);
				this._updateClassName();
			}
		};
		classListProto.remove = function(token) {
			token += "";
			var index = checkTokenAndGetIndex(this, token);
			if (index !== -1) {
				this.splice(index, 1);
				this._updateClassName();
			}
		};
		classListProto.toggle = function(token) {
			token += "";
			if (checkTokenAndGetIndex(this, token) === -1) {
				this.add(token);
			}
			else {
				this.remove(token);
			}
		};
		classListProto.toString = function() {
			return this.join(" ");
		};

		if (objCtr.defineProperty) {
			var classListPropDesc = {
				get : classListGetter,
				enumerable : true,
				configurable : true
			};
			try {
				objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
			}
			catch (ex) { // IE 8 doesn't support enumerable:true
				if (ex.number === -0x7FF5EC54) {
					classListPropDesc.enumerable = false;
					objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
				}
			}
		}
		else if (objCtr[protoProp].__defineGetter__) {
			elemCtrProto.__defineGetter__(classListProp, classListGetter);
		}

	}(self));

}
/* ---------------------------------------------------------------------- */

/* Slide movement */

function getSlideEl(no) {
	if ((no < 0) || (no >= slideEls.length)) {
		return null;
	}
	else {
		return slideEls[no];
	}
};

function updateSlideClass(slideNo, className) {
	var el = getSlideEl(slideNo);

	if (!el) {
		return;
	}

	if (className) {
		el.classList.add(className);
	}

	for ( var i in SLIDE_CLASSES) {
		if (className != SLIDE_CLASSES[i]) {
			el.classList.remove(SLIDE_CLASSES[i]);
		}
	}
};

function updateSlides() {
	for ( var i = 0; i < slideEls.length; i++) {
		switch (i) {
			case curSlide - 2:
				updateSlideClass(i, 'far-past');
				break;
			case curSlide - 1:
				updateSlideClass(i, 'past');
				break;
			case curSlide:
				updateSlideClass(i, 'current');
				break;
			case curSlide + 1:
				updateSlideClass(i, 'next');
				break;
			case curSlide + 2:
				updateSlideClass(i, 'far-next');
				break;
			default:
				updateSlideClass(i);
				break;
		}
	}

	triggerLeaveEvent(curSlide - 1);
	triggerEnterEvent(curSlide);

	window.setTimeout(function() {
		// Hide after the slide
		disableSlideFrames(curSlide - 2);
	}, 301);

	enableSlideFrames(curSlide - 1);
	enableSlideFrames(curSlide + 2);

	if (isChromeVoxActive()) {
		speakAndSyncToNode(slideEls[curSlide]);
	}

	updateHash();

	if (presenterSlaveWindow !== null) {
		presenterSlaveWindow.postMessage("" + curSlide, "*");
	}
};

function buildNextItem() {
	var toBuild = slideEls[curSlide].querySelectorAll('.to-build');

	if (!toBuild.length) {
		return false;
	}

	toBuild[0].classList.remove('to-build', '');

	if (isChromeVoxActive()) {
		speakAndSyncToNode(toBuild[0]);
	}

	return true;
};

function prevSlide() {
	if (curSlide > 0) {
		curSlide--;

		updateSlides();
	}
};

function nextSlide() {
	if (buildNextItem()) {
		return;
	}

	if (curSlide < slideEls.length - 1) {
		curSlide++;

		updateSlides();
	}
};

function goToSlide(target) {
	if (target >= 0 && target <= slideEls.length) {
		var steps = target - (curSlide + 1);
		while (steps !== 0) {
			if (steps > 0) {
				curSlide++;
				steps--;
			}
			else if (steps < 0) {
				curSlide--;
				steps++;
			}
		}
		updateSlides();
	}
};

function togglePresenterNotes() {
	if (showPresenterNotes === false) {
		var section = document.querySelector("div.slides");
		section.classList.add('presenter');
	}
	else {
		var section = document.querySelector("div.slides");
		section.classList.remove('presenter');
	}
	showPresenterNotes = !showPresenterNotes;

};

function toggleTransitions() {
	if (doTransitions === false) {
		var section = document.querySelector("div.slides");
		section.classList.remove('no-trans');
	}
	else {
		var section = document.querySelector("div.slides");
		section.classList.add('no-trans');
	}
	doTransitions = !doTransitions;

};

/* Slide events */

function triggerEnterEvent(no) {
	var el = getSlideEl(no);
	if (!el) {
		return;
	}

	var onEnter = el.getAttribute('onslideenter');
	if (onEnter) {
		new Function(onEnter).call(el);
	}

	var evt = document.createEvent('Event');
	evt.initEvent('slideenter', true, true);
	evt.slideNumber = no + 1; // Make it readable

	el.dispatchEvent(evt);
};

function triggerLeaveEvent(no) {
	var el = getSlideEl(no);
	if (!el) {
		return;
	}

	var onLeave = el.getAttribute('onslideleave');
	if (onLeave) {
		new Function(onLeave).call(el);
	}

	var evt = document.createEvent('Event');
	evt.initEvent('slideleave', true, true);
	evt.slideNumber = no + 1; // Make it readable

	el.dispatchEvent(evt);
};

/* Touch events */

function handleTouchStart(event) {
	if (event.touches.length == 1) {
		touchDX = 0;
		touchDY = 0;

		touchStartX = event.touches[0].pageX;
		touchStartY = event.touches[0].pageY;

		document.body.addEventListener('touchmove', handleTouchMove, true);
		document.body.addEventListener('touchend', handleTouchEnd, true);
	}
};

function handleTouchMove(event) {
	if (event.touches.length > 1) {
		cancelTouch();
	}
	else {
		touchDX = event.touches[0].pageX - touchStartX;
		touchDY = event.touches[0].pageY - touchStartY;
	}
};

function handleTouchEnd(event) {
	var dx = Math.abs(touchDX);
	var dy = Math.abs(touchDY);

	if ((dx > PM_TOUCH_SENSITIVITY) && (dy < (dx * 2 / 3))) {
		if (touchDX > 0) {
			prevSlide();
		}
		else {
			nextSlide();
		}
	}

	cancelTouch();
};

function cancelTouch() {
	document.body.removeEventListener('touchmove', handleTouchMove, true);
	document.body.removeEventListener('touchend', handleTouchEnd, true);
};

/* Fadings */


function toggleFade(type){

	var fadeDiv = document.querySelector('#fadeDiv');
	
	if(fadeDiv === null){
		fadeDiv  = document.createElement('div');
		fadeDiv.id = "fadeDiv";
		fadeDiv.className = type;
		document.body.appendChild(fadeDiv);
	}
	else if(fadeDiv.className !== type){
		fadeDiv.className = type;
	}
	
	if(fadeDiv.style.display === "block"){
		fadeDiv.style.display = "none";
	}
	else{
		fadeDiv.style.display = "block";
	}
	
}

function toggleBlackOut(){
	toggleFade("blackfade");
}


function toggleWhiteOut(){
	toggleFade("whitefade");
}

function processToc(){

	var sections = [];
	
	var els = document.querySelectorAll('.slides section');
	for(var i = 0;i<els.length;i++){
	
		var slideSpan = els[i].querySelector('article footer span.slide-nr');
		var lastSlideSpan = els[i].querySelector('article:last-child footer span.slide-nr');
		var header = els[i].querySelector('header');
	
		if(slideSpan && lastSlideSpan && header){
			var slideNr = slideSpan.innerHTML;
			var lastSlideNr = lastSlideSpan.innerHTML;
			var headerTitle = header.innerHTML;
			
			sections.push({
				slideNr : slideNr,
				lastSlideNr : lastSlideNr,
				title : headerTitle
			});
						
		}
	}
	
	for ( var i = 0; i < slideEls.length; i++) {
		var nav = slideEls[i].querySelector('nav.toc');
		if(nav){
			var ol = document.createElement('ol');
			
			for(var j = 0;j<sections.length;j++){
				var liEl = document.createElement('li');
				
				
				var nr = i+1;
				if(nr < sections[j].slideNr){
					liEl.className = 'future';
				}
				else if(nr > sections[j].lastSlideNr){
					liEl.className = 'done';
				}
				else{
					liEl.className = 'current';
				}
				
				var aEl = document.createElement('a');
				aEl.href = '#'+sections[j].slideNr;
				aEl.innerHTML = sections[j].title;
				
				var callback = (function(nr){
					aEl.addEventListener('click', function(){
						goToSlide(nr);
					});
				})(sections[j].slideNr);
				
				liEl.appendChild(aEl);
				ol.appendChild(liEl);
				
			}
			nav.appendChild(ol);
		}
	}
}

/* Preloading frames */

function disableSlideFrames(no) {
	var el = getSlideEl(no);
	if (!el) {
		return;
	}

	var frames = el.getElementsByTagName('iframe');
	for ( var i = 0, frame; frame = frames[i]; i++) {
		disableFrame(frame);
	}
};

function enableSlideFrames(no) {
	var el = getSlideEl(no);
	if (!el) {
		return;
	}

	var frames = el.getElementsByTagName('iframe');
	for ( var i = 0, frame; frame = frames[i]; i++) {
		enableFrame(frame);
	}
};

function disableFrame(frame) {
	frame.src = 'about:blank';
};

function enableFrame(frame) {
	var src = frame._src;

	if (frame.src != src && src != 'about:blank') {
		frame.src = src;
	}
};

function setupFrames() {
	var frames = document.querySelectorAll('iframe');
	for ( var i = 0, frame; frame = frames[i]; i++) {
		frame._src = frame.src;
		disableFrame(frame);
	}

	enableSlideFrames(curSlide);
	enableSlideFrames(curSlide + 1);
	enableSlideFrames(curSlide + 2);
};

function setupInteraction() {
	/* Clicking and tapping */

	var el = document.createElement('div');
	el.className = 'slide-area';
	el.id = 'prev-slide-area';
	el.addEventListener('click', prevSlide, false);
	document.querySelector('div.slides').appendChild(el);

	var el = document.createElement('div');
	el.className = 'slide-area';
	el.id = 'next-slide-area';
	el.addEventListener('click', nextSlide, false);
	document.querySelector('div.slides').appendChild(el);

	/* Swiping */

	document.body.addEventListener('touchstart', handleTouchStart, false);
}

/* ChromeVox support */

function isChromeVoxActive() {
	if (typeof (cvox) == 'undefined') {
		return false;
	}
	else {
		return true;
	}
};

function speakAndSyncToNode(node) {
	if (!isChromeVoxActive()) {
		return;
	}

	cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM, 0, true);
	cvox.ChromeVox.navigationManager.syncToNode(node);
	cvox.ChromeVoxUserCommands.finishNavCommand('');
	var target = node;
	while (target.firstChild) {
		target = target.firstChild;
	}
	cvox.ChromeVox.navigationManager.syncToNode(target);
};

function speakNextItem() {
	if (!isChromeVoxActive()) {
		return;
	}

	cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM, 0, true);
	cvox.ChromeVox.navigationManager.next(true);
	if (!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(), slideEls[curSlide])) {
		var target = slideEls[curSlide];
		while (target.firstChild) {
			target = target.firstChild;
		}
		cvox.ChromeVox.navigationManager.syncToNode(target);
		cvox.ChromeVox.navigationManager.next(true);
	}
	cvox.ChromeVoxUserCommands.finishNavCommand('');
};

function speakPrevItem() {
	if (!isChromeVoxActive()) {
		return;
	}

	cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM, 0, true);
	cvox.ChromeVox.navigationManager.previous(true);
	if (!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(), slideEls[curSlide])) {
		var target = slideEls[curSlide];
		while (target.lastChild) {
			target = target.lastChild;
		}
		cvox.ChromeVox.navigationManager.syncToNode(target);
		cvox.ChromeVox.navigationManager.previous(true);
	}
	cvox.ChromeVoxUserCommands.finishNavCommand('');
};

/* Hash functions */

function getCurSlideFromHash() {
	var slideNo = parseInt(location.hash.substr(1));

	if (slideNo) {
		curSlide = slideNo - 1;
	}
	else {
		curSlide = 0;
	}
};

function updateHash() {
	location.replace('#' + (curSlide + 1));
};

/* Event listeners */

function handleBodyKeyDown(event) {
	switch (event.keyCode) {
		case 39: // right arrow
		case 13: // Enter
		case 32: // space
		case 34: // PgDn
			nextSlide();
			event.preventDefault();
			break;

		case 37: // left arrow
		case 8: // Backspace
		case 33: // PgUp
			prevSlide();
			event.preventDefault();
			break;

		case 40: // down arrow
			if (isChromeVoxActive()) {
				speakNextItem();
			}
			else {
				nextSlide();
			}
			event.preventDefault();
			break;

		case 38: // up arrow
			if (isChromeVoxActive()) {
				speakPrevItem();
			}
			else {
				prevSlide();
			}
			event.preventDefault();
			break;

		case 71: // g
		case 103: // G
			var nr = prompt("Go to slide", (curSlide + 1));
			goToSlide(parseInt(nr));
			event.preventDefault();
			// Fix for (at least) FF: set focus on slide again to get next key
			// event
			window.focus();
			break;

		case 36: // home
			goToSlide(1);
			event.preventDefault();
			break;

		case 35: // end
			goToSlide(slideEls.length);
			event.preventDefault();
			break;

		case 190: // "."
			if (presenterSlaveWindow !== null) {
				presenterSlaveWindow.postMessage("forward", "*");
			}
			event.preventDefault();
			break;

		case 188: // ","
			if (presenterSlaveWindow !== null) {
				presenterSlaveWindow.postMessage("back", "*");
			}
			event.preventDefault();
			break;

		case 80:
		case 112:
			if (!isPresenterSlave && presenterSlaveWindow === null) {
				presenterSlaveWindow = window.open(window.location.href, "Presenter Notes", "dependent=yes,width=900,height=700");
				// Wait some time (2 sec.) hoping that the window has been opened
				setTimeout(function() {
					if (presenterSlaveWindow !== null) {
						// you are a slave now!
						presenterSlaveWindow.postMessage("slave", "*");
						// goto master's current slide
						presenterSlaveWindow.postMessage("" + curSlide, "*");
					}
				}, 2000);
				// if master has notes enabled, toggle now
				if (showPresenterNotes) {
					togglePresenterNotes();
				}

			}
			event.preventDefault();
			break;

		case 78: // n / N
		case 110:
			if (presenterSlaveWindow !== null) {
				presenterSlaveWindow.postMessage("togglenotes", "*");
			}
			else {
				togglePresenterNotes();
			}
			event.preventDefault();
			break;

		case 84: // t / T
		case 110:
			toggleTransitions();
			event.preventDefault();
			break;

		case 66: // b 
			toggleBlackOut();
			break;
		case 87: // w 
			toggleWhiteOut();
			break;

	}
};



var handleTheMessage = function(event) {
	//only using strings as older Firefox version do not support complex messaging payload
	if (event.data !== null) {
		if (event.data === 'slave') {
			//become a slave
			isPresenterSlave = true;

			document.title = "Presenter Notes: " + document.title;
			togglePresenterNotes();
			// disable transitions
			var section = document.querySelector("div.slides");
			section.classList.add('no-trans');
		}
		else if (event.data === 'togglenotes') {
			//"remote" note toggling 
			togglePresenterNotes();
		}
		else if (event.data === 'forward') {
			//move forward only in presenter screen
			
			// off-by-one => +2 instead of +1
			var target = curSlide + 2;
			goToSlide(target);
		}
		else if (event.data === 'back') {
			//move back only in presenter screen
			
			// off-by-one, not less than 1;
			goToSlide(curSlide || 1);
		}
		else {
			// optimistic: if none of the above cases, expect a number to be send  
			goToSlide(parseInt(event.data) + 1);
		}
	}
}

function addEventListeners() {
	document.addEventListener('keydown', handleBodyKeyDown, false);
	window.addEventListener("message", handleTheMessage, false);
};

/* Initialization */

function enumrateSlides() {
	for ( var i = 0, slide; slide = slideEls[i]; i++) {
		var el = document.createElement('footer');
		var span = document.createElement('span');
		span.className = 'slide-nr';
		span.innerHTML = "" + (i + 1);
		el.appendChild(span);
		slide.appendChild(el); 
	}
};

function addPrettify() {
	var els = document.querySelectorAll('pre');
	for ( var i = 0, el; el = els[i]; i++) {
		if (!el.classList.contains('noprettyprint')) {
			el.classList.add('prettyprint');
		}
	}

	var el = document.createElement('script');
	el.type = 'text/javascript';
	el.src = 'lib/prettify.js';
	el.onload = function() {
		prettyPrint();
	}
	document.body.appendChild(el);
};

function addFontStyle() {
	var el = document.createElement('link');
	el.rel = 'stylesheet';
	el.type = 'text/css';
	el.href = 'http://fonts.googleapis.com/css?family=' + 'Open+Sans:regular,semibold,italic,italicsemibold|Droid+Sans+Mono';

	document.body.appendChild(el);
};

function addGeneralStyle() {

	var el = document.createElement('meta');
	el.name = 'viewport';
	el.content = 'width=1100,height=750';
	document.querySelector('head').appendChild(el);

	var el = document.createElement('meta');
	el.name = 'apple-mobile-web-app-capable';
	el.content = 'yes';
	document.querySelector('head').appendChild(el);
};

function makeBuildLists() {
	for ( var i = curSlide, slide; slide = slideEls[i]; i++) {
		var items = slide.querySelectorAll('.build > *');
		for ( var j = 0, item; item = items[j]; j++) {
			if (item.classList) {
				item.classList.add('to-build');
			}
		}
	}
};

function handleDomLoaded() {
	slideEls = document.querySelectorAll('div.slides section > article');

	setupFrames();

	enumrateSlides();

	processToc();
	
	addFontStyle();
	addGeneralStyle();
	addPrettify();
	addEventListeners();

	updateSlides();

	setupInteraction();
	makeBuildLists();


	document.body.classList.add('loaded');
};

function initialize() {
	getCurSlideFromHash();

	if (window['_DCL']) {
		handleDomLoaded();
	}
	else {
		document.addEventListener('DOMContentLoaded', handleDomLoaded, false);
	}
}

initialize();

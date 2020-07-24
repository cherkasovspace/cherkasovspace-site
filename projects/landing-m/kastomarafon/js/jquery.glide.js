/*
 * Glide.js
 * Ver: 1.0.5
 * Simple, lightweight and fast jQuery slider (Простой, легкий и быстрый слайдер JQuery)
 * url: http://jedrzejchalubek.com/glide
 * Autor: @JedrzejChalubek
 * site: http://jedrzejchalubek.com
 * Licensed under the MIT license (Под лицензией MIT)
 */
;(function ($, window, document, undefined) {
	
	var name = 'glide',
		defaults = {
			
			// {Int or Bool} False for turning off autoplay (Ложь для выключения автозапуска)
			autoplay: false,
			// {Bool} Pause autoplay on mouseover slider(Пауза автозапуск мыши над слайдером)
			hoverpause: true,
			
			/**
			 * Animation time (время Анимация)
			 * !!! IMPORTANT !!! (ВАЖНЫЙ)
			 * That option will be use only, when css3 are not suported (Этот вариант будет использование только при CSS3 не поддерживаются)
			 * If css3 are supported animation time is set in css declaration inside .css file (Если CSS3 поддерживаются анимации Время устанавливается в декларации CSS внутри .css файл)
			 * @type {Int}
			 */
			animationTime: 500,

			/**
			 * {Bool or String} Show/hide/appendTo arrows (показать / скрыть / appendTo стрелки)
			 * True for append arrows to slider wrapper (Правда для дописать стрелками на упаковке слайдер)
			 * False for not appending arrows (Ложь для добавления стрелки не)
			 * Id or class name (e.g. '.class-name') for appending to specific HTML markup (Id или имя класса (например, «.class-имя") для добавления к конкретному HTML-разметки)
			 */
			arrows: true,
			// {String} Arrows wrapper class (Класс Стрелки обертка)
			arrowsWrapperClass: 'slider-arrows',
			// {String} Main class for both arrows (Основной класс для обеих стрелок)
			arrowMainClass: 'slider-arrow',
			// {String} Right arrow (Правая стрелка)
			arrowRightClass: 'slider-arrow--right',
			// {String} Right arrow text (Текст правой стрелки)
			arrowRightText: '',
			// {String} Left arrow (Левая стрелка)
			arrowLeftClass: 'slider-arrow--left',
			// {String} Left arrow text (Текст левой стрелки)
			arrowLeftText: '',

			/**
			 * {Bool or String} Show/hide/appendTo bullets navigation (Показать / скрыть / appendTo пули(круглешки) навигации)
			 * True for append arrows to slider wrapper (Правда для дописать стрелками на упаковке слайдер)
			 * False for not appending arrows (Ложь для добавления стрелки не)
			 * Id or class name (e.g. '.class-name') for appending to specific HTML markup (Id или имя класса (например, «.class-имя") для добавления к конкретному HTML-разметки)
			 */
			nav: true,
			// {Bool} Center bullet navigation (Центр пуля(круглешки) навигации)
			navCenter: true,
			// {String} Navigation class (класс Навигация)
			navClass: 'slider-nav',
			// {String} Navigation item class (Навигация класс пункт)
			navItemClass: 'slider-nav__item',
			// {String} Current navigation item class (Текущий класс навигации пункт)
			navCurrentItemClass: 'slider-nav__item--current',

			// {Bool} Slide on left/right keyboard arrows press (Слайд на левой / правой стрелки клавиатуры нажмите)
			keyboard: true,

			// {Int or Bool} Touch settings (параметры сенсорной)
			touchDistance: 60,

			// {Function} Callback before plugin init (Обратный вызов, перед инициализации плагина)
			beforeInit: function() {},
			// {Function} Callback after plugin init (Обратный вызов, после инициализации плагина)
			afterInit: function() {},

			// {Function} Callback before slide change (Обратный вызов до изменения слайдов)
			beforeTransition: function() {},
			// {Function} Callback after slide change (Обратный вызов после изменения слайдов)
			afterTransition: function() {}
		
		};

	/**
	 * Slider Constructor (слайдер Конструктор)
	 * @param {Object} parent (родитель)
	 * @param {Object} options (опции)
	 */
	function Glide(parent, options) {
		
		// Cache this (кэш это)
		var _ = this;
		// Extend options (Продлить варианты)
		_.options = $.extend({}, defaults, options); //объеденили содержимое обектов в пустой объект, следовательно options является методом this
		// Sidebar (Боковая панель)
		_.parent = parent;
		// Slides Wrapper (слайдер Обертка)
		_.wrapper = _.parent.children();
		// Slides (Слайды)
		_.slides = _.wrapper.children();
		// Current slide id (Текущий слайдов)
		_.currentSlide = 0;
		// CSS3 Animation support (Поддержка CSS3 Анимация)
		_.CSS3support = true;

		// Callbacks before plugin init (Обратные вызовы перед инициализации плагина - предположительно опциям)
		_.options.beforeInit.call(_); //

		// Initialize (инициализировать)
		_.init();
		// Build DOM (построить DOM)
		_.build();
		// Start autoplay (Начните автозапуск)
		_.play();

		/**
		 * Controller (контроллер)
		 * Touch events (Сенсорные события)
		 */
		if (_.options.touchDistance) {    // проверяется если есть такое свойство, то:
			// Init swipe (Init проведите пальцем)
			_.swipe(); // запускается метод swipe()
		}

		/**
		 * Controller (контроллер)
		 * Keyboard left and right arrow keys (Клавиатура влево и правую клавиши со стрелками)
		 */
		if (_.options.keyboard) {
			$(document).on('keyup', function(k) {
				// Next (следующий)
				if (k.keyCode === 39) _.slide(1);
				// Prev (предидущий)
				if (k.keyCode === 37) _.slide(-1);
			});
		}

		/**
		 * Controller (контроллер)
		 * Mouse over slider (Наведите курсор мыши на ползунок)
		 * When mouse is over slider, pause autoplay (При наведении курсора мыши на ползунок, пауза автозапуск)
		 * On out, start autoplay again (На выход, начать автозапуск снова)
		 */
		if (_.options.hoverpause) {
			_.parent.add(_.arrows).add(_.nav).on('mouseover mouseout', function(e) {
				// Pasue autoplay (Пауза автозапуска)
				_.pause();
				// When mouse left slider or touch end, start autoplay anew (Когда мышь влево ползунок или сенсорный конец, начать заново автозапуск)
				if (e.type === 'mouseout') _.play();
			});
		}
        
		/**
		 * Controller (контроллер)
		 * When resize browser window (Когда окно изменения размера браузера)
		 * Pause autoplay in fear of escalation (Пауза автозапуска в страхе расширения)
		 * Reinit plugin for new slider dimensions (переинициализации плагин для новых размеров ползунка)
		 * Correct crop to current slide (Правильно культур в текущем слайде)
		 * Start autoplay from beginning (Начало автозапуск с начала)
		 */
		$(window).on('resize', function() {
			// Reinit plugin (set new slider dimensions) (переинициализации плагин (установить новые размеры слайдера))
			_.init();
			// Crop to current slide (Обрезать в текущем слайде)
			_.slide(0);
		});

		// Callback after plugin init (Обратный вызов после инициализации плагина)
		_.options.afterInit.call(_);

		// Returning API (Возврат API)
		return {
			
			/**
			 * Get current slide number (Получить номер текущего слайда)
			 * @return {Int}
			 */
			current: function() {
				return -(_.currentSlide) + 1;
			},

			/**
			 * Start autoplay (Начало автозапуска)
			 */
			play: function() {
				_.play();
			},

			/**
			 * Stop autoplay (Остановить Автозапуск)
			 */
			pause: function() {
				_.pause();
			},

			/**
			 * Slide one forward (Слайд один вперед)
			 * @param  {Function} callback (Функция обратного вызова)
			 */
			next: function(callback) {
				_.slide(1, false, callback);
			},

			/**
			 * Slide one backward (Слайд один назад)
			 * @param  {Function} callback (Функция обратного вызова)
			 */
			prev: function(callback) {
				_.slide(-1, false, callback);
			},

			/**
			 * Jump to specifed slide (Перейти к определенному слайду)
			 * @param  {Int}   	  distance (расстояние)
			 * @param  {Function} callback (Функция обратного вызова)
			 */
			jump: function(distance, callback) {
				_.slide(distance-1, true, callback);
			},

			/**
			 * Append navigation to specifet target (Добавьте навигацию к конкретной цели)
			 * @param  {Mixed} target (смешанной цели)
			 */
			nav: function(target) {
				/**
				 * If navigation wrapper already exist (Если навигация уже существует обертка)
				 * Remove it, protection before doubled navigation (Удалите его, прежде, чем в два раза защиты навигации)
				 */
				if (_.navWrapper) {
					_.navWrapper.remove();
				}
				// While target isn't specifed, use slider wrapper (В то время как целевой объект не указан, используйте обертку слайдер)
				_.options.nav = (target) ? target : _.options.nav;
				// Build (строить)
				_.navigation();
			},

			/**
			 * Append arrows to specifet target (Добавьте ошибки на указанный целевой)
			 * @param  {Mixed} target (*param {} смешанной цели)
			 */
			arrows: function(target) {
				/**
				 * If arrows wrapper already exist (Если стрелки обертка уже существует)
				 * Remove it, protection before doubled arrows (Удалите его, прежде, чем в два раза защиты стрелки)
				 */
				if (_.arrowsWrapper) {
					_.arrowsWrapper.remove();
				}
				// While target isn't specifed, use slider wrapper (В то время как целевой объект не указан, используйте обертку слайдер)
				_.options.arrows = (target) ? target : _.options.arrows;
				// Build (строить)
				_.arrows();
			}

		};
	
	}

	/**
	 * Building slider DOM (Строительство слайдер ДОМ)
	 */
	Glide.prototype.build = function() {
		
		// Cache this
		var _ = this;
        
		/**
		 * Arrows (Стрелки)
		 * If option is true and there is more than one slide (Если опция истинна, и есть больше, чем один слайд)
		 * Append left and right arrow (Добавьте левую и правую стрелку)
		 */
		if (_.options.arrows) _.arrows();

		/**
		 * Navigation (навигация)
		 * If option is true and there is more than one slide (Если опция истинна, и есть больше, чем один слайд)
		 * Append navigation item for each slide (Добавление навигации пункт для каждого слайда)
		 */
		if (_.options.nav) _.navigation();
	
	};

	/**
	 * Building navigation DOM (Строительство навигации DOM)
	 */
	Glide.prototype.navigation = function() {

		// Cache this
		var _ = this;

		if (_.slides.length > 1) {
			// Setup variables (переменные установки)
			var o = _.options,
				/**
				 * Setting append target (Цель Append Настройка)
				 * If option is true set default target, that is slider wrapper (Если опция целевой набор по умолчанию так, что обертка слайдер)
				 * Else get target set in options (Еще получить целевой задать в опциях)
				 * @type {Bool or String} (type {Bool или Строка})
				 */
				target = (_.options.nav === true) ? _.parent : _.options.nav;

			// Navigation wrapper (обертка Навигация)
			_.navWrapper = $('<div />', {
				'class': o.navClass
			}).appendTo(target);

			// Setup variables (переменные установки)
			var nav = _.navWrapper,
				item;

			// Generate navigation items (Создание элементов навигации)
			for (var i = 0; i < _.slides.length; i++) {
				item = $('<a />', {
					'href': '#',
					'class': o.navItemClass,
					// Direction and distance -> Item index forward (Направление и расстояние -> индекс лота вперед)
					'data-distance': i
				}).appendTo(nav);

				nav[i+1] = item;
			}

			// Setup variables (переменные установки)
			var navChildren = nav.children();
			
			// Add navCurrentItemClass to the first navigation item (Добавить навигационной CurrentItem класс в первой навигационной пункта)
			navChildren.eq(0).addClass(o.navCurrentItemClass);
			
			// If centered option is true (Если по центру опция истинна)
			if (o.navCenter) {
				// Center bullet navigation (Центр пуля навигации)
				nav.css({
					'left': '50%',
					'width': navChildren.outerWidth(true) * navChildren.length,
					'margin-left': -nav.outerWidth(true)/2
				});
			}

			/**
			 * Controller (Контроллер)
			 * On click in arrows or navigation, get direction and distance (По клику на стрелки для навигации, получить направление и расстояние)
			 * Then slide specified distance (Затем сдвиньте заданное расстояние)
			 */
			navChildren.on('click touchstart', function(e) {
				// prevent normal behaviour (предотвратить нормальную работу)
				e.preventDefault();
				// Slide distance specified in data attribute (Презентация расстояние указано в атрибуте данных)
				_.slide( $(this).data('distance'), true );
			});
		}
	
	};

	/**
	 * Building arrows DOM (Создание стрелки DOM)
	 */
	Glide.prototype.arrows = function() {

		// Cache this
		var _ = this;
		
		if (_.slides.length > 1) {
			// Setup variables (переменные установки)
			var o = _.options,
				/**
				 * Setting append target
				 * If option is true set default target, that is slider wrapper
				 * Else get target set in options
				 * @type {Bool or String}
				 */
				target = (_.options.arrows === true) ? _.parent : _.options.arrows;

			// Arrows wrapper
			_.arrowsWrapper = $('<div />', {
				'class': o.arrowsWrapperClass
			}).appendTo(target);

			// Setup variables
			var arrows = _.arrowsWrapper;

			// Right arrow
			arrows.right = $('<a />', {
				'href': '#',
				'class': o.arrowMainClass + ' ' + o.arrowRightClass,
				// Direction and distance -> One forward
				'data-distance': '1',
				'html': o.arrowRightText
			}).appendTo(arrows);

			// Left arrow
			arrows.left = $('<a />', {
				'href': '#',
				'class': o.arrowMainClass + ' ' + o.arrowLeftClass,
				// Direction and distance -> One backward
				'data-distance': '-1',
				'html': o.arrowLeftText
			}).appendTo(arrows);

			/**
			 * Controller
			 * On click in arrows or navigation, get direction and distance
			 * Then slide specified distance
			 */
			arrows.children().on('click touchstart', function(e) {
				// prevent normal behaviour
				e.preventDefault();
				// Slide distance specified in data attribute
				_.slide( $(this).data('distance'), false );
			});
		}
	
	};


	/**click
	 * Slides change & animate logic
	 * @param  {int} distance
	 * @param  {bool} jump
	 * @param  {function} callback
	 */
	Glide.prototype.slide = function(distance, jump, callback) {

		// Cache this
		var _ = this;

		/**
		 * Stop autoplay
		 * Clearing timer
		 */
		_.pause();

		// Callbacks before slide change
		_.options.beforeTransition.call(_);

		// Setup variables 
		var	currentSlide = (jump) ? 0 : _.currentSlide,
			slidesLength = -(_.slides.length-1),
			navCurrentClass = _.options.navCurrentItemClass,
			slidesSpread = _.slides.spread;

		/**
		 * Check if current slide is first and direction is previous, then go to last slide
		 * or current slide is last and direction is next, then go to the first slide
		 * else change current slide normally
		 */
		if ( currentSlide === 0 && distance === -1 ) {
			currentSlide = slidesLength;
		} else if ( currentSlide === slidesLength && distance === 1 ) {
			currentSlide = 0;
		} else {
			currentSlide = currentSlide + (-distance);
		}

		/**
		 * Crop to current slide.
		 * Mul slide width by current slide number.
		 */
		var translate = slidesSpread * currentSlide  + 'px';

		// While CSS3 is supported
		if (_.CSS3support) {
			// Croping by increasing/decreasing slider wrapper translate
			_.wrapper.css({
				'-webkit-transform': 'translate3d(' + translate + ', 0px, 0px)', 
				   '-moz-transform': 'translate3d(' + translate + ', 0px, 0px)', 
				    '-ms-transform': 'translate3d(' + translate + ', 0px, 0px)', 
				     '-o-transform': 'translate3d(' + translate + ', 0px, 0px)', 
				        'transform': 'translate3d(' + translate + ', 0px, 0px)' 
			});
		// Else use $.animate()
        $('.txtClick').hide();
$('.pClick').each(function(i){
    $(this).toggle(function(){
        $('.txtClick').eq(i).show();
    }, function(){
        $('.txtClick').eq(i).hide();
    });
});
		} else {
			// Croping by increasing/decreasing slider wrapper margin
			_.wrapper.stop()
				.animate({ 'margin-left': translate }, _.options.animationTime);
		}

		// Set to navigation item current class
		if (_.options.nav && _.navWrapper) {
			_.navWrapper.children()
				.eq(-currentSlide)
					.addClass(navCurrentClass)
						.siblings()
							.removeClass(navCurrentClass);
		}

		// Update current slide globaly
		_.currentSlide = currentSlide;
		
		// Callbacks after slide change
		_.options.afterTransition.call(_);
		if ( (callback !== 'undefined') && (typeof callback === 'function') ) callback();

		/**
		 * Start autoplay
		 * After slide
		 */
		_.play();
	
	};

	/**
	 * Autoplay logic
	 * Setup counting
	 */
	Glide.prototype.play = function() {

		// Cache this
		var _ = this;

		/**
		 * If autoplay turn on
		 * Slide one forward after a set time
		 */
		if (_.options.autoplay) {
			_.auto = setInterval(function() {
				_.slide(1, false);
			}, _.options.autoplay);
		}

	};

	/**
	 * Autoplay pause
	 * Clear counting
	 */
	Glide.prototype.pause = function() {

		// Cache this
		var _ = this;

		/**
		 * If autoplay turn on
		 * Clear interial
		 */
		if (_.options.autoplay) {
			_.auto = clearInterval(_.auto);
		}

	};

	/**
	 * Change sildes on swipe event (Измените sildes на событии сильного удара)
	 */
	Glide.prototype.swipe = function() { // создаем метод swipe()
		
		// Setup variables (переменные установки)
		var _ = this,  // присвоили переменной _ this - 
			touch,   // создаем несколько переменных, где в основном не присваиваем им значения, т.е. определяем переменные 
			touchDistance,
			touchStartX,
			touchStartY,
			touchEndX,
			touchEndY,
			touchHypotenuse,
			touchCathetus,
			touchSin,
			MathPI = 180 / Math.PI,  // переменной MathPI присваиваем разность операндов 180 на число пи
			subExSx,
			subEySy,
			powEX,
			powEY;

		/**
		 * Touch start (начало прикосновения)
		 * @param  {Object} e event (param {Объект} e событие)
		 */
		_.parent.on('touchstart', function(e) {
			// Cache event
			touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			
			// Get touch start points
			touchStartX = touch.pageX;
			touchStartY = touch.pageY;
		});

		/**
		 * Touch move
		 * From swipe length segments calculate swipe angle
		 * @param  {Obejct} e event
		 */
		_.parent.on('touchmove', function(e) {
			// Cache event
			touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

			// Get touch end points
			touchEndX = touch.pageX;
			touchEndY = touch.pageY;

			// Calculate start, end points
			subExSx = touchEndX - touchStartX;
			subEySy = touchEndY - touchStartY;
			// Bitwise subExSx pow
			powEX = Math.abs( subExSx << 2 );
			// Bitwise subEySy pow
			powEY = Math.abs( subEySy << 2 );
			
			// Calculate the length of the hypotenuse segment
			touchHypotenuse = Math.sqrt( powEX + powEY );
			// Calculate the length of the cathetus segment
			touchCathetus = Math.sqrt( powEY );
			// Calculate the sine of the angle
			touchSin = Math.asin( touchCathetus/touchHypotenuse );

			// While touch angle is lower than 32 degrees, block vertical scroll
			if( (touchSin * MathPI) < 32 ) e.preventDefault();
		});

		/**
		 * Touch end
		 * @param  {Object} e event
		 */
		_.parent.on('touchend', function(e) {
			// Cache event
			touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			
			// Calculate touch distance
			touchDistance = touch.pageX - touchStartX;

			// While touch is positive and greater than distance set in options
			if ( touchDistance > _.options.touchDistance ) {
				// Slide one backward
				_.slide(-1);
			// While touch is negative and lower than negative distance set in options
			} else if ( touchDistance < -_.options.touchDistance) {
				// Slide one forward
				_.slide(1);
			}
		});
	
	};

	/**
	 * Initialize (инициализировать)
	 * Get & set dimensions (Получить & размеры установлен)
	 * Set animation type (Набор типа анимации)
	 */
	Glide.prototype.init = function() {
		
		// Cache this
		var _ = this,	
			// Get sidebar width (Получить ширину боковой панели)
			sliderWidth = _.parent.width();
			// Get slide width (Получить ширину слайда)
			_.slides.spread = sliderWidth;

			// Set wrapper width (Установить ширину обертка)
			_.wrapper.width(sliderWidth * _.slides.length);
			// Set slide width (Установить ширину слайд)
			_.slides.width(_.slides.spread);

		// If CSS3 Transition isn't supported switch CSS3support variable to false and use $.animate() (Если CSS3 Переход не поддерживается переменная поддержки CSS3 переключатель ложной и использовать $ .animate ())
		if ( !isCssSupported("transition") || !isCssSupported("transform") ) _.CSS3support = false;
	
	};

	/**
	 * Function to check css3 support (Функция, чтобы проверить поддержку CSS3)
	 * @param  {String}  declaration name (param {Строка} имя декларация)
	 * @return {Boolean} (return {} Логическое)
	 */
	function isCssSupported(declaration) { //функция isCssSupported с передаваемым параметром declaration
		// создаем несколько переменных
		var isSupported = false,                              // переменная isSupported с буллевым занчение лож
			prefixes = 'Khtml ms O Moz Webkit'.split(' '),    // переменная prefixes, в значениии строка и она разбита на массив из элементов, разделенными запятыми, в данной строке.
			clone = document.createElement('div'),            // переменная clone, в значении создан новый элемент div.
			declarationCapital = null;                        // переменная declarationCapital со значение null

		declaration = declaration.toLowerCase();  // передаваемому параметру присваивается значение - здесь подразумевается, что передается строка, и все буквы этой строки сделали маленькими, методом toLowerCase.
		if (clone.style[declaration] !== undefined) isSupported = true;   // присвоили стиль, новому элементу div, значение которого передаваемая строка, т.е. свойство нового элемента div. И проверяется не идентично ли оно undefined(неопределено), т.е существует ли такое свойство(т.е. в строке должно быть реально существуещее свойство CSS, здесь значение свойства не интересует, интересует переданное название свойства в строке), которое мы создали при помощи передаваемой строки declaration. Если данное условие правда, то присваиваем переменной isSupported значение true 
		if (isSupported === false) { //если значение переменной isSupported идентично булевому значению false, то:
			declarationCapital = declaration.charAt(0).toUpperCase() + declaration.substr(1);    // в переменную declarationCapital переписали значение переменной declaration, только значение данной строки с заглавной буквы, т.е. берем от значения переменной declaration первый символ и перевели его в верхний регистр - это получился первый операнд. Взяли от значения переменной declaration символы от второго до последнего - это второй операнд. Далее сделали сложение операндов, т.е. конкотенацию строк, и получилось значение строки с заглавного символа
			for( var i = 0; i < prefixes.length; i++ ) { // Цикл for, счетчик i с нуля и увеличивается на 1, цикл действует, пока длина массива prefixes больше счетчика
				if( clone.style[prefixes[i] + declarationCapital ] !== undefined ) { // присваиваем новому созданному элементу стиль и проверяем если оно не идентично неопределенности (В параметре стиля берем текущий элемент массива prefixes и складываем со значением переменной declarationCapital, должно получится строка с префиксом и стилем с заглавной буквы, типа msTransform), то:
					isSupported = true;    // присвоили переменной isSupported булево значение true
					break; // завершили цикл и вышли из него
				}
			}
		}
        
		if (window.opera) {   // если эта опера, то:
			if (window.opera.version() < 13) isSupported = false;    // если версия оперы менше 13, то переменной isSupported присваиваем булево значение false
		}

		
		return isSupported;   // возвращение переменной isSupported, что является результатом функции isCssSupported

	}

	$.fn[name] = function(options) {

		return this.each(function () {
			if ( !$.data(this, 'api_' + name) ) {
				$.data(this, 'api_' + name,
					new Glide($(this), options)
				);
			}
		});
		
	};

})(jQuery, window, document);

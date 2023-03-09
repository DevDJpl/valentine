/*!
 * Name: Valentine Wishes
 * Preset: main.js
 * Author: DevDJ
 * Version: 1.0
 * Copyrights 2021 DevDJ - All Rights Reserved
!*/
;(function($){
	"use strict";
	
	// Get the user-agent string 
	let userAgentString = navigator.userAgent;
	// Detect Chrome 
	let isChrome = userAgentString.indexOf("Chrome") > -1;
	// Detect Internet Explorer 
	let isIE = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1;
	// Detect Firefox 
	let isFirefox = userAgentString.indexOf("Firefox") > -1;
	// Detect Safari 
	let isSafari = userAgentString.indexOf("Safari") > -1; 
	// Discard Safari since it also matches Chrome 
	if((isChrome) && (isSafari)) isSafari = false;
	// Detect Opera 
	let isOpera = userAgentString.indexOf("OP") > -1;
	// Discard Chrome since it also matches Opera      
	if((isChrome) && (isOpera)) isChrome = false;
	if(isChrome||isSafari){
		$('.mail').on('hover', function(){
			$('mail-wrapper').addClass('isChrome');
		});
		$('.cover').on('click', function(){
			startShow();
		});
	}else{
		$('.btn').on('click', function(){
			$('.mail-wrapper').removeClass('isChrome');
			startShow();
		});
	}
	var audio = $('.player')[0];
	if(!$('.animation').hasClass('hidden')){
		$('.animation').addClass('hidden');
	}
	function startShow(){
		$('#confetti').removeClass('hidden');
		$('.animation').removeClass('hidden');
		$('.animation').addClass('start');
		setTimeout(function(){
			$('.faded').addClass('zoom');
			$('.faded .step-1').addClass('initial active transInStart');
			$('.faded .underlay').addClass('show');
			setTimeout(function(){
				$('.faded .initial').removeClass('transInStart');
				$('.faded .underlay').removeClass('show');
			}, 50);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInStart').addClass('transInMid');
				$('.faded .underlay').addClass('show');      
			}, 125);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInMid').addClass('transInFin');
				$('.faded .underlay').removeClass('show');
			}, 175);
			setTimeout(function(){
				$('.faded').removeClass('zoom');
				$('.faded .step-1').removeClass('initial active');
				setTimeout(function(){
					$('.faded').addClass('zoom');
				}, 25);
				$('.faded .step-2').addClass('initial active');
				$('.faded .initial').addClass('transInStart');
				$('.faded .underlay').addClass('show');
			},3500);
			setTimeout(function(){
				$('.faded .underlay').removeClass('show');
			}, 3550);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInStart').addClass('transInMid');
				$('.faded .underlay').addClass('show');
			}, 3575);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInMid').addClass('transInFin');
				$('.faded .underlay').removeClass('show');
			}, 3650);
			setTimeout(function(){
				$('.faded').removeClass('zoom');
				$('.faded .step-2').removeClass('initial active');
				setTimeout(function(){
					$('.faded').addClass('zoom');
				}, 25);
				$('.faded .step-3').addClass('initial active');
				$('.faded .initial').addClass('transInStart');
				$('.faded .underlay').addClass('show');
			}, 7000);
			setTimeout(function(){
				$('.faded .underlay').removeClass('show');
			}, 7050);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInStart').addClass('transInMid');
				$('.faded .underlay').addClass('show');
			}, 7125);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInMid').addClass('transInFin');
				$('.faded .underlay').removeClass('show');
			}, 7175);
			setTimeout(function(){
				$('.faded').removeClass('zoom');
				$('.faded .step-3').removeClass('initial active');
				setTimeout(function(){
					$('.faded').addClass('zoom');
				}, 25);
				$('.faded .step-4').addClass('initial active');
				$('.faded .initial').addClass('transInStart');
				$('.faded .underlay').addClass('show');
			}, 10500);
			setTimeout(function(){
				$('.faded .underlay').removeClass('show');
			}, 10550);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInStart').addClass('transInMid');
				$('.faded .underlay').addClass('show');
			}, 10575);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInMid').addClass('transInFin');
				$('.faded .underlay').removeClass('show');
			}, 10675);
			setTimeout(function(){
				$('.faded').removeClass('zoom');
				$('.faded .step-4').removeClass('initial active');
				setTimeout(function(){
					$('.faded').addClass('zoom');
				}, 25);
				$('.faded .step-5').addClass('initial active');
				$('.faded .initial').addClass('transInStart');
				$('.faded .underlay').addClass('show');
			}, 14000);
			setTimeout(function(){
				$('.faded .underlay').removeClass('show');
			}, 14050);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInStart').addClass('transInMid');
				$('.faded .underlay').addClass('show');
			}, 14125);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInMid').addClass('transInFin');
				$('.faded .underlay').removeClass('show');
			}, 14175);
			setTimeout(function(){
				$('.faded').removeClass('zoom');
				$('.faded .step-5').removeClass('initial active');
				setTimeout(function(){
					$('.faded').addClass('zoom');
				}, 25);
				$('.faded .step-6').addClass('initial active');
				$('.faded .initial').addClass('transInStart');
				$('.faded .underlay').addClass('show');
			}, 17325);
			setTimeout(function(){
				$('.faded .underlay').removeClass('show');
			}, 17500);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInStart').addClass('transInMid');
				$('.faded .underlay').addClass('show');
			}, 17575);
			setTimeout(function(){
				$('.faded .initial').removeClass('transInMid').addClass('transInFin');
				$('.faded .underlay').removeClass('show');
			}, 17650);
			setTimeout(function(){
				$('.faded .step-6').removeClass('initial active');
				$('.faded .step-7').addClass('active');
			}, 20975);
			setTimeout(function(){
				$('.faded').removeClass('zoom');
				$('.faded .step-7').removeClass('initial active');
				setTimeout(function(){
					$('.faded').addClass('zoom');
				}, 25);
				$('.animation').removeClass('start');
				$('.faded').removeClass('zoom');
				$('.animation').addClass('hidden');
				$('.player').removeClass('hidden');
				audio.play();
				audio.currentTime = 36;
				$('.player').prop("volume", 0.38);
			}, 21400);
		}, 500);
	}
	$('.player').on('timeupdate', function(){
		var _currentTime = parseFloat(audio.currentTime); 
		if(_currentTime<36||_currentTime>205){
			audio.pause();
			audio.currentTime = 36;
			$('.mail-wrapper').removeClass('hidden');
			$('.heart-wrapper').removeClass('active');
			$('.heart-wrapper').addClass('hidden');
			$('#confetti').addClass('hidden');
			$('.player').addClass('hidden');
		}
	});
	$('.player').on('playing', function(){
		$('.mail-wrapper').addClass('hidden');
		$('.heart-wrapper').addClass('active');
		$('.heart-wrapper').removeClass('hidden');
	});
	$('.player').on('ended', function(){
		audio.currentTime = 36;
		$('.mail-wrapper').removeClass('hidden');
		$('.heart-wrapper').removeClass('active');
		$('.heart-wrapper').addClass('hidden');
		$('#confetti').addClass('hidden');
		$('.player').addClass('hidden');
	});
})(jQuery);

window.onload = function(){
	var debug = /*true ||*/ false;
	var h = document.querySelector('.heart-wrapper');
	function toggleActivate(){
		h.classList.toggle('active');
	}
	if(!debug){
		h.addEventListener('click',function(){
			toggleActivate();
		},false);
		setInterval(toggleActivate,1000);
	}else{
		var elts = Array.prototype.slice.call(h.querySelectorAll(':scope > *'),0);
		var activated = false;
		var animating = false;
		var count = 0;
		var step = 1000;
		function setAnim(state){
			elts.forEach(function(elt){
				elt.style.animationPlayState = state;
			});
		}  
		h.addEventListener('click',function(){
			if(animating) return;
			if(count > 27){
			h.classList.remove('active');
				count = 0;
				return;
			}
			if(!activated) h.classList.add('active') && (activated = true);  
			console.log('Step : '+(++count));
			animating = true;
			setAnim('running');
			setTimeout(function(){
				setAnim('paused');
				animating = false;
			},step);
		},false);
		
		setAnim('paused');
		elts.forEach(function(elt){
			elt.style.animationDuration = step/1000*27+'s';
		});
	} 
};
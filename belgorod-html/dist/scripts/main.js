"use strict";$(document).ready(function(){$(".header__menu-nav ul li a").click(function(){$(".header__menu-nav ul li a").removeClass("active"),$(this).addClass("active")}),$(".search__nav ul li a").click(function(){$(".search__nav ul li a").removeClass("active"),$(this).addClass("active")}),$(".footer__menu-nav ul li a").click(function(){$(".footer__menu-nav ul li a").removeClass("active"),$(this).addClass("active")}),$(".js-carousel").owlCarousel({loop:!0,margin:15,navText:[""],nav:!0,items:6,responsive:{0:{items:1},380:{items:2},500:{items:3},660:{items:4},1e3:{items:6}}}),$(".header__menu-nav ul").clone().appendTo(".mmenu-nav");var e=$(".mmenu-nav").mmenu({navbar:{title:"<img src='images/logo.png' alt='' />"},extensions:["fx-menu-slide","fx-listitems-slide","border-full","pagedim-black"],offCanvas:{position:"right"},counters:!0}),a=$(".js-navtrigger"),t=e.data("mmenu");a.on("click",function(){t.open()}),t.bind("open:start",function(e){$(".js-navtrigger").toggleClass("-active")}),t.bind("close:start",function(e){$(".js-navtrigger").toggleClass("-active")}),Modernizr.mq("(max-width: 1199px)")?$('a.-pagescroll[href*="#"]:not([href="#"])').click(function(){if(t.close(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top-115},1e3),!1}}):$('a.-pagescroll[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top-73},1e3),!1}})});
"use strict";$(document).ready(function(){new Swiper(".mainSlider-js",{slidesPerView:1,spaceBetween:30,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoHeight:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".platformSlider-js",{slidesPerView:5,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoHeight:!0,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{991:{slidesPerView:4},767:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:1}}}),new Swiper(".reviewsSlider-js",{slidesPerView:3,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoHeight:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{991:{slidesPerView:2},850:{slidesPerView:1}}});$(".mmenu-js ul").clone().appendTo(".mmenu-nav");var e=$(".mmenu-nav").mmenu({navbar:{title:"<img src='images/svg/logoHeader.svg' alt='' />"},extensions:["pagedim-black","position-right","theme-dark"],counters:!0,iconbar:{add:!0,top:["<a href='/'><i class=''></i></a>"],bottom:["<a target='_blank' href='#'><i class=''></i></a>","<a target='_blank' href='#'><i class=''></i></a>","<a target='_blank' href='#'><i class=''></i></a>","<a target='_blank' href='#'><i class=''></i></a>"]},navbars:[{position:"bottom",content:["<a target='_blank' class='' href='#'></a>","<a target='_blank' class='' href='#'></a>","<a target='_blank' class='' href='#'></a>","<a target='_blank' class='' href='#'></a>"]}]}),a=$(".flabHamburger"),i=e.data("mmenu");a.on("click",function(){i.open()}),i.bind("open:start",function(e){$(".flabHamburger").toggleClass("flabHamburger--open")}),i.bind("close:start",function(e){$(".flabHamburger").toggleClass("flabHamburger--open")}),$(".accardion-js .flabFaq__acardionItem span").on("click",function(){$(this).next().next().slideToggle(),$(this).parent().toggleClass("accItem"),$(this).next(".fa-angle-down").toggleClass("positionIcon")}),$(".fa-angle-down").on("click",function(){$(this).next().slideToggle("accardion"),$(this).parent().toggleClass("accItem"),$(this).toggleClass("positionIcon")}),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0,callback:function(e){},scrollContainer:null}).init(),$(".mmenu-js ul li a").click(function(e){e.preventDefault();var a=$($(this).attr("href"));if(a.length){var i=a.offset().top;$("body, html").animate({scrollTop:i+"px"},800)}})});
"use strict";$(document).ready(function(){function e(e){e.preventDefault();var l=$($(this).attr("href"));$("html, body").animate({scrollTop:l.offset().top},700)}$(window).scroll(function(){$(this).scrollTop()>400?$(".header").fadeOut():$(".header").fadeIn()});new Swiper(".swiper-container",{direction:"vertical",pagination:{el:".swiper-pagination",clickable:!0}});$("[data-scroll]").on("click",e),$(".hamburger").click(function(){$(this).toggleClass("openClose"),$(".mnu-js").toggleClass("mobileMnu-js"),$(".hamburger__line").toggleClass("lineBg")}),$(".mnu-js").click(function(){$(this).removeClass("mobileMnu-js"),$(".hamburger").removeClass("openClose"),$(".hamburger__line").removeClass("lineBg")})});
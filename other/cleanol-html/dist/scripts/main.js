"use strict";$(document).ready(function(){function a(a){$(".js-descrcar .owl-item.active").each(function(){var a=parseInt($(this).height());console.log(a),$(".js-descrcar .owl-dots .owl-dot").height(a/2-4.5)})}if($(window).load(function(){$(".loader").fadeOut("slow",function(){$(this).remove()})}),$("#back-to-top").length){var e=100,t=function(){var a=$(window).scrollTop();a>e?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")};t(),$(window).on("scroll",function(){t()}),$("#back-to-top").on("click",function(a){a.preventDefault(),$("html,body").animate({scrollTop:0},700)})}$(".navtrigger").click(function(){$(this).toggleClass("-active"),$(".js-mobileNav ul").toggleClass("-mobile"),"Меню"==$(this).children("span").text()?$(this).children("span").fadeOut(function(){$(this).text("Закрыть").fadeIn()}):$(this).children("span").fadeOut(function(){$(this).text("Меню").fadeIn()})}),$("input[type=tel]").mask("+7 (999) 999 99 99");var i=$(".js-examplesSlider");i.on("initialized.owl.carousel change.owl.carousel changed.owl.carousel",function(a){if(a.namespace&&("initialized"==a.type||"position"==a.property.name)){var e=a.relatedTarget.current(),t=$(this).find(".owl-stage").children(),i="changed"==a.type||"initialized"==a.type;t.eq(a.relatedTarget.normalize(e)).next().children().toggleClass("-current",i)}}).owlCarousel({items:1,margin:0,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:1500,navSpeed:1500,autoplayHoverPause:!0,nav:!0,navText:['<i class="cleanol-arrow-left"></i>','<i class="cleanol-arrow-right"></i>'],responsive:{950:{items:3,margin:3}}}),$(".popup").magnificPopup({type:"inline",midClick:!0,tClose:"Закрыть (Esc)",mainClass:"mfp-fade",removalDelay:300}),$(".video-popup").magnificPopup({type:"iframe",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"}}),$(".js-itemprev").owlCarousel({items:1,margin:10,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:1500,navSpeed:1500,autoplayHoverPause:!0,nav:!0,navText:['<i class="cleanol-arrow-left"></i>','<i class="cleanol-arrow-right"></i>']}),$(".js-descrcar").owlCarousel({items:1,margin:10,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:1500,navSpeed:1500,autoplayHoverPause:!0,autoHeight:!0,onInitialized:a,onResized:a,onTranslated:a,nav:!0,navText:['<i class="cleanol-arrow-left"></i>','<i class="cleanol-arrow-right"></i>']});var s=1;$(".js-itemprev .owl-dot").each(function(){$(this).addClass("dotnumber"+s),$(this).attr("data-info",s),s+=1});var o=1;$(".js-descrcar .owl-dot").each(function(){$(this).addClass("dotnumber"+o),$(this).attr("data-info",o),o+=1});var l=1;$(".js-itemprev .owl-item").not(".cloned").each(function(){$(this).addClass("slidenumber"+l),l+=1});var n=1;$(".js-descrcar .owl-item").not(".cloned").each(function(){$(this).addClass("slidenumber"+n),n+=1}),$(".js-descrcar .owl-dot").each(function(){var a=$(this).data("info"),e=$(".slidenumber"+a+" img").attr("src");if(null!=e)$(this).css("background-image","url("+e+")");else{var t=$(".slidenumber"+a+" iframe").attr("src"),i=t.match(/embed\/(.{11})/);$(this).css("background-image","url(https://img.youtube.com/vi/"+i[1]+"/0.jpg)").addClass("-video")}}),$(".js-itemprev .owl-dot").each(function(){var a=$(this).data("info"),e=$(".slidenumber"+a+" img").attr("src");if(null!=e)$(this).css("background-image","url("+e+")");else{var t=$(".slidenumber"+a+" iframe").attr("src"),i=t.match(/embed\/(.{11})/);$(this).css("background-image","url(https://img.youtube.com/vi/"+i[1]+"/0.jpg)").addClass("-video")}}),$(".js-itemprev").each(function(){var a=$(this).find(".owl-dot").length,e=100/a;$(this).find(".owl-dot").css("width",e-1+"%");var t=$(this).find(".owl-dot").width();$(this).find(".owl-dot").css("height",t/1.77777777+"px")}),$(window).resize(function(){Modernizr.mq("(max-width: 1200px)")&&$(".js-descrcar").each(function(){var a=$(this).find(".owl-dot").length,e=100/a;$(this).find(".owl-dot").css("width",e-1+"%");var t=$(this).find(".owl-dot").width();$(this).find(".owl-dot").css("height",t/1.77777777+"px")})}),Modernizr.mq("(max-width: 1200px)")&&$(".js-descrcar").each(function(){var a=$(this).find(".owl-dot").length,e=100/a;$(this).find(".owl-dot").css("width",e-1+"%");var t=$(this).find(".owl-dot").width();$(this).find(".owl-dot").css("height",t/1.77777777+"px")}),$(".tab_content").hide(),$(".tab_content:first").show(),$("ul.tabs li").click(function(){$(".tab_content").hide();var a=$(this).attr("rel");$("#"+a).fadeIn(),$("ul.tabs li").removeClass("active"),$(this).addClass("active"),$(".tab_drawer_heading").removeClass("d_active"),$(".tab_drawer_heading[rel^='"+a+"']").addClass("d_active")}),$(".tab_drawer_heading").click(function(){$(".tab_content").hide();var a=$(this).attr("rel");$("#"+a).fadeIn(),$(".tab_drawer_heading").removeClass("d_active"),$(this).addClass("d_active"),$("ul.tabs li").removeClass("active"),$("ul.tabs li[rel^='"+a+"']").addClass("active")}),$("ul.tabs li").last().addClass("tab_last"),$(".swap-buttons .button").click(function(){$(this).addClass("-disabled").siblings().removeClass("-disabled")}),$(".-catalog-btn").click(function(){$(".calc").removeClass("-show"),$(".catalog").addClass("-show")}),$(".-calc-btn").click(function(){$(".catalog").removeClass("-show"),$(".calc").addClass("-show")}),$(".js-count").owlCarousel({items:4,margin:5,navSpeed:1500,nav:!0,dots:!1,loop:!0,navText:['<i class="cleanol-arrow-left"></i>','<i class="cleanol-arrow-right"></i>']}),$(".js-showall a").on("click",function(a){a.preventDefault(),$(this).parent().prev().slideToggle("fast");var e=$(this).text();"Показать все"==e?$(this).text("Свернуть"):$(this).text("Показать все")}),Modernizr.mq("(max-width: 1600px)")&&$(".help__question").each(function(){var a=$(this).find(".help__hidden").html();$(this).magnificPopup({items:{src:'<div class="callback-popup"><div class="info">'+a+"</div></div>",type:"inline"},mainClass:"mfp-fade"})}),$(".examples__slider").each(function(){$(this).magnificPopup({delegate:"a",type:"image",tClose:"Закрыть (Esc)",tLoading:"Загрузка...",gallery:{enabled:!0,tPrev:"Предыдущий",tNext:"Следующий",tCounter:"%curr% из %total%"}})})});
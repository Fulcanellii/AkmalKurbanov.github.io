"use strict";$(document).ready(function(){!function(t){t(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"),t(".tab ul.tabs li a").click(function(e){var i=t(this).closest(".tab"),n=t(this).closest("li").index();i.find("ul.tabs > li").removeClass("current"),t(this).closest("li").addClass("current"),i.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq("+n+")").slideUp(),i.find(".tab_content").find("div.tabs_item:eq("+n+")").slideDown(),e.preventDefault()})}(jQuery),function(t){t(window).on("load",function(){t(".one-page__tab_content").mCustomScrollbar()})}(jQuery),$(document).click(function(t){$(t.target).is(".tabs_item")||$(".taabse").remove()})});
$(function () {
			$(document).scroll(function() {
				var $nav = $("#mainNavbar");
				$nav.toggleclass("scrolled", $(this).scrollTop() > $nav.height());
			});
		});
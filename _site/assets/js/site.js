! function () {
    console.log('skrypt działa');
    $(".js-acive").on("click", function() {
			$(".js-acive").removeClass("active");
			$(this).addClass("active");
	});
} (jQuery);
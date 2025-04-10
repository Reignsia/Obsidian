jQuery(function($){
	$("table.center:nth-child(3) > tbody > tr > td:nth-child(1)").each(function() {
		$(this).find("a").addClass('mini-btn');
		$(this).find("br").remove();
		$(this).find("a:eq(1)").addClass('red-btn');
	});
	$('.mini-btn').each(function() {
		this.textContent = this.textContent.replace(/]|\[/g, "");
	});
});

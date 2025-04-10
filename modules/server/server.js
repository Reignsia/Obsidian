jQuery(function($){
	$(".maintr").each(function() {
		$(this).find("td:eq(-1) > a").addClass('mini-btn');
		$(this).find("td:eq(-1) > a:eq(0)").addClass('red-btn');
		$(this).find("td:eq(-1) > a:eq(1)").addClass('edit-btn');
		$(this).find("td:eq(-1) > a:eq(4)").addClass('log-btn');
		$(this).find("td:eq(-1) > a:eq(2)").addClass('yellow-btn');
		$(this).find("td:eq(-1) > a:eq(3)").addClass('yellow-btn');
	});
	$('tr.maintr > td:last-child > a').each(function() {
		this.textContent = this.textContent.replace(/]|\[/g, "");
	});
	$('tr.expand-child > td:last-child > a').each(function() {
		this.textContent = this.textContent.replace(/]|\[/g, "");
		$(this).addClass('mini-btn fire-btn');
	});
});

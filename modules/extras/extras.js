jQuery(function($){
	let admin_table = ".main-content";
	$(admin_table).find('td, tr, tbody, table').contents().unwrap();
});

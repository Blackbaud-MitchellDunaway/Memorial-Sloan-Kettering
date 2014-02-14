// reus_wrpr_giving_2014_js_scripts
jQuery(document).ready(function($) {



	function panel_show(elements){
		elements.addClass('active');
		$('body').bind('click touchstart',function(e){
			if (!$(e.target).closest(elements).length) {
				panel_hide(elements);
			}
		});
	}

	function panel_hide(elements){
		elements.removeClass('active');
		$('body').unbind('click touchstart');
	}

	$('#sign_up_button, #sign_up_close').click(function(e){
		e.preventDefault();
		var elements = $('#sign_up_button, #sign_up form');
		if (elements.hasClass('active')) {
			panel_hide(elements);
		} else {
			panel_show(elements);
		}
	})

	$('#nav_reveal').click(function(e){
		var elements = $('#nav_panel, #nav_reveal');
		if (elements.hasClass('active')) {
			panel_hide(elements);		
		} else {			
			e.preventDefault();
			panel_show(elements);
		}
	})


}); //end jQuery(document).ready();

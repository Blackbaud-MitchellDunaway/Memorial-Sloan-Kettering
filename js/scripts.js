jQuery(document).ready(function($) {
  	
	close_sign_up();

  	function close_sign_up() {
  		$('#sign_up_button').removeClass('active');
  		$('#sign_up form').hide();
  		$('body').unbind('click');
  		console.log('close called');
  	}

  	function open_sign_up() {
  		$('#sign_up_button').addClass('active');
  		$('#sign_up form').show();
  		$('body').bind('click',function(e){
			if (!$(e.target).closest('#sign_up').length) {
        		close_sign_up();
        	}
  		});
  	}

	$('#sign_up_button, #sign_up_close').click(function(e){
		e.preventDefault();
		if ($('#sign_up_button').hasClass('active')) {
			close_sign_up();
		} else {
			open_sign_up();
		}
	})



}); //end jQuery(document).ready();

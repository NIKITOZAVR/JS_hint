$(function() {
	$('a').on('click', function() {
		var $clickTab = $(this).attr('id');
		if ($clickTab != $('.selected').attr('id')) {
			$('a').removeClass('selected');
			$(this).addClass('selected');

			$('#tabs div').removeClass('selected');
			$('#par_' + $clickTab).addClass('selected');
    }
  });

	var $input = $('input');
	$input.hover(function(){
		var $span = $(this).siblings('span');
		$span.css('display', 'inline');
	},
	function(){
		var $span = $(this).siblings('span');
		$span.css('display', 'none');
	}
	);
	$input.on('focus', function() {
			var $span = $(this).siblings('span');
			$span.show();
	});
	$input.on('focusout', function() {
			var $span = $(this).siblings('span');
			$span.hide();
	});
	var $button = $('button');
			$button.on('click', function() {
			var $span = $('span');
			$span.toggle();
	});
});

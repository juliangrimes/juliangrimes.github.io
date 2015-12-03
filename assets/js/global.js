$(function(){
	console.log('make it work');

	$('.bell').on
		('click', function()
			{$('.alert').addClass('open');}
		);

	$('.close').on('click', function(){
		$('.alert').removeClass('open');
	});


});
$(function(){
	
	/*$( "h1" ).append( " pussy" );
	$( "p" ).text( "ballsy" ).click(function(){
		$( this ).fadeOut( 2000 );
		$( "h1" ).append( "ballsy" );
		});*/
	
//	$( ".input_button" ).css("margin", "20px").css("background-color", "red");
	
	$( "button.submit" ).click(function(){
		$("h1").css("background-color", "red");
		});
	
	$( "#quote-holder" ).click(function(){
		$( "#quote-holder > p > span" ).fadeOut( 5000, function(){
			$( this ).fadeIn ( 5000 ) .text( "balls!");	
		}); //this won't fade out slowly, no desire to make deferred obj so will turn main.css :hover into jquery at a later time.
	});
	
	$( "#most-important" ).click(function(){
		
	})
});


/*

<script>
$( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();
});
</script>*/
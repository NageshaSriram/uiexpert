/* Webarch Admin Dashboard 
-----------------------------------------------------------------*/	
$(document).ready(function() {	
	var conversation = [];
    $('.user-details-wrapper').click(function(){
    set_user_details($(this).attr('data-user-name'),$(this).attr('data-chat-status'));
    var el = $('#messages-wrapper').parent('.scroll-content').show();
    if(el.length > 0){
        $('#messages-wrapper').parent('.scroll-content').show();  
    }
    else{
    }
	});
	
	
	$('.bubble').click(function(){
		$(this).parent().parent('.user-details-wrapper').children('.sent_time').slideToggle();
	})
	 $('#chat-message-input').keypress(function(e){
		if(e.keyCode == 13)
		{		
			//send_message($(this).val());
            build_conversation($(this).val(),0,"Toady, 8 P.M","","assets/img/profiles/a.jpg");
			$(this).val("");
			$(this).focus();
            e.preventDefault();
		}
	 })  
   
});

	function set_user_details(username,status){
		$('#messages-wrapper .chat-messages-header .status').addClass(status);
		$('#messages-wrapper .chat-messages-header span').text(username);
	}	
	function build_conversation(msg,isOpponent,sentTime,actions,imgSrc){
		if(isOpponent==1){
			var botHtml='<div class="user-details-wrapper animated fadeIn" ><div class="user-profile">'
              +'<img src="assets/img/avatar.png"  alt="" data-src="assets/img/avatar.png"'
			  +' data-src-retina="assets/img/avatar.png" width="35 height="35"></div>'
              +'<div class="user-details"><div class="bubble">'+msg+'</div></div>' 
              +'<div class="clearfix"></div><div class="sent_time off">'+sentTime+'</div>'
              +'<div class="sent_actions">'+actions+'</div></div>';
            
             $(".chat-messages").append(botHtml);	
		}
		else{
		$('.chat-messages').append('<div class="user-details-wrapper pull-right animated fadeIn">'+
			'<div class="user-details" style="margin-right: 13px;">'+
			  '<div class="bubble old sender">'+	
					msg+
			   '</div>'+
			'</div>'+		
              '<div class="user-receiver-profile">'+
              '</div>'+
			'<div class="clearfix"></div>'+
		'</div>')
		}
        

	}
	function send_message(msg){
		alert(1);
		$('.chat-messages').append('<div class="user-details-wrapper pull-right animated fadeIn">'+
			'<div class="user-details">'+
			  '<div class="bubble old sender">'+	
					msg+
			   '</div>'+
			'</div>'+				
			'<div class="clearfix"></div>'+
		'</div>')
	}	
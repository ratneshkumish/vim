function sendMessage()
{
	var contTxtAreaOne = $('#enquiry-contTxtAreaOne').val();
	var feedbkTxtAreaOne = $('#enquiry-feedbkTxtAreaOne').val();
	var senderFname = $('#enquiry-fname').val();
	var senderLname = $('#enquiry-lname').val();
	var senderEmail = $('#enquiry-email').val();
	
	var senderphone1 = $('#enquiry-phone1').val();
	var senderphone2 = $('#enquiry-phone2').val();
	var senderphone3 = $('#enquiry-phone3').val();
	var senderphone4 = $('#enquiry-phone4').val();
	
	var dataObj = {
					comment:contTxtAreaOne,
					feedback:feedbkTxtAreaOne,
					fname:senderFname,
					lname:senderLname,
					email:senderEmail,
					
					senderphone1:senderphone1,
					senderphone2:senderphone2,
					senderphone3:senderphone3,
					senderphone4:senderphone4,
				   };	
	$.ajax({
		data:dataObj,
		url:"enquiry-mail.php",
		success:function(returnedValue)
		{
			$('#enquiry-contTxtAreaOne').val("");
			$('#enquiry-feedbkTxtAreaOne').val("");
			$('#enquiry-fname').val("");
			$('#enquiry-lname').val("");
			$('#enquiry-email').val("");
			
			$('#enquiry-phone1').val("");
			$('#enquiry-phone2').val("");
			$('#enquiry-phone3').val("");
			$('#enquiry-phone4').val("");
			
			alert("Your information has been submitted successfully. An associate will contact you shortly.");
			
		}		
		});
	
	
	/*if(document.enquiry_Frm.enquire-name.value=='Enter Your Name')
	{
		alert("please enter the name");
		document.enquiry_Frm.enquire-name.focus();
		return false;
	}
	var mobile = document.getElementById('enquire-contact');
    var filter = /^\d{10}$/;

    if (!filter.test(enquire-contact.value)) {
    alert('Please enter the valid contact number');
    enquire-contact.focus();
    return false;
	}
	
	var email = document.getElementById('enquire-email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(enquire-email.value)) {
    alert('Please enter the valid email address');
    enquire-email.focus();
    return false;
 }
	if(document.enquiry_frm.location.value=='Your Location')
	{
		alert("please enter the location");
		document.enquiry_frm.location.focus();
		return false;
	}
	if(document.enquiry_frm.message.value=='Your Message')
	{
		alert("please enter the Message");
		document.enquiry_frm.message.focus();
		return false;
	}
	else
	return true;*/
}
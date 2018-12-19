<?php
if(isset($_REQUEST['submitBtn']))
{	
 $name=$_REQUEST['name'];
 $email=$_REQUEST['email'];
 $comment=$_REQUEST['comment'];

 

	$to = 'm.ratneshwar@gmail.com';
	$subject = 'Enquiry Form';
	$message = "Name :- $name \n\n  Email :- $email \n\n Query :- $comment ";
	$headers = "From: $email" . "\r\n" .
		"Reply-To: $email" . "\r\n" .
		'X-Mailer: PHP/' . phpversion();	
		@mail($to, $subject, $message, $headers);	
		
		$errmsg_arr[] = 'Mail Sent Successfully.';
		$_SESSION['ERRMSG_ARR'] = $errmsg_arr;		
		header("location: index.php");
}		
?>
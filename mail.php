<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {
	$project_name = 'Запрос на верстку';
	$admin_email  = 'alexandr21-1989@mail.ru';
	$form_subject = 'Новая заявка с сайта Версткаюру';

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
				<td style='padding: 10px; width: auto;'><b>$key:</b></td>
				<td style='padding: 10px;width: 100%;'>$value</td>
			</tr>
			";
		}
	}
}

$message = "<table style='width: 50%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.$project_name.' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;
mail($admin_email, $form_subject, $message, $headers );
?>
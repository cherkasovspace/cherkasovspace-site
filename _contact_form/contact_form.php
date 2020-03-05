<?php

// configure
$from = 'Дизайнер Михаил Черкасов <work@cherkasov.space>';
$sendTo = 'work@cherkasov.space';
$subject = 'Новое сообщение с сайта';
$fields = array('name' => 'Имя', 'email' => 'Email', 'message' => 'Сообщение'); // array variable name => Text to appear in the email
$okMessage = 'Сообщение отправлено.';
$errorMessage = 'Возникла ошибка. Повторите отправку.';

// let's do the sending

try
{
    $emailText = nl2br("Новое сообщение с сайта\n");

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= nl2br("$fields[$key]: $value\n");
        }
    }

    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}



if(isset($_POST['recaptchaResponse'])){
    $captcha=$_POST['recaptchaResponse'];
}
else
    $captcha = false;

if(!$captcha){
    //Do something with error
}
else{
    $secret = '6LdDR6MUAAAAALTZ_wd8ytGb4csKRvZE6Z9nt6cJ';
    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=
        .$secret.&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
    if($response.success==false)
    {
        //Do something with error
    }
}
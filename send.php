<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
// $form1 = $_POST['form1'];
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<br>Имя:</br>$name<br>
<br>Телефон:</br> $phone<br><br>
<br>Сообщение:</br><br>$message<br><br>
";

// Формирование самого письма-2
// $title = "Новое обращение Best Tour Plan";
// $body = "
// <h2>Новое обращение</h2>
// <br>Почта:</br><br>$email<br><br>
// ";

// Формирование самого письма-3
// $form1 = $_POST['form1'];
// $title = "Новое обращение Best Tour Plan";
// $body = "
// <h2>Новое обращение</h2>
// <br>Имя:</br>$name<br>
// <br>Телефон:</br> $phone<br><br>
// <br>Сообщение:</br><br>$message<br><br>
// <br>Почта:</br><br>$email<br><br>
// ";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'engel.oleg.glo@gmail.com'; // Логин на почте
    $mail->Password   = '356Logo741'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('engel.oleg.glo@gmail.com', 'Олег Энгельгарт'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('oleg_engelgart@mail.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;  

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('location: newsletter.html');
header('location: thankyou.html');

If(одно условие){если это условие выполняется, то выполняется что то } ,else {иначе выполняется что то другое}- и да, я мастер объяснения))
// if ($popuptype === '1') {
//      $message .= 'Услуга регистрации: СТАНДАРТ';
//      }
// if ($popuptype === '2') {
//      $message .= 'Услуга регистрации: КОМФОРТ';
//      }

// $mail = mail($mailto, $subject, $message, $headers);
<?php
// 日本語対応
mb_language("ja");
mb_internal_encoding("UTF-8");

$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_phone = $_POST['phone'];
$field_message = $_POST['message'];
$mail_to = 'masakiiida@outlook.com'; //(**送信先のメールアドレスを入力)
$subject = 'Message from a site visitor '.$field_name;
$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'Message: '.$field_message;
$from = "Masaki";
$from_name = "Masaki";
$from_mail = "iidamasaki@www3901.sakura.ne.jp";
$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
$headers .= "Content-Type: text/plain \r\n";
$headers .= "Organization: " . $field_name . " \r\n";
$headers .= "X-Sender: " . $field_email . " \r\n";
$headers .= "X-Priority: 3 \r\n";

$mail_status = mb_send_mail($mail_to, $subject, $body_message, $headers);
if ($mail_status) { ?>
<script language="javascript" type="text/javascript">
    window.location = 'mailto.html';//(※送信後に移動するページ)
</script>
<?php
}
else { ?>
<script language="javascript" type="text/javascript">
    alert('メッセージ送信に失敗しました。こちらのメールアドレスへお問い合わせください。test@gmail.com');//(※自分のメールアドレス)
    window.location = '/contact.html';//(※送信失敗後に移動するページ)
</script>
<?php
}
?>
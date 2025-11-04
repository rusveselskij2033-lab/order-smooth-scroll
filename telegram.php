<?php
declare(strict_types=1);
ini_set('display_errors','0'); error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');

require __DIR__ . '/config.php';

// Accept JSON or form
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) $data = $_POST;

// Honeypot
if (!empty($data['website'] ?? '')) { echo json_encode(['ok'=>true]); exit; }

function clean($v,$max=400){ $v=trim((string)$v); $v=strip_tags($v); if(mb_strlen($v)>$max)$v=mb_substr($v,0,$max).'…'; return $v; }
$name=clean($data['name']??'',120);
$phone=clean($data['phone']??'',40);
$service=clean($data['service']??'',100);
$device=clean($data['device']??'',100);
$message=clean($data['message']??'',1000);

if($name===''||$phone===''){ http_response_code(422); echo json_encode(['ok'=>false,'errors'=>['name'=>'Введите имя','phone'=>'Введите телефон']],JSON_UNESCAPED_UNICODE); exit; }

$lines=['🆕 Заявка с сайта',"— Имя: $name","— Телефон: $phone"];
if($service)$lines[]="— Услуга: $service";
if($device)$lines[]="— Устройство: $device";
if($message)$lines[]="— Комментарий: $message";
$text=implode("\n",$lines);

$api='https://api.telegram.org/bot'.BOT_TOKEN.'/sendMessage';
$payload=['chat_id'=>CHAT_ID,'text'=>$text];

$ch=curl_init($api);
curl_setopt_array($ch,[CURLOPT_RETURNTRANSFER=>true,CURLOPT_POST=>true,CURLOPT_HTTPHEADER=>['Content-Type: application/json'],CURLOPT_POSTFIELDS=>json_encode($payload,JSON_UNESCAPED_UNICODE),CURLOPT_CONNECTTIMEOUT=>8,CURLOPT_TIMEOUT=>12]);
$resp=curl_exec($ch); $http=curl_getinfo($ch,CURLINFO_HTTP_CODE); $err=curl_error($ch); curl_close($ch);

if($resp===false||$http>=400){ http_response_code(502); echo json_encode(['ok'=>false,'error'=>'Не удалось отправить в Telegram','http'=>$http],JSON_UNESCAPED_UNICODE); exit; }
echo json_encode(['ok'=>true],JSON_UNESCAPED_UNICODE);
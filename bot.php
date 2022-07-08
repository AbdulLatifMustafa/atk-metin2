
<?php
$API_KEY = "API_KEY"; 
define("API_KEY", $API_KEY);
function bot($method, $datas = [])
{
    $url = "https://api.telegram.org/bot" . API_KEY . "/" . $method;
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $datas);
    $res = curl_exec($ch);
    if (curl_error($ch)) {
        var_dump(curl_error($ch));
    } else {
        return json_decode($res);
    }
}

$update = json_decode(file_get_contents("php://input"));
if (isset($update->message)) {
    $message = $update->message;
    $from_id = $message->from->id;
    $chat_id = $message->chat->id;
    $message_id = $message->message_id;
  
    $txts = [
   
        "في القتال المباشر ، يلعب المحاربون دورًا رئيسيًا بفضل أسلحتهم ودروعهم الثقيلة. أنها تهدف إلى تحقيق قوة جسدية من الصلب 
        \nوالهدوء الروحي المتوازن. اعتمادًا على التخصص ، يمكن أن يتسبب المحاربون في أضرار جسيمة بأسلحة ثنائية اليدين أو إحباط هجمات العدو باستخدام السيف والدرع.",
        "مهارات المحارب الجسدي 
        \n
        جرح ثلاثي الاتجاهات	اضرب العدو بسرعة البرق، هجوم إختراقي 3 مرات، هجوم على عدة أهداف.

        نشوة الحرب	ستزيد سرعة الهجوم، ستزيد سرعة التحرك، زيادة الأضرار المتسببة.
        \n
      	طنين  هجوم إختراقي قوي يسبب الأغماء.   
        دوامة السيف	دع السيف يدور كالدوامة كي تهاجم أعداء أكثر، هجوم إختراقي على عدة أهداف.
        \n
        هالة السيف	تزيد قيمة الهجوم لفترة معينة.
        تجمع جميع قواك الداخلية و توجهها نحو الخارج لتنفيذ ضربة قوية، هجوم على عدة اهداف.
        ضربة قوية تسبب زلزالا.",

        
    ];
    
   // $random_txt = $txt[rand(0, count($txt) - 1)]["txt"];
  

    if (isset($message->text)) {
        $text = $message->text;
        if ($text == "محارب") {
            $chr = array($txts[0], $txts[1]); 

           foreach ($chr as $value) {
            echo "$value <br>";        
            bot("sendMessage", [
                "chat_id" => $chat_id,
                "text" =>$value,
                "reply_to_message_id" => $message_id,                      
            ]);
         }      
        }
    }

    
}

$pictures = [
   
      "https://ae-wiki.metin2.gameforge.com/images/e/e0/%D9%85%D8%AD%D8%A7%D8%B1%D8%A8.png",
      "https://ae-wiki.metin2.gameforge.com/images/2/23/%D9%85%D8%AD%D8%A7%D8%B1%D8%A8%D8%A9.png",
    
];

$colors = array($pictures[0], $pictures [1]); 
foreach ($colors as $value) {
  echo "$value <br>";
if ($text == "محارب"){
    Bot('SendPhoto',[
        'chat_id' => $chat_id,
        'photo' => $value,
        
    ]);
}

}




 

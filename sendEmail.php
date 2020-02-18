<?php
    if (!isset($title)) {
        $title = 'RG';
    }
    if (!isset($page_title)) {
        $page_title = 'Marketing';
    }
    if (!isset($page_num)) {
        $page_num = 1;
    }
    if (!isset($menu_hover)) {
        $menu_hover = 0;
    }

    $mess = '';

    if (!empty($_POST['submit'])) {
        if (!empty($_POST['fio']) and !empty($_POST['email']) and !empty($_POST['message'])) {
            function tst($txt) {
                return ($txt!=''?trim(htmlspecialchars(stripslashes($txt))):'');
            }

            function phone($txt) {
                $p = array();
                preg_match_all('/[0-9]+/',$txt,$p);
                $pure = implode('',$p[0]);
                return $pure;
            }

            function email($txt) {
                $p = array();
                preg_match_all('/^[A-Za-z0-9\._-]+@[a-z0-9-]+.[a-z]+/',$txt,$p);
                $pure = implode('',$p[0]);
                return $pure;
            }


            $fio = tst($_POST['fio']);
            $company = tst($_POST['company']);
            $phone = phone($_POST['phone']);
            $email = email($_POST['email']);
            $textz = tst($_POST['message']);


            /*
            // email fields: to, from, subject, and so on
            $to = "wadyaruss89@gmail.com";
            $from = "request@rg-fintech.com";
            $subject = $fio;
            $message = '
                <table style="border-collapse:collapse; margin:0 auto; width:500px;">
                    <tbody>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Name:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$fio.'</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Company:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$company.'</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Phone:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$phone.'</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Email:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$email.'</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Message:</td>
                            <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$textz.'</td>
                        </tr>
                    </tbody>
                </table>';
            $headers = "From: $from";

            // boundary
            $semi_rand = md5(time());
            $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

            // headers for attachment
            $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";

            // multipart boundary
            $message = "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";
            $message .= "--{$mime_boundary}\n";

            // preparing attachments
            if (empty($files)) {
                for($x=0;$x<count($files);$x++){
                    $file = fopen($files[$x],"rb");
                    $data = fread($file,filesize($files[$x]));
                    fclose($file);
                    $data = chunk_split(base64_encode($data));
                    $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$files[$x]\"\n" .
                    "Content-Disposition: attachment;\n" . " filename=\"$files[$x]\"\n" .
                    "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
                    $message .= "--{$mime_boundary}\n";
                }
            }

            // send

            $ok = @mail($to, $subject, $message, $headers);
            if ($ok) {
                $mess = '<p>Message was sent:</p>';
            } else {
                $mess = "<p>mail could not be sent!</p>";
            }
*/

            require $_SERVER['DOCUMENT_ROOT'].'/phpmail/PHPMailerAutoload.php';

            $mail = new PHPMailer;

            //$mail->SMTPDebug = 3;                                                         // Enable verbose debug output

            $mail->isSMTP();                                                                // Set mailer to use SMTP
            $mail->Host         = 'ssl://smtp.yandex.ru';                                   // Specify main and backup SMTP servers
            $mail->SMTPAuth     = true;                                                     // Enable SMTP authentication
            $mail->Username     = 'zakazsite39@yandex.ru';                                  // SMTP username
            $mail->Password     = '1234wadya';                                              // SMTP password
            $mail->SMTPSecure   = 'tls';                                                    // Enable TLS encryption, `ssl` also accepted
            $mail->Port         = 465;                                                      // TCP port to connect to

            $mail->setFrom('zakazsite39@yandex.ru', 'RG request');
            $mail->addAddress('jonytrees@gmail.com');                                      // Add a recipient
            // $mail->addAddress('ellen@example.com');                                      // Name is optional
            $mail->addReplyTo($email, 'RG-fintech.com');
            $mail->addCC('zakazsite39@yandex.ru');
            $mail->addBCC('zakazsite39@yandex.ru');

            $msg = '';
            $totalsize = 0;
            $numoffiles = 0;

            //Attach multiple files one by one
            for ($ct = 0; $ct < count($_FILES['filestoupload']['tmp_name']); $ct++) {
                $imageinfo = getimagesize($_FILES['filestoupload']['tmp_name'][$ct]);
                if($_FILES['filestoupload']['type'][$ct] != 'application/msword' && $imageinfo['mime'] != 'image/jpeg' && $imageinfo['mime'] != 'image/png' && $_FILES['filestoupload']['type'][$ct] != 'application/pdf') {
                    $msg .= '<p>Sorry, we only accept [.pdf] files, [.doc]uments, [.jpg] and [.png] images</p>';
                } else {
                    $blacklist = array(".php", ".phtml", ".php3", ".php4");
                    $fail_black = 0;
                    foreach ($blacklist as $item) {
                        if(preg_match("/$item\$/i", $_FILES['filestoupload']['name'][$ct])) {
                            $fail_black++;
                        }
                    }
                    if ($fail_black==0) {
                        $totalsize = $totalsize + $_FILES['filestoupload'][size][$ct];
                        $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['filestoupload']['name'][$ct]));
                        $filename = $_FILES['filestoupload']['name'][$ct];
                        if (move_uploaded_file($_FILES['filestoupload']['tmp_name'][$ct], $uploadfile)) {
                            if ($mail->addAttachment($uploadfile, $filename)) {
                                $msg .= '<p>The file <strong>'. $filename.'</strong> has been attached</p>';
                            }
                        } else {
                            // $msg .= '<p>Failed to move file to ' . $uploadfile.'</p>';
                        }
                        $numoffiles++;
                    } else {
                        $msg .= '<p>We do not allow uploading PHP files</p>';
                    }
                }
            }


            $mail->isHTML(true);                                                            // Set email format to HTML

            $mail->Subject = 'RG-fintech.com request';
            $mail->Body = '
            <table style="border-collapse:collapse; margin:0 auto; width:500px;">
                <tbody>
                    <tr>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Name:</td>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$fio.'</td>
                    </tr>
                    <tr>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Company:</td>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$company.'</td>
                    </tr>
                    <tr>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Phone:</td>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$phone.'</td>
                    </tr>
                    <tr>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Email:</td>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$email.'</td>
                    </tr>
                    <tr>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px; font-weight:bold;">Message:</td>
                        <td style="border:1px solid #797979; text-align:center; font-size:14px; line-height:20px; padding:4px 10px;">'.$textz.'</td>
                    </tr>
                </tbody>
            </table>';

            $mail->AltBody = 'Тип: '.$types_ar[$type].', Имя: '.$yourname.', Телефон: '.$phone.', Email: '.$email.', Дата: '.date('d.m.Y H:i').', IP: '.$_SERVER['REMOTE_ADDR'];

            if ($totalsize<5242880&&$numoffiles<=5) {
                if($mail->send()) {
                    $mess = '<p>Message was sent</p>';
                } else {
                    $mess = "<p>Mail could not be sent!</p>";
                }
            } else {
                if ($numoffiles>5) {
                    $mess = $mess.'<p>Only 5 files or less</p>';
                }
                if ($totalsize>=5242880) {
                    $mess = $mess.'<p>The size of your files has exceeded 5 Mb</p>';
                }
            }
            $mess = $mess.$msg;
        }
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?php echo $title; ?></title>
        <meta name="description" content="">
        <link rel="icon" href="img/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
        <link href="css/style.css" rel="stylesheet">
        <script src="js/jq.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <?php if ($_SERVER['HTTP_HOST']!='rgft.com') { ?>
        <?php /*
<!-- Chatra {literal} -->
<script>
(function(d, w, c) {
w.ChatraID = 'eC79khmbmHP6z4L7e';
var s = d.createElement('script');
w[c] = w[c] || function() {
(w[c].q = w[c].q || []).push(arguments);
};
s.async = true;
s.src = 'https://call.chatra.io/chatra.js';
if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');
</script>
<!-- /Chatra {/literal} -->
*/ ?>

<!-- Begin Talk-Me {literal} -->
<script type='text/javascript'>
	(function(d, w, m) {
		window.supportAPIMethod = m;
		var s = d.createElement('script');
		s.type ='text/javascript'; s.id = 'supportScript'; s.charset = 'utf-8';
		s.async = true;
		var id = '5693bbce4484f5f927f61856e38aa7ce';
		s.src = '//lcab.talk-me.ru/support/support.js?h='+id;
		var sc = d.getElementsByTagName('script')[0];
		w[m] = w[m] || function() { (w[m].q = w[m].q || []).push(arguments); };
		if (sc) sc.parentNode.insertBefore(s, sc);
		else d.documentElement.firstChild.appendChild(s);
	})(document, window, 'TalkMe');
</script>
<!-- {/literal} End Talk-Me -->

        <?php } ?>
        <div class="box">
            <div class="whitehouse-wrapper"></div>
            <div class="header-wrapper">
                <div class="header">
                    <div class="logo"><a href="/"><img src="img/logo.png"></a></div>
                    <div class="top-mob">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="top-menu">
                    <?php
                        function menuhover($menu_hover,$num,$hasclass) {
                            return ($num==$menu_hover?($hasclass==false?' class="hover"':' hover'):'');
                        }
                        function str_lastslash($txt) {
                            return (substr($txt, -1)=='/'?substr($txt, 0, -1):$txt);
                        }
                        function url_hover($url,$this_url) {
                            return (str_lastslash($url)==str_lastslash($this_url)?'class="active" href="'.$this_url.'"':'href="'.$this_url.'"');
                        }
                        $url = $_SERVER['REQUEST_URI'];
                    ?>
                        <ul>
                            <li<?php echo menuhover($menu_hover,1,false); ?>><a href="/company">Company</a>
                            <li<?php echo menuhover($menu_hover,2,false); ?>><span>IT</span>
                                <ul class="submenu">
                                    <li><a <?php echo url_hover($url,'/it/server-administration-services'); ?>>Server administration services</a></li>
                                    <li><a <?php echo url_hover($url,'/it/web-application-development'); ?>>Website development</a></li>
                                    <li><a <?php echo url_hover($url,'/it/mobile-application-development'); ?>>Mobile application development</a></li>
                                    <li><a <?php echo url_hover($url,'/it/big-data-consulting'); ?>>Big data consulting</a></li>
                                </ul>
                            </li>
                            <li<?php echo menuhover($menu_hover,3,false); ?>><span>Marketing</span>
                                <ul class="submenu">
                                    <li><a <?php echo url_hover($url,'/marketing/seo'); ?>>SEO</a></li>
                                    <li><a <?php echo url_hover($url,'/marketing/ppc-and-sem'); ?>>PPC&SEM</a></li>
                                    <li><a <?php echo url_hover($url,'/marketing/brand-identity'); ?>>Brand identity</a></li>
                                    <li><a <?php echo url_hover($url,'/marketing/interface-design'); ?>>Interface design</a></li>
                                    <li><a <?php echo url_hover($url,'/marketing/content-marketing'); ?>>Content marketing</a></li>
                                    <li><a <?php echo url_hover($url,'/marketing/analytics-and-cro'); ?>>Analytics & CRO</a></li>
                                    <li><a <?php echo url_hover($url,'/marketing/smm'); ?>>SMM</a></li>
                                </ul>
                            </li>
                            <li class="active<?php echo menuhover($menu_hover,4,true); ?>">
                                <a href="/contacts">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="topslide-wrapper topslide<?php echo $page_num; ?>">
                <div class="topslide">
                    <h1><?php echo $page_title; ?></h1>
                </div>
            </div>

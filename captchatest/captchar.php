<?php

/********************************************************
 *
 *    CAPTCHA generator v0.01, 2013
 *    Written by ionux (help@10b.us)
 *
 *    This is free software released into the
 *    public domain. No warranty is implied or provided.
 *
 ********************************************************/

ob_start();
session_start();

$string = substr(md5(mt_rand(0,55)),5,5);
$spook = ':::::::::::';
$shape1_x = rand(0,145);
$shape1_y = rand(0,75);
$shape2_x = rand(0,145);
$shape2_y = rand(0,75);

$_SESSION['captchaval'] = $string;

header('Content-Type: image/png');

$im = —(150, 80) or die('Cannot Initialize new GD image stream');[/p]
[/p]
$background_color = imagecolorallocate($im, 0, 0, 0);[/p]
$text_color = imagecolorallocate($im, 233, 233, 233);[/p]
$strange_color = imagecolorallocate($im, 101, 101, 101);[/p]
$shape1_color = imagecolorallocate($im, 191, 77, 224);[/p]
$shape2_color = imagecolorallocate($im, 200, 111, 43);[/p]
[/p]
imagestring($im, 5, rand(3,100), rand(10,75), $spook, $strange_color);[/p]
imagestring($im, 5, rand(3,100), rand(10,75), $spook, $strange_color);[/p]
imageellipse($im, $shape1_x, $shape1_y, rand(46,100), rand(30,100), $shape1_color);[/p]
imageellipse($im, $shape2_x, $shape2_y, rand(46,100), rand(30,100), $shape2_color);[/p]
imagettftext($im, 34, rand(0,15), 10, 75, $text_color, 'aescrawl.ttf', $string);[/p]
[/p]
imagepng($im);[/p]
imagedestroy($im);[/p]

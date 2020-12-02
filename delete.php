<?php
$fp = fopen('data/storage.csv', 'r+');
flock($fp, LOCK_EX);

//2番目の引数のファイルサイズを0にして空にする
ftruncate($fp,0);

flock($fp, LOCK_UN);
fclose($fp);

header("Location:index.php");
?>

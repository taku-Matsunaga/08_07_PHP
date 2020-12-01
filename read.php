<?php
$str = '';
$file = fopen('data/storage.csv', 'r');
flock($file, LOCK_EX);
if($file){
  while($line = fgets($file)){
    $str .= "<tr><td>{$line}</td></tr>";
  }
}
flock($file, LOCK_UN);
fclose($file);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>入力結果</title>
</head>
<body>
<fieldset>
    <legend>アンケート入力結果</legend>
    <a href="index.php">入力画面</a>
    <table>
      <thead>
        <tr>
          <th>リスト</th>
        </tr>
      </thead>
      <tbody>
        <?= $str ?>
      </tbody>
    </table>
  </fieldset>
</body>
</html>
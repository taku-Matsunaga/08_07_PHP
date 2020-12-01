<?php

$name = $_POST["name"];
$email = $_POST["email"];
$jazz = $_POST["jazz"];
$elec = $_POST["elec"];
$metal = $_POST["metal"];
$write_data = "{$name}, {$email}, {$jazz}, {$elec}, {$metal}\n";

$file = fopen('data/storage.csv', 'a');
flock($file, LOCK_EX);
fwrite($file, $write_data);
flock($file, LOCK_UN);
fclose($file);

header("Location:index.php");
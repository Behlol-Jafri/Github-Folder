<?php

$dataFile = "data.json";
$data = json_decode(file_get_contents($dataFile), true);

$imgName = $_FILES['image']['name'];
$imgTmp = $_FILES['image']['tmp_name'];
$dir = "uploads/";

if (!is_dir($dir)) mkdir($dir);

$newImage = time() . "_" . $imgName;
move_uploaded_file($imgTmp, $dir . $newImage);

$data[] = [
    "name"  => $_POST['name'],
    "email" => $_POST['email'],
    "image" => $dir . $newImage
];

file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT));

header("Location: index.php");
exit;

<!DOCTYPE html>
<html>
<head>
    <title>PHP JSON CRUD</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-10">


<div class="bg-white p-5 rounded shadow w-96 mx-auto mb-10">
    <form action="save.php" method="POST" enctype="multipart/form-data">
        <label class=" font-semibold">Name</label>
        <input type="text" name="name" placeholder="Enter Name"
               class="w-full border p-2 mb-3 rounded">
        <label class=" font-semibold">Email</label>
        <input type="email" name="email" placeholder="Enter Email"
               class="w-full border p-2 mb-3 rounded">
        <label class=" font-semibold">Image</label>
        <input type="file" name="image" 
               onchange="handleChange(event)"
               class="w-full border p-2 mb-3 rounded">

        <button class="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
        </button>
    </form>
</div>

<div class="grid grid-cols-3 gap-6">

<?php
$data = json_decode(file_get_contents("data.json"), true);

if ($data):
foreach ($data as $index => $item):
?>
    <div class="bg-white p-5 rounded text-center ">
       <div>
         <img src="<?= $item['image'] ?>" class="w-full h-full rounded mb-3">
       </div>

        <h2 class="text-xl font-semibold"><?= $item['name'] ?></h2>
        <p class="text-gray-600"><?= $item['email'] ?></p>
    </div>
<?php endforeach; endif; ?>

</div>

<script>
function handleChange(event) {
    const img = document.getElementById("preview");
    img.src = URL.createObjectURL(event.target.files[0]);
    // img.classList.remove("hidden");
}
</script>

</body>
</html>

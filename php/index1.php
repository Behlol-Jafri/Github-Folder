<!-- <?php
$display = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $input = $_POST["display"] ?? "";

    if (isset($_POST["clear"])) {
        $display = "";
    }
    else if (isset($_POST["delete"])) {
        $display = substr($input, 0, -1);
    }
    else if (isset($_POST["equal"])) {
        try {
            $display = eval("return $input;");
        } catch (Throwable $e) {
            $display = "Error";
        }
    }
    else if (isset($_POST["btn"])) {
        $display = $input . $_POST["btn"];
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator With PHP</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <div>
        <h1 class="text-center text-3xl font-bold">Calculator</h1>

        <form method="POST" class="w-1/4 mx-auto">

            <div class="my-2">
                <input 
                    type="text" 
                    name="display" 
                    value="<?php echo $display; ?>" 
                    class="border border-gray-500 w-full rounded-md p-2 text-3xl text-black outline-0"
                    readonly
                >
            </div>

            <div class="grid grid-cols-4 gap-2">

                <button name="clear" class="border p-2 rounded-md text-3xl">C</button>
                <button name="delete" class="border p-2 rounded-md text-3xl">D</button>
                <button name="btn" value="%" class="border p-2 rounded-md text-3xl">%</button>
                <button name="btn" value="/" class="border p-2 rounded-md text-3xl">/</button>

                <button name="btn" value="7" class="border p-2 rounded-md text-3xl">7</button>
                <button name="btn" value="8" class="border p-2 rounded-md text-3xl">8</button>
                <button name="btn" value="9" class="border p-2 rounded-md text-3xl">9</button>
                <button name="btn" value="*" class="border p-2 rounded-md text-3xl">*</button>

                <button name="btn" value="4" class="border p-2 rounded-md text-3xl">4</button>
                <button name="btn" value="5" class="border p-2 rounded-md text-3xl">5</button>
                <button name="btn" value="6" class="border p-2 rounded-md text-3xl">6</button>
                <button name="btn" value="-" class="border p-2 rounded-md text-3xl">-</button>

                <button name="btn" value="1" class="border p-2 rounded-md text-3xl">1</button>
                <button name="btn" value="2" class="border p-2 rounded-md text-3xl">2</button>
                <button name="btn" value="3" class="border p-2 rounded-md text-3xl">3</button>
                <button name="btn" value="+" class="border p-2 rounded-md text-3xl">+</button>

                <button name="btn" value="00" class="border p-2 rounded-md text-3xl">00</button>
                <button name="btn" value="0" class="border p-2 rounded-md text-3xl">0</button>
                <button name="btn" value="." class="border p-2 rounded-md text-3xl">.</button>
                <button name="equal" class="border p-2 rounded-md text-3xl bg-blue-500 text-white">=</button>

            </div>

        </form>

    </div>
</body>

</html> -->

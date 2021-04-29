<?php
session_start();
setcookie("firsttime", 0);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/load.js"></script>
    <script src="js/scramble.js"></script>
    <title>WEEKLY TERMINAL</title>
</head>
<body onload="startTime()">
    <div class="main" id="main">
        <div class="terminal" id="terminal">
            <h1>WEEKLY CONTROL PANEL</h1>
            <button class="greenbtn" onclick="start()"> [BOOT WEEKLY] </button>
            <?php
                if (isset($_COOKIE['firsttime']))
                {
                    echo "<button class='greenbtn' onclick='startpuzzle()'>[SKIP INTRO]</button>";
                }
            ?>
        </div>
        <div class="terminal-date" id="terminal-date">

        </div>
        <div class="terminal-time" id="terminal-time">

        </div>
        <div id="ignore">
        </div>
    </div>
</body>
</html>
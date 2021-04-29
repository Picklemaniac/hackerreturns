<?php
if ($_POST["password"] != null)  {
    if ($_POST["password"] == "computerwillnotstopbreakingdown"){
        echo "<script>window.location.href='../computerwillnotstopbreakingdown.php';</script>";
    }
    else {
        echo "<script>window.location.href='../wrongpassword.php';</script>";
    }
}
else {
    echo "<script>window.location.href='../wrongpassword.php';</script>";
}
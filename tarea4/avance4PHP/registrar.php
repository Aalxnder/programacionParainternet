<?php
    $server = "localhost";
    $pass = "";
    $user = "root";
    $db = "homepage";

    $con = mysqli_connect($server,$user,$pass,$db) or die("Error al conectarse a la base de datos");

    $sql = "INSERT INTO registros (nombre,correo, telefono, contrasenia, username) 
    VALUES('".$_POST["nombre"]."', '".$_POST["correo"]."', '".$_POST["telefono"]."','".$_POST["contrasenia"]."','".$_POST["username"]."')";

    $resultado = mysqli_query($con,$sql) or die("Error al insertar los datos");

    mysqli_close($con);
    header("Location: index.html");
?>

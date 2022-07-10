<?php
$user = "root";
$pass = "";
$host = "localhost";
//Datos del servidor

$connection = mysqli_connect($host, $user, $pass);
//conexion con la base de datos

//llamo mis datos
$usuario = $_POST['usuario']; 
$name = $_POST['name'];
$apellido = $_POST['apellido'];
$password = $_POST['password'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];

if(!$connection) 
        {
            echo "No se ha podido conectar con el servidor" . mysql_error();
        }
else
        {
            $let = "Te has registrado exitosamente!";
            echo "<script> alert('".$let."'); </script>";
        }

//nombre de mi base datos
$datab = "proyecto";
//indicamos selecionar la base datos
$db = mysqli_select_db($connection,$datab);

if (!$db){
    echo "No se ha podido enviar tus datos";
} else{
    echo "Tus datos han sido enviados" ;
}

$instruccion_SQL = "INSERT INTO registro ( Usuario, Nombre, Apellido, Contraseña , Email, Telefono)
VALUES ('$usuario','$name','$apellido', '$password','$correo','$telefono')";
                            
$resultado = mysqli_query($connection,$instruccion_SQL);

echo'<a href="index.html"> Ir a la página de inicio</a>';
?>
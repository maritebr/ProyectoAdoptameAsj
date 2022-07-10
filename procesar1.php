<?php
$user = "root";
$pass = "";
$host = "localhost";
//Datos del servidor

$connection = mysqli_connect($host, $user, $pass);
//conexion con la base de datos

//llamo mis datos
$nombre = $_POST['nombre'] ;
$apellido = $_POST['apellido'] ;
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$area = $_POST['area'];
$comentario = $_POST['comentario'] ;

if(!$connection) 
        {
            echo "No se ha podido conectar con el servidor" . mysql_error();
        }
else
        {
            $let = "Tu formulario ha sido enviado exitosamente!";
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

$instruccion_SQL = "INSERT INTO formulario ( Nombre, Apellido, Telefono, Email, AreaContacto, Comentarios)
VALUES ('$nombre','$apellido', '$telefono', '$email' ,'$area' ,'$comentario')";
                            
$resultado = mysqli_query($connection,$instruccion_SQL);

echo'<a href="index.html"> Ir a la página de inicio</a>';
?>
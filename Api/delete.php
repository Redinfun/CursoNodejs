<?php
include('dados.php');

$conexao = mysqli_connect($servidor, $usuario, $senha, $bdados);

$pid=$_GET['P_Inicio'];

$consulta = "delete from 3237474_arduino where contagem=".$pinicio."";

if(mysqli_query($conexao, $consulta))
{
     echo "successo!";
}
else
{
    echo mysqli_error($conexao);
}

mysqli_close($conexao);

?>
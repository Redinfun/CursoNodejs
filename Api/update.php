<?php
include('dados.php');

$conexao = mysqli_connect($servidor, $usuario, $senha, $bdados);

$pid=$_GET['P_Contagem'];
$pnome=$_GET['P_Inicio'];
$ppreco=$_GET['P_Tempo'];

$consulta = "update 3237474_arduino set P_Inicio='".$pinicio."', P_Tempo=".$ptempo." where P_Contagem=".$pcontagem."";

if(mysqli_query($conexao, $consulta))
{
     echo "successo!";
}
else
{
     echo "falha";
}

mysqli_close($conexao);

?>
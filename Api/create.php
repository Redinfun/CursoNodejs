<?php

include('dados.php');

$conexao = mysqli_connect($servidor, $usuario, $senha, $bdados);
	

$pnome=$_GET['P_Tempo'];
$ppreco=$_GET['P_Contagem'];

$consulta = "insert into 3237474_arduino (P_Tempo, P_Contagem) values ('".$ptempo."',".$pcontagem.")";

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
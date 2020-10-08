<?php
include('dados.php');

$conexao = mysqli_connect($servidor, $usuario, $senha, $bdados);

$pid=$_GET['P_Contagem'];

$gravacoes = mysqli_query($conexao,"select * from 3237474_arduino where contagem=".$pcontagem);

$dados = array();

while($linha = mysqli_fetch_assoc($gravacoes))
{
    $dados[] = $linha; 
}

echo json_encode($dados);

mysqli_close($conexao);

?>
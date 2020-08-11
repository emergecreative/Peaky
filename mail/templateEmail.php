<?php


/* Informa o nível dos erros que serão exibidos */
error_reporting(E_ALL);

/* Habilita a exibição de erros */
ini_set("display_errors", 1);




$qual_infoType = $_GET['infoType'];
$qual_nome = $_GET['nome'];
$qual_dataHoje = date('d/m/Y \à\s H:i:s');
$qual_email = $_GET['email'];
//$qual_sobrenome = $_GET['sobrenome'];
$qual_servico = $_GET['tipo-servico'];
$qual_telefone = $_GET['tel'];
$qual_mensagem = $_GET['mensagem'];



		require '../bat/phpmailer/class.phpmailer.php';
		$mail = new PHPMailer;
		$mail->setLanguage('br'); 
		$mail->CharSet='UTF-8'; 
		//$mail->SMTPDebug = 3; 
		$mail->isSMTP(); 
		$mail->Host = 'smtp.peakyvideos.com.br';
		$mail->SMTPAuth = true;
		$mail->Username = 'form@peakyvideos.com.br';
		$mail->Password = 'PWDdan*10';
		$mail->SMTPSecure = 'tls';
		$mail->Port = 587;

		$mail->From = 'form@peakyvideos.com.br'; // Endereço previamente verificado no painel do SMTP
		$mail->FromName = 'Emerge Creative'; 
		$mail->addAddress('marcosp@emergecreative.com.br');
		//$mail->addAddress('joao@exemplo.com');                
		$mail->addReplyTo(' . $qual_email .');
		//$mail->addCC('cc@exemplo.com');
		//$mail->addBCC('contato@emergecreative.com.br');

		$mail->isHTML(true);                                  
		$mail->Subject = 'Solicitação de contato ou orçamento em nome de '.$qual_nome;

		$mail->Body    = '
		<center><img src="http://peakyvideos.com.br/assets/img/core/logo.png" width="180px"><h3>Orçamento Solicitado Através do site</h3></center><br><br>Formulário Tipo de notificação : '.$qual_infoType.'<br>E-mail : '.strtolower($qual_email).'<br>Nome: '. strtoupper($qual_nome).'<br>Telefone : '.$qual_telefone.'<br> Tipo de serviço: '.$qual_servico.'<br>Mensagem : '.strtoupper($qual_mensagem).'<br>Data : '.$qual_dataHoje.'<br><br>';
		$mail->AltBody = '';

		if(!$mail->send()) {
		    echo 'A mensagem não pode ser enviada <br>';
		    echo 'Mensagem de erro: ' . $mail->ErrorInfo;
		} else {
		    echo 'Mensagem enviada com sucesso';

		}

?>

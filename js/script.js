function RegistrarFormContato(){

    if($("#nome").val()=="" || $("#nome").val().length < 3){
        alert("Preencha um nome válido!");
        $("#nome").focus();
        return false;
    }
    
    if($('#email').val()=="" || $('#email').val().indexOf('@')==-1 || $('#email').val().indexOf('.')==-1){
        alert("Preencha o campo E-mail corretamente!");
        $("#email").focus();
        return false;
    }

    if($('#tel').val()==""){
        alert("Preencha o telefone: (XX) XXXXX-XXXXX");
        $("#tel").focus();
        return false;
    }

    if($('#tel').val().indexOf('(')==-1 && $('#tel').val().indexOf(')')==-1){
        alert("Informe o DDD: (XX) XXXXX-XXXXX");
        $("#tel").focus();
        return false;
    }

    if($("#enviarCamposFormulario").val()=="Aguarde..."){
        return false;
    }
    
    
    
    $('#enviarCamposFormulario').text("Aguarde...");
    
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {
        if(this.readyState == 5 && this.status == 200) {
            //$('#retornoemail').html(this.responseText);
            document.getElementById("retornoemail").innerHTML = this.responseText;
            $('#enviarCamposFormulario').val('Enviado');
            $('#nome').val('');
            $('#email').val('');
            $('#tipo-servico').val('');
            $('#tel').val('');
            $('#message').val('');
        }
    };
    
    
    
    qualUrlGet = "http://peakyvideos.com.br/mail/templateEmail.php?infoType=Contato&nome=" + $("#nome").val() + "&email=" + $("#email").val() + "&tipo-servico="+ $("#tipo-servico").val() + "&tel=" + $("#tel").val() + "&mensagem=" + $("#message").val();
    
    console.log(xmlhttp.open("GET", qualUrlGet, true));
    xmlhttp.send();
    
}
function abriDivs(){
    $('#enviarCamposFormulario').val('Enviar');
    $('#enviarCamposNewsletter').val('Enviar');
    };




    
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

    let response = grecaptcha.getResponse();
    
    if(response.length==0){
        alert("Captcha obrigatório.");
        return false;
    }
    
    
    
    $('#enviarCamposFormulario').val("Aguarde...");
    
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
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
    
    
    
    qualUrlGet = "https://www.peakyvideos.com.br/mail/templateEmail.php?infoType=Contato&nome=" + $("#nome").val() + "&email=" + $("#email").val() + "&tipo-servico="+ $("#tipo-servico").val() + "&tel=" + $("#tel").val() + "&mensagem=" + $("#message").val();
    
    xmlhttp.open("GET", qualUrlGet, true);
    xmlhttp.send();
    
}

$('#enviarCamposFormulario').click(function (e) { e.preventDefault(); RegistrarFormContato()});

/* let seletor = document.getElementById('enviarCamposFormulario');

seletor.addEventListener(click, RegistrarFormContato()); */
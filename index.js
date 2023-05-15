document.querySelector(".contactForm").addEventListener('submit', function (event){ 
    event.preventDefault();
    
    const email = event.target.email.value;
    const names = event.target.names.value;
    const apellido = event.target.surname.value;
    const message = event.target.mensaje.value;
    // const reason = event.target.reason.checked;
    // const meet = event.target.meet.value;
    // const file = event.target.file;
    let errorName = document.getElementById('error_name');
    let errorSurname = document.getElementById('error_surname');
    var errorEmail = document.getElementById('error_email');
    let errorMessage = document.getElementById('error_message');

    

    let validado = true;
    
    if (names.length < 3 || names == null || names == '' || names === Number){
        validado = false;
        console.log('eso no es así')
        errorName.style.visibility='visible';
    }
    if (apellido == '' || apellido == null || apellido === Number){
        validado = false;
        errorSurname.style.visibility='visible';
        console.log('eso no es así')
    }
    if (!email.endsWith('.com') || !email.endsWith('.es')|| email.length < 4 || email =='' || !email.includes('@')){
        validado = false;
        errorEmail.style.visibility='visible';
        console.log('eso no es así')
    }
    if (message == '' || message.length < 20){
        validado = false;
        errorMessage.style.visibility='visible';
        console.log('eso no es así')
    }
    
    if (validado){     // !Envía el form
        
        alert("ÉXITO - Formulario correcto y enviado");
        event.target.submit();
    } 
    //   else {
    //         document.querySelector("#contacto").innerHTML +=
    //           '<pre class="danger">' + msj + "</pre>";
    //         alert("ERRORES: " + msj);
    //       }
    });
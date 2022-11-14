function exibirDados(event){
    event.preventDefault()

    let email = document.getElementById("campo-email").value;
    let senha = document.getElementById("campo-senha").value;

    console.log("email capturado:", email);
    console.log("senha capturada:", senha);
    
    if(senha==12345 && email ==("pedrobuenogonz@gmail.com")){
        document.write("Logado");
    }else{
        document.write("Senha ou email invalida");
    }



// document.write(email)
}
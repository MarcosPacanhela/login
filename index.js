function logar(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == "admin@email.com" && password == "admin"){
        alert('Sucesso');
        location.href = "./home.html"
    }else{
        alert('Usuário ou senha incorretos');
    }
}
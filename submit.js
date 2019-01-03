$(document).ready(function(){  ///solo quando è pronto fai questa funzione

    $( "#signup_form" ).submit(function( event ) {
        event.preventDefault();
        
        var nome = $('#nome').val();
        var cognome = $('#cognome').val();
        var data = $('#data').val();
        var email =$('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();

        var pacchettoAjax = $.ajax({
            type: "POST",          //invio i dati 
            url: "signup.php",    // svolgerò le funzioni in quel file
            dataType: "json",     //creo file di tipo json
            data: {
                nome:nome, cognome:cognome, data:data, email:email, username:username, password:password
            }
        });

        pacchettoAjax.done(function(return_data){   //return_data: var di ritorno dal server
            if(return_data.status){
                alert("Registrazione effettuata correttamente!");
                if (sessionStorage.ind) {
                    sessionStorage.removeItem("ind");
                }
                $(location).attr('href', 'dressup.html');
            }
            else{
                alert(return_data.errore);
            }
        });

        pacchettoAjax.fail(function(){
            alert("Errore del server, controllalo");
        });

      });

      $( "#signin_form" ).submit(function( event ) {
        event.preventDefault();

        var email = $('#emaillogin').val();
        var password = $('#passwordlogin').val();

        var pacchettoAjax = $.ajax({
            type: "POST",
            url: "login.php",
            dataType: "json",
            data: {
                email:email, password:password
            }
        });

        pacchettoAjax.done(function(return_data) {
            if(return_data.status){
                alert("Login effettuato correttamente!");
                console.log(sessionStorage.ind);
                if (sessionStorage.ind) {
                    sessionStorage.removeItem("ind");
                }
                $(location).attr('href', 'dressup.html');
            
            }
            else{
                alert(return_data.errore);
            } 
        });
        pacchettoAjax.fail(function(){
            alert("Errore del server, controllalo");
        });
    });
        


});
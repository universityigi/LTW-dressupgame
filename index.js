function controllaMail() {
  var email = document.myform.email.value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(email)){
    alert("La mail inserita deve essere corretta");
    return false; 
  }
  else return true;
}

function controllaRipPassword() {
  var pass= document.myform.password.value;
  var rippass = document.myform.rippassword.value;
  if(pass == rippass) return true;
  else{
    alert("Le due password non coincidono");
    return false;
  }
}

function controllaNome(){
  re = /[0-9]/;
    if(re.test(document.myform.nome.value)) {
      window.alert("Il nome non puo' contenere numeri!");
      document.myform.password.focus();
      return false;
    }
    return true;
}

function controllaCognome(){
  re = /[0-9]/;
    if(re.test(document.myform.cognome.value)) {
      alert("Il cognome non puo' contenere numeri!");
      document.myform.password.focus();
      return false;
    }
    return true;
}

function controllaData() {
  if (document.myform.data.value.substring(2,3) != "/" ||
    document.myform.data.value.substring(5,6) != "/" ||
    isNaN(document.myform.data.value.substring(0,2)) ||
    isNaN(document.myform.data.value.substring(3,5)) ||
    isNaN(document.myform.data.value.substring(6,10))) {
	alert("Inserire nascita in formato gg/mm/aaaa");
	document.myform.data.value = "";
	document.myform.data.focus();
	return false;
} else if (document.myform.data.value.substring(0,2) > 31) {
   alert("Impossibile utilizzare un valore superiore a 31 per i giorni");
   document.myform.data.select();
   return false;
} else if (document.myform.data.value.substring(3,5) > 12) {
   alert("Impossibile utilizzare un valore superiore a 12 per i mesi");
   document.myform.data.value = "";
   document.myform.data.focus();
   return false;
} else if (document.myform.data.value.substring(6,10) < 1900) {
   alert("Impossibile utilizzare un valore inferiore a 1900 per l'anno");
   document.myform.data.value = "";
   document.myform.data.focus();
   return false;
}
else return true;
}

function controllaUsername(){
  re = /^\w+$/;
  if(!re.test(document.myform.username.value)) {
    alert("L'username può contenere solo lettere, numeri e underscores!");
    form.username.focus();
    return false;
  }
  return true;
}

function controllaPassword(){
    if(document.myform.password.value.length < 6) {
      alert("La password deve contenere almeno 6 caratteri!");
      document.myform.password.focus();
      return false;
    }
    if(document.myform.password.value == document.myform.username.value) {
      alert("La password deve essere diversa dall'username!");
      document.myform.password.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(document.myform.password.value)) {
      alert("La password deve contenere almeno un numero da 0 a 9!");
      document.myform.password.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(document.myform.password.value)) {
      alert("La password deve contenere almeno un carattere minuscolo a-z!");
      document.myform.password.focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(document.myform.password.value)) {
      alert("La password deve contenere almeno un carattere maiuscolo!");
      document.myform.password.focus();
      return false;
    }
  alert("Hai inserito una password valida: ");
  return true;
}



$('.form').find('input').on('keyup blur focus', function (e) {  
  
  var $this = $(this),
      label = $this.prev('label');

      if (e.type === 'keyup') {   //quando l'utente rilascia un tasto della tastiera
            if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {  //non ci sono più sopra(perdo il focus)
        if( $this.val() === '' ) {   //se valore inserito da input è vuoto
            label.removeClass('active highlight'); 
            } else {
            label.removeClass('highlight');   
            }   
    } else if (e.type === 'focus') {    //oggetto ha il focus
      
      if( $this.val() === '' ) {
            label.removeClass('highlight'); 
            } 
      else if( $this.val() !== '' ) {
            label.addClass('highlight');
            }
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


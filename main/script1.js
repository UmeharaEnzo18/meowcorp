function check(form) {

    /*Não sei fazer de outra dorma e sao 05:30 da manha, não quero pesquisar S2*/
    
        if(form.senha.value == "Nada é tão nosso quanto os nossos sonhos" ||
           form.senha.value == "Nada e tão nosso quanto os nossos sonhos" ||
           form.senha.value == "Nada e tao nosso quanto os nossos sonhos" ||
           form.senha.value == "nada é tão nosso quanto os nossos sonhos" ||
           form.senha.value == "nada e tão nosso quanto os nossos sonhos" ||
           form.senha.value == "nada e tao nosso quanto os nossos sonhos" ||
           form.senha.value == "nada é tao nosso quanto os nossos sonhos" ||
           form.senha.value == "Nadaétãonossoquantoosnossossonhos" ||
           form.senha.value == "Nadaetãonossoquantoosnossossonhos" ||
           form.senha.value == "Nadaetaonossoquantoosnossossonhos" ||
           form.senha.value == "nadaétãonossoquantoosnossossonhos" ||
           form.senha.value == "nadaetãonossoquantoosnossossonhos" ||
           form.senha.value == "nadaetaonossoquantoosnossossonhos") {
            window.open('pag4.html'); window.close()/*opens the target page while password matches and closes the current page*/
    
        }
        else {
            alert("DATA ERRADA OU CAMPOS VAZIOS")/*displays error message*/
            }
    
    }
    
    function myFunction() {
      var x = document.getElementById("senha");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
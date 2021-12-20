const btn_register= document.getElementById("btn_register");
const btn_login= document.getElementById("btn_login");


//declarando variables
const contenedor_login_register = document.querySelector(".contenedor__login-register");
const formulario_login = document.querySelector(".formulario__login");
const formulario_register = document.querySelector(".formulario__register");
const back_box_login = document.querySelector(".back__box-login");
const back_box_register = document.querySelector(".back__box-register");

btn_register.addEventListener("click",() => {
    console.log("hola");
    register();
});
btn_login.addEventListener("click",() => {
    console.log("hola");
    login();
});



//funcion para
let login  = () => {
    if(window.innerWidth>850){
        console.log("Hola");
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display= "block";
        back_box_register.style.opacity = "1";
        back_box_login.style.opacity = "0";
    }else{
        console.log("Hola");
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display= "block";
        back_box_register.style.display = "block";
        back_box_login.style.display = "none";
    }
  
}
//funcion para
let register  = () => {
      if(window.innerWidth>850){
    console.log("Hola");
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display= "none";
    back_box_register.style.opacity = "0";
    back_box_login.style.opacity = "1";
}else{
    console.log("Hola");
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display= "none";
    back_box_register.style.display = "none";
    back_box_login.style.display = "block";
    back_box_login.style.opasity = "1";
}


}

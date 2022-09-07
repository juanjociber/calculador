/*=====================================================
Programador: Juan Jose Huiza Huiza
=======================================================*/ 

//inputs
const n1 = document.querySelector('#idn1');
const n2 = document.getElementById('idn2');
const opc = document.getElementById('idopc');
const res = document.getElementById("idResultado");

//Expresiones regulares
const expN1= /^\d{3}$/, expN2= /^\d{2}$/

//botones
const procesar = document.querySelector('#idProcesar');
const limpiar = document.querySelector('#idLimpiar');

//Evento de validación inputs y procesamiento de operación matemática
procesar.addEventListener('click',function(){
    if(isNaN(n1.value) || n1.value == null || n1.value == "" || n1.value.length == 0 || /^\s+$/.test(n1.value)){
        swal('INGRESE CAMPO [A]', 'Dato tipo numérico','error');
        n1.classList.add('input-error')
    }
    else if(expN1.test(n1.value)==false) {
        swal('REGLA DE VALIDACIÓN', 'Campo A debe ser de tipo numérico y 3 dígitos','error');
        n1.classList.add('input-error')
    }
    else if(n1.value < 300){
        swal('REGLA DE VALIDACIÓN', 'Campo A el primer dígito es mayor que 3','error');
        n1.classList.add('input-error')
    }
    else if(isNaN(n2.value) || n2.value == null || n2.value == "" || n2.value.length == 0 || /^\s+$/.test(n2.value)){
        swal('INGRESE CAMPO [B]', 'Dato tipo numérico','error');
        n2.classList.add('input-error')    
    }
    else if(expN2.test(n2.value)==false) {
        swal('REGLA DE VALIDACIÓN', 'Campo B debe ser de tipo numérico y 2 dígitos','error');
        n2.classList.add('input-error')
    }
    else{
        operaciones();
    }
});

//Evento limpiar
limpiar.addEventListener('click',function(){
    console.log('Limpiando formulario..')
    n1.value="";
    n2.value="";
    opc.value="";
    n1.classList.remove('input-error');
    n2.classList.remove('input-error');
    n1.classList.add('input-start');
    n2.classList.add('input-start');
    n1.focus();
    
});

function operaciones(){
    if(opc.value == ''){
        swal('INGRESE OPCIÓN','[1] Suma - [2] Resta','info');
    }
    else if(opc.value==1){
        var suma = parseInt(n1.value)+parseInt(n2.value);
        swal('RESULTADO', 'La suma es: '+suma,'success');
    }
    else if(opc.value==2){
        var resta = parseInt(n1.value)-parseInt(n2.value);
        swal('RESULTADO', 'La resta es: '+resta,'success');
    }
    else if(n1.value=='' || n2.value == ''){
        res.innerHTML="";
    }
    else if(opc.value>2){
        swal('LO SIENTO', 'Operación Errada  😟','error');
    }
    else{
        swal('OBSERVACIÓN', 'Campos deben estar llenados','info');
    }
}

//Evento bordes de input
n1.addEventListener('keyup',function(e){
    console.log(e.target.value)
    if(!e.target.value==expN1.test(n1.value) || n1.value < 300){
        n1.classList.remove('input-validado')
        n1.classList.add('input-error')
        console.log('validado xd')
    }else{
        n1.classList.add('input-validado')
        n1.classList.remove('input-error')
    }
});

n2.addEventListener('keyup',function(e){
    if(!e.target.value==expN2.test(n2.value) || n2.value < 1){
        n2.classList.remove('input-validado')
        n2.classList.add('input-error')
        console.log('validado xd')
    }else{
        n2.classList.add('input-validado')
        n2.classList.remove('input-error')
    }
});




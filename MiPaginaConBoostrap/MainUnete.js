    //seleccionar elementos del formulario
        document.addEventListener('DOMContentLoaded', () => {
        const formulario = document.querySelector('#registrationForm');
        const nombre = document.querySelector('#nombre');
        const resultados = document.querySelector('.resultados');
        const enviar = document.querySelector('#enviar');
        const correo = document.querySelector("#correo");
        const edad = document.querySelector("#edad");
        const telefono = document.querySelector("#telefono");
        const interes = document.querySelector("#interes");
        //agregar evento click al boton enviar
        enviar.addEventListener('click', validaEnvia);
    
        function validaEnvia(event){
            //prevenir el envio del formulario
            event.preventDefault();
    
            //reiniciar msj de error
            resultados.innerHTML='';
            resultados.style.backgroundColor = '';
    
            //validar el nombre
            if(nombre.value.length < 3){
                muestraError(nombre);
                return;
            }
            //validar al menos una ocupacion selccionada
            //Validar correo
            const correoRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!correoRegex.test(correo.value)) {
                muestraError(correo);
                return;
            }
            //Validar edad como numero entero mayor a 18
            const edadValor = parseInt(edad.value);
            if (isNaN(edadValor) || edadValor < 18) {
                muestraError(edad);
                return;
            }
            //Validar telefono con expresion regular
            const telefonoRegex = /^([0-9]{10})+$/;
            if(!telefonoRegex.test(telefono.value)) {
                muestraError(telefono);
                return;
            }
            //Validar interes seleccionado
            if (interes.selectedIndex === 0) {
                muestraError(interes);
                return;
            }
            //Mostrar msj de exito si pasa la validaciones
            muestraExito('!Datos Enviados Correctamente a UrbanKicks');
            //Envio del formulario
            setTimeout(() => formulario.submit(), 2000);
        }
        //otras funciones muestraError, muestraExito
    
        //funcion para mostrar msj de error y marcar el input
        function muestraError(input){
            resultados.style.backgroundColor ='red';
            resultados.innerHTML = `El campo ${input.name} no ha sido completado`;
        }
    
        //Funcion para mostrar mensaje de exito
        function muestraExito(mensaje){
            resultados.style.backgroundColor= 'green';
            resultados.innerHTML = mensaje;
        }
    });
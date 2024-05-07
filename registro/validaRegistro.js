window.addEventListener('load', ()=> {

    const form = document.getElementById('formulario')
    const nombre = document.getElementById('nombre')
    const rut = document.getElementById('rut')
    const correo = document.getElementById('correo')
    const fono = document.getElementById('fono')
    const contra = document.getElementById('contra')
    const confirma = document.getElementById('confirma')


    form.addEventListener('submit',(e) =>  {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        const nombreValor = nombre.value.trim()
        const rutValor = rut.value.trim()
        const correoValor = correo.value.trim()
        const fonoValor = fono.value.trim()
        const contraValor = contra.value.trim()
        const confirmaValor = confirma.value.trim();

        //Validar campo Nombre
        if(!nombreValor){
            validaFalla(nombre, ('Campo vacío'))
        }else{
            validaOk(nombre)
        }

        //Validar Campo Correo
        if(!correoValor){
            validaFalla(correo, 'Campo vacío')
        }else if(!validaCorreo(correoValor)){
            validaFalla(correo, 'El correo no es válido')
        }else{
            validaOk(correo)
        }

        //Validar Campo Rut
        if(!rutValor){
            validaFalla(rut, 'Campo vacío')
        }else if(!validaRut(rutValor)){
            validaFalla(rut, 'El rut no es válido')
        }else{
            validaOk(rut)
        }
        //Validar Campo Telefono
        if(!fonoValor){
            validaFalla(fono, 'Campo vacío')
        }else if(!validaFono(fonoValor)){
            validaFalla(fono, 'El telefono no se digitó correctamente')
        }else{
            validaOk(fono)
        }
        //Validar Campo Contraseña
        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/ 
        if(!contraValor){
            validaFalla(contra, ('Campo vacío'))
        }else if(contraValor.length < 8){
            validaFalla(contra,'Contraseña inválida')
        }else if(!contraValor.match(er)){
            validaFalla(contra,'Debe tener una may., una min. y un num.')
        }else{
            validaOk(contra)
        }
        //Validar contraConfirma
        if(!confirmaValor){
            validaFalla(confirma,'Confirme su contraseña')
        }else if(contraValor !== confirmaValor){
            validaFalla(confirma,'Contraseña no coincide')
        }else{
            validaOk(confirma)
        }
    }
    //Funcion Cambia la clase de formControl
    const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'form-control falla'

    }
    const validaOk = (input, msje) =>{
    const formControl = input.querySelector('p')
    
    formControl.className = 'form-control ok'
    }
    //Regex correo
    const validaCorreo = (correo) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
    }
    //Regex rut
    const validaRut = (rut) => {
        return !/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut);
    }
    //Regex fono
    const validaFono = (fono) => {
        return /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(fono);
    }
    
})


//BOTON LOL

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
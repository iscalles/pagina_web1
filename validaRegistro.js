window.addEventListener('load', ()=> {
    const form = document.getElementById('formulario')
    const nombre = document.getElementById('nombre')
    const rut = document.getElementById('rut')
    const correo = document.getElementById('correo')
    const fono = document.getElementById('fono')

    form.addEventListener('submit',(e) =>  {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        const nombreValor = nombre.value.trim()
        const rutValor = rut.value.trim()
        const correoValor = correo.value.trim()
        const fonoValor = fono.value.trim();

        //Validar campo Nombre
        if(!nombreValor){
            validarFalla(nombre, ('Campo vacío'))
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
    }
    //Funcion Cambia la clase de formControl
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form.control falla'

    }
    const validaOk = (input,msje) =>{
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

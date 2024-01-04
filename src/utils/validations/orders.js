import ChileanRutify from 'chilean-rutify'

export async function validateFormOrder(order) {

    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,50}$/.test(order.firstName))
        throw "Nombre deben contener solo letras y tener máximo 50 caracteres.";

    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,50}$/.test(order.lastName))
        throw "Apellido deben contener solo letras y tener máximo 50 caracteres.";

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(order.email))
        throw "La dirección de correo electrónico no es válida.";
    
    if (order.phone === null || order.phone.trim() === "" || order.phone.length < 8 || order.phone.length > 12) 
        throw "Ingrese un numero valido.";
    
    if (!ChileanRutify.validRut(order.rut))
        throw "Ingrese un rut valido.";

    if (order.regionId === null) 
        throw "Ingrese región valido.";
    
    if (order.communeId == null) 
        throw "Ingrese comuna valido.";
    
    if (order.address === null || order.address.trim() === "" || order.address.length > 500) 
        throw "La dirección no puede estar en blanco y debe tener como máximo 500 caracteres.";
    
    return "Todos los datos son válidos.";

}
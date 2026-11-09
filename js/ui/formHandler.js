import {
    createCliente
}
from "../services/createCliente.js"

import {
    updateCliente
}
from "../services/updateCliente.js"

export async function guardarCliente(
    idEditar,
    nombre,
    email
){

    if(idEditar){

        return await updateCliente(
            idEditar,
            nombre,
            email
        )
    }

    return await createCliente(
        nombre,
        email
    )
}
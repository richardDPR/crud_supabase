import {
    getClientes
}
    from "./services/readClientes.js"

import {
    deleteCliente
}
    from "./services/deleteCliente.js"

import {
    guardarCliente
}
    from "./ui/formHandler.js"

import {
    renderTabla
}
    from "./ui/renderTabla.js"

import {
    getClienteById
}
    from "./services/getClienteById.js";

const tabla =
    document.getElementById("tablaClientes")

const form =
    document.getElementById("formCliente")

let idEditar = null

async function cargarClientes() {

    const { data, error } =
        await getClientes()

    if (error) {
        console.error(error)
        return
    }

    renderTabla(data, tabla)
}

form.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault()

        const nombre =
            document.getElementById("nombre").value

        const email =
            document.getElementById("email").value

        await guardarCliente(
            idEditar,
            nombre,
            email
        )

        form.reset()

        idEditar = null

        cargarClientes()
    })

/*tabla.addEventListener(
"click",
async(e)=>{

    const id =
    e.target.dataset.id

    if(
        e.target.classList
            .contains("eliminar")
    ){

        await deleteCliente(id)

        cargarClientes()
    }
})*/

tabla.addEventListener("click", async (e) => {

    const id = e.target.dataset.id;
    if (
        e.target.classList.contains("editar")
    ) {
        const { data, error } =
            await getClienteById(id);
        if (error) {
            console.error(error);
            return;
        }
        document.getElementById("nombre").value =
            data.nombre;

        document.getElementById("email").value =
            data.email;
        idEditar = id;
    }
    if (
        e.target.classList.contains("eliminar")
    ) {
        if (
            !confirm("¿Eliminar registro?")
        ) {
            return;
        }
        await deleteCliente(id);
        cargarClientes();
    }
});

cargarClientes()
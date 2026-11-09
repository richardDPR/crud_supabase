export function renderTabla(
    clientes,
    tabla
){

    tabla.innerHTML = ""

    clientes.forEach(cliente => {

        tabla.innerHTML += `
        <tr>
            <td>${cliente.id}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.email}</td>

            <td>
                <button
                    class="editar"
                    data-id="${cliente.id}">
                    Editar
                </button>

                <button
                    class="eliminar"
                    data-id="${cliente.id}">
                    Eliminar
                </button>
            </td>
        </tr>
        `
    })
}
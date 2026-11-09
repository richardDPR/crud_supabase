import { supabase }
from "../config/supabase.js"

export async function createCliente(
    nombre,
    email
){

    const { data, error } =
    await supabase
        .from("clientes")
        .insert([
            {
                nombre,
                email
            }
        ])

    return { data, error }
}
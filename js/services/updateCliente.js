import { supabase }
from "../config/supabase.js"

export async function updateCliente(
    id,
    nombre,
    email
){

    const { data, error } =
    await supabase
        .from("clientes")
        .update({
            nombre,
            email
        })
        .eq("id", id)
    console.log("UPDATE DATA:", data);
    console.log("UPDATE ERROR:", error);
    return { data, error }
}

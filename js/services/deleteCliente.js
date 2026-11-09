import { supabase }
from "../config/supabase.js"

export async function deleteCliente(id){

    const { data, error } =
    await supabase
        .from("clientes")
        .delete()
        .eq("id", id)
    console.log("DELETE DATA:", data);
    console.log("DELETE ERROR:", error);
    return { data, error }
}
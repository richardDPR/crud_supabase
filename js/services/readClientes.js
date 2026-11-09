import { supabase }
from "../config/supabase.js"

export async function getClientes(){

    const { data, error } =
    await supabase
        .from("clientes")
        .select("*")
        .order("id")

    return { data, error }
}
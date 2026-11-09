import { supabase }
from "../config/supabase.js";

export async function getClienteById(id){

    const { data, error } =
    await supabase
        .from("clientes")
        .select("*")
        .eq("id", id)
        .single();

    return { data, error };
}
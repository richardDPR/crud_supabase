import { createClient }
from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl =
"https://qrtpwdqjykeaakogxywa.supabase.co"

const supabaseKey =
"sb_publishable_k6trOD-IiqTo1Rx-OEwCQg_OoknoLCi"

export const supabase =
createClient(
    supabaseUrl,
    supabaseKey
)
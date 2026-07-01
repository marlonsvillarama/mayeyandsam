// /** @type {import('./$types').PageLoad} */
// import { PUBLIC_SUPABASE_API_URL, PUBLIC_ANON_PUBLIC_KEY } from "$env/static/public";

import { supabase } from "../../supabaseClient";

export async function load() {
    // let url = `${PUBLIC_SUPABASE_API_URL}/mns_attendees?select=*`;
    const { data } = await supabase.from('mns_attendees').select();
    console.log('server data', data);
    return {
        rows: data ?? []
    };
    // const response = await fetch(url, {
    //     headers: {
    //         'apikey': PUBLIC_ANON_PUBLIC_KEY,
    //         'Authorization': `Bearer ${PUBLIC_ANON_PUBLIC_KEY}`,
    //     }
    // });

    // const rows = await response.json();
    // rows.sort((a, b) => {
    //     let aName = `${a.last_name.toUpperCase()}-${a.first_name.toUpperCase()}`
    //     let bName = `${b.last_name.toUpperCase()}-${b.first_name.toUpperCase()}`
    //     if (aName < bName) return -1;
    //     if (aName > bName) return 1;
    //     return 0;
    // });
    // return { rows };
}

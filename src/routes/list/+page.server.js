// /** @type {import('./$types').PageLoad} */
import { PUBLIC_SUPABASE_API_URL, PUBLIC_ANON_PUBLIC_KEY } from "$env/static/public";

// import { supabase } from "../../supabaseClient";
    // /* const { data } = await supabase.from('mns_attendees').select();
    // console.log('server data', data);
    // return {
    //     rows: data ?? []
    // }; */

/** @type {import('./$types').PageServerLoad} */
export async function load({ setHeaders, depends }) {
    setHeaders({
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0'
    });
    depends('app:fresh-data');

    let url = `${PUBLIC_SUPABASE_API_URL}/rest/v1/mns_attendees?select=*`;
    console.log('url', url);
    const response = await fetch(url, {
        headers: {
            'apikey': PUBLIC_ANON_PUBLIC_KEY,
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Authorization': `Bearer ${PUBLIC_ANON_PUBLIC_KEY}`,
        }
    });

    const rows = await response.json();
    rows.sort((a, b) => {
        let aName = `${a.last_name.toUpperCase()}-${a.first_name.toUpperCase()}`
        let bName = `${b.last_name.toUpperCase()}-${b.first_name.toUpperCase()}`
        if (aName < bName) return -1;
        if (aName > bName) return 1;
        return 0;
    });
    return { rows };
}

/** @type {import('./$types').PageLoad} */
import { PUBLIC_SUPABASE_API_URL, PUBLIC_ANON_PUBLIC_KEY } from "$env/static/public";

export const load = async () => {
    let url = `${PUBLIC_SUPABASE_API_URL}/mns_attendees?select=*`;
    console.log('server url', url);
    const response = await fetch(url, {
        headers: {
            'apikey': PUBLIC_ANON_PUBLIC_KEY,
            'Authorization': `Bearer ${PUBLIC_ANON_PUBLIC_KEY}`,
        }
    });

    const rows = await response.json();
    rows.sort((a, b) => {
        let aName = `${a.last_name}-${a.first_name}`
        let bName = `${b.last_name}-${b.first_name}`
        if (aName < bName) return -1;
        if (aName > bName) return 1;
        return 0;
    });
    return { rows };
};

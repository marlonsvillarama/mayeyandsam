import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_ANON_PUBLIC_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_ANON_PUBLIC_KEY, {
    global: {
        fetch: (url, options) => {
            // Prevents the browser and SvelteKit from storing this fetch in cache
            return fetch(url, { ...options, cache: 'no-store' })
        }
    }
});

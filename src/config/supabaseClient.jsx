import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.SUPABASE_KEY);

export default supabase;
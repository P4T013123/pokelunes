import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jfcddlbouljquvtzjqar.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmY2RkbGJvdWxqcXV2dHpqcWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzODAwNzgsImV4cCI6MjA2Mzk1NjA3OH0.430Bgozhey6mCOqYHGUk19x0TKHgpkr6pzi1Qo3Y8jQ';
export const supabase = createClient(supabaseUrl, supabaseKey);
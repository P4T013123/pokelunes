import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wqhzdfhxmpgfiaicuezs.supabase.copabase';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaHpkZmh4bXBnZmlhaWN1ZXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODA5NjgsImV4cCI6MjA2MzI1Njk2OH0.Qn1iZhtyAfwsL2DUdYusyaceTlVwI8SJkpEvXh5ttkY';
export const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wcmcgcxlboqacspmwbhw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjbWNnY3hsYm9xYWNzcG13Ymh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODYxOTMsImV4cCI6MjA2MzI2MjE5M30.6DOjmWaO8Y89TxFBXsMXe7wjkjrDB2DWidb8tI3hHe4';
export const supabase = createClient(supabaseUrl, supabaseKey);
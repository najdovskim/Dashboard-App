import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rwpwfunayyyviqpmigkp.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3cHdmdW5heXl5dmlxcG1pZ2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NzQ5NzQsImV4cCI6MjA0NjM1MDk3NH0.T5tXUBwiAS5blMMW8HBCkyBnhiAkhzfKMIbOHoeZRJI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

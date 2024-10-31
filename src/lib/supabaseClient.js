import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zwvflpimurtpqqzpprjo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dmZscGltdXJ0cHFxenBwcmpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzc4NjU2MywiZXhwIjoyMDMzMzYyNTYzfQ.Y8Wxyn8zAgM6oG9EvBppu-8epK5tP7jkM2Qcn7uhX9w';
export const supabase = createClient(supabaseUrl, supabaseKey);

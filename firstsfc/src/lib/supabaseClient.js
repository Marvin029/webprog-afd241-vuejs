import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://urkpbpuotudiqjwdvwkg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVya3BicHVvdHVkaXFqd2R2d2tnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMjQ4NDYsImV4cCI6MjA2MzgwMDg0Nn0.RnKTxmVxPE0UUww5xqz6mJ5LJ6LXAjcl9ZJ_X92CWkE'

export const supabase = createClient(supabaseUrl, supabaseKey)
import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://ejczteapxeigrvjvuaad.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqY3p0ZWFweGVpZ3J2anZ1YWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3ODc5MDMsImV4cCI6MjAzMTM2MzkwM30.Jrsv8qNuZVPQ0eTTxT4SlX2TaxTOmDJHcG10Slc6dhM'

export const supabase = createClient(supabaseUrl, supabaseKey)
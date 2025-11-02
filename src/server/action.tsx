"use server"

import { createClient } from "@/lib/supabase/server"

export async function getRoomInfo() {

    const supabase = await createClient();

    const { data: schedules, error } = await supabase
        .from('schedules')
        .select('*')

    if (error){
        return console.log('get information error');
    }

    return schedules;
}

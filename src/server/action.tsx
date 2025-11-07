"use server"

import { createClient } from "@/lib/supabase/server"
import { RoomDetail } from "@/lib/types";

export async function getRoomInfo() {

    const supabase = await createClient();

    const { data: schedules, error } = await supabase
        .from('schedules')
        .select('*')

    if (error) {
        return console.log('get information error');
    }

    return schedules;
}

export async function checkRoomsStatus(floorNumber: number, dateQuery: string): Promise<RoomDetail[]> {

    if (!floorNumber || !dateQuery) {
        return [];
    }

    const supabase = await createClient();

    try {
        const selectedDate = new Date(dateQuery);
        const options: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Tokyo', hour12: false };
        const dayOfWeek = selectedDate.getDay();
        const queryTime = selectedDate.toLocaleTimeString('ja-JP', options);

        const { data: dbData, error } = await supabase
            .from(`schedules`)
            .select(`
            period,
            subject_name,
            class (grade, group),
            classrooms ( name, stair ),
            time_period (start_time, end_time)
            `)
            .eq(`classrooms.stair`, floorNumber)
            .eq(`day_of_week`, dayOfWeek)
            .lte('time_period.start_time', queryTime)
            .gte('time_period.end_time', queryTime)

        if (error) {
            console.error("Supabase error:", error.message);
            throw new Error(error.message);
        }

        // console.log("--- Supabase Raw Data (dbData) ---")
        // console.log(dbData);


        const details: RoomDetail[] = dbData.map(item => {
            const classInfo = Array.isArray(item.class) ? item.class[0] : item.class;
            const classroomInfo = Array.isArray(item.classrooms) ? item.classrooms[0] : item.classrooms;
            const timeInfo = Array.isArray(item.time_period) ? item.time_period[0] : item.time_period;

            if (classInfo && classroomInfo && timeInfo) {
                const startTime = timeInfo.start_time ? timeInfo.start_time.substring(0, 5) : "";
                const endTime = timeInfo.end_time ? timeInfo.end_time.substring(0, 5) : "";

                return {
                    roomname: classroomInfo.name,
                    grade: classInfo.grade.toString(),
                    group: classInfo.group,
                    subject: item.subject_name,
                    period: item.period,
                    start: startTime,
                    end: endTime,
                };

            }
            return null;

        }).filter(Boolean) as RoomDetail[];
        console.log("--- Formatted Details (details) ---")
        console.log(details);

        return details;

    } catch (error) {
        console.error("Server Action error:", error);
        return [];
    }
}
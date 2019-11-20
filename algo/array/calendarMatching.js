function calendarMatching(
    calendar1,
    dailyBounds1,
    calendar2,
    dailyBounds2,
    meetingDuration,
) {
    let updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
    let updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
    let mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2);

    let availableTimeSlots = getFreeSlotsInCalendar(mergedCalendar, meetingDuration);

    return convertAvailableSlotsToTimeFormat(availableTimeSlots);

}

function convertAvailableSlotsToTimeFormat(availableTimeSlots) {
    return availableTimeSlots.map(entry => [minutesToTime(entry[0]), minutesToTime(entry[1])]);
}


function getFreeSlotsInCalendar(calendar, meetingDuration) {

    let prevCalendar = calendar[0];
    let result = [];

    let i = 1;
    while (i < calendar.length) {
        let currCalendar = calendar[i];

        if (currCalendar[0] <= prevCalendar[1]) {
            prevCalendar[1] = Math.max(prevCalendar[1], currCalendar[1]);
        } else {

            if (currCalendar[0] - prevCalendar[1] >= meetingDuration) {
                result.push([prevCalendar[1], currCalendar[0]]);
            }
            prevCalendar = currCalendar;
        }
        i++;
    }

    return result;
}


function mergeCalendars(calendar1, calendar2) {
    let i = 0,
        j = 0;
    let mergedCalendar = [];
    while (i < calendar1.length && j < calendar2.length) {
        if (calendar1[i][0] < calendar2[j][0]) {
            mergedCalendar.push(calendar1[i]);
            i++;
        } else {
            mergedCalendar.push(calendar2[j]);
            j++;
        }
    }

    while (i < calendar1.length) {
        mergedCalendar.push(calendar1[i]);
        i++;
    }

    while (j < calendar2.length) {
        mergedCalendar.push(calendar2[j]);
        j++;
    }

    return mergedCalendar;
}

function updateCalendar(calendar, dailyBounds) {

    let [startTime, endTime] = dailyBounds;

    let updatedCalendar = [
        ["0:0", startTime], ...calendar, [endTime, "23:59"]
    ];

    return updatedCalendar.map(entry => [timeToMinutes(entry[0]), timeToMinutes(entry[1])]);
}


function timeToMinutes(time) {
    let [hours, minutes] = time.split(':').map(a => parseInt(a))
    return hours * 60 + minutes;
}

function minutesToTime(minutesTime) {

    let hours = parseInt(minutesTime / 60);
    let minutes = minutesTime % 60;

    return (hours +
        ":" +
        (minutes < 10 ? '0' + minutes : minutes));
}

const calendar1 = [
    ['9:00', '10:30'],
    ['12:00', '13:00'],
    ['16:00', '18:00']
];
const dailyBounds1 = ['9:00', '20:00'];
const calendar2 = [
    ['10:00', '11:30'],
    ['12:30', '14:30'],
    ['14:30', '15:00'],
    ['16:00', '17:00'],
];
const dailyBounds2 = ['10:00', '18:30'];
const meetingDuration = 45;


console.log(calendarMatching(
    calendar1,
    dailyBounds1,
    calendar2,
    dailyBounds2,
    meetingDuration,
));

// Do not edit the line below.
exports.calendarMatching = calendarMatching;
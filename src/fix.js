const InitTime = new Date()
/**
 * 记录初始时间
 * @type {{week: number, hour: number, month: number, year: number, day: number, second: number, minute: number}}
 */
const Cache = {
    second: InitTime.getSeconds(),
    minute: InitTime.getMinutes(),
    hour: InitTime.getHours(),
    day: InitTime.getDate(),
    week: InitTime.getDay(),
    month: InitTime.getMonth(),
    year: InitTime.getFullYear()
}

const NumberOfTurns = {
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
    week: 0,
    month: 0,
    year: 0
}

export default function (type) {
    const now = new Date()
    if (now.getMinutes() !== Cache.minute) {
        NumberOfTurns.second++
        Cache.minute = now.getMinutes()
    }
    if (now.getHours() !== Cache.hour) {
        NumberOfTurns.minute++
        Cache.hour = now.getHours()
    }
    if (now.getDate() !== Cache.day) {
        NumberOfTurns.hour++
        Cache.day = now.getDate()
    }
    if (now.getDay() !== Cache.week) {
        Cache.week = now.getDay()
    }
    if (now.getMonth() !== Cache.month) {
        NumberOfTurns.day++
        NumberOfTurns.week++
        Cache.month = now.getMonth()
    }
    if (now.getFullYear() !== Cache.year) {
        NumberOfTurns.month++
        Cache.year = now.getFullYear()
    }
    return NumberOfTurns[type]
}

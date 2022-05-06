// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const dateFormatString = (date) => {
    const newDate = new Date(date)
    const dayMonth = newDate.toDateString().split(' ')
    const year = dayMonth[3].split('')
    const fullDate = `${dayMonth[2]}-${dayMonth[1]}-${year[2]}${year[3]}`
    return fullDate
}

const element = document.getElementById('date-time')
if (element) element.innerText = `${dateFormatString(new Date())}`

const hours = document.getElementById('date-hours')
const minutes = document.getElementById('date-minutes')
const seconds = document.getElementById('date-seconds')
const hourTime = document.getElementById('date-hourTime')

const updateDateTime = () => {
    const now = new Date()

    const p_hours = now.getHours()
    hours.innerText = p_hours % 12 || 12
    minutes.innerText = `${getZeroPad(now.getMinutes())}`
    seconds.innerText = `${getZeroPad(now.getSeconds())}`
    hourTime.innerText = getHourTime(hours)

    setTimeout(updateDateTime, 1000)
}

const getHourTime = (h) => {
    return h >= 12 ? 'PM' : 'AM'
}

const getZeroPad = (n) => {
    return (parseInt(n, 10) >= 10 ? '' : '0') + n
}

updateDateTime()

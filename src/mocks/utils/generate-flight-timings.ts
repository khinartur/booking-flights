export const generateFlightTimings = (depDate: Date): [string, string, string] => {
  // Generate a random time for departure
  const depTime = new Date(
    depDate.getFullYear(),
    depDate.getMonth(),
    depDate.getDate(),
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60),
  )
  // Generate a random duration in hours and minutes
  const hours = Math.floor(Math.random() * 6) + 1 // Random between 1-6 hours
  const minutes = Math.floor(Math.random() * 60) // Random between 0-59 minutes
  // Calculate the arrival time based on the duration and departure time
  const arrTime = new Date(depTime.getTime() + hours * 60 * 60 * 1000 + minutes * 60 * 1000)
  // Format the departure date string as "yyyy-mm-ddThh:mm:ss"
  const depDateStr = `${depDate.getFullYear()}-${(depDate.getMonth() + 1).toString().padStart(2, "0")}-${depDate
    .getDate()
    .toString()
    .padStart(2, "0")}T${depTime.getHours().toString().padStart(2, "0")}:${depTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}:00`
  // Format the duration string as "hh h mm m"
  const duration = `${hours}h ${minutes.toString().padStart(2, "0")}m`
  // Format the arrival date string as "yyyy-mm-ddThh:mm:ss" with offset
  const arrDateStr = `${arrTime.getFullYear()}-${(arrTime.getMonth() + 1).toString().padStart(2, "0")}-${arrTime
    .getDate()
    .toString()
    .padStart(2, "0")}T${arrTime.getHours().toString().padStart(2, "0")}:${arrTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}:00`

  return [depDateStr, duration, arrDateStr]
}

export function formatDateStrToDayAndTime(dateStr: string) {
  const date = new Date(dateStr)
  const day = date.toLocaleDateString("en-US", { day: "numeric", month: "short" })
  const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })

  return [day, time]
}

export function formatDateToDay(date: Date) {
  return date.toLocaleDateString("en-US", { day: "numeric", month: "short" })
}

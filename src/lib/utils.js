import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatDate = (epoch) => {
  // Create a Date object from the epoch timestamp
  const date = new Date(epoch)

  // Define arrays for day suffixes and month names
  const daySuffixes = ['th', 'st', 'nd', 'rd']
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  // Extract the day, month, and year
  let day = date.getDate()
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  // Determine the appropriate suffix for the day
  const suffix =
    day % 10 > 3 || day % 10 === 0 || Math.floor((day % 100) / 10) === 1
      ? daySuffixes[0]
      : daySuffixes[day % 10]

  // Return the formatted date string
  return `${day}${suffix} ${month}, ${year}`
}

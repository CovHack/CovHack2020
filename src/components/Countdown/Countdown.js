import React, { useState, useEffect } from 'react'
import countdown from 'countdown'

import './Countdown.scss'

export const Countdown = ({ targetDate }) => {
  const [deltas, setDeltas] = useState('')

  const pad = (number, digits = 2) =>
    Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number

  const updateCountdown = () => {
    const target = new Date(targetDate)
    const now = new Date()

    if (target < now) {
      // TODO: Flashing 0s instead of "started"
      setDeltas('STARTED!')
    } else {
      const cd = countdown(now, target)
      setDeltas(`${pad(cd.days)}:${pad(cd.hours)}:${pad(cd.minutes)}:${pad(cd.seconds)}`)
    }
  }

  useEffect(() => {
    updateCountdown()
    const interval = setInterval(() => updateCountdown(), 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className="countdown-timer">
      <div>{deltas}</div>
    </div>
  )
}

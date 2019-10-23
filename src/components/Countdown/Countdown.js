import React, { useState, useEffect } from 'react'
import countdown from 'countdown'

import './Countdown.scss'

export const Countdown = ({ targetDate }) => {
  const [deltas, setDeltas] = useState('')

  const pad = (number, digits = 2) =>
    Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number

  const updateCountdown = () => {
    const cd = countdown(new Date(), new Date(targetDate))

    setDeltas(`${pad(cd.days)}:${pad(cd.hours)}:${pad(cd.minutes)}:${pad(cd.seconds)}`)
  }

  useEffect(() => {
    updateCountdown()
    const interval = setInterval(() => updateCountdown(), 1000)
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="countdown-timer">
      <div>{deltas}</div>
    </div>
  )
}

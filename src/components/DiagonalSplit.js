import React from 'react'

export default function DiagonalSplit(props) {
  const color = props.color || 'white'
  const polygonPoints = !props.invert ? '1, 0 0, 1 1, 1' : '0, 1 1, 0 0, 0'

  return (
    <svg
      style={{
        display: 'block',
        width: '100%',
        height: 'calc(30px + 5vw)',
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1 1"
      preserveAspectRatio="none">
      <polygon points={polygonPoints} fill={color} />
    </svg>
  )
}

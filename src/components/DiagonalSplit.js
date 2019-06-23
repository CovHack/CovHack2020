import React from 'react'

export default function DiagonalSplit(props) {
  return (
    <svg
      style={{
        display: 'block',
        width: '100%',
        height: 'calc(40px + 5vw)',
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
    >
      {!props.invert ? (
        <polygon points="1, 0 0, 1 1, 1" fill={props.color || 'white'} />
      ) : (
        <polygon points="0, 1 1, 0 0, 0" fill={props.color || 'white'} />
      )}
    </svg>
  )
}

import React from 'react'
import PropTypes from 'prop-types'

function VolumeIcon({ size, color, handleToggleMute }) {
  return (
    <svg onClick={handleToggleMute} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height={size} width={size} fill={color}>
      <path d="M28.1 40.2V37.85Q32.7 36.4 35.55 32.575Q38.4 28.75 38.4 23.95Q38.4 19.15 35.55 15.3Q32.7 11.45 28.1 10.05V7.7Q33.65 9.2 37.175 13.7Q40.7 18.2 40.7 23.95Q40.7 29.7 37.175 34.2Q33.65 38.7 28.1 40.2ZM23.3 37.6 14.75 29H7.3V19H14.75L23.3 10.4ZM27.35 31.6V16.35Q29.6 17.25 30.95 19.35Q32.3 21.45 32.3 24Q32.3 26.6 30.95 28.65Q29.6 30.7 27.35 31.6Z"/>    </svg>
  )
}

VolumeIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleToggleMute: PropTypes.func,
}

export default VolumeIcon
import React from 'react'
import PropTypes from 'prop-types'


function MuteIcon({ size, color, handleToggleMute }) {
  return (
    <svg onClick={handleToggleMute} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height={size} width={size} fill={color}>
      <path d="M39.7 44.3 33.3 37.85Q32.15 38.65 30.825 39.25Q29.5 39.85 28.1 40.2V37.85Q29.05 37.55 29.95 37.175Q30.85 36.8 31.65 36.2L23.3 27.85V37.6L14.75 29H7.3V19H14.45L3.75 8.3L5.35 6.65L41.35 42.6ZM37.7 33.45 36.1 31.85Q37.3 30.1 37.875 28.1Q38.45 26.1 38.45 23.95Q38.45 19.05 35.625 15.175Q32.8 11.3 28.1 10.05V7.7Q33.7 9.2 37.2 13.7Q40.7 18.2 40.7 23.95Q40.7 26.5 39.925 28.925Q39.15 31.35 37.7 33.45ZM31.6 27.35 28.1 23.85V16.6Q30.1 17.7 31.2 19.7Q32.3 21.7 32.3 24Q32.3 24.9 32.125 25.725Q31.95 26.55 31.6 27.35ZM23.3 19.05 19 14.75 23.3 10.4Z"/>    
    </svg>
  )
}

MuteIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleToggleMute: PropTypes.func,
}

export default MuteIcon
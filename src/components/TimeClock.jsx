import { useState, useRef, useCallback, useEffect } from 'react'
import './TimeClock.css'

function TimeClock({ value, onChange, required }) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragType, setDragType] = useState(null) // 'hour' or 'minute'
  const clockRef = useRef(null)

  // Parse current time value or set default to 9:00
  const parseTime = (timeString) => {
    if (!timeString) return { hour: 9, minute: 0 }
    
    // If it's a time range like "09:00-11:00", take the start time
    const startTime = timeString.split('-')[0]
    const [hour, minute] = startTime.split(':').map(Number)
    return { hour: hour || 9, minute: minute || 0 }
  }

  const currentTime = parseTime(value)
  const [hour, setHour] = useState(currentTime.hour)
  const [minute, setMinute] = useState(currentTime.minute)

  // Calculate angles for clock hands
  const hourAngle = ((hour % 12) * 30) + (minute * 0.5) - 90 // -90 to start from 12 o'clock
  const minuteAngle = (minute * 6) - 90 // -90 to start from 12 o'clock

  const formatTime = (h, m) => {
    const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h
    const ampm = h < 12 ? 'AM' : 'PM'
    return `${hour12.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ampm}`
  }

  const formatTimeRange = (h, m) => {
    const startHour = h.toString().padStart(2, '0')
    const startMinute = m.toString().padStart(2, '0')
    const endHour = ((h + 2) % 24).toString().padStart(2, '0')
    const endMinute = m.toString().padStart(2, '0')
    
    return `${startHour}:${startMinute}-${endHour}:${endMinute}`
  }

  const getMousePosition = useCallback((e) => {
    const rect = clockRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = e.clientX - centerX
    const y = e.clientY - centerY
    
    // Calculate angle in degrees (0 = 12 o'clock, 90 = 3 o'clock)
    let angle = Math.atan2(y, x) * (180 / Math.PI) + 90
    if (angle < 0) angle += 360
    
    return angle
  }, [])

  const handleMouseDown = (e, type) => {
    e.preventDefault()
    setIsDragging(true)
    setDragType(type)
  }

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !dragType) return
    
    const angle = getMousePosition(e)
    
    if (dragType === 'hour') {
      // Convert angle to hour (0-23)
      let newHour = Math.round(angle / 30) % 12
      if (newHour === 0) newHour = 12
      
      // Keep AM/PM based on current hour
      if (hour >= 12 && newHour < 12) {
        newHour += 12
      } else if (hour < 12 && newHour === 12) {
        newHour = 0
      }
      
      setHour(newHour)
    } else if (dragType === 'minute') {
      // Convert angle to minute (0-59)
      const newMinute = Math.round(angle / 6) % 60
      setMinute(newMinute)
    }
  }, [isDragging, dragType, getMousePosition, hour])

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      setDragType(null)
      
      // Update parent component with new time range
      const timeRange = formatTimeRange(hour, minute)
      onChange(timeRange)
    }
  }, [isDragging, hour, minute, onChange])

  // Add event listeners for mouse events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  // Toggle AM/PM
  const toggleAMPM = () => {
    const newHour = hour < 12 ? hour + 12 : hour - 12
    setHour(newHour)
    const timeRange = formatTimeRange(newHour, minute)
    onChange(timeRange)
  }

  // Generate hour numbers for clock face
  const hourNumbers = []
  for (let i = 1; i <= 12; i++) {
    const angle = (i * 30) - 90
    const x = Math.cos(angle * Math.PI / 180) * 45
    const y = Math.sin(angle * Math.PI / 180) * 45
    
    hourNumbers.push(
      <div
        key={i}
        className="hour-number"
        style={{
          transform: `translate(${x}px, ${y}px)`
        }}
      >
        {i}
      </div>
    )
  }

  return (
    <div className="time-clock-container">
      
      <div className="clock-wrapper">
        <div className="selected-time">
          <span className="time-display">{formatTime(hour, minute)}</span>
          <span className="time-range">({formatTime(hour, minute)} - {formatTime((hour + 2) % 24, minute)})</span>
          <button type="button" className="ampm-toggle" onClick={toggleAMPM}>
            {hour < 12 ? 'Switch to PM' : 'Switch to AM'}
          </button>
        </div>
        
        <div className="clock-face" ref={clockRef}>
          {/* Hour numbers */}
          {hourNumbers}
          
          {/* Clock hands */}
          <div
            className="clock-hand hour-hand"
            style={{ transform: `rotate(${hourAngle}deg)` }}
            onMouseDown={(e) => handleMouseDown(e, 'hour')}
          >
            <div className="hand-grip hour-grip"></div>
          </div>
          
          <div
            className="clock-hand minute-hand"
            style={{ transform: `rotate(${minuteAngle}deg)` }}
            onMouseDown={(e) => handleMouseDown(e, 'minute')}
          >
            <div className="hand-grip minute-grip"></div>
          </div>
          
          {/* Center dot */}
          <div className="clock-center"></div>
          
          {/* Minute markers */}
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className={`minute-marker ${i % 5 === 0 ? 'major' : 'minor'}`}
              style={{ transform: `rotate(${i * 6}deg)` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeClock
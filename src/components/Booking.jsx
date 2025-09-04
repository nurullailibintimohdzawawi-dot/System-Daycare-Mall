import { useState } from 'react'
import TimeClock from './TimeClock'

function Booking() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    childName: '',
    childAge: '',
    childGender: '',
    emergencyContact: '',
    specialNeeds: '',
    appointmentDate: '',
    timeSlot: '',
    duration: '',
    pickupPerson: '',
    agreeTerms: false,
    mediaConsent: false
  })

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [pickupNumber, setPickupNumber] = useState('')

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const generatePickupNumber = () => {
    return 'KZ' + Math.floor(Math.random() * 9000 + 1000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const number = generatePickupNumber()
    setPickupNumber(number)
    setShowConfirmation(true)
    
    // Store booking in localStorage
    const bookingData = {
      ...formData,
      pickupNumber: number,
      bookingDate: new Date().toISOString()
    }
    localStorage.setItem('daycareBooking', JSON.stringify(bookingData))
  }

  const printTicket = () => {
    window.print()
  }

  const resetForm = () => {
    // Reset all form data
    setFormData({
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      childName: '',
      childAge: '',
      childGender: '',
      emergencyContact: '',
      specialNeeds: '',
      appointmentDate: '',
      timeSlot: '',
      duration: '',
      pickupPerson: '',
      agreeTerms: false,
      mediaConsent: false
    })
    
    // Hide confirmation and show form again
    setShowConfirmation(false)
    setPickupNumber('')
    
    // Scroll back to booking section
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (showConfirmation) {
    return (
      <section id="booking" className="booking">
        <div className="container">
          <h2>📅 Book Your Daycare Appointment</h2>
          <div id="bookingConfirmation" className="booking-confirmation">
            <div className="pickup-number">
              <h3>🎉 Booking Confirmed!</h3>
              <div className="number-display">
                <span className="pickup-label">Your Pickup Number:</span>
                <span className="pickup-number-value">{pickupNumber}</span>
              </div>
              <p><strong>Please save this number!</strong><br/>
              Show this number when picking up your child.</p>
              <button className="btn btn-secondary" onClick={printTicket}>Print Ticket 🎫</button>
              <button className="btn btn-primary" onClick={resetForm}>Book Another 📅</button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="booking">
      <div className="container">
        <h2>📅 Book Your Daycare Appointment</h2>
        <div className="booking-container">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>👨‍👩‍👧‍👦 Parent Information</h3>
              <div className="form-row">
                <input 
                  type="text" 
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="Parent/Guardian Name *" 
                  required 
                />
                <input 
                  type="tel" 
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleInputChange}
                  placeholder="Phone Number *" 
                  required 
                />
              </div>
              <input 
                type="email" 
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleInputChange}
                placeholder="Email Address *" 
                required 
              />
            </div>

            <div className="form-section">
              <h3>👶 Child Information</h3>
              <div className="form-row">
                <input 
                  type="text" 
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  placeholder="Child's Name *" 
                  required 
                />
                <input 
                  type="number" 
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  placeholder="Age *" 
                  min="6" 
                  max="144" 
                  required 
                />
              </div>
              <div className="form-row">
                <select 
                  name="childGender"
                  value={formData.childGender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender *</option>
                  <option value="male">Boy</option>
                  <option value="female">Girl</option>
                </select>
                <input 
                  type="text" 
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  placeholder="Emergency Contact *" 
                  required 
                />
              </div>
              <textarea 
                name="specialNeeds"
                value={formData.specialNeeds}
                onChange={handleInputChange}
                placeholder="Special needs, allergies, or important notes..." 
                rows="3"
              ></textarea>
            </div>

            <div className="form-section">
              <h3>📅 Appointment Details</h3>
              <div className="form-row">
                <input 
                  type="date" 
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  required 
                />
                <TimeClock
                  value={formData.timeSlot}
                  onChange={(timeRange) => setFormData(prev => ({
                    ...prev,
                    timeSlot: timeRange
                  }))}
                  required
                />
              </div>
              <div className="form-row">
                <select 
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Duration *</option>
                  <option value="1">1 Hour</option>
                  <option value="2">2 Hours</option>
                  <option value="3">3 Hours</option>
                  <option value="4">4 Hours</option>
                  <option value="full-day">Full Day (8 hours)</option>
                </select>
                <input 
                  type="text" 
                  name="pickupPerson"
                  value={formData.pickupPerson}
                  onChange={handleInputChange}
                  placeholder="Pickup Person Name *" 
                  required 
                />
              </div>
            </div>

            <div className="form-section">
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    required 
                  />
                  <span className="checkmark"></span>
                  I agree to the daycare terms and conditions
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="mediaConsent"
                    checked={formData.mediaConsent}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  I consent to photos/videos for daycare activities (optional)
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              🎯 Get My Pickup Number
            </button>
          </form>

          <div className="booking-info">
            <div className="info-card">
              <h4>📍 Location</h4>
              <p>Central Mall, Level 2<br/>Next to Food Court</p>
            </div>
            <div className="info-card">
              <h4>🕒 Operating Hours</h4>
              <p>Monday - Sunday<br/>9:00 AM - 6:00 PM</p>
            </div>
            <div className="info-card">
              <h4>👶 Age Range</h4>
              <p>6 months - 12 years<br/>Professional supervision</p>
            </div>
            <div className="info-card">
              <h4>🆓 Free Service</h4>
              <p>Completely FREE daycare<br/>No charges, just book!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
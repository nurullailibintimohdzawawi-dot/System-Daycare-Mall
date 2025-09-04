function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>🌈 Safe & Fun Daycare at the Mall! 🌈</h1>
        <p>👶 Professional childcare while you shop! Book your appointment online and enjoy peace of mind knowing your little ones are in caring hands. 👶</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToBooking}>Book Appointment 📅</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
function Services() {
  const services = [
    {
      icon: '🏰',
      title: 'Playground & Active Play',
      description: 'Safe indoor playground with slides, climbing areas, and interactive games to keep kids active and engaged.'
    },
    {
      icon: '🎨',
      title: 'Arts & Crafts',
      description: 'Creative activities including coloring, painting, drawing, and hands-on craft projects to spark imagination.'
    },
    {
      icon: '📚',
      title: 'Educational Activities',
      description: 'Age-appropriate learning games, storytelling, puzzles, and educational play to support development.'
    },
    {
      icon: '👀',
      title: 'Professional Supervision',
      description: 'Certified childcare professionals providing safe, attentive care with 24/7 monitoring and emergency support.'
    },
    {
      icon: '🍎',
      title: 'Healthy Snacks',
      description: 'Nutritious snacks and drinks provided throughout the day to keep your little ones happy and energized.'
    },
    {
      icon: '🛌',
      title: 'Quiet Time & Rest Area',
      description: 'Comfortable rest areas for tired children with books, quiet activities, and designated nap spaces.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
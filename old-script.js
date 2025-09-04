// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// EmailJS Configuration and Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[placeholder="Your Name"]').value;
            const email = this.querySelector('input[placeholder="Your Email"]').value;
            const message = this.querySelector('textarea[placeholder="Your Message"]').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'nurullailizawawi@gmail.com',
                subject: 'New Contact Form Message from KidZone Daycare Website'
            };
            
            // Replace with your service ID and template ID
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully!', response.status, response.text);
                    alert('Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                }, function(error) {
                    console.error('Failed to send email:', error);
                    alert('Sorry, there was an error sending your message. Please try again or contact us directly at nurullailizawawi@gmail.com');
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});

// Scroll to booking section
function scrollToBooking() {
    console.log('scrollToBooking function called'); // Debug log
    const bookingSection = document.getElementById('booking');
    console.log('Booking section found:', bookingSection); // Debug log
    
    if (bookingSection) {
        bookingSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // Fallback method
        const bookingElement = document.querySelector('#booking');
        if (bookingElement) {
            bookingElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // Manual scroll as last resort
            const targetPosition = document.querySelector('.booking');
            if (targetPosition) {
                targetPosition.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }
}

// Alternative method - also available globally
window.scrollToBooking = function() {
    console.log('Window scrollToBooking called');
    const target = document.getElementById('booking') || document.querySelector('.booking');
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// Set minimum date to today
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }
});

// Generate pickup number
function generatePickupNumber() {
    const today = new Date();
    const dateStr = today.getFullYear().toString().slice(-2) + 
                   (today.getMonth() + 1).toString().padStart(2, '0') + 
                   today.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    return dateStr + randomNum;
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('daycareBookingForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                parentName: document.getElementById('parentName').value,
                parentPhone: document.getElementById('parentPhone').value,
                parentEmail: document.getElementById('parentEmail').value,
                childName: document.getElementById('childName').value,
                childAge: document.getElementById('childAge').value,
                childGender: document.getElementById('childGender').value,
                emergencyContact: document.getElementById('emergencyContact').value,
                specialNeeds: document.getElementById('specialNeeds').value,
                appointmentDate: document.getElementById('appointmentDate').value,
                timeSlot: document.getElementById('timeSlot').value,
                duration: document.getElementById('duration').value,
                pickupPerson: document.getElementById('pickupPerson').value,
                agreeTerms: document.getElementById('agreeTerms').checked,
                mediaConsent: document.getElementById('mediaConsent').checked
            };
            
            // Basic validation
            if (!formData.agreeTerms) {
                alert('Please agree to the terms and conditions to proceed.');
                return;
            }
            
            // Generate pickup number
            const pickupNumber = generatePickupNumber();
            
            // Store booking data
            const booking = {
                ...formData,
                pickupNumber: pickupNumber,
                bookingTime: new Date().toISOString(),
                status: 'confirmed'
            };
            
            // Save to localStorage
            let bookings = JSON.parse(localStorage.getItem('daycareBookings')) || [];
            bookings.push(booking);
            localStorage.setItem('daycareBookings', JSON.stringify(bookings));
            
            // Show confirmation
            showBookingConfirmation(pickupNumber, formData);
        });
    }
});

// EmailJS Configuration and Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[placeholder="Your Name"]').value;
            const email = this.querySelector('input[placeholder="Your Email"]').value;
            const message = this.querySelector('textarea[placeholder="Your Message"]').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'nurullailizawawi@gmail.com',
                subject: 'New Contact Form Message from KidZone Daycare Website'
            };
            
            // Replace with your service ID and template ID
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully!', response.status, response.text);
                    alert('Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                }, function(error) {
                    console.error('Failed to send email:', error);
                    alert('Sorry, there was an error sending your message. Please try again or contact us directly at nurullailizawawi@gmail.com');
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});

function showBookingConfirmation(pickupNumber, formData) {
    // Hide form and show confirmation
    const form = document.getElementById('daycareBookingForm');
    const confirmationDiv = document.getElementById('bookingConfirmation');
    
    if (form && confirmationDiv) {
        form.style.display = 'none';
        confirmationDiv.style.display = 'block';
        
        // Display pickup number
        const pickupDisplay = document.getElementById('pickupNumberDisplay');
        if (pickupDisplay) {
            pickupDisplay.textContent = pickupNumber;
        }
        
        // Scroll to confirmation
        confirmationDiv.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Store current booking info for ticket printing
        window.currentBooking = { pickupNumber, ...formData };
    }
}

function resetBookingForm() {
    // Get the form and confirmation elements
    const form = document.getElementById('daycareBookingForm');
    const confirmationDiv = document.getElementById('bookingConfirmation');
    
    if (form && confirmationDiv) {
        // Reset all form fields
        form.reset();
        
        // Clear specific fields that might not be reset by form.reset()
        document.getElementById('parentName').value = '';
        document.getElementById('parentPhone').value = '';
        document.getElementById('parentEmail').value = '';
        document.getElementById('childName').value = '';
        document.getElementById('childAge').value = '';
        document.getElementById('childGender').value = '';
        document.getElementById('emergencyContact').value = '';
        document.getElementById('specialNeeds').value = '';
        document.getElementById('appointmentDate').value = '';
        document.getElementById('timeSlot').value = '';
        document.getElementById('duration').value = '';
        document.getElementById('pickupPerson').value = '';
        document.getElementById('agreeTerms').checked = false;
        document.getElementById('mediaConsent').checked = false;
        
        // Set today's date as default again
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('appointmentDate').value = today;
        
        // Hide confirmation and show form
        confirmationDiv.style.display = 'none';
        form.style.display = 'block';
        
        // Clear current booking data
        window.currentBooking = null;
        
        // Scroll back to the booking section
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
            bookingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

function printTicket() {
    const booking = window.currentBooking;
    if (!booking) return;
    
    const ticketWindow = window.open('', '_blank');
    ticketWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Daycare Pickup Ticket</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    margin: 0;
                }
                .ticket {
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    max-width: 400px;
                    margin: 0 auto;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    text-align: center;
                }
                .ticket h1 {
                    color: #667eea;
                    margin-bottom: 20px;
                    font-size: 24px;
                }
                .pickup-number {
                    font-size: 48px;
                    font-weight: bold;
                    color: #ff6b6b;
                    margin: 20px 0;
                    padding: 20px;
                    border: 3px dashed #4ecdc4;
                    border-radius: 10px;
                    background: #f8f9ff;
                }
                .details {
                    text-align: left;
                    margin: 20px 0;
                    line-height: 1.6;
                }
                .detail-row {
                    margin: 8px 0;
                    padding: 5px 0;
                    border-bottom: 1px dotted #ddd;
                }
                .label {
                    font-weight: bold;
                    color: #333;
                }
                .footer {
                    margin-top: 20px;
                    padding-top: 15px;
                    border-top: 2px solid #667eea;
                    font-size: 12px;
                    color: #666;
                }
                @media print {
                    body { background: white; }
                    .ticket { box-shadow: none; }
                }
            </style>
        </head>
        <body>
            <div class="ticket">
                <h1>🏫 KidZone Daycare Pickup Ticket</h1>
                
                <div class="pickup-number">${booking.pickupNumber}</div>
                
                <div class="details">
                    <div class="detail-row">
                        <span class="label">Child Name:</span> ${booking.childName}
                    </div>
                    <div class="detail-row">
                        <span class="label">Date:</span> ${new Date(booking.appointmentDate).toLocaleDateString()}
                    </div>
                    <div class="detail-row">
                        <span class="label">Time:</span> ${booking.timeSlot}
                    </div>
                    <div class="detail-row">
                        <span class="label">Duration:</span> ${booking.duration} hour(s)
                    </div>
                    <div class="detail-row">
                        <span class="label">Pickup Person:</span> ${booking.pickupPerson}
                    </div>
                    <div class="detail-row">
                        <span class="label">Parent:</span> ${booking.parentName}
                    </div>
                    <div class="detail-row">
                        <span class="label">Phone:</span> ${booking.parentPhone}
                    </div>
                </div>
                
                <div class="footer">
                    <p><strong>IMPORTANT:</strong> Show this number when picking up your child</p>
                    <p>Central Mall, Level 2 • Next to Food Court</p>
                    <p>KidZone Daycare • Free Service</p>
                </div>
            </div>
        </body>
        </html>
    `);
    
    ticketWindow.document.close();
    
    // Auto print after a short delay
    setTimeout(() => {
        ticketWindow.print();
    }, 500);
}

// Form validation helpers
function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Real-time form validation
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('parentPhone');
    const emailInput = document.getElementById('parentEmail');
    const ageInput = document.getElementById('childAge');
    
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.borderColor = '#ff6b6b';
                this.title = 'Please enter a valid phone number';
            } else {
                this.style.borderColor = '';
                this.title = '';
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#ff6b6b';
                this.title = 'Please enter a valid email address';
            } else {
                this.style.borderColor = '';
                this.title = '';
            }
        });
    }
    
    if (ageInput) {
        ageInput.addEventListener('input', function() {
            const age = parseInt(this.value);
            if (age < 6 || age > 144) {
                this.style.borderColor = '#ff6b6b';
                this.title = 'Age must be between 6 months (6) and 12 years (144 months)';
            } else {
                this.style.borderColor = '';
                this.title = '';
            }
        });
    }
});

// EmailJS Configuration and Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[placeholder="Your Name"]').value;
            const email = this.querySelector('input[placeholder="Your Email"]').value;
            const message = this.querySelector('textarea[placeholder="Your Message"]').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'nurullailizawawi@gmail.com',
                subject: 'New Contact Form Message from KidZone Daycare Website'
            };
            
            // Replace with your service ID and template ID
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully!', response.status, response.text);
                    alert('Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                }, function(error) {
                    console.error('Failed to send email:', error);
                    alert('Sorry, there was an error sending your message. Please try again or contact us directly at nurullailizawawi@gmail.com');
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
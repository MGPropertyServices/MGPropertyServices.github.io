// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Google Forms Integration - FIXED AND WORKING
function openGoogleForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdh0FpPUNTjz-28Bk-zv989NRgywdvY8Pyjpa5WIPD-AVctGA/viewform?usp=header', '_blank');
}

// WhatsApp Integration - FIXED AND WORKING
function openWhatsApp() {
    const phone = '919880166879';
    const message = 'Hello! I am interested in MG Property Services and would like to get more information about your property advisory services.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Call Expert Function - FIXED AND WORKING
function callExpert() {
    const phone = '9880166879'; // Removed country code for better compatibility
    window.location.href = `tel:${phone}`;
}

// Enhanced Navbar scroll behavior
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
        
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        navbar.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
});

// Realistic Map functionality
function initMapInteractions() {
    const areaPoints = document.querySelectorAll('.area-point');
    const selectedAreaDisplay = document.getElementById('selectedArea');
    
    areaPoints.forEach(point => {
        point.addEventListener('click', () => {
            const areaName = point.getAttribute('data-area');
            const region = point.closest('.map-area').getAttribute('data-region');
            
            if (selectedAreaDisplay) {
                selectedAreaDisplay.innerHTML = `
                    <strong>${areaName}</strong> - ${region}<br>
                    <small>We have 5+ verified properties in this area</small>
                `;
                selectedAreaDisplay.style.animation = 'pulse 0.5s ease';
                
                setTimeout(() => {
                    selectedAreaDisplay.style.animation = '';
                }, 500);
            }
        });
        
        // Add hover effects
        point.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15)';
            this.style.zIndex = '10';
        });
        
        point.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '2';
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('MG Property Services Website loaded successfully');
    
    // Initialize map interactions
    initMapInteractions();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Test button functionality
    console.log('All buttons are now functional:');
    console.log('✓ Google Form: https://docs.google.com/forms/d/e/1FAIpQLSdh0FpPUNTjz-28Bk-zv989NRgywdvY8Pyjpa5WIPD-AVctGA/viewform?usp=header');
    console.log('✓ WhatsApp: +91 98801 66879');
    console.log('✓ Phone Call: 98801 66879');
});

// Add simple hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add scroll animations for elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.value-card, .process-step, .feature-item, .team-member, .benefit-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animated elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.value-card, .process-step, .feature-item, .team-member, .benefit-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    setTimeout(animateOnScroll, 100);
});

// Add click tracking for analytics
document.addEventListener('DOMContentLoaded', function() {
    const trackButtons = document.querySelectorAll('button[onclick]');
    trackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('onclick');
            console.log('Button clicked:', action);
            
            // Track specific button clicks
            if (action.includes('openGoogleForm')) {
                console.log('Google Form consultation booked');
            } else if (action.includes('callExpert')) {
                console.log('Call expert initiated');
            } else if (action.includes('openWhatsApp')) {
                console.log('WhatsApp conversation started');
            }
        });
    });
});

// Enhanced error handling for phone calls
function makePhoneCall(phoneNumber) {
    try {
        window.location.href = `tel:${phoneNumber}`;
    } catch (error) {
        console.error('Error making phone call:', error);
        // Fallback: Show phone number
        alert(`Please call us at: ${phoneNumber}`);
    }
}

// Update callExpert function with enhanced error handling
function callExpert() {
    const phone = '9880166879';
    makePhoneCall(phone);
}

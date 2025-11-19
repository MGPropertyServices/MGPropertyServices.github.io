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

// Google Forms Integration - SIMPLE AND WORKING
function openGoogleForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdh0FpPUNTjz-28Bk-zv989NRgywdvY8Pyjpa5WIPD-AVctGA/viewform', '_blank');
}

// WhatsApp Integration - SIMPLE AND WORKING
function openWhatsApp() {
    const phone = '919880166879';
    const message = 'Hello! I would like to get more information about MG Property Services and book a free consultation.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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

// Simple Map functionality
function initMapInteractions() {
    const areaItems = document.querySelectorAll('.area-item');
    const selectedAreaDisplay = document.getElementById('selectedArea');
    
    areaItems.forEach(item => {
        item.addEventListener('click', () => {
            const areaName = item.getAttribute('data-area');
            if (selectedAreaDisplay) {
                selectedAreaDisplay.textContent = `Selected Area: ${areaName}`;
                selectedAreaDisplay.style.animation = 'pulse 0.5s ease';
                
                setTimeout(() => {
                    selectedAreaDisplay.style.animation = '';
                }, 500);
            }
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
    console.log('Website loaded successfully');
    
    // Initialize map interactions
    initMapInteractions();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Test button functionality
    console.log('All buttons should work now');
    console.log('Google Form URL: https://docs.google.com/forms/d/e/1FAIpQLSdh0FpPUNTjz-28Bk-zv989NRgywdvY8Pyjpa5WIPD-AVctGA/viewform');
    console.log('WhatsApp Number: +91 98801 66879');
});

// Add simple hover effects
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

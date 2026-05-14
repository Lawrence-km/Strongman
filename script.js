// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.product-card, .features, .testimonial-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('reveal');
        }
    });
});

// Enhanced product card interactions
document.querySelectorAll('.product-card').forEach(card => {
    const buyButton = card.querySelector('.cta-button');
    const productTitle = card.querySelector('h2');
    const productPrice = card.querySelector('[data-price]'); // Changed to data attribute selector
    
    if (buyButton && productTitle && productPrice) {
        buyButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            sessionStorage.setItem('selectedProduct', JSON.stringify({
                title: productTitle.textContent,
                price: productPrice.getAttribute('data-price')
            }));
            
            window.location.href = 'payment.html';
        });

        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    }
});

// Handle payment page loading
if (window.location.pathname.includes('payment.html')) {
    window.addEventListener('load', function() {
        const selectedProduct = JSON.parse(sessionStorage.getItem('selectedProduct'));
        
        if (selectedProduct) {
            // Update payment page with selected product details
            const productTitle = document.querySelector('.product-info h3');
            const productPrice = document.querySelector('.product-info .price');
            
            if (productTitle) productTitle.textContent = selectedProduct.title;
            if (productPrice) productPrice.textContent = selectedProduct.price;
        }
    });
}

// Smooth form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        this.classList.add('submitting');
        // Add your form submission logic here
        setTimeout(() => {
            this.classList.remove('submitting');
            // Show success message
            alert('Form submitted successfully!');
        }, 1000);
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});


// Ensure product page content stays visible
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        productGrid.style.display = 'grid'; // Force display
    }
});
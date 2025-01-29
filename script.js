function toggleDetails(project) {
    const details = project.querySelector('.project-details');
    
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        details.style.opacity = '1';
        
        setTimeout(() => {
            details.style.opacity = '1';
        }, 50);
        
        details.classList.remove('hidden');
        
        // Show the details with a slight delay
        setTimeout(() => {
            details.style.opacity = '1';
        }, 50);
        
    } else {
        details.style.opacity = '0';
        
        setTimeout(() => {
            details.classList.add('hidden');
        }, 500);
        
    }
}

// Optional form submission handling (you can expand this)
document.getElementById('contact-form').addEventListener('submit', function(event) {
     event.preventDefault();
     alert('Message sent!');
});

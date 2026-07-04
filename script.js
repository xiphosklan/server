document.addEventListener('DOMContentLoaded', function() {
    // Find all links on the page that point to your own HTML files
    const internalLinks = document.querySelectorAll('a[href$=".html"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the page from loading immediately
            
            const targetUrl = this.getAttribute('href');
            const mainContent = document.querySelector('.main-content');
            
            // Fade the center content to black
            mainContent.style.opacity = '0';
            mainContent.style.transition = 'opacity 0.2s ease';

            // Wait 200 milliseconds, THEN load the new page
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 200);
        });
    });
});

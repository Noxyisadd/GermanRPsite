document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Custom cursor
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    // Particle effect and cursor movement
    let lastParticleTime = 0;
    window.addEventListener('mousemove', (e) => {
        // Move cursor dot without delay
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        
        // Throttle particle creation
        const now = Date.now();
        if (now - lastParticleTime < 50) { 
            return;
        }
        lastParticleTime = now;

        const particle = document.createElement('div');
        particle.className = 'particle';
        document.body.appendChild(particle);

        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        
        // For the falling animation
        particle.style.setProperty('--random-x', (Math.random() - 0.5) * 2);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('data-target');
            
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });

            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
        });
    });

    // Snowflake effect
    const snowContainer = document.getElementById('snow-container');
    const numberOfSnowflakes = 150;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        const size = Math.random() * 4 + 1; // 1px to 5px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        snowflake.style.left = `${Math.random() * 100}vw`;
        
        const duration = Math.random() * 10 + 5; // 5 to 15 seconds
        snowflake.style.animationDuration = `${duration}s`;

        const delay = Math.random() * -15; // Start at different times
        snowflake.style.animationDelay = `${delay}s`;

        snowContainer.appendChild(snowflake);
    }
});
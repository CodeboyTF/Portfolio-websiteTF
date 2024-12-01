(() => {
    document.addEventListener('DOMContentLoaded', () => {
        // Check if the script is running on the correct page by checking unique elements
        const isProjectsPage = document.querySelector('.projects-container') && document.querySelector('.nav');
        if (!isProjectsPage) return; // Exit if the required elements are not found

        // Selectors
        const navLinks = document.querySelectorAll('.nav-link');
        const projectCards = document.querySelectorAll('.project-card');

        // Function to filter projects based on the selected category
        const filterProjects = (category) => {
            projectCards.forEach((card) => {
                if (category === 'all' || card.dataset.category === category) {
                    card.classList.add('active'); // Show card
                } else {
                    card.classList.remove('active'); // Hide card
                }
            });
        };

        // Event listeners for navigation links
        navLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                const category = link.dataset.category;

                // Set active class on the clicked link
                navLinks.forEach((navLink) => navLink.classList.remove('active'));
                link.classList.add('active');

                // Filter projects
                filterProjects(category);
            });
        });

        // Default filter to show all projects on load
        navLinks.forEach((link) => {
            if (link.dataset.category === 'all') link.classList.add('active');
        });
        filterProjects('all'); // Show all cards on page load
    });
})();

const isProjectsPage = document.querySelector('.projects-container') && document.querySelector('.nav');
if (!isProjectsPage) return;

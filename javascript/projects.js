document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const projectCards = document.querySelectorAll(".project-card");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // Update active class on navbar
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");

            // Filter projects by category
            const category = link.getAttribute("data-category");
            projectCards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.classList.add("active");
                } else {
                    card.classList.remove("active");
                }
            });
        });
    });

    // Show all projects by default
    document.querySelector(".nav-link[data-category='all']").click();
});

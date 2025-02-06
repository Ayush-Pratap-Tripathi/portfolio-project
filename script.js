document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("slide-in");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

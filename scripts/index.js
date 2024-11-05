gsap.to('.hero h1', {
    opacity: 1,
    duration: 1,
    delay: 0.2,
});
gsap.to('.hero p', {
    opacity: 1,
    duration: 1,
    delay: 0.4,
});
gsap.to('.hero button', {
    opacity: 1,
    duration: 1,
    delay: 0.6,
});

gsap.utils.toArray('.card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.1
    });
});

gsap.utils.toArray('.stat-number').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom",
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.1
    });
});
document.addEventListener('DOMContentLoaded', function() {

    const evidenceImages = document.querySelector('.evidence-images');
    const downButton = document.getElementById('down');
    const upButton = document.getElementById('up');

    if (downButton) {
        downButton.addEventListener('click', function() {
  
            if (evidenceImages) {
                evidenceImages.style.display = 'flex';
            }

            if (downButton) {
                downButton.style.display = 'none';
            }

            if (upButton) {
                upButton.style.display = 'inline';
            }
        });
    }

    if (upButton) {
        upButton.addEventListener('click', function() {

            if (evidenceImages) {
                evidenceImages.style.display = 'none';
            }

            if (downButton) {
                downButton.style.display = 'inline';
            }

            if (upButton) {
                upButton.style.display = 'none';
            }
        });
    }

    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 1,
        rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
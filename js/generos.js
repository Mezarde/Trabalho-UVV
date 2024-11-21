document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';

        setTimeout(() => {
            section.style.transition = 'all 0.6s ease-out';
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });

    const audioPlayers = document.querySelectorAll('audio');

    audioPlayers.forEach(player => {
        player.addEventListener('play', () => {
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });
        });
    });
});

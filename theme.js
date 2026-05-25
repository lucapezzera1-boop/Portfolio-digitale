const themeToggleBtn = document.getElementById('theme-toggle');
const musicBtn = document.getElementById('bg-music');
const musicTrack = document.getElementById('music-track');

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light') {
        newTheme = 'dark';
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
musicBtn.addEventListener("click", () => {
    if (musicTrack.paused) {
        musicTrack.volume = 0.5;
        musicTrack.play();
        musicBtn.innerHTML = "🔊";
    } else {
        musicTrack.pause();
        musicBtn.innerHTML = "🔇";
    }
});
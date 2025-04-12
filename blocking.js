// F12 ve Ctrl + Shift + I kombinasyonunu engelle
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// Sağ tıklama engelleme
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
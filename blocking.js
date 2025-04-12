// F12 ve Ctrl + Shift + I KOMBİNASYONU ENGELLE
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// SAĞ TIK ENGELLE
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// RESİM SÜÜRKLE BIRAK ENGELLE
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('dragstart', function(event) {
            event.preventDefault(); // Sürükleme olayının varsayılan davranışını engeller
        });
    });
});

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

// RESİM SÜRÜKLE BIRAKMA ENGELLE
document.addEventListener('dragover', function(e) {
    e.preventDefault();
});

document.addEventListener('drop', function(e) {
    e.preventDefault();
});

// SOL TIK İLE YAZI SEÇMEYİ ENGELLE
document.addEventListener('mousedown', function(e) {
    if (e.button === 0) { // Sol tıklama
        e.preventDefault();
    }
});

// YAZI SEÇMEYİ ENGELLE
document.body.style.userSelect = 'none';

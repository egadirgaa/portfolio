document.addEventListener('scroll', function() {
    const bg3 = document.getElementById('bg3');
    const backgroundAll = document.querySelector('.backgroundall');

    // Dapatkan posisi elemen bg3
    const bg3Rect = bg3.getBoundingClientRect();

    // Cek apakah bg3 terlihat di layar
    if (bg3Rect.top >= 0 && bg3Rect.bottom <= window.innerHeight) {
        backgroundAll.classList.add('blur'); // Tambahkan kelas blur
    } else {
        backgroundAll.classList.remove('blur'); // Hapus kelas blur
    }
});
let currentPage = 0;
const images = [
    'IMG_6167.JPG', 'IMG_6168.JPG', 'IMG_6170.JPG',
    'IMG_6171.JPG', 'IMG_6172.JPG', 'IMG_6173.JPG',
    'IMG_6175.JPG', 'IMG_6176.JPG', 'IMG_6177.JPG',
    'IMG_6179.JPG', 'IMG_6180.JPG', 'IMG_6182.JPG',
    'IMG_3348.JPG', 'IMG_3349.JPG', 'IMG_3546.JPG',
    'IMG_5143.PNG', 'IMG_5703.jpg', 'IMG_5715.jpg',
    'IMG_6226.JPG', 'IMG_6227.JPG', 'IMG_6228.JPG',
    'IMG_6229.JPG', 'IMG_6230.JPG', 'IMG_6231.JPG',
    'IMG_6232.JPG', 'IMG_6233.JPG'
];

document.addEventListener('DOMContentLoaded', (event) => {
    // Không tải gallery ngay lập tức
});

function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'ducyeulinh') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('welcome-container').style.display = 'block';
        return false; // Ngăn chặn form submit
    } else {
        alert('Incorrect password!');
        return false; // Ngăn chặn form submit
    }
}

function enterGallery() {
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('gallery-container').style.display = 'block';
    loadGallery();
}

function loadGallery() {
    const gallery = document.getElementById('gallery');
    gallery.style.opacity = 0; // Bắt đầu bằng việc ẩn gallery
    setTimeout(() => {
        gallery.innerHTML = ''; // Clear the gallery

        const start = currentPage * 2;
        const end = start + 2;
        const currentImages = images.slice(start, end);

        currentImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.className = 'gallery-image'; // Add class for styling
            gallery.appendChild(imgElement);
        });

        gallery.style.opacity = 1; // Hiện gallery sau khi đã cập nhật
    }, 200); // Thời gian trễ cho hiệu ứng
}

function nextPage() {
    if ((currentPage + 1) * 2 < images.length) {
        currentPage++;
    } else {
        currentPage = 0; // Quay lại trang đầu tiên nếu hết ảnh
    }
    loadGallery();
}

function exitGallery() {
    document.getElementById('gallery-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    currentPage = 0; // Reset về trang đầu
}


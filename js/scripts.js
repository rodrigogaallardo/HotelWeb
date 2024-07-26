document.addEventListener('DOMContentLoaded', function() {
  const whatsappButton = document.querySelector('.whatsapp-button');
  const phoneNumber = '+5493885926044';
  const message = encodeURIComponent('Hola "Hotel" , me gustaría pedirle más informacion');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  
  whatsappButton.setAttribute('href', whatsappLink);
});
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const galleryItems = document.querySelectorAll('.gallery-item img, .carousel-inner .carousel-item img');
  let currentImgIndex = -1;  // Inicialmente no hay imagen seleccionada

  // Definimos el array de imágenes basado en el tamaño de la pantalla
  const images = Array.from(galleryItems).map(img => ({
    src: img.src.replace(/desktop|tablet|mobile/, match => {
        if (window.innerWidth >= 1200) return 'desktop';
        if (window.innerWidth >= 768) return 'tablet';
        return 'mobile';
    })
  }));

  // Añadimos evento de click a cada imagen de la galería
  galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentImgIndex = index;
      showLightbox();
    });
  });

  // Añadimos eventos a los botones de cerrar, anterior y siguiente
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === closeBtn) closeLightbox();
  });

  prevBtn.addEventListener('click', showPrevImage);
  nextBtn.addEventListener('click', showNextImage);

  // Mostrar el lightbox con la imagen seleccionada
  function showLightbox() {
    if (currentImgIndex >= 0 && currentImgIndex < images.length) {
      lightbox.style.display = 'flex';
      lightboxImg.src = images[currentImgIndex].src;
    }
  }

  // Ocultar el lightbox
  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  // Mostrar la imagen anterior
  function showPrevImage() {
    if (images.length > 0) {
      currentImgIndex = (currentImgIndex > 0) ? currentImgIndex - 1 : images.length - 1;
      lightboxImg.src = images[currentImgIndex].src;
    }
  }

  // Mostrar la imagen siguiente
  function showNextImage() {
    if (images.length > 0) {
      currentImgIndex = (currentImgIndex < images.length - 1) ? currentImgIndex + 1 : 0;
      lightboxImg.src = images[currentImgIndex].src;
    }
  }
});
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) { // Cambia 50 por el valor que consideres adecuado
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
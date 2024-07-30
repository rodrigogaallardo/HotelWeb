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

  // Selecciona solo las imágenes cuyo src comienza con 'images/gallery'
  const galleryItems = document.querySelectorAll('[src^="images/gallery"]');
  
  let currentImgIndex = -1;  // Inicialmente no hay imagen seleccionada

  // Definimos el array de imágenes con sufijo -tablet
  const images = Array.from(galleryItems).map(img => ({
    src: img.src // Ya tiene sufijo -tablet, así que no es necesario reemplazar nada
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
  const header = document.querySelector('nav');
  if (window.scrollY > 50) { // Cambia 50 por el valor que consideres adecuado
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/*script de flecha*/
// Mostrar el botón cuando se hace scroll hacia abajo
window.addEventListener('scroll', function() {
  const scrollToTopButton = document.getElementById('scrollToTop');
  if (window.scrollY > 300) { // Muestra el botón cuando el scroll es mayor a 300px
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Acción del botón para volver al inicio
document.getElementById('scrollToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
/*Modificar texto para diferentes pantallas*/
window.addEventListener('resize', adjustFontSize);
document.addEventListener('DOMContentLoaded', adjustFontSize);

function adjustFontSize() {
  const description = document.querySelector('.location-description p');
  const heading = document.querySelector('.location-description h3');

  if (window.innerWidth < 768) {
    description.style.fontSize = '1em'; // Tamaño para pantallas pequeñas
    heading.style.fontSize = '1.4em'; // Tamaño para pantallas pequeñas
  } else if (window.innerWidth < 992) {
    description.style.fontSize = '1.1em'; // Tamaño para pantallas medianas
    heading.style.fontSize = '1.6em'; // Tamaño para pantallas medianas
  } else {
    description.style.fontSize = '1.2em'; // Tamaño para pantallas grandes
    heading.style.fontSize = '1.8em'; // Tamaño para pantallas grandes
  }
}
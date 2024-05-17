document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.index-link');
  const sections = document.querySelectorAll('.generalInfo > div');

  // Función para quitar la clase 'active' de todos los enlaces
  function removeActiveClasses() {
      links.forEach(link => link.classList.remove('active'));
  }

  // Función para añadir la clase 'active' al enlace correspondiente
  function addActiveClass(id) {
      const activeLink = document.querySelector(`a[href="#${id}"]`);
      
      if (activeLink) {
          activeLink.classList.add('active');
      }
  }

  // Usando IntersectionObserver para detectar cuando una sección entra en la vista
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              removeActiveClasses();
              addActiveClass(id);
          }
      });
  }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.7 // Ajusta el umbral según sea necesario
  });

  // Observando cada sección
  sections.forEach(section => {
      observer.observe(section);
  });

  // Manejo del clic en los enlaces
  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });

              removeActiveClasses();
              this.classList.add('active');
          }
      });
  });
});
